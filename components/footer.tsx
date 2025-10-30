import { Facebook, Instagram, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="text-2xl font-bold mb-4">
              AURORA<span className="text-primary">LIVE</span>
            </div>
            <p className="text-secondary-foreground/70 leading-relaxed">
              Công ty tuyển dụng và đào tạo idol livestream hàng đầu Việt Nam
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Liên kết</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                  Trang chủ
                </a>
              </li>
              <li>
                <a href="#benefits" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                  Quyền lợi
                </a>
              </li>
              <li>
                <a href="#process" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                  Quy trình
                </a>
              </li>
              <li>
                <a href="#stories" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                  Câu chuyện
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Liên hệ</h4>
            <ul className="space-y-2 text-secondary-foreground/70">
              <li>
                <a href="tel:0867059120">Hotline: 0867 059 120</a>
              </li>
              <li>Email: auroravn@gmail.com</li>
              <li>Địa chỉ: Số 5 ngõ 82 đường Nguyễn Khuyến, Phường Hà Đông, TP Hà Nội</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Theo dõi chúng tôi</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-secondary-foreground/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-secondary-foreground/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-secondary-foreground/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                aria-label="Youtube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 pt-8 text-center text-sm text-secondary-foreground/70">
          <p>© 2025 AURORA LIVE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
