"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { LoadingScreen } from "@/components/loading-screen"

export default function CompanyPage() {
  return (
    <div className="min-h-screen bg-[#F5F0E6]">
      <LoadingScreen />
      <Header />

      <main className="pt-20">
        {/* Company Section */}
        <section id="company" className="bg-[#F5F0E6] py-12 md:py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <h2 className="mb-2 text-2xl sm:text-3xl font-bold text-[#1A472A] md:text-4xl">COMPANY</h2>
              <p className="text-sm text-[#1A472A]/70">会社情報</p>
            </div>
            <div className="mx-auto max-w-3xl">
              <div className="grid gap-4 border-t border-[#1A472A]/20 py-4 md:grid-cols-3">
                <div className="font-medium text-[#1A472A]">会社名</div>
                <div className="text-[#1A472A]/80 md:col-span-2">合同会社巛（sen llc）</div>
              </div>
              <div className="grid gap-4 border-t border-[#1A472A]/20 py-4 md:grid-cols-3">
                <div className="font-medium text-[#1A472A]">設立</div>
                <div className="text-[#1A472A]/80 md:col-span-2">2018年4月</div>
              </div>
              <div className="grid gap-4 border-t border-[#1A472A]/20 py-4 md:grid-cols-3">
                <div className="font-medium text-[#1A472A]">代表社員</div>
                <div className="text-[#1A472A]/80 md:col-span-2">山田 太郎</div>
              </div>
              <div className="grid gap-4 border-t border-[#1A472A]/20 py-4 md:grid-cols-3">
                <div className="font-medium text-[#1A472A]">所在地</div>
                <div className="text-[#1A472A]/80 md:col-span-2">〒150-0002 東京都渋谷区渋谷1-1-1 渋谷ビル5F</div>
              </div>
              <div className="grid gap-4 border-t border-[#1A472A]/20 py-4 md:grid-cols-3">
                <div className="font-medium text-[#1A472A]">事業内容</div>
                <div className="text-[#1A472A]/80 md:col-span-2">
                  住まいを育てる賃貸事業
                  <br />
                  リノベーション事業
                  <br />
                  不動産コンサルティング事業
                </div>
              </div>
              <div className="grid gap-4 border-t border-b border-[#1A472A]/20 py-4 md:grid-cols-3">
                <div className="font-medium text-[#1A472A]">従業員数</div>
                <div className="text-[#1A472A]/80 md:col-span-2">12名（2023年4月現在）</div>
              </div>
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

