import React from 'react'
import WebsiteLayout from '../layouts/WebsiteLayout'
import CitiesCarousel from '../components/CitiesCarousel'
import Hero from '../components/Hero'

export default function WelcomePage() {
 
  return (  
    <WebsiteLayout>
      <Hero/>
    <CitiesCarousel />
    </WebsiteLayout>   
  )
}