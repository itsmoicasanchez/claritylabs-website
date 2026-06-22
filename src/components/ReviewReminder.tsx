export default function ReviewReminder() {
    return (
          <section className="py-20 bg-[#003087]">
            <div className="max-w-4xl mx-auto px-6 text-center">
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                </div>
              </div>

              {/* Heading */}
              <span className="text-sm font-semibold text-white/60 uppercase tracking-widest">
                Loved Your Results?
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-white mt-3 mb-4">
                Share your experience on Amazon
              </h2>
              <p className="text-white/75 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                Your review helps other shoppers discover a serum that truly works — and it means the world to us. Takes less than 60 seconds.
              </p>

              {/* Steps */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {[
                              { step: '01', title: 'Open your order', desc: 'Go to your Amazon orders and find your ClarityLabs purchase.' },
                              { step: '02', title: 'Click "Write a review"', desc: 'Select your star rating and share what you noticed about your skin.' },
                              { step: '03', title: 'Post & inspire others', desc: 'Your honest words help thousands of people find the right skincare.' },
                            ].map((item) => (
                              <div key={item.step} className="bg-white/10 rounded-2xl p-6 text-left">
                                <span className="text-white/40 text-sm font-mono font-bold">{item.step}</span>
                                <h3 className="text-white font-semibold text-base mt-2 mb-1">{item.title}</h3>
                                <p className="text-white/65 text-sm leading-relaxed">{item.desc}</p>
                              </div>
                            ))}
              </div>

              {/* CTA Button */}
              <a
                href="https://www.amazon.com/review/create-review/?asin=B0H5HB98WB"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-[#003087] font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition-colors text-base"
              >
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Leave a Review on Amazon
              </a>

              <p className="text-white/40 text-xs mt-5">
                Only verified purchasers can leave reviews — Amazon will guide you through the process.
              </p>
            </div>
          </section>
        )
  }
