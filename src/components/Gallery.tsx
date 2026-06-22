'use client'

const photos = [
  { label: 'MORNING ROUTINE', bg: '#c8e8f0' },
  { label: 'SERUM TEXTURE', bg: '#e8f4f8' },
  { label: 'SKIN RESULTS', bg: '#d4edf5' },
  { label: 'CLEAN FORMULA', bg: '#b8dce8' },
]

export default function Gallery() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <div className="font-mono text-center mb-8">
        <div className="dashed-divider" />
        <h2 className="text-2xl font-bold tracking-widest my-4">PHOTO GALLERY</h2>
        <p className="text-xs tracking-widest">* ITEM REFERENCE IMAGES *</p>
        <div className="dashed-divider" />
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {photos.map((p) => (
          <div
            key={p.label}
            className="receipt-border aspect-square flex flex-col items-center justify-end pb-3"
            style={{ background: p.bg }}
          >
            <div className="bg-[#fafaf7] border-t-2 border-[#1a1a1a] w-full text-center py-2 font-mono text-xs tracking-widest">
              {p.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
