import React from 'react'
import '../styles/HomePage.css'
import WebsiteLayout from '../layouts/WebsiteLayout'
import CitiesCarousel from '../components/CitiesCarousel'
import CallToAction from '../components/CallToAction'

export default function WelcomePage() {
 
  return (  
    <WebsiteLayout>
    <div className='App-container'>
        <h1>MyTinerary</h1>
        <p>Find your perfect trip, designed by insiders who know and love their cities!</p>
        <CallToAction/>
    </div>
    <CitiesCarousel />
    </WebsiteLayout>   
  )
}