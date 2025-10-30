import { Header } from '@/components/header'
import React from 'react'
import Form from './Form'

function Register() {
  return (
    <main className="max-w-7xl m-auto px-4">
      <Header />
      <div className="mt-20">
        <h1 className="text-4xl text-center pt-8 pb-4">Chào mừng bạn đến với <span className="text-[#1877f2]">AURORA LIVE</span></h1>
        <p className="text-center">Hãy dành ít phút hoàn thiện thông tin bên dưới để chúng tôi có thể hiểu rõ hơn về bạn và định hướng vị trí phù hợp nhất.</p>
        <p className="text-center pb-8">Tại <span className="text-[#1877f2]">AURORA LIVE</span>, chúng tôi không chỉ tuyển dụng — chúng tôi tìm kiếm những người dám tỏa sáng, sẵn sàng cùng nhau xây dựng tương lai trong thế giới livestream chuyên nghiệp và sáng tạo.</p>
      </div>
      <Form />
    </main>
  )
}

export default Register