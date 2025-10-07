"use client"

import { Target, Heart, TrendingUp, ChevronLeft, ChevronRight } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { useState, useRef } from "react"

export function MissionSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const slides = [
    {
      icon: Target,
      title: "Sứ Mệnh",
      content:
        "Chúng tôi chọn lọc tinh hoa của thị trường, mang đến những sản phẩm ưu việt và kiến tạo trải nghiệm mua sắm tinh tế, tin cậy cho khách hàng.",
      highlight: "sản phẩm ưu việt",
    },
    {
      icon: Heart,
      title: "Giá Trị Cốt Lõi",
      values: [
        "Tận tâm với khách hàng",
        "Yêu thương không điều kiện",
        "Làm đúng cam kết, luôn trách nhiệm",
        "Trung thực tuyệt đối",
        "Đổi mới sáng tạo mỗi ngày",
      ],
    },
    {
      icon: TrendingUp,
      title: "Tầm nhìn",
      content: "Đào tạo toàn diện, chuyên nghiệp và đẳng cấp: Phát triển năng lực một cách bài bản và xuất sắc.",
      highlight: "Đào tạo toàn diện, chuyên nghiệp và đẳng cấp",
    },
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
                    {"values" in slide ? (
                      <ul className="space-y-3">
                        {slide.values?.map((value, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-700">
                            <span className="text-[#1877f2] font-bold mt-1">•</span>
                            <span className="leading-relaxed">{value}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-600 text-center leading-relaxed">
                        {slide.content.split(slide.highlight)[0]}
                        <span className="text-[#1877f2] font-semibold">{slide.highlight}</span>
                        {slide.content.split(slide.highlight)[1]}
                      </p>
                    )}
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
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index ? "bg-[#1877f2] w-8" : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <ScrollReveal animation="scale-up" delay={400}>
          <div className="bg-gradient-to-r from-[#1877f2] to-[#0c63d4] rounded-3xl p-12 text-white text-center shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold mb-8 text-balance">"Xây Dựng Tương Lai Cùng AURORA"</h3>
            <div className="space-y-6 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
              <p className="text-blue-50">
                Tại AURORA LIVE, chúng tôi không chỉ tạo ra công việc — chúng tôi tạo nên{" "}
                <span className="font-semibold text-white">cơ hội tỏa sáng</span> cho những người dám theo đuổi đam mê
                sáng tạo.
              </p>
              <p className="text-blue-50">
                Mỗi thành viên của AURORA là một{" "}
                <span className="font-semibold text-white">ngôi sao trong bầu trời livestream rực rỡ</span>, được làm
                việc trong môi trường{" "}
                <span className="font-semibold text-white">chuyên nghiệp – linh hoạt – bền vững</span>.
              </p>
              <p className="text-blue-50">
                Chúng tôi mang đến <span className="font-semibold text-white">hợp đồng chính thức</span>,{" "}
                <span className="font-semibold text-white">bảo hiểm đầy đủ</span>,{" "}
                <span className="font-semibold text-white">thu nhập minh bạch</span> và quan trọng hơn hết là sự công
                nhận và phát triển lâu dài cho từng cá nhân.
              </p>
              <p className="text-blue-50">
                Cùng nhau, chúng ta xây dựng một <span className="font-semibold text-white">cộng đồng sáng tạo</span> –
                nơi đam mê trở thành sự nghiệp, và ánh sáng AURORA dẫn lối cho tương lai của bạn.
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
