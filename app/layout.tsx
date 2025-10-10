import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import Link from 'next/link'
import Image from 'next/image'
import "react-datepicker/dist/react-datepicker.css";
import PhoneIcon from './assets/PhoneIcon'

export const metadata: Metadata = {
  title: 'Công ty Aurora Live',
  description: 'Cơ hội trở thành idol livestream chuyên nghiệp với thu nhập hấp dẫn và quyền lợi đầy đủ tại Aurora Live.',
  generator: 'aurora',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth scroll-pt-16 lg:scroll-pt-20">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <Analytics />
        <div className="fixed bottom-4 right-4 z-[100]">
          <Link href="tel:0818981619" className="w-16 h-16 rounded-full bg-[#1877f2] flex justify-center items-center mb-4 shadow-custom">
            <PhoneIcon width={40} height={40} fill='white' />
          </Link>
          <Link href="https://zalo.me/0818981619" className="w-16 h-16 rounded-full bg-[#1877f2] flex justify-center items-center mb-4 shadow-custom" target='blank'>
            <Image src="/Icon_of_Zalo.png" alt="Icon_of_Zalo" width={40} height={40} />
          </Link>
          <Link href="https://www.facebook.com/auroralive.vn" className="w-16 h-16 rounded-full bg-[#1877f2] flex justify-center items-center shadow-custom" target='blank'>
            <Image src="/Facebook_Messenger_logo.png" alt="Facebook_Messenger_logo" width={40} height={40} />
          </Link>
        </div>
      </body>
    </html>
  )
}
