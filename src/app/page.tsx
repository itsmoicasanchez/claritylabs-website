import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import BenefitsSection from '@/components/BenefitsSection'
import HowToUse from '@/components/HowToUse'
import Gallery from '@/components/Gallery'
import ReceiptCart from '@/components/ReceiptCart'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fafaf7]">
      <Navigation />
      <HeroSection />
      <BenefitsSection />
      <HowToUse />
      <Gallery />
      <ReceiptCart />
      <Footer />
    </main>
  )
}
