"use client"

import { useMobile } from "@/hooks/use-mobile"
import type { ReactNode } from "react"

interface TableProps {
  headers: string[]
  rows: {
    label: string
    cells: ReactNode[]
  }[]
}

export function ResponsiveTable({ headers, rows }: TableProps) {
  const isMobile = useMobile()

  if (isMobile) {
    // モバイル表示: カード形式
    return (
      <div className="space-y-4">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="border border-[#1A472A]/20 rounded overflow-hidden">
            <div className="bg-[#1A472A]/10 p-3 font-medium text-[#1A472A]">{row.label}</div>
            <div className="divide-y divide-[#1A472A]/10">
              {row.cells.map((cell, cellIndex) => (
                <div key={cellIndex} className="p-3">
                  <div className="text-xs text-[#1A472A]/70 mb-1">{headers[cellIndex + 1]}</div>
                  <div className="text-[#1A472A]">{cell}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    )
  }

  // デスクトップ表示: 通常のテーブル
  return (
    <table className="w-full min-w-[640px] border-collapse">
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th
              key={index}
              className={`border border-[#1A472A]/20 p-2 md:p-4 text-sm md:text-base ${
                index === headers.length - 1
                  ? "bg-[#1A472A] text-white text-center"
                  : "bg-[#1A472A]/10 text-[#1A472A] " + (index === 0 ? "text-left" : "text-center")
              }`}
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            <td className="border border-[#1A472A]/20 p-2 md:p-4 font-medium text-[#1A472A] text-sm md:text-base">
              {row.label}
            </td>
            {row.cells.map((cell, cellIndex) => (
              <td
                key={cellIndex}
                className={`border border-[#1A472A]/20 p-2 md:p-4 text-center text-sm md:text-base ${
                  cellIndex === row.cells.length - 1 ? "font-medium text-[#1A472A]" : "text-[#1A472A]/80"
                }`}
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

