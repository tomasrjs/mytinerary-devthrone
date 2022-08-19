import React from 'react'
import '../styles/Footer.css'
export default function Footer () {
  return (
    <>
    <div className='Footer-container'>
        <div className='Footer-container-nav'>
            <p>Home</p>
            <p>Cities</p>
        </div>
        <div className='Footer-continer-socialmedia'>
            <a href="https://www.facebook.com/">Facebook</a>
            <a href="https://www.instagram.com/">Instagram</a>
            <a href="https://github.com/emazou/mytinerary-devthrone">GitHub</a>
        </div>
        <p>©2022 MyTinerary</p>
    </div>
    </>
  )
}
