'use client'
import { useEffect, useRef } from 'react'

const steps = [
  { num: '001', title: 'CLEANSE', desc: 'START WITH A CLEAN, SLIGHTLY DAMP FACE. PAT DRY WITH CLEAN TOWEL.' },
  { num: '002', title: 'APPLY', desc: '2-3 DROPS ONTO FINGERTIPS. PRESS GENTLY INTO SKIN. AVOID EYE AREA.' },
  { num: '003', title: 'SEAL', desc: 'FOLLOW WITH YOUR MOISTURIZER TO LOCK IN THE HYALURONIC ACID.' },
]

export default function HowToUse() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const load = async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)
      if (ref.current) {
        gsap.from(ref.current.querySelectorAll('.step-item'), {
          opacity: 0,
          x: -30,
          stagger: 0.15,
          duration: 0.7,
          scrollTrigger: { trigger: ref.current, start: 'top 80%' },
        })
      }
    }
    load()
  }, [])

  return (
    <section className="max-w-5xl mx-auto px-4 py-12 bg-[#f5f5f0]" ref={ref}>
      <div className="font-mono text-center mb-8">
        <div className="dashed-divider" />
        <h2 className="text-2xl font-bold tracking-widest my-4">HOW TO USE</h2>
        <p className="text-xs tracking-widest">* APPLICATION INSTRUCTIONS *</p>
        <div className="dashed-divider" />
      </div>
      <div className="max-w-2xl mx-auto space-y-0">
        {steps.map((step, i) => (
          <div key={step.num} className="step-item">
            <div className="receipt-card flex gap-6 items-start">
              <div className="text-4xl font-bold tracking-widest text-gray-300 shrink-0">
                {step.num}
              </div>
              <div className="font-mono">
                <h3 className="font-bold text-sm tracking-widest mb-2">STEP {step.num}: {step.title}</h3>
                <p className="text-xs tracking-wide leading-relaxed">{step.desc}</p>
              </div>
            </div>
            {i < steps.length - 1 && <div className="dashed-divider mx-4" />}
          </div>
        ))}
      </div>
    </section>
  )
}
