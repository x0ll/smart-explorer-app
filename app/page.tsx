"use client" // Make sure this is a client component for interactivity

import type React from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Search,
  MapPin,
  Camera,
  Star,
  MessageCircle,
  Users,
  Coffee,
  TreesIcon as Tree,
  Mountain,
  Heart,
  Clock,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link" // Import Link for navigation

export default function HomePage() {
  const handleSearch = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      alert(`البحث عن: ${event.currentTarget.value}`)
    }
  }

  return (
    <div className="p-4 space-y-6">
      {/* Welcome Card - Already interactive with gradient */}
      <Card className="relative overflow-hidden p-6 rounded-xl bg-gradient-to-br from-blue-600 to-green-500 text-white shadow-lg cursor-pointer transition-transform duration-200 hover:scale-[1.01]">
        <div className="relative z-10">
          <h2 className="text-2xl font-bold mb-2">مرحباً بك في عسير</h2>
          <p className="text-sm">اكتشف جمال الطبيعة والتراث مع الذكاء الاصطناعي</p>
        </div>
      </Card>

      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <Input
          placeholder="ابحث عن الأماكن، والمعالم..."
          className="w-full pr-10 pl-4 py-2 rounded-full border border-[#e4e3e3] bg-gray-50 text-right focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          onKeyDown={handleSearch}
        />
      </div>

      {/* Smart Features */}
      <section>
        <h3 className="text-lg font-bold mb-4 text-gray-800">الميزات الذكية</h3>
        <div className="grid grid-cols-2 gap-4">
          <FeatureCard icon={MapPin} color="text-green-500" text="استكشف الخريطة" href="/map" />
          <FeatureCard icon={Camera} color="text-blue-500" text="التعرف على الصور" href="/camera" />
          <FeatureCard icon={Star} color="text-orange-500" text="التوصيات" href="/recommendations" />
          <FeatureCard icon={MessageCircle} color="text-purple-500" text="المرشد الذكي" href="/guide" />
        </div>
      </section>

      {/* Categories */}
      <section>
        <h3 className="text-lg font-bold mb-4 text-gray-800">التصنيفات</h3>
        <div className="grid grid-cols-4 gap-2">
          <CategoryCard icon={Users} text="تراث" count={12} />
          <CategoryCard icon={Coffee} text="مقاهي" count={25} />
          <CategoryCard icon={Tree} text="غابات" count={8} />
          <CategoryCard icon={Mountain} text="جبال" count={15} />
        </div>
      </section>

      {/* Featured Places */}
      <section>
        <h3 className="text-lg font-bold mb-4 text-gray-800">الأماكن المميزة</h3>
        <div className="space-y-4">
          <PlaceCard
            image="/images/jabal-sawda-mountains.png"
            title="جبال السودة"
            description="أعلى قمة في المملكة العربية السعودية"
            rating={4.8}
            time="3-4 ساعات"
            category="طبيعة"
          />
          <PlaceCard
            image="/images/rijal-alma-village.png"
            title="قرية رجال ألمع"
            description="قرية تراثية تاريخية مميزة"
            rating={4.9}
            time="2-3 ساعات"
            category="تراث"
          />
          <PlaceCard
            image="/images/aseer-national-park.png"
            title="منتزه عسير الوطني"
            description="محمية طبيعية خلابة"
            rating={4.7}
            time="يوم كامل"
            category="طبيعة"
          />
        </div>
      </section>
    </div>
  )
}

interface FeatureCardProps {
  icon: React.ElementType
  color: string
  text: string
  href: string // Add href prop for navigation
}

function FeatureCard({ icon: Icon, color, text, href }: FeatureCardProps) {
  return (
    <Link href={href} className="block">
      <Card className="flex flex-col items-center justify-center p-4 rounded-xl shadow-sm border border-[#e4e3e3] aspect-square transition-transform duration-200 hover:scale-[1.02] hover:shadow-md cursor-pointer">
        <div className={`p-3 rounded-full ${color.replace("text-", "bg-")}-100 mb-2`}>
          <Icon className={`w-6 h-6 ${color}`} />
        </div>
        <p className="text-sm font-medium text-gray-700 text-center">{text}</p>
      </Card>
    </Link>
  )
}

interface CategoryCardProps {
  icon: React.ElementType
  text: string
  count: number
}

function CategoryCard({ icon: Icon, text, count }: CategoryCardProps) {
  const handleClick = () => {
    alert(`تم النقر على تصنيف: ${text} (${count})`)
  }
  return (
    <Card
      className="flex flex-col items-center justify-center p-2 rounded-xl shadow-sm border border-[#e4e3e3] aspect-square cursor-pointer transition-transform duration-200 hover:scale-[1.05] hover:bg-gray-50"
      onClick={handleClick}
    >
      <Icon className="w-5 h-5 text-gray-600 mb-1" />
      <p className="text-xs font-medium text-gray-700">{text}</p>
      <p className="text-xs text-gray-500">{count}</p>
    </Card>
  )
}

interface PlaceCardProps {
  image: string
  title: string
  description: string
  rating: number
  time: string
  category: string
}

function PlaceCard({ image, title, description, rating, time, category }: PlaceCardProps) {
  const handleClick = () => {
    alert(`تم النقر على المكان: ${title}`)
    // في تطبيق حقيقي، يمكنك الانتقال إلى صفحة تفاصيل المكان هنا
  }
  return (
    <Card
      className="flex items-center p-3 rounded-xl shadow-sm border border-[#e4e3e3] cursor-pointer transition-transform duration-200 hover:scale-[1.01] hover:shadow-md"
      onClick={handleClick}
    >
      <div className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden ml-3">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={80}
          height={80}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between mb-1">
          <h4 className="text-base font-semibold text-gray-800">{title}</h4>
          <Heart className="w-4 h-4 text-gray-400" />
        </div>
        <p className="text-xs text-gray-600 mb-1">{description}</p>
        <div className="flex items-center text-xs text-gray-500">
          <Star className="w-3 h-3 text-yellow-400 fill-yellow-400 ml-1" />
          <span>{rating}</span>
          <Clock className="w-3 h-3 ml-2 mr-1" />
          <span>{time}</span>
          <span className="mr-2 px-2 py-0.5 bg-gray-100 rounded-full text-gray-600 text-xs">{category}</span>
        </div>
      </div>
    </Card>
  )
}
