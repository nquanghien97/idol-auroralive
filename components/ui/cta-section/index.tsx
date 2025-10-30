import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ArrowRight, Mail, Phone } from "lucide-react"
import Link from "next/link"
import Form from "./Form"

export function CTASection() {
  return (
    <section className="pb-8" id="dang-ky">
      <div className="container mx-auto px-4 lg:px-8">
        <Card className="relative overflow-hidden border-border">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent" />

          <div className="relative p-8">
            <div className="">
              <div className="flex flex-col pb-8">
                <h2 className="text-center text-3xl lg:text-5xl font-bold text-balance bg-gradient-to-r from-[#ea0094] via-[#006fea] to-[#67b7ff] bg-clip-text text-transparent inline-block leading-[1.5]">Sẵn sàng bắt đầu hành trình của bạn?</h2>
                <p className="text-center text-lg text-muted-foreground leading-relaxed">
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
                      <div className="text-muted-foreground">
                        <a href="tel:0867059120">0867.059.120</a>
                      </div>
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

              <Form />
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
