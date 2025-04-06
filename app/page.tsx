"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { LoadingScreen } from "@/components/loading-screen"
import { DateDisplay } from "@/components/date-display"
import { motion } from "framer-motion"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  // ページ読み込み時に最上部にスクロール
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className="min-h-screen bg-theme-background rental-theme">
      <Header />

      <main className="pt-20">
        {/* 日付表示 */}
        <DateDisplay />

        {/* メインビジュアル */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl md:text-5xl font-medium text-theme-primary mb-6">住む、つくる、手に入れる。</h1>
              <p className="text-lg text-theme-text/80 max-w-2xl mx-auto">
                デザイン性の高い空間でありながら、住みながらDIYできる自由があり、
                気に入れば購入までできる新しい賃貸のカタチ。
              </p>
            </motion.div>

            {/* サービス選択ボタン */}
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-2xl font-medium text-theme-primary mb-4 text-center">育てる住まい</h2>
                <p className="text-theme-text/80 mb-6 text-center">
                  最初からデザイン性が高く、おしゃれな空間。あなたの手で、住みながら変えていける余白があります。
                </p>
                <Link href="/rental" className="block text-center">
                  <Button className="rounded-md border border-theme-primary bg-theme-primary px-6 py-3 text-white hover:bg-transparent hover:text-theme-primary transition-all duration-300">
                    詳しく見る
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h2 className="text-2xl font-medium text-theme-primary mb-4 text-center">リノベーション</h2>
                <p className="text-theme-text/80 mb-6 text-center">
                  お客様がお持ちの物件や土地を、ライフスタイルや好みに合わせてリノベーションします。
                </p>
                <Link href="/renovation" className="block text-center">
                  <Button className="rounded-md border border-theme-primary bg-theme-primary px-6 py-3 text-white hover:bg-transparent hover:text-theme-primary transition-all duration-300">
                    詳しく見る
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        <div className="section-divider mx-auto max-w-4xl"></div>

        {/* お知らせセクション */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.h2
              className="text-xl md:text-2xl font-medium text-theme-primary mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              お知らせ
            </motion.h2>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="border-b border-theme-primary/10 pb-4">
                <div className="flex items-center mb-2">
                  <span className="text-sm text-theme-text/60">2023.12.15</span>
                  <span className="ml-4 px-2 py-1 text-xs bg-theme-primary/10 text-theme-primary rounded">
                    イベント
                  </span>
                </div>
                <Link href="#" className="text-theme-text hover:text-theme-primary transition-colors">
                  DIYワークショップ「壁塗り体験会」を開催します
                </Link>
              </div>

              <div className="border-b border-theme-primary/10 pb-4">
                <div className="flex items-center mb-2">
                  <span className="text-sm text-theme-text/60">2023.11.20</span>
                  <span className="ml-4 px-2 py-1 text-xs bg-theme-primary/10 text-theme-primary rounded">
                    お知らせ
                  </span>
                </div>
                <Link href="#" className="text-theme-text hover:text-theme-primary transition-colors">
                  年末年始の営業について（12/28〜1/5休業）
                </Link>
              </div>

              <div className="border-b border-theme-primary/10 pb-4">
                <div className="flex items-center mb-2">
                  <span className="text-sm text-theme-text/60">2023.10.05</span>
                  <span className="ml-4 px-2 py-1 text-xs bg-theme-primary/10 text-theme-primary rounded">
                    物件情報
                  </span>
                </div>
                <Link href="#" className="text-theme-text hover:text-theme-primary transition-colors">
                  新着物件「小金城址 | 壁ドンOKハウス」のご紹介
                </Link>
              </div>
            </motion.div>

            <div className="mt-8 text-center">
              <Link href="/news" className="inline-flex items-center text-theme-primary font-medium btn-modern">
                お知らせ一覧
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
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

