import { Card } from "@/components/ui/card"
import { Quote } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const stories = [
  {
    name: "Minh Anh",
    role: "Top Idol",
    image: "/minh-anh.jpg",
    quote:
      "Từ một sinh viên bình thường, giờ mình đã có thu nhập 40 triệu/tháng và hơn 500K followers. AURORA LIVE đã thay đổi cuộc đời mình!",
    stats: "500K+ followers",
  },
  {
    name: "Phương Linh",
    role: "Rising Star",
    image: "/young-vietnamese-woman-with-stylish-makeup-livestr.jpg",
    quote:
      "Đội ngũ đào tạo rất chuyên nghiệp, từ makeup đến cách giao tiếp với khán giả. Mình cảm thấy tự tin hơn rất nhiều!",
    stats: "200K+ followers",
  },
  {
    name: "Thu Hà",
    role: "New Talent",
    image: "/thu-ha.jpg",
    quote: "Môi trường làm việc vui vẻ, đồng nghiệp thân thiện. Mình được hỗ trợ tận tình từ ngày đầu tiên!",
    stats: "100K+ followers",
  },
]

export function SuccessStories() {
  return (
    <section id="stories" className="py-8 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-balance">
              Câu chuyện <span className="text-primary">thành công</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hàng trăm idol đã thay đổi cuộc sống của họ cùng AURORA LIVE
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <ScrollReveal key={index} animation="scale-up" delay={index * 150}>
              <Card className="overflow-hidden border-border hover:shadow-xl transition-shadow">
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src={story.image || "/placeholder.svg"}
                    alt={story.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-xl font-bold text-card-foreground">{story.name}</div>
                    <div className="text-sm text-primary font-medium">{story.role}</div>
                  </div>
                </div>
                <div className="p-6">
                  <Quote className="h-8 w-8 text-primary/20 mb-4" />
                  <p className="text-muted-foreground leading-relaxed mb-4 italic">"{story.quote}"</p>
                  <div className="text-sm font-medium text-accent">{story.stats}</div>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
