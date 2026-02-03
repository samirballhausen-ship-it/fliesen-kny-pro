import React from 'react'
import Hero from '../components/Hero'
import BrandTicker from '../components/BrandTicker'
import IntroStats from '../components/IntroStats'
import ProductTeaser from '../components/ProductTeaser'
import Services from '../components/Services'
import NewsSection from '../components/NewsSection'
import Realizations from '../components/Realizations'
import ShowroomTeaser from '../components/ShowroomTeaser'
import CTASection from '../components/CTASection'

interface HomeProps {
  animationsReady?: boolean
}

export const Home: React.FC<HomeProps> = ({ animationsReady = true }) => {
  return (
    <div className="min-h-screen bg-neutral-cream font-sans selection:bg-brand-red selection:text-white">
      <Hero animationsReady={animationsReady} />
      <BrandTicker />
      <IntroStats />
      <ProductTeaser />
      <Services />
      <NewsSection />
      <Realizations />
      <ShowroomTeaser />
      <CTASection />
    </div>
  )
}

export default Home
