import React from 'react'
import CityCard from '../components/CityCard'
import '../styles/CitiesPage.css'

export default function CitiesPage() {
  const cities = [
    {url: "https://i.ibb.co/LpdW85b/nagoya.jpg", name: "Nagoya"},
    {url: "https://i.ibb.co/7J1q2sf/madrid.jpg", name: "Madrid"},
    {url: "https://i.ibb.co/H4t4SN6/tokio.jpg", name: "Tokio"},
    {url: "https://i.ibb.co/swJXR0x/amsterdam.jpg", name: "Amsterdam"},
    {url: "https://i.ibb.co/qxNPpST/berlin.jpg", name: "Berlin"},
    {url: "https://i.ibb.co/wp1M01V/dubai.jpg", name: "Dubai"},
    {url: "https://i.ibb.co/4PZjLq3/toronto.jpg", name: "Toronto"},
    {url: "https://i.ibb.co/xhFh6wr/medellin.jpg", name: "Medellin"},
    {url: "https://i.ibb.co/ftbP5PZ/neworleans.jpg", name: "New Orleands"},
    {url: "https://i.ibb.co/NpTg7ng/buenosaires.jpg", name: "Buenos Aires"},
    {url: "https://i.ibb.co/h8JNPFS/saopaulo.jpg", name: "Sao Paulo"},
    {url: "https://i.ibb.co/CHKWGGk/sidney.jpg", name: "Sidney"}
]


  return (
        <div className='CitiesPage-container'>{cities.map(city => <CityCard url={city.url} name={city.name} />) }</div>
  )
}
