"use client"

import { Card } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { ArrowUp } from "lucide-react"
import { useState } from "react"

export default function GuidePage() {
  const [message, setMessage] = useState("")

  const handleSendMessage = () => {
    if (message.trim()) {
      alert(`تم إرسال رسالتك: "${message}"`)
      setMessage("") // Clear input after sending
    }
  }

  const handleFilterClick = (filterName: string) => {
    alert(`تم النقر على فلتر: ${filterName}`)
    // في تطبيق حقيقي، يمكنك تصفية المحتوى بناءً على الفلتر
  }

  return (
    <div className="flex flex-col h-full p-4 space-y-6">
      <div className="text-center">
        <h2 className="text-xl font-bold text-gray-800">المرشد الذكي</h2>
        <p className="text-sm text-gray-600">اسأل عن أي معلومة تريدها</p>
      </div>

      {/* Chat Bubble - Now clickable */}
      <Card
        className="max-w-[80%] p-4 rounded-xl rounded-br-none bg-blue-600 text-white shadow-md text-right cursor-pointer transition-transform duration-200 hover:scale-[1.01]"
        onClick={() => alert("هذه رسالة من المرشد الذكي!")}
      >
        <p>مرحباً! أنا مرشدك الذكي في عسير. كيف يمكنني مساعدتك؟</p>
      </Card>

      {/* Spacer to push input to bottom */}
      <div className="flex-1" />

      {/* Input Area */}
      <div className="relative">
        <Textarea
          placeholder="اكتب سؤالك هنا..."
          className="w-full pr-12 pl-4 py-3 rounded-2xl border border-[#e4e3e3] bg-gray-50 resize-none text-right focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          rows={1}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault() // Prevent new line on Enter
              handleSendMessage()
            }
          }}
        />
        <Button
          size="icon"
          className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-blue-600 text-white hover:bg-blue-700"
          onClick={handleSendMessage}
        >
          <ArrowUp className="w-4 h-4" />
          <span className="sr-only">Send</span>
        </Button>
      </div>

      {/* Best Places to Visit Filters */}
      <section className="text-right">
        <h3 className="text-lg font-bold mb-3 text-gray-800">أفضل الأماكن للزيارة</h3>
        <div className="flex flex-wrap gap-2">
          <Button
            variant="outline"
            className="rounded-full border-[#e4e3e3] text-gray-700 hover:bg-gray-100 bg-transparent"
            onClick={() => handleFilterClick("الطقس اليوم")}
          >
            الطقس اليوم
          </Button>
          <Button
            variant="outline"
            className="rounded-full border-[#e4e3e3] text-gray-700 hover:bg-gray-100 bg-transparent"
            onClick={() => handleFilterClick("الفعاليات الحالية")}
          >
            الفعاليات الحالية
          </Button>
          <Button
            variant="outline"
            className="rounded-full border-[#e4e3e3] text-gray-700 hover:bg-gray-100 bg-transparent"
            onClick={() => handleFilterClick("المطاعم المحلية")}
          >
            المطاعم المحلية
          </Button>
        </div>
      </section>
    </div>
  )
}
