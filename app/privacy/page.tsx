"use client"

import { useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LoadingScreen } from "@/components/loading-screen"
import { motion } from "framer-motion"
import Link from "next/link"

export default function PrivacyPage() {
  // ページ読み込み時に最上部にスクロール
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-theme-background rental-theme">
      <LoadingScreen />
      <Header />

      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mb-2 text-2xl sm:text-3xl font-medium text-theme-text md:text-4xl">プライバシーポリシー</h1>
            <p className="text-sm text-theme-text/70 tracking-wider">Privacy Policy</p>
          </motion.div>

          <div className="mx-auto max-w-3xl">
            <motion.div
              className="prose prose-stone max-w-none"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2>1. 個人情報の取り扱いについて</h2>
              <p>
                合同会社巛（以下、「当社」といいます）は、本ウェブサイト上で提供するサービス（以下、「本サービス」といいます）における、ユーザーの個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下、「本ポリシー」といいます）を定めます。
              </p>

              <h2>2. 収集する個人情報</h2>
              <p>
                当社は、お問い合わせやサービスのお申し込み等を通じて、お名前、メールアドレス、電話番号、住所などの個人情報をご提供いただく場合があります。また、当サイトではアクセス解析のためにCookieを使用しています。
              </p>

              <h2>3. 個人情報を収集・利用する目的</h2>
              <p>当社が個人情報を収集・利用する目的は、以下のとおりです。</p>
              <ul>
                <li>本サービスの提供・運営のため</li>
                <li>ユーザーからのお問い合わせに回答するため</li>
                <li>ユーザーに有益と思われる情報を提供するため</li>
                <li>サービスの改善や新サービスの開発のため</li>
                <li>上記の利用目的に付随する目的</li>
              </ul>

              <h2>4. 個人情報の第三者提供</h2>
              <p>
                当社は、法令に基づく場合を除いて、ユーザーの同意を得ることなく、第三者に個人情報を提供することはありません。ただし、以下の場合は除きます。
              </p>
              <ul>
                <li>法令に基づく場合</li>
                <li>人の生命、身体または財産の保護のために必要がある場合</li>
                <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合</li>
                <li>
                  国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合
                </li>
              </ul>

              <h2>5. 個人情報の安全管理</h2>
              <p>
                当社は、個人情報の漏洩、滅失、き損の防止その他の個人情報の安全管理のために必要かつ適切な措置を講じます。
              </p>

              <h2>6. プライバシーポリシーの変更</h2>
              <p>
                本ポリシーの内容は、法令その他本ポリシーに別段の定めのある事項を除いて、ユーザーに通知することなく、変更することができるものとします。当社が別途定める場合を除いて、変更後のプライバシーポリシーは、本ウェブサイトに掲載したときから効力を生じるものとします。
              </p>

              <h2>7. お問い合わせ窓口</h2>
              <p>
                本ポリシーに関するお問い合わせは、下記の窓口までお願いいたします。
                <br />
                住所：〒150-0002 東京都渋谷区渋谷1-1-1 渋谷ビル5F
                <br />
                社名：合同会社巛
                <br />
                担当部署：お客様相談室
                <br />
                Eメールアドレス：privacy@senllc.jp
              </p>
            </motion.div>

            <motion.div
              className="mt-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-theme-primary px-6 py-3 text-white hover:bg-theme-primary/90 transition-colors"
              >
                お問い合わせページへ戻る
              </Link>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

