"use client"

import type React from "react"

import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { MapPin, Search, Send } from "lucide-react"

export default function MapPage() {
  const handleGetCurrentLocation = () => {
    alert("وظيفة تحديد الموقع الحالي (تتطلب أذونات الموقع في تطبيق حقيقي)")
    // في تطبيق حقيقي، ستستخدم هنا navigator.geolocation.getCurrentPosition()
  }

  const handleMapSearch = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      alert(`البحث في الخريطة عن: ${event.currentTarget.value}`)
    }
  }

  const handleMapPlaceholderClick = () => {
    alert("تم النقر على منطقة الخريطة. هنا يمكن فتح خريطة تفاعلية أكبر.")
  }

  return (
    <div className="p-4 space-y-6 text-center">
      <h2 className="text-xl font-bold text-gray-800">الخريطة التفاعلية</h2>
      <p className="text-sm text-gray-600">اكتشف الأماكن القريبة منك</p>

      {/* Map Placeholder - Now clickable */}
      <Card
        className="flex flex-col items-center justify-center h-64 rounded-xl border border-[#e4e3e3] bg-gray-50 shadow-sm cursor-pointer transition-transform duration-200 hover:scale-[1.01] hover:bg-gray-100"
        onClick={handleMapPlaceholderClick}
      >
        <MapPin className="w-16 h-16 text-gray-400 mb-4" />
        <p className="text-sm text-gray-500">هنا ستظهر الخريطة التفاعلية</p>
      </Card>

      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <Input
          placeholder="البحث في الخريطة"
          className="w-full pr-10 pl-4 py-2 rounded-full border border-[#e4e3e3] bg-gray-50 text-right focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          onKeyDown={handleMapSearch}
        />
      </div>

      {/* Current Location Button */}
      <Button
        className="w-full py-6 rounded-full bg-black text-white hover:bg-gray-800"
        onClick={handleGetCurrentLocation}
      >
        <Send className="w-5 h-5 ml-2" />
        موقعي الحالي
      </Button>
    </div>
  )
}
