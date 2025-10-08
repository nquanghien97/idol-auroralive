"use client"

import { Target, Heart, TrendingUp, ChevronLeft, ChevronRight } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { useState, useRef } from "react"

export function MissionSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const slides = [
    {
      icon: TrendingUp,
      title: "Tầm nhìn",
      content: <p>Trở thành công ty hàng đầu Việt Nam trong lĩnh vực <span className="text-[#1877f2]">đào tạo và phát triển nhân tài livestream</span>, tạo dựng nền tảng vững chắc cho sự nghiệp của mỗi cá nhân.</p>,
    },
    {
      icon: Target,
      title: "Sứ Mệnh",
      content: <p>Chúng tôi chọn lọc tinh hoa của thị trường, mang đến những <span className="text-[#1877f2]">sản phẩm ưu việt</span> và kiến tạo trải nghiệm mua sắm tinh tế, tin cậy cho khách hàng.</p>,
    },
    {
      icon: Heart,
      title: "Giá Trị Cốt Lõi",
      content: (
        <ul className="space-y-3">
          <li className="flex items-start gap-2 text-gray-700">
            <span className="text-[#1877f2] font-bold mt-1">•</span>
            <span className="leading-relaxed">Tận tâm với khách hàng</span>
          </li>
          <li className="flex items-start gap-2 text-gray-700">
            <span className="text-[#1877f2] font-bold mt-1">•</span>
            <span className="leading-relaxed">Yêu thương không điều kiện</span>
          </li>
          <li className="flex items-start gap-2 text-gray-700">
            <span className="text-[#1877f2] font-bold mt-1">•</span>
            <span className="leading-relaxed">Làm đúng cam kết, luôn trách nhiệm</span>
          </li>
          <li className="flex items-start gap-2 text-gray-700">
            <span className="text-[#1877f2] font-bold mt-1">•</span>
            <span className="leading-relaxed">Trung thực tuyệt đối</span>
          </li>
          <li className="flex items-start gap-2 text-gray-700">
            <span className="text-[#1877f2] font-bold mt-1">•</span>
            <span className="leading-relaxed">Đổi mới sáng tạo mỗi ngày</span>
          </li>
        </ul>
      )
    }
  ]

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    if (scrollContainerRef.current) {
      const slideWidth = scrollContainerRef.current.offsetWidth
      scrollContainerRef.current.scrollTo({
        left: slideWidth * index,
        behavior: "smooth",
      })
    }
  }

  const nextSlide = () => {
    const next = (currentSlide + 1) % slides.length
    goToSlide(next)
  }

  const prevSlide = () => {
    const prev = (currentSlide - 1 + slides.length) % slides.length
    goToSlide(prev)
  }

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const slideWidth = scrollContainerRef.current.offsetWidth
      const scrollLeft = scrollContainerRef.current.scrollLeft
      const newIndex = Math.round(scrollLeft / slideWidth)
      if (newIndex !== currentSlide) {
        setCurrentSlide(newIndex)
      }
    }
  }

  return (
    <section className="relative p-4 overflow-hidden bg-white">
      <div className="container mx-auto max-w-6xl">
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-gray-900">Giá Trị Của Chúng Tôi</h2>
            <div className="w-24 h-1 bg-[#1877f2] mx-auto" />
          </div>
        </ScrollReveal>

        <div className="relative mb-16">
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-smooth gap-6 pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {slides.map((slide, index) => {
              const Icon = slide.icon
              return (
                <div
                  key={index}
                  className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-center"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl hover:border-[#1877f2]/30 transition-all duration-300 hover:-translate-y-1 h-full">
                    <div className="w-16 h-16 bg-[#1877f2] rounded-xl flex items-center justify-center mb-6 mx-auto">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-center text-gray-900">{slide.title}</h3>
                    {slide.content}
                  </div>
                </div>
              )
            })}
          </div>

          <button
            onClick={prevSlide}
            className="flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center hover:bg-[#1877f2] hover:text-white transition-all duration-300 border border-gray-200 z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center hover:bg-[#1877f2] hover:text-white transition-all duration-300 border border-gray-200 z-10"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="flex justify-center gap-2 mt-6">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${currentSlide === index ? "bg-[#1877f2] w-8" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <ScrollReveal animation="scale-up" delay={400}>
          <div className="bg-gradient-to-r from-[#1877f2] to-[#0c63d4] rounded-3xl py-12 px-4 text-white text-center shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold mb-8 text-balance">"Xây Dựng Tương Lai Cùng AURORA"</h3>
            <div className="space-y-6 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
              <p className="text-blue-50">
                Tại AURORA LIVE, chúng tôi không chỉ tuyển dụng nhân viên – chúng tôi xây dựng cộng đồng những người sáng tạo nội dung chuyên nghiệp. Với hợp đồng lao động chính thức, bảo hiểm đầy đủ và môi trường làm việc linh hoạt tại nhà, chúng tôi cam kết mang đến cho bạn sự nghiệp ổn định và cơ hội phát triển bền vững trong ngành công nghiệp livestream đang bùng nổ.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}
