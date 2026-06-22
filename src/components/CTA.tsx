export default function CTA() {
  return (
    <section className="bg-[#003087] py-24 px-6">
      <div className="max-w-3xl mx-auto text-center flex flex-col gap-6 items-center">
        <span className="text-sm font-semibold text-blue-200 uppercase tracking-widest">
          Limited Time Offer
        </span>
        <h2 className="font-display text-4xl md:text-5xl font-semibold text-white leading-tight">
          Ready for your best skin?
        </h2>
        <p className="text-blue-100 text-lg max-w-xl leading-relaxed">
          Join 50,000+ happy customers who&apos;ve transformed their skin with ClarityLabs. Available exclusively on Amazon with free Prime shipping.
        </p>
        <a
          href="https://www.amazon.com/dp/B0H5HB98WB"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-white text-[#003087] font-bold px-9 py-4 rounded-full text-lg hover:bg-blue-50 transition-colors shadow-xl"
        >
          Shop on Amazon →
        </a>
        <p className="text-blue-300 text-sm">Free shipping with Prime · 30-day return guarantee</p>
      </div>
    </section>
  )
}
