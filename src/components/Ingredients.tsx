'use client'
import { useState } from 'react'

const keyIngredients = [
  {
    name: 'Hyaluronic Acid',
    weight: 'Triple-Weight',
    desc: 'Three molecular weights penetrate at different skin depths for multi-layer hydration.',
    icon: '💧',
  },
  {
    name: 'Niacinamide',
    weight: 'Vitamin B3',
    desc: 'Brightens uneven skin tone, minimizes pore appearance, and reduces redness.',
    icon: '✨',
  },
  {
    name: 'Panthenol',
    weight: 'Vitamin B5',
    desc: 'Soothes irritated skin, accelerates barrier repair, and adds long-lasting moisture.',
    icon: '🌿',
  },
  {
    name: 'Glycerin',
    weight: 'Humectant',
    desc: 'Draws water to the skin surface and locks it in for sustained softness.',
    icon: '🫧',
  },
]

const fullIngredients = 'Water (Aqua), Glycerin, Niacinamide, Sodium Hyaluronate, Hyaluronic Acid, Panthenol, Hydroxyethylcellulose, Sodium PCA, Allantoin, Aloe Barbadensis Leaf Juice, Centella Asiatica Extract, Green Tea (Camellia Sinensis) Leaf Extract, Vitamin E (Tocopherol), Ferulic Acid, Zinc PCA, Betaine, Pentylene Glycol, 1,2-Hexanediol, Sodium Citrate, Citric Acid, Disodium EDTA, Phenoxyethanol, Ethylhexylglycerin.'

export default function Ingredients() {
  const [open, setOpen] = useState(false)

  return (
    <section id="ingredients" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-navy uppercase tracking-widest">Key Ingredients</span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-gray-900 mt-3">
            Formulated with purpose
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-lg">
            Every ingredient is chosen for a reason. No fillers, no harsh chemicals — just effective science.
          </p>
        </div>

        {/* 4 Cards */}
        <div className="grid sm:grid-cols-2 gap-6 mb-10">
          {keyIngredients.map((ing) => (
            <div key={ing.name} className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="text-3xl mb-4">{ing.icon}</div>
              <div className="flex items-center gap-3 mb-2">
                <h3 className="font-semibold text-gray-900 text-lg">{ing.name}</h3>
                <span className="text-xs font-medium text-navy bg-blue-50 rounded-full px-2.5 py-0.5 border border-blue-100">{ing.weight}</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">{ing.desc}</p>
            </div>
          ))}
        </div>

        {/* Full Ingredient List Accordion */}
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
          <button
            onClick={() => setOpen(!open)}
            className="w-full flex items-center justify-between px-7 py-5 text-left hover:bg-gray-50 transition-colors"
          >
            <span className="font-semibold text-gray-900">Full Ingredient List (INCI)</span>
            <span className="text-2xl text-gray-400 transition-transform" style={{ transform: open ? 'rotate(45deg)' : 'rotate(0deg)' }}>+</span>
          </button>
          {open && (
            <div className="px-7 pb-6 border-t border-gray-100">
              <p className="text-gray-500 text-sm leading-relaxed mt-4">{fullIngredients}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
