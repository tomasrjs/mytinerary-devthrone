import React from 'react'
import '../styles/CityCard.css'

export default function CityCard(props) {


  return (
    <div className='CardCity-container'>
        <img src={props.url}/>
        <div className='CardCity-body'>
            <h3>{props.name}</h3>
            <buttom className='CardCity-btn'>See More</buttom>
        </div>
    </div>
  )
}
