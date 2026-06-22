const reviews = [
  {
    name: 'Sarah M.',
    tag: 'Verified Purchase',
    rating: 5,
    text: "I've tried so many serums and this is by far the best. My skin feels like it's drinking water all day. The texture is so light and it absorbs immediately — no sticky residue at all.",
  },
  {
    name: 'Jessica L.',
    tag: 'Verified Purchase',
    rating: 5,
    text: 'After two weeks my fine lines around my eyes look noticeably softer. My dermatologist even asked what I was using differently. Completely obsessed with this.',
  },
  {
    name: 'Amanda R.',
    tag: 'Verified Purchase',
    rating: 5,
    text: "Clean ingredients, no fragrance, and it actually works. I have sensitive rosacea-prone skin and this doesn't irritate me at all. I reordered before my first bottle was even empty.",
  },
]

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-navy uppercase tracking-widest">Reviews</span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-gray-900 mt-3">
            What our customers say
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="flex text-yellow-400 text-xl">{'★★★★★'}</div>
            <span className="text-gray-600 font-medium">4.8 out of 5 — 2,400+ reviews on Amazon</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="bg-[#fafaf8] rounded-2xl p-7 flex flex-col gap-4 border border-gray-100">
              <div className="flex text-yellow-400 text-lg">
                {'★'.repeat(r.rating)}
              </div>
              <p className="text-gray-700 leading-relaxed text-sm flex-1">&ldquo;{r.text}&rdquo;</p>
              <div>
                <p className="font-semibold text-gray-900 text-sm">{r.name}</p>
                <p className="text-gray-400 text-xs mt-0.5">{r.tag}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
