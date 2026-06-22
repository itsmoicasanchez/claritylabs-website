'use client'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? 'shadow-md' : 'shadow-sm'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-display text-2xl font-semibold text-navy tracking-tight">
          ClarityLabs
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a href="#benefits" className="text-sm font-medium text-gray-600 hover:text-navy transition-colors">Benefits</a>
          <a href="#ingredients" className="text-sm font-medium text-gray-600 hover:text-navy transition-colors">Ingredients</a>
          <a href="#reviews" className="text-sm font-medium text-gray-600 hover:text-navy transition-colors">Reviews</a>
        </div>
        <a
          href="https://www.amazon.com/dp/B0H5HB98WB"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-navy text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-navy-dark transition-colors"
        >
          Shop on Amazon
        </a>
      </div>
    </nav>
  )
}
