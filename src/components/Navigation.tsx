'use client'
import { useCartStore } from '@/store/cartStore'

export default function Navigation() {
  const count = useCartStore((s) => s.count())

  return (
    <nav className="w-full bg-[#fafaf7] border-b-2 border-[#1a1a1a] sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <div>
          <div className="text-xl font-bold tracking-widest uppercase font-mono">CLARITYLABS</div>
          <div className="text-xs tracking-widest font-mono">*** SCIENCE-BACKED SKINCARE ***</div>
        </div>
        <div className="flex items-center gap-6">
          <span className="text-xs font-mono hidden sm:block tracking-widest">EST. 2024</span>
          <button className="relative flex items-center gap-2 border-2 border-[#1a1a1a] px-3 py-1 font-mono text-sm">
            <span>CART</span>
            {count > 0 && (
              <span className="bg-[#1a1a1a] text-[#fafaf7] text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {count}
              </span>
            )}
          </button>
        </div>
      </div>
      <div className="border-t-2 border-dashed border-[#1a1a1a] py-1 text-center text-xs font-mono tracking-widest">
        ------------------------------------------------
      </div>
    </nav>
  )
}
