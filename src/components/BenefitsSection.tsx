'use client'
import { useEffect, useRef } from 'react'

const benefits = [
  { icon: '◈', title: 'DEEP HYDRATION', desc: 'PENETRATES 3 LAYERS DEEP. LOCKS IN MOISTURE FOR 72 HOURS.' },
  { icon: '◇', title: 'PLUMPS & SMOOTHS', desc: 'VISIBLY REDUCES FINE LINES. RESTORES SKIN VOLUME.' },
  { icon: '○', title: 'CLEAN & GENTLE', desc: 'FRAGRANCE-FREE. VEGAN. CRUELTY-FREE. NO PARABENS.' },
  { icon: '◉', title: 'RADIANT GLOW', desc: 'BRIGHTENS COMPLEXION. IMPROVES SKIN TEXTURE WITHIN 14 DAYS.' },
]

export default function BenefitsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const load = async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)
      if (sectionRef.current) {
        gsap.from(sectionRef.current.querySelectorAll('.benefit-card'), {
          opacity: 0,
          y: 40,
          stagger: 0.1,
          duration: 0.7,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        })
      }
    }
    load()
  }, [])

  return (
    <section className="max-w-5xl mx-auto px-4 py-12" ref={sectionRef}>
      <div className="font-mono text-center mb-8">
        <div className="dashed-divider" />
        <h2 className="text-2xl font-bold tracking-widest uppercase my-4">PRODUCT BENEFITS</h2>
        <p className="text-xs tracking-widest">* * * * * * * * * * * * * * * * * * * *</p>
        <div className="dashed-divider" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {benefits.map((b) => (
          <div key={b.title} className="benefit-card receipt-card font-mono text-center">
            <div className="text-3xl mb-3">{b.icon}</div>
            <h3 className="font-bold text-sm tracking-widest mb-3">{b.title}</h3>
            <hr className="border-dashed border-[#1a1a1a] mb-3" />
            <p className="text-xs tracking-wide leading-relaxed">{b.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
