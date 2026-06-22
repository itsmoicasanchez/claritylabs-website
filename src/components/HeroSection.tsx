'use client'
import dynamic from 'next/dynamic'
import { useEffect, useRef } from 'react'
import { useCartStore } from '@/store/cartStore'

const BottleCanvas = dynamic(() => import('./BottleCanvas'), { ssr: false })

export default function HeroSection() {
  const addItem = useCartStore((s) => s.addItem)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const load = async () => {
      const { gsap } = await import('gsap')
      if (textRef.current) {
        gsap.from(textRef.current.children, {
          opacity: 0,
          y: 30,
          stagger: 0.15,
          duration: 0.8,
          ease: 'power2.out',
        })
      }
    }
    load()
  }, [])

  return (
    <section className="max-w-5xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div ref={textRef} className="font-mono">
        <p className="text-xs tracking-widest mb-2">--------------------------------</p>
        <p className="text-xs tracking-widest mb-4">RECEIPT #CL-2024-0001</p>
        <h1 className="text-4xl font-bold uppercase tracking-tight leading-tight mb-4">
          HYALURONIC<br />ACID SERUM
        </h1>
        <p className="text-xs tracking-widest mb-2">--------------------------------</p>
        <p className="text-sm tracking-wide mb-2">QTY: 1 x 30ML</p>
        <p className="text-sm tracking-wide mb-1">SKU: CL-HA-001</p>
        <p className="text-sm tracking-wide mb-6">UNIT PRICE: $24.99</p>
        <p className="text-xs tracking-widest mb-2">--------------------------------</p>
        <p className="text-sm tracking-wide mb-6 max-w-sm">
          CLINICAL-STRENGTH 2% HYALURONIC ACID. DEEP HYDRATION FOR ALL SKIN TYPES. FRAGRANCE-FREE. DERMATOLOGIST TESTED.
        </p>
        <p className="text-2xl font-bold mb-6">TOTAL: $24.99</p>
        <button
          className="btn-receipt text-base"
          onClick={() => addItem({ id: 'CL-HA-001', name: 'HYALURONIC ACID SERUM', price: 24.99 })}
        >
          ADD TO CART — $24.99
        </button>
      </div>
      <div className="h-[420px] receipt-border flex items-center justify-center bg-[#f0f8fb]">
        <BottleCanvas />
      </div>
    </section>
  )
}
