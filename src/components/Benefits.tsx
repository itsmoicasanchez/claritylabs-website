import Image from 'next/image'

const benefits = [
  {
    title: 'Deep Hydration',
    desc: 'Triple-weight hyaluronic acid draws moisture into every layer of skin.',
  },
  {
    title: 'Plumps Fine Lines',
    desc: 'Visibly smooths and plumps within 2 weeks of consistent use.',
  },
  {
    title: 'Barrier Support',
    desc: "Strengthens and repairs your skin's natural moisture barrier.",
  },
  {
    title: 'Brightens Complexion',
    desc: 'Niacinamide gently reduces dark spots and evens skin tone.',
  },
]

export default function Benefits() {
  return (
    <section id="benefits" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Left: Image */}
        <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-xl">
          <Image
            src="/images/benefits-dropper.jpg"
            alt="ClarityLabs Hyaluronic Acid Dropper"
            fill
            className="object-cover"
          />
        </div>

        {/* Right: Benefits */}
        <div className="flex flex-col gap-8">
          <div>
            <span className="text-sm font-semibold text-navy uppercase tracking-widest">The Science</span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-gray-900 mt-3 leading-tight">
              Why your skin will love it
            </h2>
          </div>

          <div className="flex flex-col gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-navy/10 flex items-center justify-center mt-0.5">
                  <svg className="w-3.5 h-3.5 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-base">{b.title}</h3>
                  <p className="text-gray-500 text-sm mt-0.5 leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <a
            href="https://www.amazon.com/dp/B0H5HB98WB"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-navy text-white font-semibold px-7 py-3.5 rounded-full hover:bg-navy-dark transition-colors w-fit"
          >
            Shop on Amazon →
          </a>
        </div>
      </div>
    </section>
  )
}
