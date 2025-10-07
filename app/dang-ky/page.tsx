import { Header } from '@/components/header'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { ArrowRight } from 'lucide-react'
import React from 'react'

function Register() {
  return (
    <main className="max-w-7xl m-auto px-4">
      <Header />
      <div className="mt-20">
        <h1 className="text-4xl text-center pt-8 pb-4">Chào mừng bạn đến với <span className="text-[#1877f2]">AURORA LIVE</span></h1>
        <p className="text-center">Hãy dành ít phút hoàn thiện thông tin bên dưới để chúng tôi có thể hiểu rõ hơn về bạn và định hướng vị trí phù hợp nhất.</p>
        <p className="text-center mb-8">Tại <span className="text-[#1877f2]">AURORA LIVE</span>, chúng tôi không chỉ tuyển dụng — chúng tôi tìm kiếm những người dám tỏa sáng, sẵn sàng cùng nhau xây dựng tương lai trong thế giới livestream chuyên nghiệp và sáng tạo.</p>
        <Card className="p-8 border-border bg-card">
          <h3 className="text-4xl font-bold mb-6 text-center">Đăng ký hồ sơ</h3>
          <form className="space-y-4">
            <div>
              <Input type="text" placeholder="Họ và tên" className="h-12" />
            </div>
            <div>
              <Input type="text" placeholder="Giới tính" className="h-12" />
            </div>
            <div>
              <Input type="text" placeholder="Năm sinh" className="h-12" />
            </div>
            <div>
              <Input type="text" placeholder="Thường trú" className="h-12" />
            </div>
            <div>
              <Input type="text" placeholder="Nghề nghiệp hiện tại" className="h-12" />
            </div>
            <div>
              <Input type="text" placeholder="Điểm mạnh" className="h-12" />
            </div>
            <div>
              <Input type="text" placeholder="Điểm yếu" className="h-12" />
            </div>
            <div>
              <Input type="text" placeholder="Mục tiêu thu nhập" className="h-12" />
            </div>
            <div>
              <Input type="text" placeholder="Năng khiếu" className="h-12" />
            </div>
            <div>
              <Input type="text" placeholder="Link Tiktok" className="h-12" />
            </div>
            <div>
              <Input type="text" placeholder="Link Facebook/Instagram" className="h-12" />
            </div>
            <div>
              <Input type="tel" placeholder="Số điện thoại" className="h-12" />
            </div>
            <div>
              <Input type="email" placeholder="Email" className="h-12" />
            </div>
            <Button type="submit" size="lg" className="w-full h-12 bg-primary hover:bg-primary/90 cursor-pointer">
              Gửi đăng ký
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </form>
        </Card>
      </div>
    </main>
  )
}

export default Register