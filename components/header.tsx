"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/">
            <div className="text-xl lg:text-2xl font-bold tracking-tight">
              <Image src="/logo.png" alt="logo" width={120} height={120} />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/#home" className="text-sm font-medium hover:text-primary transition-colors">
              Trang chủ
            </Link>
            <Link href="/#benefits" className="text-sm font-medium hover:text-primary transition-colors">
              Quyền lợi
            </Link>
            <Link href="/#process" className="text-sm font-medium hover:text-primary transition-colors">
              Quy trình
            </Link>
            <Link href="/#stories" className="text-sm font-medium hover:text-primary transition-colors">
              Câu chuyện
            </Link>
            <Link href="/chinh-sach-bao-mat" className="text-sm font-medium hover:text-primary transition-colors">
              Chính sách bảo mật
            </Link>
            <Link href="/#dang-ky" className="bg-primary hover:bg-primary/90 text-white px-4 py-1 rounded-xl duration-300">
              Ứng tuyển ngay
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-4">
            <Link
              href="#home"
              className="block text-sm font-medium hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Trang chủ
            </Link>
            <Link
              href="#benefits"
              className="block text-sm font-medium hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Quyền lợi
            </Link>
            <Link
              href="#process"
              className="block text-sm font-medium hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Quy trình
            </Link>
            <Link
              href="#stories"
              className="block text-sm font-medium hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Câu chuyện
            </Link>
            <Link
              href="/chinh-sach-bao-mat"
              className="block text-sm font-medium hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Chính sách bảo mật
            </Link>
            <Link href="/#dang-ky" className="block bg-primary hover:bg-primary/90 text-white px-4 py-2 text-center rounded-sm duration-300">
              Ứng tuyển ngay
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
