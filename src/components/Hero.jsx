import React from 'react'
import { ASSET_PATHS } from '../constants'

export default function Hero() {
  return (
    <section className="py-[160px] heroSectionBg">
      <div className="mx-auto container-max px-6 flex flex-col-reverse lg:flex-row items-center gap-12">
        <div className="w-full lg:w-1/2">
          <div className="w-full h-72 md:h-96 bg-gray-50 rounded-2xl flex items-center justify-center">
            <img src={ASSET_PATHS.hero} alt="Hero" className="max-w-full max-h-full object-contain" />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            Your product headline — pixel-perfect match
          </h1>
          <p className="mt-6 text-lg text-slate-600">
            Short supporting paragraph that communicates the value proposition clearly and concisely.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="px-6 py-3 rounded-full bg-primary text-white font-medium">Get Started</button>
            <button className="px-6 py-3 rounded-full border">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  )
}
