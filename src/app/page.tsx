import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import Benefits from '@/components/Benefits'
import Ingredients from '@/components/Ingredients'
import HowToUse from '@/components/HowToUse'
import Gallery from '@/components/Gallery'
import Reviews from '@/components/Reviews'
import ReviewReminder from '@/components/ReviewReminder'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustBar />
      <Benefits />
      <Ingredients />
      <HowToUse />
      <Gallery />
      <Reviews />
              <ReviewReminder />
      <CTA />
      <Footer />
    </main>
  )
}
