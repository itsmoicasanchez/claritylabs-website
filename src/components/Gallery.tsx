import Image from 'next/image'

const images = [
  { src: '/images/gallery-1.jpg', label: 'Morning Routine' },
  { src: '/images/gallery-2.jpg', label: 'Serum Texture' },
  { src: '/images/gallery-3.jpg', label: 'Skin Results' },
  { src: '/images/gallery-4.jpg', label: 'Clean Formula' },
]

export default function Gallery() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-navy uppercase tracking-widest">Gallery</span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-gray-900 mt-3">
            Real Results
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 md:gap-6">
          {images.map((img) => (
            <div key={img.src} className="relative aspect-square rounded-2xl overflow-hidden group">
              <Image
                src={img.src}
                alt={img.label}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                <span className="text-white font-semibold text-sm">{img.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
