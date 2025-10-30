import { Card } from "@/components/ui/card"
import { DollarSign, GraduationCap, Heart, Shield, Star, Zap, FileCheck, Briefcase, Home } from "lucide-react"
import Image from "next/image"
import { ScrollReveal } from "@/components/scroll-reveal"

const benefits = [
  {
    icon: FileCheck,
    title: "Hợp đồng lao động chính thức",
    description: "Ký hợp đồng lao động theo quy định pháp luật, quyền lợi được bảo vệ tối đa",
    color: "text-primary",
    bgColor: "bg-primary/10",
    featured: true,
    image: "/hop-dong-lao-dong.jpg",
  },
  {
    icon: Shield,
    title: "Bảo hiểm xã hội đầy đủ",
    description: "Đóng BHXH, BHYT, BHTN theo quy định",
    color: "text-primary",
    bgColor: "bg-primary/10",
    featured: true,
    image: "/bao-hiem-xa-hoi.jpg",
  },
  {
    icon: DollarSign,
    title: "Thu nhập đảm bảo tối thiểu 15 triệu/tháng",
    description: "Lương cơ bản đảm bảo từ 15 triệu + hoa hồng hấp dẫn, thu nhập thực tế 15-50 triệu/tháng",
    color: "text-accent",
    bgColor: "bg-accent/10",
    featured: true,
    image: "/thu-nhap.jpg",
  },
  {
    icon: GraduationCap,
    title: "Đào tạo chuyên nghiệp",
    description: "Đào tạo toàn diện, chuyên nghiệp và đẳng cấp: Phát triển năng lực một cách bài bản và xuất sắc về các kỹ năng livestream, xây dựng thương hiệu.",
    color: "text-accent",
    bgColor: "bg-accent/10",
    image: "/dao-tao.jpg",
  },
  {
    icon: Star,
    title: "Trở thành KOL",
    description: "Cơ hội phát triển thành người nổi tiếng với hàng triệu người theo dõi",
    color: "text-primary",
    bgColor: "bg-primary/10",
    image: "/koc-tiktok.jpg",
  },
  {
    icon: Zap,
    title: "Thiết bị hiện đại",
    description: "Studio chuyên nghiệp, thiết bị livestream cao cấp, hỗ trợ kỹ thuật 24/7",
    color: "text-accent",
    bgColor: "bg-accent/10",
    image: "/thiet-bi-hien-dai.webp",
  },
  {
    icon: Briefcase,
    title: "Môi trường chuyên nghiệp",
    description: "Đội ngũ Gen Z năng động, văn hóa công ty minh bạch, nhiều hoạt động team building",
    color: "text-primary",
    bgColor: "bg-primary/10",
    image: "/moi-truong-chuyen-nghiep.jpg",
  },
]

export function BenefitsGrid() {
  return (
    <section id="benefits" className="pb-8 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h2 className="text-3xl lg:text-5xl font-bold text-balance bg-gradient-to-r from-[#ea0094] via-[#006fea] to-[#67b7ff] bg-clip-text text-transparent inline-block leading-[1.5]">
              Tại sao chọn AURORA LIVE?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              AURORA LIVE – Bước vào môi trường chuyên nghiệp trong ngành livestream, nơi mọi quyền lợi của bạn được đảm bảo bằng hợp đồng và pháp luật, cùng đội ngũ hỗ trợ tận tâm đồng hành trên mọi phương diện – từ công việc, đào tạo đến phát triển cá nhân.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <ScrollReveal key={index} animation="fade-up-scale" delay={index * 100}>
                <Card
                  className={`group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-2 ${
                    benefit.featured
                      ? "md:col-span-2 lg:col-span-2 border-[#1877f2]/20 hover:border-[#1877f2]/40"
                      : "border-gray-200 hover:border-[#1877f2]/30"
                  }`}
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={benefit.image || "/placeholder.svg"}
                      alt={benefit.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-gray-900/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 h-14 w-14 rounded-2xl bg-[#1877f2] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-[#1877f2] transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </Card>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
