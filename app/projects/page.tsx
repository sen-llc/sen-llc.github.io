"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { LoadingScreen } from "@/components/loading-screen"

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState<"rental" | "renovation">("rental")

  return (
    <div className="min-h-screen bg-[#F5F0E6]">
      <LoadingScreen />
      <Header />

      <main className="pt-20">
        {/* Projects Section */}
        <section id="projects" className="bg-[#F5F0E6] py-12 md:py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <h2 className="mb-2 text-2xl sm:text-3xl font-bold text-[#1A472A] md:text-4xl">PROJECTS</h2>
              <p className="text-sm text-[#1A472A]/70">施工事例</p>
            </div>

            {/* Project Tabs */}
            <div className="mb-12 flex justify-center">
              <div className="inline-flex">
                <button
                  className={`px-6 py-3 text-sm font-medium ${
                    activeTab === "rental" ? "bg-[#1A472A] text-white" : "bg-white text-[#1A472A] hover:bg-[#1A472A]/10"
                  }`}
                  onClick={() => setActiveTab("rental")}
                >
                  育てる住まい
                </button>
                <button
                  className={`px-6 py-3 text-sm font-medium ${
                    activeTab === "renovation"
                      ? "bg-[#1A472A] text-white"
                      : "bg-white text-[#1A472A] hover:bg-[#1A472A]/10"
                  }`}
                  onClick={() => setActiveTab("renovation")}
                >
                  RENOVATION
                </button>
              </div>
            </div>

            {/* Project Grid */}
            <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="group relative overflow-hidden">
                  <div className="aspect-square">
                    <Image
                      src={`/placeholder.svg?height=600&width=600&text=${
                        activeTab === "renovation" ? "Renovation" : "育てる住まい"
                      }+${item}`}
                      alt={`Project ${item}`}
                      width={600}
                      height={600}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#1A472A]/80 p-6 opacity-0 transition-opacity group-hover:opacity-100">
                    <h3 className="mb-2 text-xl font-bold text-white">
                      {activeTab === "renovation" ? "リノベーション" : "育てる住まい"} Project {item}
                    </h3>
                    <p className="mb-4 text-center text-sm text-white/80">
                      {activeTab === "renovation" ? "神奈川県横浜市 / 戸建 / 120㎡" : "東京都渋谷区 / 1LDK / 45㎡"}
                    </p>
                    <Link
                      href="#"
                      className="rounded-none border border-white bg-transparent px-4 py-2 text-sm text-white hover:bg-white hover:text-[#1A472A]"
                    >
                      VIEW DETAILS
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button className="rounded-none border border-[#1A472A] bg-transparent px-4 py-3 md:px-8 md:py-6 text-[#1A472A] hover:bg-[#1A472A] hover:text-white">
                {activeTab === "renovation" ? "施工事例をもっと見る" : "物件一覧を見る"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
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

