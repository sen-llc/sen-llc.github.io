import type React from "react"
import type { Metadata } from "next"
import { Noto_Sans_JP } from "next/font/google"
import "./globals.css"

const notoSansJP = Noto_Sans_JP({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-sans-jp",
})

export const metadata: Metadata = {
  title: "合同会社巛（sen llc） - 住まいを育てる賃貸",
  description:
    "「住む、つくる、手に入れる。」デザイン性の高い空間でありながら、住みながらDIYできる自由があり、気に入れば購入までできる新しい賃貸のカタチ。",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className={`${notoSansJP.variable} font-sans`}>{children}</body>
    </html>
  )
}



import './globals.css'