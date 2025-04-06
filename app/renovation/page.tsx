"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, PenToolIcon as Tools } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { LoadingScreen } from "@/components/loading-screen"
import { SideNavigation } from "@/components/side-navigation"
import { motion } from "framer-motion"

export default function RenovationPage() {
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
    <div className="min-h-screen renovation-theme bg-theme-background" id="top">
      <LoadingScreen />
      <Header />

      {/* サイドナビゲーション */}
      <SideNavigation currentPage="renovation" />

      <main className="px-6 md:px-10">
        {/* Hero Section */}
        <section className="relative min-h-[500px] h-[80vh] pt-20">
          <div className="absolute inset-0">
            <Image
              src="/placeholder.svg?height=1080&width=1080&text=RENOVATION"
              alt="Renovation"
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
            <motion.h2 className="mb-4 text-3xl font-bold md:text-5xl tracking-wider retro-line" variants={fadeIn}>
              RENOVATION
            </motion.h2>
            <motion.p className="mb-6 text-lg max-w-xl leading-relaxed" variants={fadeIn}>
              お客様がお持ちの物件や土地を、ライフスタイルや好みに合わせて
              リノベーションします。古い建物に新しい命を吹き込み、 機能性とデザイン性を兼ね備えた空間を創り出します。
            </motion.p>
            <motion.div variants={fadeIn}>
              <Button className="rounded-none border border-white bg-transparent px-6 py-4 text-white hover:bg-white hover:text-theme-primary transition-all duration-300 btn-retro">
                施工事例を見る
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-4">
            <motion.div
              className="mb-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-2 text-2xl sm:text-3xl font-bold text-theme-text md:text-4xl tracking-wider retro-line">
                ABOUT
              </h2>
              <p className="text-sm text-theme-text/70 tracking-widest">リノベーションについて</p>
            </motion.div>
            <div className="mx-auto max-w-4xl">
              <motion.p
                className="mb-8 text-center text-lg leading-relaxed text-theme-text"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                古い建物や使い勝手の悪い空間を、新しい価値を持った魅力的な空間に生まれ変わらせます。
                <br />
                お客様のライフスタイルや好みに合わせた、オーダーメイドのリノベーションをご提案します。
              </motion.p>

              <motion.div
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-theme-primary p-4 text-white">
                  <Tools className="h-10 w-10" />
                </div>
                <h3 className="mb-4 text-xl font-bold text-theme-text tracking-wider">リノベーション</h3>
                <p className="text-theme-text/80 max-w-2xl leading-relaxed">
                  お客様がお持ちの物件や土地を、ライフスタイルや好みに合わせて
                  リノベーションします。古い建物に新しい命を吹き込み、
                  機能性とデザイン性を兼ね備えた空間を創り出します。
                  プロの技術とデザイン力で、一人ひとりの理想の住まいを実現します。
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Main Renovation Section */}
        <section id="renovation" className="bg-white py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-4">
            <motion.div
              className="mb-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-2 text-2xl sm:text-3xl font-bold text-theme-text md:text-4xl tracking-wider retro-line">
                RENOVATION
              </h2>
              <p className="text-sm text-theme-text/70 tracking-widest">リノベーション</p>
            </motion.div>

            <div className="grid gap-16 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="relative h-80 overflow-hidden md:h-full rounded-lg shadow-lg retro-border">
                  <Image
                    src="/placeholder.svg?height=800&width=600&text=RENOVATION"
                    alt="Renovation"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="mb-6 text-2xl font-bold text-theme-text tracking-wider">
                  あなたの物件を
                  <br />
                  理想の空間に
                </h3>
                <p className="mb-6 leading-relaxed text-theme-text/80">
                  お客様がお持ちの物件や土地を、ライフスタイルや好みに合わせて
                  リノベーションします。古い建物に新しい命を吹き込み、
                  機能性とデザイン性を兼ね備えた空間を創り出します。
                </p>
                <p className="mb-8 leading-relaxed text-theme-text/80">
                  プロの技術とデザイン力で、一人ひとりの理想の住まいを実現します。
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
                      <h4 className="mb-2 font-bold text-theme-text">フルオーダーリノベーション</h4>
                      <p className="text-theme-text/80">
                        間取りの変更から内装、設備まで、トータルでリノベーションします。
                      </p>
                    </div>
                  </motion.div>

                  <motion.div className="flex items-start" variants={fadeIn}>
                    <div className="mr-4 mt-1 h-6 w-6 flex-shrink-0 rounded-full bg-theme-primary"></div>
                    <div>
                      <h4 className="mb-2 font-bold text-theme-text">部分リノベーション</h4>
                      <p className="text-theme-text/80">
                        キッチンやバスルームなど、特定の場所だけのリノベーションも可能です。
                      </p>
                    </div>
                  </motion.div>

                  <motion.div className="flex items-start" variants={fadeIn}>
                    <div className="mr-4 mt-1 h-6 w-6 flex-shrink-0 rounded-full bg-theme-primary"></div>
                    <div>
                      <h4 className="mb-2 font-bold text-theme-text">コンサルティング</h4>
                      <p className="text-theme-text/80">
                        物件購入前の相談から、リノベーション後の暮らしまでサポートします。
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
                  <Button className="rounded-none border border-theme-primary bg-theme-primary px-4 py-3 md:px-8 md:py-6 text-white hover:bg-transparent hover:text-theme-primary transition-all duration-300 btn-retro">
                    施工事例を見る
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="bg-theme-background py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-4">
            <motion.div
              className="mb-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-2 text-2xl sm:text-3xl font-bold text-theme-text md:text-4xl tracking-wider retro-line">
                PROJECTS
              </h2>
              <p className="text-sm text-theme-text/70 tracking-widest">施工事例</p>
            </motion.div>

            {/* Project Grid */}
            <motion.div
              className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <motion.div
                  key={item}
                  className="group relative overflow-hidden rounded-lg shadow-md retro-border"
                  variants={fadeIn}
                >
                  <div className="aspect-square">
                    <Image
                      src={`/placeholder.svg?height=600&width=600&text=Renovation+${item}`}
                      alt={`Project ${item}`}
                      width={600}
                      height={600}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-theme-primary/80 p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <h3 className="mb-2 text-xl font-bold text-white tracking-wider">リノベーション Project {item}</h3>
                    <p className="mb-4 text-center text-sm text-white/80">神奈川県横浜市 / 戸建 / 120㎡</p>
                    <Link
                      href="#"
                      className="rounded-none border border-white bg-transparent px-4 py-2 text-sm text-white hover:bg-white hover:text-theme-primary transition-all duration-300 btn-retro"
                    >
                      VIEW DETAILS
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="mt-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button className="rounded-none border border-theme-primary bg-transparent px-4 py-3 md:px-8 md:py-6 text-theme-primary hover:bg-theme-primary hover:text-white transition-all duration-300 btn-retro">
                施工事例をもっと見る
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Process Section */}
        <section className="bg-white py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-4">
            <motion.div
              className="mb-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-2 text-2xl sm:text-3xl font-bold text-theme-text md:text-4xl tracking-wider retro-line">
                PROCESS
              </h2>
              <p className="text-sm text-theme-text/70 tracking-widest">ご利用の流れ</p>
            </motion.div>

            <motion.div
              className="mx-auto max-w-2xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="mb-6 text-center text-xl font-bold text-theme-text tracking-wider">RENOVATION</h3>
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
                    <h4 className="mb-2 font-bold text-theme-text">ヒアリング・現地調査</h4>
                    <p className="text-sm text-theme-text/80">ご要望をお聞きし、物件の現状を調査します。</p>
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
                    <h4 className="mb-2 font-bold text-theme-text">プラン・お見積り</h4>
                    <p className="text-sm text-theme-text/80">ご要望に基づいたプランと概算お見積りをご提案します。</p>
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
                    <h4 className="mb-2 font-bold text-theme-text">ご契約・工事</h4>
                    <p className="text-sm text-theme-text/80">詳細な打ち合わせの後、契約を締結し工事を開始します。</p>
                  </div>
                  <div className="absolute bottom-0 left-5 top-10 w-px bg-theme-primary/30"></div>
                </motion.div>

                <motion.div
                  className="flex"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <div className="mr-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-theme-primary text-white">
                    4
                  </div>
                  <div className="pt-1">
                    <h4 className="mb-2 font-bold text-theme-text">お引渡し・アフターサポート</h4>
                    <p className="text-sm text-theme-text/80">
                      完成後のお引渡しと、その後のアフターサポートを行います。
                    </p>
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

