"use client"

import { useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { LoadingScreen } from "@/components/loading-screen"
import { motion } from "framer-motion"
import Link from "next/link"

export default function AboutPage() {
  // ページ読み込み時に最上部にスクロール
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-theme-background rental-theme">
      <LoadingScreen />
      <Header />

      <main className="pt-20">
        {/* サイトについて・運営会社セクション */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              className="mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="mb-2 text-2xl sm:text-3xl font-medium text-theme-text md:text-4xl">
                サイトについて・運営会社
              </h1>
              <p className="text-sm text-theme-text/70 tracking-wider">About & Company</p>
            </motion.div>

            <div className="mx-auto max-w-3xl">
              {/* サイトについて */}
              <motion.div
                className="mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-xl font-medium text-theme-text mb-6 pb-2 border-b border-theme-primary/20">
                  サイトについて
                </h2>
                <div className="space-y-4 text-theme-text/80">
                  <p>
                    「sen llc」は、「住む、つくる、手に入れる。」をコンセプトに、新しい住まい方を提案するサイトです。
                  </p>
                  <p>
                    デザイン性の高い空間でありながら、住みながらDIYできる自由があり、気に入れば購入までできる新しい賃貸のカタチ「育てる住まい」と、
                    お客様がお持ちの物件や土地を、ライフスタイルや好みに合わせてリノベーションする「リノベーション」の2つのサービスを提供しています。
                  </p>
                  <p>このサイトを通じて、あなたらしい住まいづくりのお手伝いができれば幸いです。</p>
                </div>
              </motion.div>

              {/* 運営会社 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h2 className="text-xl font-medium text-theme-text mb-6 pb-2 border-b border-theme-primary/20">
                  運営会社
                </h2>
                <div className="space-y-6">
                  <div className="grid gap-4 border-b border-theme-primary/20 py-4 md:grid-cols-3">
                    <div className="font-medium text-theme-text">会社名</div>
                    <div className="text-theme-text/80 md:col-span-2">合同会社巛（sen llc）</div>
                  </div>
                  <div className="grid gap-4 border-b border-theme-primary/20 py-4 md:grid-cols-3">
                    <div className="font-medium text-theme-text">設立</div>
                    <div className="text-theme-text/80 md:col-span-2">2018年4月</div>
                  </div>
                  <div className="grid gap-4 border-b border-theme-primary/20 py-4 md:grid-cols-3">
                    <div className="font-medium text-theme-text">代表社員</div>
                    <div className="text-theme-text/80 md:col-span-2">山田 太郎</div>
                  </div>
                  <div className="grid gap-4 border-b border-theme-primary/20 py-4 md:grid-cols-3">
                    <div className="font-medium text-theme-text">所在地</div>
                    <div className="text-theme-text/80 md:col-span-2">〒150-0002 東京都渋谷区渋谷1-1-1 渋谷ビル5F</div>
                  </div>
                  <div className="grid gap-4 border-b border-theme-primary/20 py-4 md:grid-cols-3">
                    <div className="font-medium text-theme-text">事業内容</div>
                    <div className="text-theme-text/80 md:col-span-2">
                      住まいを育てる賃貸事業
                      <br />
                      リノベーション事業
                      <br />
                      不動産コンサルティング事業
                    </div>
                  </div>
                  <div className="grid gap-4 border-b border-theme-primary/20 py-4 md:grid-cols-3">
                    <div className="font-medium text-theme-text">従業員数</div>
                    <div className="text-theme-text/80 md:col-span-2">12名（2023年4月現在）</div>
                  </div>
                  <div className="grid gap-4 border-b border-theme-primary/20 py-4 md:grid-cols-3">
                    <div className="font-medium text-theme-text">連絡先</div>
                    <div className="text-theme-text/80 md:col-span-2">
                      TEL: 03-1234-5678
                      <br />
                      Email: info@senllc.jp
                      <br />
                      営業時間: 10:00〜18:00（水曜定休）
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* プライバシーポリシー・利用規約へのリンク */}
              <motion.div
                className="mt-12 flex flex-col md:flex-row justify-center gap-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Link
                  href="/privacy"
                  className="text-theme-primary hover:text-theme-primary/80 transition-colors underline"
                >
                  プライバシーポリシー
                </Link>
                <Link
                  href="/terms"
                  className="text-theme-primary hover:text-theme-primary/80 transition-colors underline"
                >
                  利用規約
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <ContactForm />
      </main>

      <Footer />
    </div>
  )
}

