"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { User, Menu, Search, MapPin, Camera, Star, MessageCircle, Home } from 'lucide-react'
import { cn } from "@/lib/utils"

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [activeTab, setActiveTab] = useState(pathname)

  const navItems = [
    { name: "الرئيسية", icon: Home, href: "/" },
    { name: "الكاميرا", icon: Camera, href: "/camera" },
    { name: "الخريطة", icon: MapPin, href: "/map" },
    { name: "المرشد", icon: MessageCircle, href: "/guide" },
    { name: "التوصيات", icon: Star, href: "/recommendations" },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-10 flex items-center justify-between p-4 bg-white border-b border-[#e4e3e3]">
        <User className="w-6 h-6 text-gray-700" />
        <h1 className="text-lg font-bold text-gray-800">مستكشف عسير الذكي</h1>
        <Menu className="w-6 h-6 text-gray-700" />
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto pb-20">{children}</main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-20 flex items-center justify-around h-16 bg-white border-t border-[#e4e3e3] shadow-lg">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              "flex flex-col items-center justify-center flex-1 h-full text-sm transition-colors",
              activeTab === item.href ? "text-blue-600" : "text-gray-500",
            )}
            onClick={() => setActiveTab(item.href)}
          >
            <item.icon className="w-5 h-5 mb-1" />
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>
    </div>
  )
}
