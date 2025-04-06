"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowUp } from "lucide-react"
import { motion } from "framer-motion"

type SideNavigationProps = {
  currentPage: "rental" | "renovation"
}

export function SideNavigation({ currentPage }: SideNavigationProps) {
  const [showScrollTop, setShowScrollTop] = useState(false)

  // スクロール位置を監視して、トップに戻るボタンの表示/非表示を切り替え
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // トップに戻る関数
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // 反対側のページへのリンク
  const oppositePageLink = currentPage === "rental" ? "/renovation" : "/rental"
  const currentPageName = currentPage === "rental" ? "育てる住まい" : "RENOVATION"
  const oppositePageName = currentPage === "rental" ? "RENOVATION" : "育てる住まい"

  // 現在のページに基づいて色を設定
  const primaryColor = currentPage === "rental" ? "bg-theme-primary text-white" : "bg-theme-primary text-white"

  return (
    <>
      {/* 左側：もう一方のページへのリンク */}
      <motion.div
        className="fixed left-0 top-0 bottom-0 z-40 flex items-center"
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Link
          href={oppositePageLink}
          className={`flex items-center ${primaryColor} px-1 py-12 rounded-r-sm shadow-md hover:px-3 transition-all duration-300`}
        >
          <span className="text-xs md:text-sm font-medium writing-mode-vertical-rl tracking-wider">
            {oppositePageName}
          </span>
        </Link>
      </motion.div>

      {/* 右側：現在のページ名とトップに戻るボタン */}
      <motion.div
        className="fixed right-0 top-0 bottom-0 z-40 flex flex-col items-center justify-between py-4"
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className={`flex items-center ${primaryColor} px-1 py-12 rounded-l-sm shadow-md`}>
          <span className="text-xs md:text-sm font-medium writing-mode-vertical-rl tracking-wider">
            {currentPageName}
          </span>
        </div>

        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            className={`flex items-center ${primaryColor} p-2 rounded-l-sm shadow-md transition-colors`}
            aria-label="ページトップへ戻る"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <ArrowUp className="h-4 w-4" />
          </motion.button>
        )}
      </motion.div>
    </>
  )
}

