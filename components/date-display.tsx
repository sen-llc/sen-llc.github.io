"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function DateDisplay() {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    setDate(new Date())
  }, [])

  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, "0")
  const day = String(date.getDate()).padStart(2, "0")

  // 曜日の配列（日本語）
  const weekdays = ["日", "月", "火", "水", "木", "金", "土"]
  const weekday = weekdays[date.getDay()]

  return (
    <div className="flex flex-col items-center justify-center py-8 md:py-12">
      <motion.div
        className="date-display text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="year block">{year}</span>
        <div className="flex items-baseline justify-center">
          <span className="date">
            {month}/{day}
          </span>
          <span className="day ml-2">（{weekday}曜日）</span>
        </div>
      </motion.div>
    </div>
  )
}

