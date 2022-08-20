import React from 'react'
import '../styles/WelcomePage.css'
import WebsiteLayout from '../layouts/WebsiteLayout'
import CitiesCarousel from '../components/CitiesCarousel'

export default function WelcomePage() {
 
  return (  
    <WebsiteLayout>
    <div className='App-container'>
        <h1>MyTinerary</h1>
        <p>Find your perfect trip, designed by insiders who know and love their cities!</p>
        <a href='#'>Choose your destiny</a>
    </div>
    <CitiesCarousel />
    </WebsiteLayout>   
  )
}