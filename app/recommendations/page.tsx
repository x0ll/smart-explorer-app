"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mountain, TreesIcon as Tree, Share2 } from "lucide-react"

export default function RecommendationsPage() {
  const handleStartTrip = () => {
    alert("بدء الرحلة! (يمكن هنا تفعيل التوجيهات أو إضافة الرحلة للمفضلة)")
  }

  const handleShare = () => {
    alert("مشاركة الرحلة! (يمكن هنا فتح خيارات المشاركة)")
  }

  const handleTripCardClick = () => {
    alert("تم النقر على بطاقة الرحلة! (يمكن هنا عرض تفاصيل الرحلة الكاملة)")
  }

  return (
    <div className="p-4 space-y-6 text-center">
      <h2 className="text-xl font-bold text-gray-800">التوصيات الذكية</h2>
      <p className="text-sm text-gray-600">رحلات مخصصة حسب اهتماماتك</p>

      {/* Trip Recommendation Card - Now clickable */}
      <Card
        className="p-4 rounded-xl border border-[#e4e3e3] shadow-sm text-right cursor-pointer transition-transform duration-200 hover:scale-[1.01] hover:shadow-md"
        onClick={handleTripCardClick}
      >
        <h3 className="text-lg font-bold mb-1 text-gray-800">رحلة يوم واحد - الطبيعة والجبال</h3>
        <p className="text-sm text-gray-600 mb-4">مسار مقترح لمحبي الطبيعة</p>

        <div className="space-y-3 mb-6">
          <div className="flex items-center p-3 rounded-lg bg-gray-50 border border-[#e4e3e3]">
            <div className="p-2 rounded-full bg-green-100 ml-3">
              <Mountain className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="font-medium text-gray-800">جبال السودة</p>
              <p className="text-xs text-gray-500">9:00 ص - 12:00 م</p>
            </div>
          </div>
          <div className="flex items-center p-3 rounded-lg bg-gray-50 border border-[#e4e3e3]">
            <div className="p-2 rounded-full bg-green-100 ml-3">
              <Tree className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="font-medium text-gray-800">منتزه عسير الوطني</p>
              <p className="text-xs text-gray-500">1:00 م - 5:00 م</p>
            </div>
          </div>
        </div>

        <div className="flex gap-3 justify-center">
          <Button
            variant="outline"
            className="flex-1 py-6 rounded-full border-[#e4e3e3] text-gray-700 hover:bg-gray-100 bg-transparent"
            onClick={handleStartTrip}
          >
            بدء الرحلة
          </Button>
          <Button className="flex-1 py-6 rounded-full bg-black text-white hover:bg-gray-800" onClick={handleShare}>
            <Share2 className="w-5 h-5 ml-2" />
            مشاركة
          </Button>
        </div>
      </Card>
    </div>
  )
}
