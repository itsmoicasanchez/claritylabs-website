import Image from 'next/image'

export default function Hero() {
  return (
    <section className="pt-24 pb-16 bg-cream min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Product Image */}
        <div className="relative flex justify-center">
          <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden bg-warm-white shadow-lg">
            <Image
              src="/images/hero-product.jpg"
              alt="ClarityLabs Hyaluronic Acid Serum"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Right: Content */}
        <div className="flex flex-col gap-6">
          <span className="text-sm font-semibold text-navy uppercase tracking-widest">
            Hyaluronic Acid Serum
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-semibold text-gray-900 leading-tight">
            Science that speaks for itself.
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
            Our triple-weight hyaluronic acid serum delivers 72-hour deep hydration, visibly plumping fine lines and restoring your skin&apos;s natural moisture barrier. Dermatologist-tested and clinically proven.
          </p>

          {/* Star Rating */}
          <div className="flex items-center gap-3">
            <div className="flex text-yellow-400 text-xl">
              {'★★★★★'.split('').map((star, i) => (
                <span key={i}>{star}</span>
              ))}
            </div>
            <span className="font-semibold text-gray-900">4.8</span>
            <span className="text-gray-500 text-sm">/ 5 — Based on 2,400+ reviews</span>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-3">
            <span className="text-4xl font-bold text-gray-900">$29.99</span>
            <span className="text-gray-400 text-sm line-through">$42.99</span>
            <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full">Save 30%</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://www.amazon.com/dp/B0H5HB98WB"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-navy text-white font-semibold px-8 py-4 rounded-full text-lg hover:bg-navy-dark transition-colors shadow-lg shadow-navy/20"
            >
              Shop on Amazon →
            </a>
            <a href="#how-to-use" className="inline-flex items-center justify-center text-navy font-semibold px-6 py-4 hover:underline">
              See how it works ↓
            </a>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-3 pt-2">
            {['Dermatologist Tested', 'Fragrance-Free', 'Vegan & Cruelty-Free'].map((badge) => (
              <span key={badge} className="text-xs font-medium text-gray-600 border border-gray-200 rounded-full px-3 py-1.5 bg-white">
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
