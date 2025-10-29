"use client"

import { Sparkles, ShoppingBag, Users } from "lucide-react"
import { Card } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"

export function BusinessSegments() {
  return (
    <section className="relative py-4 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-16 space-y-4">
            <h2 className="inline-block text-3xl lg:text-5xl font-bold text-balance leading-[1.5] bg-gradient-to-r from-[#ea0094] via-[#006fea] to-[#67b7ff] bg-clip-text text-transparent">
              Lĩnh Vực Hoạt Động
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
              AURORA LIVE cung cấp cơ hội nghề nghiệp trong cả hai lĩnh vực livestream hàng đầu tại Việt Nam
            </p>
          </div>
        </ScrollReveal>

        {/* Business Cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {/* Idol/Entertainment Livestream */}
          <ScrollReveal animation="fade-up" delay={200}>
            <Card className="group relative overflow-hidden bg-white border-2 border-[#1877f2]/20 hover:border-[#1877f2]/40 transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
              <div className="relative h-80 overflow-hidden">
                <img
                  src="/minh-anh.jpg"
                  alt="Livestream Idol"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/30 to-transparent" />

                {/* Icon Badge */}
                <div className="absolute top-6 left-6 h-16 w-16 rounded-2xl bg-[#1877f2] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
              </div>

              <div className="px-8 pb-8 space-y-2">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 group-hover:text-[#1877f2] transition-colors duration-300">
                  Livestream Idol & Giải trí
                </h3>
                <p className="text-gray-600">
                  Tỏa sáng trước hàng triệu khán giả – biến đam mê thành sự nghiệp.
                </p>
                <p className="text-gray-600">
                  <span className="text-[#1877f2]">AURORA LIVE</span> là bệ phóng dành cho những ai yêu thích sáng tạo nội dung, âm nhạc, biểu diễn và giao lưu cùng người hâm mộ.
                </p>
                <p className="text-gray-600">
                  Chúng tôi giúp bạn phát triển thương hiệu cá nhân, trau dồi kỹ năng biểu diễn và biến tài năng của mình thành sự nghiệp vững chắc trong thế giới giải trí số.
                </p>

                <ul className="space-y-3 pt-4">
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-[#1877f2]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-[#1877f2]" />
                    </div>
                    <span className="text-gray-600">Livestream âm nhạc, trò chuyện, giao lưu cùng fan</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-[#1877f2]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-[#1877f2]" />
                    </div>
                    <span className="text-gray-600">Hỗ trợ phát triển fanpage, hình ảnh và phong cách cá nhân</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-[#1877f2]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-[#1877f2]" />
                    </div>
                    <span className="text-gray-600">Đào tạo kỹ năng nói chuyện, biểu cảm, tương tác và làm chủ sân khấu</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-[#1877f2]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-[#1877f2]" />
                    </div>
                    <span className="text-gray-600">Khai phá tài năng: ca hát, nhảy, dẫn chương trình, review, cosplay...</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-[#1877f2]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-[#1877f2]" />
                    </div>
                    <span className="text-gray-600">Thu nhập từ quà tặng, tương tác và hợp đồng thương hiệu</span>
                  </li>
                </ul>
              </div>
            </Card>
          </ScrollReveal>

          {/* Product Livestream */}
          <ScrollReveal animation="fade-up" delay={400}>
            <Card className="group relative overflow-hidden bg-white border-2 border-[#1877f2]/20 hover:border-[#1877f2]/40 transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
              <div className="relative h-80 overflow-hidden">
                <img
                  src="/6.jpg"
                  alt="Livestream Bán hàng"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/30 to-transparent" />

                {/* Icon Badge */}
                <div className="absolute top-6 left-6 h-16 w-16 rounded-2xl bg-[#1877f2] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <ShoppingBag className="h-8 w-8 text-white" />
                </div>
              </div>

              <div className="px-8 pb-8 space-y-2">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 group-hover:text-[#1877f2] transition-colors duration-300">
                  Tiêu chí tuyển dụng
                </h3>
                {/* <p className="text-gray-600 leading-relaxed">
                  Bán hàng bằng đam mê – thành công bằng kỹ năng.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  <span className="text-[#1877f2]">AURORA LIVE</span> đồng hành cùng bạn trên hành trình trở thành chuyên gia livestream bán hàng, nơi bạn không chỉ kiếm được thu nhập cao mà còn xây dựng thương hiệu cá nhân uy tín.
                </p> */}

                <ul className="space-y-3 pt-4">
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-[#1877f2]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-[#1877f2]" />
                    </div>
                    <span className="text-gray-600"><strong>Độ tuổi:</strong> Nữ từ 18 – 28 tuổi, chưa kết hôn, có đam mê với lĩnh vực Livestream và giải trí.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-[#1877f2]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-[#1877f2]" />
                    </div>
                    <span className="text-gray-600"><strong>Địa điểm làm việc:</strong> Trụ sở Nguyễn Khuyến – Hà Đông – Hà Nội.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-[#1877f2]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-[#1877f2]" />
                    </div>
                    <span className="text-gray-600"><strong>Ngoại hình:</strong> Ưa nhìn, gương mặt sáng, thân thiện và tự tin trước ống kính.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-[#1877f2]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-[#1877f2]" />
                    </div>
                    <span className="text-gray-600"><strong>Tính cách:</strong> Năng động, hòa đồng, có khả năng giao tiếp và tương tác tự nhiên với khán giả.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-[#1877f2]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-[#1877f2]" />
                    </div>
                    <span className="text-gray-600"><strong>Tác phong:</strong> Tinh thần chuyên nghiệp – cầu tiến – trách nhiệm, mong muốn gắn bó và phát triển sự nghiệp lâu dài trong môi trường chuyên nghiệp.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-[#1877f2]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-[#1877f2]" />
                    </div>
                    <span className="text-gray-600"><strong>Ưu tiên:</strong> Ứng viên có kinh nghiệm Livestream, KOC, bán hàng online hoặc từng hoạt động trong lĩnh vực nghệ thuật, giải trí.</span>
                  </li>
                </ul>
              </div>
            </Card>
          </ScrollReveal>
        </div>

        {/* Bottom Note */}
        <ScrollReveal animation="fade-in" delay={600}>
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              <span className="text-gray-900"><span className="text-[#1877f2] font-bold">AURORA LIVE</span> <span className="font-semibold">đảm bảo quyền lợi đồng nhất cho mọi thành viên</span>: Từ hợp đồng lao động minh bạch, chế độ bảo hiểm đầy đủ đến đào tạo chuyên sâu và hỗ trợ 24/7.</span>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
