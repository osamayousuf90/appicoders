import React from 'react'
import { ASSET_PATHS } from '../constants'
import { mobileMockup } from '../assets'

export default function Hero() {
  return (
    <section className="py-[160px] heroSectionBg">
      <div className="mx-auto container-max px-6 flex flex-col-reverse lg:flex-row items-center gap-6 ">
        <div className="w-full lg:w-[32%]">
          <div className="w-full h-[300px] md:h-[550px] flex items-center justify-center">
            <img src={mobileMockup} alt="Hero" className="max-w-full max-h-full object-contain" />
          </div>
        </div>
        <div className="w-full  lg:w-1/2">
          <h1 className="text-4xl sm:text-5xl font-semibold text-white leading-tight">
            Leading the Way in App Development Innovation
          </h1>
          <p className="mt-6 text-lg text-white">
            We build Android & iOS Mobile Apps that cater all your business needs and take it on the next level.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="
            cursor-pointer
            transition
            duration-300
            ease-in-out
            hover:scale-105
            inline-block
    py-3 px-8                           
    rounded-sm                          
    text-white                          
    font-semibold                      
    shadow-lg                           
    bg-gradient-to-b from-red-700 to-red-900 
    [text-shadow:0px_0px_5px_rgba(255,255,255,0.7),_0px_1px_1px_rgba(0,0,0,0.5)]
    [box-shadow:inset_0_1px_0_rgba(255,255,255,0.3),_0_2px_4px_rgba(0,0,0,0.5)]
">
              GET A FREE QUOTE
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
