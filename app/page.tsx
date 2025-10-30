import { Header } from "@/components/header"
import { HeroSlider } from "@/components/hero-slider"
import { BusinessSegments } from "@/components/business-segments"
import { MissionSection } from "@/components/mission-section"
import { BenefitsGrid } from "@/components/benefits-grid"
import { ProcessSection } from "@/components/process-section"
import { SuccessStories } from "@/components/success-stories"
import { CTASection } from "@/components/ui/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <div className="luxury-orb luxury-orb-1" />
      <div className="luxury-orb luxury-orb-2" />
      <div className="luxury-orb luxury-orb-3" />

      <main className="relative min-h-screen">
        <Header />
        <HeroSlider />
        <BusinessSegments />
        <MissionSection />
        <BenefitsGrid />
        <ProcessSection />
        <SuccessStories />
        <CTASection />
        <Footer />
      </main>
    </>
  )
}
