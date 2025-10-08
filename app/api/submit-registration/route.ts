// app/api/submit-registration/route.ts
import { NextRequest, NextResponse } from 'next/server';

// QUAN TRỌNG: Thay thế URL này bằng Google Apps Script URL của bạn
const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;

export async function POST(request: NextRequest) {
  try {
    if (!GOOGLE_SCRIPT_URL) {
      return NextResponse.json(
        { success: false, message: 'Missing configured' },
        { status: 500 }
      );
    }
    const body = await request.json();

    // Gửi dữ liệu đến Google Sheets
    // const dataToSend = {
    //   fullName: body.fullName,
    //   phone: body.phone,
    //   email: body.email,
    //   socialLink: body.socialLink || '',
    // };
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error('Failed to submit to Google Sheets');
    }

    return NextResponse.json({
      success: true,
      message: 'Đăng ký thành công!',
    });

  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Có lỗi xảy ra. Vui lòng thử lại!' },
      { status: 500 }
    );
  }
}