'use client'
import { useCartStore } from '@/store/cartStore'

function Barcode() {
  const bars = Array.from({ length: 60 }, (_, i) => {
    const width = [1, 2, 3][i % 3]
    const height = i % 5 === 0 ? 60 : 45
    return { width, height, x: i * 3.2 }
  })
  return (
    <svg width="200" height="70" viewBox="0 0 200 70" xmlns="http://www.w3.org/2000/svg">
      {bars.map((b, i) => (
        <rect key={i} x={b.x} y={5} width={b.width} height={b.height} fill="#1a1a1a" />
      ))}
      <text x="100" y="68" textAnchor="middle" fontSize="9" fontFamily="Courier New" fill="#1a1a1a">
        5 012345 678906
      </text>
    </svg>
  )
}

export default function ReceiptCart() {
  const { items, total, addItem, removeItem } = useCartStore()

  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <div className="max-w-md mx-auto">
        <div className="receipt-border bg-[#fafaf7] p-6 font-mono">
          {/* Header */}
          <div className="text-center mb-4">
            <p className="text-xs tracking-widest">**** CLARITYLABS ****</p>
            <p className="text-xs tracking-widest">123 SKINCARE BLVD, SUITE 200</p>
            <p className="text-xs tracking-widest">www.claritylabs.com</p>
          </div>
          <div className="dashed-divider" />
          <p className="text-xs tracking-widest mb-1">DATE: {new Date().toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' })}</p>
          <p className="text-xs tracking-widest mb-1">ORDER: #CL-2024-0001</p>
          <p className="text-xs tracking-widest mb-3">CASHIER: DERMATOLOGY AI</p>
          <div className="dashed-divider" />

          {/* Items */}
          <div className="mb-3">
            <div className="flex justify-between text-xs mb-1">
              <span className="tracking-wide">HYALURONIC ACID SERUM</span>
              <span>$24.99</span>
            </div>
            <div className="text-xs text-gray-500 mb-1 ml-2">30ML / SKU: CL-HA-001</div>
            <div className="text-xs text-gray-500 ml-2">QTY: {items.find(i => i.id === 'CL-HA-001')?.qty ?? 0}</div>
          </div>
          <div className="dashed-divider" />

          {/* Totals */}
          <div className="flex justify-between text-xs mb-1">
            <span>SUBTOTAL:</span>
            <span>${(24.99).toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-xs mb-1">
            <span>TAX (8%):</span>
            <span>$2.00</span>
          </div>
          <div className="flex justify-between text-xs mb-1">
            <span>SHIPPING:</span>
            <span>FREE</span>
          </div>
          <div className="dashed-divider" />
          <div className="flex justify-between font-bold text-base mb-4">
            <span>TOTAL:</span>
            <span>$26.99</span>
          </div>

          {/* Barcode */}
          <div className="flex justify-center mb-4">
            <Barcode />
          </div>
          <div className="dashed-divider" />

          {/* Cart actions */}
          <div className="flex flex-col gap-2 mb-4">
            <button
              className="btn-receipt w-full text-sm"
              onClick={() => addItem({ id: 'CL-HA-001', name: 'HYALURONIC ACID SERUM', price: 24.99 })}
            >
              + ADD TO CART
            </button>
            <a
              href="https://www.amazon.com/dp/B0H5HB98WB"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-receipt w-full text-sm text-center block"
            >
              BUY ON AMAZON →
            </a>
          </div>
          <div className="dashed-divider" />
          <p className="text-center text-xs tracking-widest">**** THANK YOU FOR YOUR PURCHASE ****</p>
          <p className="text-center text-xs tracking-widest mt-1">SAVE THIS RECEIPT</p>
        </div>
      </div>
    </section>
  )
}
