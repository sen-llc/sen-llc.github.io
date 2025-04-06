"use client"

import Image from "next/image"
import Link from "next/link"
import { Heart } from "lucide-react"
import { motion } from "framer-motion"

interface PropertyCardProps {
  title: string
  image: string
  description: string
  location: string
  type: "rental" | "renovation"
  index: number
}

export function PropertyCard({ title, image, description, location, type, index }: PropertyCardProps) {
  return (
    <motion.div
      className="property-card overflow-hidden bg-white rounded-lg shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover property-image" />
        <button
          className="absolute top-3 right-3 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
          aria-label="お気に入りに追加"
        >
          <Heart className="h-5 w-5 text-theme-primary" />
        </button>
      </div>

      <div className="p-5">
        <h3 className="property-title text-lg font-medium text-theme-primary mb-3">{title}</h3>
        <p className="text-sm text-theme-text/80 mb-4 line-clamp-3">{description}</p>
        <div className="text-xs text-theme-text/60 mb-4">{location}</div>

        <Link
          href={type === "rental" ? "/rental" : "/renovation"}
          className="inline-block text-sm text-theme-primary font-medium btn-modern"
        >
          詳細を見る
        </Link>
      </div>
    </motion.div>
  )
}

