import { Card } from "@/components/ui/card"
import { CheckCircle2, FileText, MessageSquare, Video } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const steps = [
  {
    number: "01",
    icon: FileText,
    title: "Đăng ký",
    description: "Điền form đăng ký online với thông tin cơ bản và hình ảnh của bạn",
  },
  {
    number: "02",
    icon: MessageSquare,
    title: "Phỏng vấn",
    description: "Trao đổi trực tiếp với đội ngũ tuyển dụng về mong muốn và định hướng phát triển",
  },
  {
    number: "03",
    icon: Video,
    title: "Thử việc",
    description: "Tham gia khóa đào tạo và thử livestream thực tế với sự hỗ trợ của mentor",
  },
  {
    number: "04",
    icon: CheckCircle2,
    title: "Chính thức",
    description: "Ký hợp đồng và bắt đầu sự nghiệp livestream chuyên nghiệp của bạn",
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="py-8">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-balance bg-gradient-to-r from-[#ea0094] via-[#006fea] to-[#67b7ff] bg-clip-text text-transparent inline-block leading-[1.5]">
              Quy trình tuyển dụng đơn giản
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Chỉ 4 bước để bắt đầu hành trình trở thành idol livestream chuyên nghiệp
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <ScrollReveal key={index} animation="fade-up" delay={index * 150}>
                <Card className="p-8 relative overflow-hidden border-border hover:shadow-lg transition-shadow">
                  <div className="absolute top-4 right-4 text-6xl font-bold text-muted/10">{step.number}</div>
                  <div className="relative">
                    <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
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
