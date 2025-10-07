"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

const slides = [
  {
    image: "/young-vietnamese-woman-livestreaming-with-phone-an.jpg",
    title: "Trở thành ngôi sao livestream hàng đầu",
    subtitle: "Idol Giải trí & Bán hàng • Hợp đồng chính thức • Bảo hiểm đầy đủ • Làm việc tại nhà",
    highlight: "Công ty cam kết Hợp Đồng Lao Động & BHXH đầy đủ",
  },
  {
    image: "/lam-viec-tai-nha.jpg",
    title: "Làm việc tại nhà 100% linh hoạt",
    subtitle: "Livestream tại nhà • Thiết bị hỗ trợ đầy đủ • Tự do thời gian",
    highlight: "Quyền lợi đầy đủ ngay cả khi làm việc tại nhà",
  },
  {
    image: "/professional-livestream-studio-with-ring-lights-and.jpg",
    title: "Studio chuyên nghiệp & Thiết bị hiện đại",
    subtitle: "Đào tạo miễn phí • Hỗ trợ 24/7 • Môi trường an toàn",
    highlight: "Quyền lợi được bảo vệ bởi pháp luật",
  },
  {
    image: "/happy-vietnamese-idol-celebrating-success-with-conf.jpg",
    title: "Thu nhập 15-50 triệu/tháng",
    subtitle: "Lương cơ bản + Hoa hồng • Thưởng hiệu suất",
    highlight: "Bảo đảm thu nhập ổn định – lương cứng tối thiểu 8 triệu/tháng + hoa hồng",
  },
  {
    image: "/glamorous-female-streamer-with-professional-makeup.jpg",
    title: "Đào tạo chuyên nghiệp từ A-Z",
    subtitle: "Makeup • Styling • Kỹ năng livestream • Xây dựng thương hiệu cá nhân",
    highlight: "Đào tạo, hỗ trợ 100% tất cả các thành viên",
  },
  {
    image: "/successful-livestreamer-showing-products-with-beaut.jpg",
    title: "Livestream bán hàng - Thu nhập khủng",
    subtitle: "Sản phẩm đa dạng • Hoa hồng hấp dẫn • Hỗ trợ tận tình",
    highlight: "Cơ hội hợp tác cùng các nhãn hàng lớn và KOL nổi tiếng",
  },
  {
    image: "/modern-livestream-setup-with-multiple-cameras-and-l.jpg",
    title: "Thiết bị cao cấp - Chất lượng hình ảnh 4K",
    subtitle: "Camera chuyên nghiệp • Ánh sáng studio • Âm thanh chuẩn",
    highlight: "Đầu tư thiết bị chuyên nghiệp cho thành viên",
  },
]

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [currentX, setCurrentX] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartX(e.clientX)
    setCurrentX(e.clientX)
    setIsAutoPlaying(false)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    setCurrentX(e.clientX)
  }

  const handleMouseUp = () => {
    if (!isDragging) return

    const diff = startX - currentX
    const threshold = 50 // minimum drag distance to trigger slide change

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        nextSlide()
      } else {
        prevSlide()
      }
    }

    setIsDragging(false)
    setStartX(0)
    setCurrentX(0)
  }

  const handleMouseLeave = () => {
    if (isDragging) {
      handleMouseUp()
    }
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX)
    setIsAutoPlaying(false)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setCurrentX(e.touches[0].clientX)
  }

  const handleTouchEnd = () => {
    const diff = startX - currentX
    const threshold = 50

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        nextSlide()
      } else {
        prevSlide()
      }
    }

    setStartX(0)
    setCurrentX(0)
  }

  return (
    <section
      ref={sliderRef}
      className="relative h-[440px] lg:h-[700px] overflow-hidden bg-white cursor-grab active:cursor-grabbing mt-20"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
              }`}
          >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
              <img src={slide.image || "/placeholder.svg"} alt={slide.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/50" />
              <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent" />
            </div>

            {/* Highlight Badge - Top Left */}

            {/* Content */}
            <div className="relative h-full container mx-auto px-4 lg:px-8 flex items-center">
              <div className="max-w-2xl space-y-6 lg:space-y-8 h-full py-4">
                <div className="">
                  <div className="inline-flex items-center gap-2 px-3 py-3 rounded-full bg-[#1877f2] text-white font-semibold text-sm lg:text-base shadow-lg animate-in fade-in slide-in-from-left-4 duration-700">
                    <Shield className="h-5 w-5" />
                    {slide.highlight}
                  </div>
                </div>
                {/* Title */}
                <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight text-balance animate-in fade-in slide-in-from-left-6 duration-700 delay-100 text-gray-900">
                  {slide.title}
                </h1>

                {/* Subtitle */}
                <p className="text-lg lg:text-2xl text-gray-600 leading-relaxed animate-in fade-in slide-in-from-left-8 duration-700 delay-200">
                  {slide.subtitle}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-left-10 duration-700 delay-300">
                  <Button size="lg" className="bg-[#1877f2] hover:bg-[#166fe5] text-white text-lg h-14 px-8 shadow-lg">
                    Đăng ký ngay
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="max-lg:hidden absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/90 backdrop-blur-sm border border-gray-200 hover:bg-white hover:shadow-lg transition-all flex items-center justify-center group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-gray-700 group-hover:-translate-x-0.5 transition-transform" />
      </button>

      <button
        onClick={nextSlide}
        className="max-lg:hidden absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/90 backdrop-blur-sm border border-gray-200 hover:bg-white hover:shadow-lg transition-all flex items-center justify-center group"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-gray-700 group-hover:translate-x-0.5 transition-transform" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${index === currentSlide ? "w-12 bg-[#1877f2]" : "w-2 bg-gray-400 hover:bg-gray-500"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
