"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Leaf, ChevronRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { LoadingScreen } from "@/components/loading-screen"
import { ResponsiveTable } from "@/components/responsive-table"
import { SideNavigation } from "@/components/side-navigation"
import { DateDisplay } from "@/components/date-display"
import { PropertyCard } from "@/components/property-card"
import { motion } from "framer-motion"

export default function RentalPage() {
  // ページ読み込み時に最上部にスクロール
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <div className="min-h-screen rental-theme bg-theme-background" id="top">
      <LoadingScreen />
      <Header />

      {/* サイドナビゲーション */}
      <SideNavigation currentPage="rental" />

      <main>
        {/* 日付表示 */}
        <div className="pt-20">
          <DateDisplay />
        </div>

        {/* Hero Section */}
        <section className="relative min-h-[500px] h-[80vh]">
          <div className="absolute inset-0">
            <Image
              src="/placeholder.svg?height=1080&width=1080&text=育てる住まい"
              alt="育てる住まい"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-theme-primary/60"></div>
          </div>
          <motion.div
            className="relative z-10 flex h-full flex-col items-center justify-center p-8 text-center text-white"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h2 className="mb-4 text-3xl font-medium md:text-5xl tracking-wider" variants={fadeIn}>
              育てる住まい
            </motion.h2>
            <motion.p className="mb-6 text-lg max-w-xl leading-relaxed" variants={fadeIn}>
              最初からデザイン性が高く、おしゃれな空間。 あなたの手で、住みながら変えていける余白があります。
              そして、気に入ったら、そのまま買うこともできる。
            </motion.p>
            <motion.p className="mb-8 text-xl font-medium tracking-widest" variants={fadeIn}>
              住む、つくる、手に入れる。
            </motion.p>
            <motion.div variants={fadeIn}>
              <Button className="rounded-md border border-white bg-transparent px-6 py-4 text-white hover:bg-white hover:text-theme-primary transition-all duration-300">
                物件を見る
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>
        </section>

        {/* 物件一覧セクション */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              className="mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-2 text-2xl sm:text-3xl font-medium text-theme-text md:text-4xl">物件一覧</h2>
              <p className="text-sm text-theme-text/70 tracking-wider">育てる住まいの物件</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <PropertyCard
                  key={item}
                  title={`育てる住まい Project ${item}`}
                  image={`/placeholder.svg?height=600&width=800&text=育てる住まい+${item}`}
                  description="最初からデザイン性が高く、おしゃれな空間。あなたの手で、住みながら変えていける余白があります。そして、気に入ったら、そのまま買うこともできる。"
                  location="東京都渋谷区 / 1LDK / 45㎡"
                  type="rental"
                  index={item - 1}
                />
              ))}
            </div>

            <div className="text-center">
              <Link href="#" className="inline-flex items-center text-theme-primary font-medium btn-modern">
                もっと見る
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-2 text-2xl sm:text-3xl font-medium text-theme-text md:text-4xl">ABOUT</h2>
              <p className="text-sm text-theme-text/70 tracking-wider">育てる住まいについて</p>
            </motion.div>
            <div className="mx-auto max-w-4xl">
              <motion.p
                className="mb-8 text-center text-lg leading-relaxed text-theme-text"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                あなたは、賃貸で「ただ住む」だけの生活に物足りなさを感じていませんか？
                <br />
                でも、普通のDIY可賃貸では満足できないし、デザイン性の高いリノベ賃貸はカスタムできない…。
              </motion.p>

              <motion.div
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-theme-primary p-4 text-white">
                  <Leaf className="h-10 w-10" />
                </div>
                <h3 className="mb-4 text-xl font-medium text-theme-text">育てる住まい</h3>
                <p className="text-theme-text/80 max-w-2xl leading-relaxed">
                  最初からデザイン性が高く、おしゃれな空間。 でも、それだけじゃない。
                  あなたの手で、住みながら変えていける余白があります。 そして、気に入ったら、そのまま買うこともできる。
                  「住む、つくる、手に入れる」という新しい住まい方を提案します。
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Main Rental Section */}
        <section id="rental" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-16 md:grid-cols-2">
              <motion.div
                className="order-2 md:order-1"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="mb-6 text-2xl font-medium text-theme-text">
                  デザイン性の高い空間で、
                  <br />
                  自分らしく住まいを育てる
                </h3>
                <p className="mb-6 leading-relaxed text-theme-text/80">
                  私たちは「住まいを育てる賃貸」をつくりました。 最初からデザイン性が高く、おしゃれな空間。
                  でも、それだけじゃない。 あなたの手で、住みながら変えていける余白があります。
                </p>
                <p className="mb-8 leading-relaxed text-theme-text/80">
                  壁を塗る、棚をつける、床を変える。あなたのアイデアを加えていくことで、住まいは成長していきます。
                  そして、気に入ったら、そのまま買うこともできる。
                  「住んでから買う」という新しい選択肢で、家選びのストレスも軽減。
                </p>

                <motion.div
                  className="space-y-4"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={staggerContainer}
                >
                  <motion.div className="flex items-start" variants={fadeIn}>
                    <div className="mr-4 mt-1 h-6 w-6 flex-shrink-0 rounded-full bg-theme-primary"></div>
                    <div>
                      <h4 className="mb-2 font-medium text-theme-text">デザイン性と自由度の両立</h4>
                      <p className="text-theme-text/80">
                        最初からおしゃれな空間でありながら、自分好みにカスタマイズできる余白があります。
                      </p>
                    </div>
                  </motion.div>

                  <motion.div className="flex items-start" variants={fadeIn}>
                    <div className="mr-4 mt-1 h-6 w-6 flex-shrink-0 rounded-full bg-theme-primary"></div>
                    <div>
                      <h4 className="mb-2 font-medium text-theme-text">DIYサポート</h4>
                      <p className="text-theme-text/80">
                        DIYパーツの提供やワークショップを通じて、あなたの「つくる」をサポートします。
                      </p>
                    </div>
                  </motion.div>

                  <motion.div className="flex items-start" variants={fadeIn}>
                    <div className="mr-4 mt-1 h-6 w-6 flex-shrink-0 rounded-full bg-theme-primary"></div>
                    <div>
                      <h4 className="mb-2 font-medium text-theme-text">住んで買える選択肢</h4>
                      <p className="text-theme-text/80">
                        気に入った住まいをそのまま購入できる、新しい住まいの選び方を提案します。
                      </p>
                    </div>
                  </motion.div>
                </motion.div>

                <motion.div
                  className="mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <Button className="rounded-md border border-theme-primary bg-theme-primary px-6 py-3 text-white hover:bg-transparent hover:text-theme-primary transition-all duration-300">
                    物件を見る
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div
                className="order-1 md:order-2"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="relative h-80 overflow-hidden md:h-full rounded-lg shadow-sm">
                  <Image
                    src="/placeholder.svg?height=800&width=600&text=育てる住まい"
                    alt="育てる住まい"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-2 text-2xl sm:text-3xl font-medium text-theme-text md:text-4xl">
                住まいを育てる賃貸の特徴
              </h2>
              <p className="text-sm text-theme-text/70 tracking-wider">他にはない新しい選択肢</p>
            </motion.div>

            <motion.div
              className="mx-auto max-w-4xl overflow-x-auto -mx-4 px-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <ResponsiveTable
                headers={["", "既存のリノベ賃貸", "一般的なDIY可賃貸", "住まいを育てる賃貸"]}
                rows={[
                  {
                    label: "デザイン性",
                    cells: ["あるが、固定的", "低い", "あるし、カスタムできる"],
                  },
                  {
                    label: "DIYの自由度",
                    cells: ["ほぼなし", "あるが、チープになりがち", "デザイン性を保ちながらDIY可能"],
                  },
                  {
                    label: "購入の選択肢",
                    cells: ["なし", "なし", "住んで気に入ったら購入OK"],
                  },
                  {
                    label: "入居者の体験",
                    cells: ["「決まった空間で暮らす」", "「自分で作るが基盤が弱い」", "「住まいを育て、愛着を持てる」"],
                  },
                ]}
              />
            </motion.div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              className="mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-2 text-2xl sm:text-3xl font-medium text-theme-text md:text-4xl">PROCESS</h2>
              <p className="text-sm text-theme-text/70 tracking-wider">ご利用の流れ</p>
            </motion.div>

            <motion.div
              className="mx-auto max-w-2xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="mb-6 text-center text-xl font-medium text-theme-text">育てる住まい</h3>
              <div className="space-y-6 md:space-y-8">
                <motion.div
                  className="relative flex"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <div className="mr-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-theme-primary text-white">
                    1
                  </div>
                  <div className="pt-1">
                    <h4 className="mb-2 font-medium text-theme-text">物件のご紹介</h4>
                    <p className="text-sm text-theme-text/80">
                      ご希望のエリアや条件に合わせて、育てる住まいをご紹介します。
                    </p>
                  </div>
                  <div className="absolute bottom-0 left-5 top-10 w-px bg-theme-primary/30"></div>
                </motion.div>

                <motion.div
                  className="relative flex"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="mr-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-theme-primary text-white">
                    2
                  </div>
                  <div className="pt-1">
                    <h4 className="mb-2 font-medium text-theme-text">物件見学</h4>
                    <p className="text-sm text-theme-text/80">
                      実際に物件を見学し、DIYの可能範囲や現状を確認していただきます。
                    </p>
                  </div>
                  <div className="absolute bottom-0 left-5 top-10 w-px bg-theme-primary/30"></div>
                </motion.div>

                <motion.div
                  className="relative flex"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="mr-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-theme-primary text-white">
                    3
                  </div>
                  <div className="pt-1">
                    <h4 className="mb-2 font-medium text-theme-text">契約・入居</h4>
                    <p className="text-sm text-theme-text/80">
                      DIYルールを含む賃貸契約を締結し、入居していただきます。
                    </p>
                  </div>
                  <div className="absolute bottom-0 left-5 top-10 w-px bg-theme-primary/30"></div>
                </motion.div>

                <motion.div
                  className="relative flex"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <div className="mr-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-theme-primary text-white">
                    4
                  </div>
                  <div className="pt-1">
                    <h4 className="mb-2 font-medium text-theme-text">DIY・暮らし</h4>
                    <p className="text-sm text-theme-text/80">
                      自分らしい空間づくりを楽しみながら、理想の暮らしを実現します。
                    </p>
                  </div>
                  <div className="absolute bottom-0 left-5 top-10 w-px bg-theme-primary/30"></div>
                </motion.div>

                <motion.div
                  className="flex"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <div className="mr-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-theme-primary text-white">
                    5
                  </div>
                  <div className="pt-1">
                    <h4 className="mb-2 font-medium text-theme-text">購入（オプション）</h4>
                    <p className="text-sm text-theme-text/80">気に入った物件は、そのまま購入することも可能です。</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Form */}
        <ContactForm />
      </main>

      <Footer />
    </div>
  )
}

