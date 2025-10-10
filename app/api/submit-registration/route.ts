import { NextRequest, NextResponse } from "next/server";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;

const s3 = new S3Client({
  region: "auto",
  endpoint: `https://${process.env.CLOUDFLARE_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.CLOUDFLARE_ACCESS_KEY_ID!,
    secretAccessKey: process.env.CLOUDFLARE_SECRET_ACCESS_KEY!,
  },
});

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const dataRaw = formData.get("data") as string | null;
    const file = formData.get("file") as File | null;

    if (!dataRaw) {
      return NextResponse.json(
        { success: false, message: "Thiếu dữ liệu gửi Google Sheet" },
        { status: 400 }
      );
    }

    const data = JSON.parse(dataRaw);

    let uploadedFileUrl = "";
    if (file) {
      const fileName = `${Date.now()}-${file.name}`;
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      // ✅ Upload lên R2
      await s3.send(
        new PutObjectCommand({
          Bucket: process.env.CLOUDFLARE_BUCKET_NAME!,
          Key: fileName,
          Body: buffer,
          ContentType: file.type,
        })
      );

      // ✅ URL public (thay bằng URL public R2, không phải endpoint nội bộ)
      const PUBLIC_BUCKET_URL = process.env.CLOUDFLARE_PUBLIC_URL; 
      // ví dụ: https://pub-xxxxxxx.r2.dev hoặc https://r2.yourdomain.com
      uploadedFileUrl = `${PUBLIC_BUCKET_URL}/${encodeURIComponent(fileName)}`;
    }

    // ✅ Gửi thông tin sang Google Sheets
    const response = await fetch(GOOGLE_SCRIPT_URL!, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...data,
        fileUrl: uploadedFileUrl,
      }),
    });

    if (!response.ok) throw new Error("Failed to submit to Google Sheets");

    return NextResponse.json({
      success: true,
      message: "Đăng ký thành công!",
      fileUrl: uploadedFileUrl,
    });
  } catch (error) {
    console.error("Submit failed:", error);
    return NextResponse.json(
      { success: false, message: "Có lỗi xảy ra. Vui lòng thử lại!" },
      { status: 500 }
    );
  }
}
