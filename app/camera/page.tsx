"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Camera, ImageIcon } from "lucide-react"

export default function CameraPage() {
  const handleTakePhoto = () => {
    alert("وظيفة التقاط الصورة (تتطلب الوصول إلى الكاميرا في تطبيق حقيقي)")
    // في تطبيق حقيقي، ستستخدم هنا navigator.mediaDevices.getUserMedia()
  }

  const handleChooseFromGallery = () => {
    alert("وظيفة اختيار من المعرض (تتطلب الوصول إلى ملفات الجهاز في تطبيق حقيقي)")
    // في تطبيق حقيقي، ستستخدم هنا <input type="file" accept="image/*" />
  }

  const handleCameraPlaceholderClick = () => {
    alert("تم النقر على منطقة الكاميرا. يمكنك تفعيل الكاميرا من هنا.")
    // يمكن ربط هذا بـ handleTakePhoto أو فتح واجهة الكاميرا
  }

  return (
    <div className="p-4 space-y-6 text-center">
      <h2 className="text-xl font-bold text-gray-800">التعرف على الصور</h2>
      <p className="text-sm text-gray-600">صور المكان واحصل على معلومات فورية</p>

      {/* Camera Placeholder - Now clickable */}
      <Card
        className="flex flex-col items-center justify-center h-64 rounded-xl border border-[#e4e3e3] bg-gray-50 shadow-sm cursor-pointer transition-transform duration-200 hover:scale-[1.01] hover:bg-gray-100"
        onClick={handleCameraPlaceholderClick}
      >
        <Camera className="w-16 h-16 text-gray-400 mb-4" />
        <p className="text-sm text-gray-500">اضغط لتشغيل الكاميرا</p>
      </Card>

      {/* Action Buttons */}
      <div className="flex gap-3 justify-center">
        <Button
          variant="outline"
          className="flex-1 py-6 rounded-full border-[#e4e3e3] text-gray-700 bg-transparent hover:bg-gray-100"
          onClick={handleChooseFromGallery}
        >
          <ImageIcon className="w-5 h-5 ml-2" />
          اختر من المعرض
        </Button>
        <Button className="flex-1 py-6 rounded-full bg-black text-white hover:bg-gray-800" onClick={handleTakePhoto}>
          <Camera className="w-5 h-5 ml-2" />
          التقط صورة
        </Button>
      </div>

      {/* How it works section */}
      <section className="text-right">
        <h3 className="text-lg font-bold mb-3 text-gray-800">كيف يعمل؟</h3>
        <ol className="list-none space-y-2">
          <li className="flex items-start">
            <span className="flex items-center justify-center w-6 h-6 bg-blue-100 text-blue-600 rounded-full text-xs font-bold flex-shrink-0 mr-2">
              1
            </span>
            <p className="text-sm text-gray-700">التقط صورة للمكان أو المعلم</p>
          </li>
          <li className="flex items-start">
            <span className="flex items-center justify-center w-6 h-6 bg-blue-100 text-blue-600 rounded-full text-xs font-bold flex-shrink-0 mr-2">
              2
            </span>
            <p className="text-sm text-gray-700">سيتم تحليل الصورة بالذكاء الاصطناعي</p>
          </li>
          <li className="flex items-start">
            <span className="flex items-center justify-center w-6 h-6 bg-blue-100 text-blue-600 rounded-full text-xs font-bold flex-shrink-0 mr-2">
              3
            </span>
            <p className="text-sm text-gray-700">احصل على معلومات تفصيلية فورية</p>
          </li>
        </ol>
      </section>
    </div>
  )
}
