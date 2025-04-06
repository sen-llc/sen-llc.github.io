"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-theme-background z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%82%A2%E3%82%BB%E3%83%83%E3%83%88%204-my6jh9WIW1WcjnPFwcyjBoscmIofbw.png"
            alt="sen llc logo"
            className="h-16 w-auto"
          />
        </motion.div>
        <motion.div
          className="relative"
          initial={{ width: 0 }}
          animate={{ width: 120 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <div className="h-[2px] bg-theme-primary/30 w-[120px]"></div>
          <div className="absolute top-0 left-0 h-[2px] bg-theme-primary w-full"></div>
        </motion.div>
        <motion.div
          className="mt-4 text-sm tracking-widest text-theme-primary font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          LOADING
        </motion.div>
      </div>
    </motion.div>
  )
}

