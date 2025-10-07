import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ArrowRight, Mail, Phone } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4 lg:px-8">
        <Card className="relative overflow-hidden border-border">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent" />

          <div className="relative p-8 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-5xl font-bold text-balance">Sẵn sàng bắt đầu hành trình của bạn?</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Đăng ký ngay hôm nay để nhận tư vấn miễn phí và tham gia buổi thử việc. Đừng bỏ lỡ cơ hội trở thành
                  ngôi sao livestream tiếp theo!
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">Hotline</div>
                      <div className="text-muted-foreground">081 898 1619</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center">
                      <Mail className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-muted-foreground">auroravn@gmail.com</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 border-border">
                <Link href="/dang-ky" className="bg-primary hover:bg-primary/90 flex text-white p-4 rounded-2xl items-center justify-center">
                  Gửi đăng ký
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
