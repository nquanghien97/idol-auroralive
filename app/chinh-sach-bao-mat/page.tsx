import React from 'react'

function page() {
  return (
     <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-slate-900 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">Chính sách bảo mật</h1>
          <p className="text-slate-300">Thông tin khách hàng</p>
        </div>
      </div>

      {/* Main Content */}
      <main className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section 1 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Cam kết bảo vệ quyền riêng tư</h2>
            <p className="text-slate-700 leading-relaxed text-base">
              Chúng tôi tôn trọng và cam kết bảo vệ quyền riêng tư của khách hàng. Tất cả thông tin cá nhân mà khách
              hàng cung cấp trong quá trình sử dụng dịch vụ sẽ được thu thập và lưu trữ với mục đích duy nhất là phục vụ
              cho hoạt động giao dịch, chăm sóc khách hàng và nâng cao chất lượng dịch vụ.
            </p>
          </section>

          {/* Section 2 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Không chia sẻ thông tin cá nhân</h2>
            <p className="text-slate-700 leading-relaxed text-base">
              Chúng tôi cam kết không bán, chia sẻ hay trao đổi thông tin cá nhân của khách hàng cho bất kỳ bên thứ ba
              nào khi chưa có sự đồng ý, ngoại trừ trường hợp bắt buộc phải cung cấp theo yêu cầu của cơ quan có thẩm
              quyền theo quy định của pháp luật.
            </p>
          </section>

          {/* Section 3 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Bảo mật dữ liệu</h2>
            <p className="text-slate-700 leading-relaxed text-base mb-4">
              Mọi dữ liệu cá nhân đều được bảo mật bằng các biện pháp kỹ thuật và quy trình quản lý an toàn. Khách hàng
              có quyền yêu cầu chỉnh sửa hoặc cập nhật thông tin khi cần thiết để đảm bảo tính chính xác và đầy đủ.
            </p>
          </section>

          {/* Section 4 - Important Notice */}
          <section className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
            <p className="text-slate-800 leading-relaxed text-base font-medium">
              Việc sử dụng dịch vụ đồng nghĩa với việc khách hàng đã đồng ý với chính sách bảo mật thông tin này.
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <div className="bg-slate-100 py-8 px-4 mt-12">
        <div className="max-w-4xl mx-auto text-center text-slate-600 text-sm">
          <p>© 2025 Công ty của bạn. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </div>
  )
}

export default page