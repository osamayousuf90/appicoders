import React from 'react'
import { ASSET_PATHS } from '../constants'

const items = [
  {title: 'Fast', desc: 'Lightning fast performance.', img: ASSET_PATHS.feature1},
  {title: 'Secure', desc: 'Top level security.', img: ASSET_PATHS.feature2},
  {title: 'Responsive', desc: 'Mobile & Desktop ready.', img: ASSET_PATHS.feature3},
]

export default function Features(){
  return (
    <section id="features" className="py-16 bg-slate-50">
      <div className="mx-auto container-max px-6">
        <h2 className="text-3xl font-bold mb-8">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <div key={i} className="p-6 bg-white rounded-xl shadow-sm">
              <div className="w-full h-40 flex items-center justify-center mb-4">
                <img src={it.img} alt={it.title} className="max-h-full max-w-full object-contain" />
              </div>
              <h3 className="font-semibold mb-2">{it.title}</h3>
              <p className="text-sm text-slate-600">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
