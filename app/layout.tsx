import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import Link from 'next/link'
import Image from 'next/image'
import "react-datepicker/dist/react-datepicker.css";
import PhoneIcon from './assets/PhoneIcon'
import { ArrowBigDown, ArrowDownToLine } from 'lucide-react'
import Script from 'next/script'

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
  const pixelId = process.env.NEXT_PUBLIC_TIKTOK_PIXEL_ID;
  return (
    <html lang="en" className="scroll-smooth scroll-pt-16 lg:scroll-pt-20">
      <head>
        {/* google pixel */}
        <Script
          id="fb-pixel-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${process.env.NEXT_PUBLIC_FB_PIXEL_ID}');
              fbq('track', 'PageView');
            `,
          }}
        />
        {/* TikTok Pixel */}
        <Script id="tiktok-pixel" strategy="afterInteractive">
          {`
            !function (w, d, t) {
              w.TiktokAnalyticsObject = t; var ttq = w[t] = w[t] || [];
              ttq.methods = ["page", "track", "identify", "instances", "debug", "on", "off", "upload"];
              ttq.setAndDefer = function (t, e) {
                t[e] = function () {
                  t.push([e].concat(Array.prototype.slice.call(arguments, 0)))
                }
              };
              for (var i = 0; i < ttq.methods.length; i++) ttq.setAndDefer(ttq, ttq.methods[i]);
              ttq.instance = function (t) {
                for (var e = ttq._i[t] || [], n = 0; n < ttq.methods.length; n++
                ) ttq.setAndDefer(e, ttq.methods[n]); return e
              };
              ttq.load = function (e, n) {
                var i = "https://analytics.tiktok.com/i18n/pixel/events.js";
                ttq._i = ttq._i || {}; ttq._i[e] = [];
                ttq._i[e]._u = i; ttq._t = ttq._t || {}; ttq._t[e] = +new Date;
                ttq._o = ttq._o || {}; ttq._o[e] = n || {};
                var o = document.createElement("script"); o.type = "text/javascript"; o.async = !0; o.src = i + "?sdkid=" + e + "&lib=" + t;
                var a = document.getElementsByTagName("script")[0];
                a.parentNode.insertBefore(o, a)
              };
              ttq.load('${pixelId}');
              ttq.page();
            }(window, document, 'ttq');
          `}
        </Script>
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_FB_PIXEL_ID}&ev=PageView&noscript=1`}
          />
        </noscript>

        {children}
        {/* <Analytics /> */}
        <div className="fixed bottom-4 right-4 z-[100]">
          <Link href="tel:0867059120" className="w-16 h-16 rounded-full bg-[#1877f2] flex justify-center items-center mb-4 shadow-custom">
            <PhoneIcon width={40} height={40} fill='white' />
          </Link>
          <Link href="https://zalo.me/0867059120" className="w-16 h-16 rounded-full bg-[#1877f2] flex justify-center items-center mb-4 shadow-custom" target='blank'>
            <Image src="/Icon_of_Zalo.png" alt="Icon_of_Zalo" width={40} height={40} />
          </Link>
          {/* <Link href="https://www.facebook.com/auroralive.vn" className="w-16 h-16 rounded-full bg-[#1877f2] flex justify-center items-center shadow-custom" target='blank'>
            <Image src="/Facebook_Messenger_logo.png" alt="Facebook_Messenger_logo" width={40} height={40} />
          </Link> */}
        </div>
        <div className="fixed bottom-4 left-4 z-[100] animate-float">
          <Link href="/#dang-ky" className="px-4 py-2 rounded-2xl bg-[#1877f2] flex justify-center items-center mb-4 shadow-custom text-white">
            <span className="font-semibold">Đăng ký ngay</span>
            <ArrowDownToLine />
          </Link>
        </div>
      </body>
    </html>
  )
}
