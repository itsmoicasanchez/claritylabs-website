export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="font-display text-white text-2xl font-semibold">ClarityLabs</p>
          <p className="text-sm mt-1">Science-backed skincare. Visible results.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="mailto:support@claritylabs.com" className="hover:text-white transition-colors">Contact Us</a>
        </div>

        <p className="text-xs text-gray-600">© 2024 ClarityLabs. All rights reserved.</p>
      </div>
    </footer>
  )
}
