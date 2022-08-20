import '../styles/Carousel.css'

export default function Carousel(props) {
    const range = props.range
    const start = 0
    const end = start + range 
    const cities = props.data

    const citiesView = (city) => ( 
        <div className='Carousel-city'>
            <h3>{city.name}</h3>
            <img src={city.url} />
        </div>
    )

  return (
    <div className='Carousel-container'>
        <h2>Popular MyTineraries</h2>
        <div className='Carousel-slider'>
            {cities.slice(start, end).map(citiesView)}
        </div>
    </div>
  )
}
