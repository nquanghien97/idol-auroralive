import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import Link from 'next/link'
import Image from 'next/image'
import "react-datepicker/dist/react-datepicker.css";

export const metadata: Metadata = {
  title: 'Tuyển dụng livestream idol - Aurora Live',
  description: 'Cơ hội trở thành idol livestream chuyên nghiệp với thu nhập hấp dẫn và quyền lợi đầy đủ tại Aurora Live.',
  generator: 'aurora',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <Analytics />
        <Link href="https://zalo.me/0367407464" className="fixed bottom-4 lg:bottom-12 right-4 lg:right-12">
          <Image src="/zalo.webp" alt="zalo" width={80} height={80} />
        </Link>
      </body>
    </html>
  )
}
