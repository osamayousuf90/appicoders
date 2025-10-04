import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'
import AppicodersSection from './components/AppicodersSection'
import OurServicesSection from './components/OurServiceSection'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <AppicodersSection />
        <OurServicesSection />
        <Features />
      </main>
      <Footer />
    </div>
  )
}
