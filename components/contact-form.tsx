"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export function ContactForm() {
  const [privacyChecked, setPrivacyChecked] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiryType: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!privacyChecked) {
      alert("プライバシーポリシーに同意してください。")
      return
    }

    // ここで送信処理を行う
    console.log("送信データ:", formData)
    alert("お問い合わせを送信しました。")

    // フォームをリセット
    setFormData({
      name: "",
      email: "",
      inquiryType: "",
      message: "",
    })
    setPrivacyChecked(false)
  }

  return (
    <section id="contact" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-2 text-2xl sm:text-3xl font-medium text-theme-text md:text-4xl">CONTACT</h2>
          <p className="text-sm text-theme-text/70 tracking-wider">お問い合わせ</p>
        </motion.div>
        <motion.div
          className="mx-auto max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-theme-secondary p-8 md:p-10 rounded-lg">
            <h3 className="mb-6 text-xl font-medium text-theme-text text-center">お問い合わせフォーム</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-theme-text">
                    お名前 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 border border-theme-primary/20 focus:border-theme-primary focus:ring-1 focus:ring-theme-primary outline-none bg-white rounded-md"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-theme-text">
                    メールアドレス <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border border-theme-primary/20 focus:border-theme-primary focus:ring-1 focus:ring-theme-primary outline-none bg-white rounded-md"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="inquiryType" className="block mb-2 text-sm font-medium text-theme-text">
                  お問い合わせ内容 <span className="text-red-500">*</span>
                </label>
                <select
                  id="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  className="w-full p-3 border border-theme-primary/20 focus:border-theme-primary focus:ring-1 focus:ring-theme-primary outline-none bg-white rounded-md"
                  required
                >
                  <option value="">お問い合わせ内容を選択してください</option>
                  <option value="rental">育てる住まいについて</option>
                  <option value="renovation">リノベーションについて</option>
                  <option value="other">その他のお問い合わせ</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-theme-text">
                  メッセージ <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 border border-theme-primary/20 focus:border-theme-primary focus:ring-1 focus:ring-theme-primary outline-none bg-white rounded-md"
                  required
                ></textarea>
              </div>

              {/* プライバシーポリシー同意チェックボックス */}
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="privacy"
                    type="checkbox"
                    checked={privacyChecked}
                    onChange={() => setPrivacyChecked(!privacyChecked)}
                    className="w-4 h-4 border border-theme-primary/20 rounded focus:ring-theme-primary"
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="privacy" className="text-theme-text/80">
                    <Link
                      href="/privacy"
                      className="text-theme-primary underline hover:text-theme-primary/80"
                      target="_blank"
                    >
                      プライバシーポリシー
                    </Link>
                    を読み、同意します <span className="text-red-500">*</span>
                  </label>
                </div>
              </div>

              <div className="text-center">
                <Button
                  type="submit"
                  disabled={!privacyChecked}
                  className={`rounded-md border border-theme-primary bg-theme-primary px-8 py-3 md:px-10 md:py-4 text-white transition-all duration-300 ${
                    privacyChecked ? "hover:bg-transparent hover:text-theme-primary" : "opacity-50 cursor-not-allowed"
                  }`}
                >
                  送信する
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </form>
          </div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="mb-4 text-theme-text/80">お電話でのお問い合わせも受け付けております</p>
            <p className="text-2xl font-medium text-theme-text">03-1234-5678</p>
            <p className="text-sm text-theme-text/70">受付時間：平日 10:00〜18:00</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

