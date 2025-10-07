import { Button } from "@/components/ui/button"
import { Sparkles, TrendingUp, Users } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="pt-32 pb-20 lg:pt-40 lg:pb-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Sparkles className="h-4 w-4" />
              Tuyển dụng Idol Livestream 2025
            </div>

            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight text-balance">
              Trở thành ngôi sao
              <span className="text-primary"> livestream</span> hàng đầu
            </h1>

            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
              Tham gia cùng chúng tôi để phát triển sự nghiệp livestream chuyên nghiệp. Thu nhập hấp dẫn, đào tạo miễn
              phí, và cơ hội trở thành KOL nổi tiếng.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg h-14 px-8">
                Đăng ký ngay
              </Button>
              <Button size="lg" variant="outline" className="text-lg h-14 px-8 bg-transparent">
                Tìm hiểu thêm
              </Button>
            </div>

            <div className="flex flex-wrap gap-8 pt-4">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-sm text-muted-foreground">Idol đang hoạt động</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <div className="text-2xl font-bold">50M+</div>
                  <div className="text-sm text-muted-foreground">Thu nhập/tháng</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 relative">
              <img src="/young-vietnamese-woman-livestreaming-with-phone-an.jpg" alt="Livestream Idol" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-2xl shadow-xl border border-border">
              <div className="text-3xl font-bold text-primary">98%</div>
              <div className="text-sm text-muted-foreground">Tỷ lệ hài lòng</div>
            </div>

            <div className="absolute -top-6 -right-6 bg-card p-6 rounded-2xl shadow-xl border border-border">
              <div className="text-3xl font-bold text-accent">Top 1</div>
              <div className="text-sm text-muted-foreground">Công ty tuyển dụng</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
