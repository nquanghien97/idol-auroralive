"use client"

import { useEffect, useRef, type ReactNode } from "react"

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  animation?: "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale-up" | "fade-up-scale"
}

export function ScrollReveal({ children, className = "", delay = 0, animation = "fade-up" }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              element.classList.add("scroll-reveal-visible")
            }, delay)
            observer.unobserve(element)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [delay])

  return (
    <div ref={ref} className={`scroll-reveal scroll-reveal-${animation} ${className}`}>
      {children}
    </div>
  )
}
