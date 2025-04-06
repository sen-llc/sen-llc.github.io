"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Search } from "lucide-react"
import { motion } from "framer-motion"

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [pageTheme, setPageTheme] = useState<"rental" | "renovation" | "">("")

  // 現在のページに基づいてテーマを設定
  useEffect(() => {
    const path = window.location.pathname
    if (path.includes("rental")) {
      setPageTheme("rental")
    } else if (path.includes("renovation")) {
      setPageTheme("renovation")
    } else {
      setPageTheme("")
    }
  }, [])

  // スクロール検出
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 header-modern ${scrolled ? "py-2" : "py-4"}`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link href="/" className="flex items-center">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%82%A2%E3%82%BB%E3%83%83%E3%83%88%204-my6jh9WIW1WcjnPFwcyjBoscmIofbw.png"
            alt="sen llc logo"
            className="h-8 w-auto mr-2"
          />
          <span className="text-xl font-medium text-theme-primary">sen llc</span>
        </Link>

        {/* 検索バー - デスクトップ */}
        <div className="hidden md:flex items-center search-bar px-4 py-2 w-1/3 max-w-md">
          <Search className="h-4 w-4 text-theme-primary/60 mr-2" />
          <input
            type="text"
            placeholder="物件を探す"
            className="bg-transparent border-none outline-none w-full text-sm"
          />
        </div>

        {/* デスクトップナビゲーション */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <Link
                href="/rental"
                className="text-sm text-theme-text hover:text-theme-primary tracking-wider font-medium"
              >
                育てる住まい
              </Link>
            </li>
            <li>
              <Link
                href="/renovation"
                className="text-sm text-theme-text hover:text-theme-primary tracking-wider font-medium"
              >
                RENOVATION
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="text-sm text-theme-text hover:text-theme-primary tracking-wider font-medium"
              >
                PROJECTS
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-sm text-theme-text hover:text-theme-primary tracking-wider font-medium"
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </nav>

        {/* モバイルメニューボタン */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <X size={24} className="text-theme-primary" />
          ) : (
            <Menu size={24} className="text-theme-primary" />
          )}
        </button>
      </div>

      {/* 検索バー - モバイル */}
      <div className="md:hidden px-4 mt-2">
        <div className="flex items-center search-bar px-4 py-2 w-full">
          <Search className="h-4 w-4 text-theme-primary/60 mr-2" />
          <input
            type="text"
            placeholder="物件を探す"
            className="bg-transparent border-none outline-none w-full text-sm"
          />
        </div>
      </div>

      {/* モバイルメニュー */}
      {menuOpen && (
        <motion.div
          className="fixed inset-0 z-40 bg-white pt-16 md:hidden overflow-y-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <nav className="container mx-auto px-4">
            <ul className="space-y-6 py-8">
              <li>
                <Link
                  href="/rental"
                  className="block text-2xl font-medium text-theme-text tracking-wider"
                  onClick={() => setMenuOpen(false)}
                >
                  育てる住まい
                </Link>
              </li>
              <li>
                <Link
                  href="/renovation"
                  className="block text-2xl font-medium text-theme-text tracking-wider"
                  onClick={() => setMenuOpen(false)}
                >
                  RENOVATION
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="block text-2xl font-medium text-theme-text tracking-wider"
                  onClick={() => setMenuOpen(false)}
                >
                  PROJECTS
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block text-2xl font-medium text-theme-text tracking-wider"
                  onClick={() => setMenuOpen(false)}
                >
                  CONTACT
                </Link>
              </li>
              <li className="pt-6 border-t border-theme-primary/10">
                <Link
                  href="/about"
                  className="block text-lg font-medium text-theme-text/70 tracking-wider"
                  onClick={() => setMenuOpen(false)}
                >
                  サイトについて・運営会社
                </Link>
              </li>
            </ul>
          </nav>
        </motion.div>
      )}
    </header>
  )
}

