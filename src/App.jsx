import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'
import AppicodersSection from './components/AppicodersSection'
import OurServicesSection from './components/OurServiceSection'
import CaviarSection from './components/CaviarSecion'
import WhyChooseUs from './components/WhyChooseUs'
import WhatOurClientSay from './components/WhatOurClientSay'
import Industry from './components/Industries'
import ProductSection from './components/ProductSection'
import ContactSection from './components/ContactSection'


export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <AppicodersSection />
        <OurServicesSection />
        <CaviarSection />
        <WhyChooseUs />
        <WhatOurClientSay />
        <Industry />
        <ProductSection />
        <ContactSection />
        
      </main>
      <Footer />
    </div>
  )
}
