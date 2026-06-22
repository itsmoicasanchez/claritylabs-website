const steps = [
  {
    number: '01',
    title: 'Cleanse',
    desc: 'Start with freshly cleansed skin. Pat dry, leaving skin slightly damp to maximize absorption.',
  },
  {
    number: '02',
    title: 'Apply',
    desc: 'Dispense 3–4 drops onto fingertips. Gently press and pat serum into face and neck.',
  },
  {
    number: '03',
    title: 'Layer',
    desc: 'Follow with your moisturizer to seal in the hydration. Use morning and evening for best results.',
  },
]

export default function HowToUse() {
  return (
    <section id="how-to-use" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-navy uppercase tracking-widest">Application</span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-gray-900 mt-3">
            How to use
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col gap-4 p-8 rounded-2xl border border-gray-100 hover:border-navy/20 transition-colors bg-warm-white">
              <span className="font-display text-6xl font-bold text-navy/15 leading-none">{step.number}</span>
              <h3 className="font-display text-2xl font-semibold text-gray-900">{step.title}</h3>
              <p className="text-gray-500 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
