import { Card } from "@/components/ui/card"
import { Quote } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel"
import Image from "next/image"

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
  {
    name: "Lan Nhi",
    role: "Idol livestream",
    image: "/idol-1.jpg",
    quote:
      "Trước đây mình chỉ nghĩ livestream là làm cho vui, nhưng khi vào AURORA LIVE thì mọi thứ thay đổi hẳn. Mình được đào tạo từ cách nói chuyện, chọn góc quay cho đến cách xây hình ảnh cá nhân. Bây giờ thu nhập của mình ổn định 25–30 triệu/tháng, có hợp đồng và bảo hiểm rõ ràng nên mình yên tâm làm lâu dài.",
    stats: "500K+ followers",
  },
  {
    name: "Hà My",
    role: "Idol mới",
    image: "/idol-2.jpg",
    quote:
      "Ấn tượng đầu tiên của mình là môi trường cực kỳ chuyên nghiệp. Mỗi khi gặp vấn đề kỹ thuật hay nội dung, đều có mentor và team hỗ trợ 24/7. Mình chưa từng nghĩ làm Idol livestream lại được công ty quan tâm quyền lợi đầy đủ như vậy – ký HĐLĐ, đóng BHXH, lương cứng hàng tháng",
    stats: "200K+ followers",
  },
  {
    name: "Yến Anh",
    role: "New Talent",
    image: "/idol-3.jpg",
    quote: "Mình làm tại studio Hà Đông, được hỗ trợ ánh sáng, thiết bị, backdrop để livestream. Không cần lo đầu tư ban đầu. Aurora giúp mình học được cách nói chuyện cuốn hút, có nhiều fan quý mến. mà quan trọng là thu nhập thật – trung bình 35 triệu/tháng.",
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

        <Carousel
          className="relative w-full"
          opts={{
            align: 'start',
            containScroll: 'trimSnaps',
            slidesToScroll: 1,
            loop: false,
            dragFree: true,
          }}
        >
          <CarouselContent>
            {stories.map((story, index) => (
              <CarouselItem key={index} className="overflow-hidden border-border hover:shadow-xl transition-shadow">
                <ScrollReveal animation="scale-up" delay={150}>
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
                </ScrollReveal>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}
