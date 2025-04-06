"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { LoadingScreen } from "@/components/loading-screen"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#F5F0E6]">
      <LoadingScreen />
      <Header />

      <main className="pt-20">
        <ContactForm />
      </main>

      <Footer />
    </div>
  )
}

