import React from 'react'
import '../styles/Carousel.css'
import Arrow from './Carousel/Arrow'
export default function Carousel(props) {
    const range = props.range
    const [start, setStart] = React.useState(0)
    const [end, setEnd] = React.useState(start + range)
    const interval = props.interval * 1000
    const [intervalId, setIntervalId] = React.useState()
    const cities = props.data

    const citiesView = (city, index) => (
        <div className='Carousel-city' key={index}>
            <h3>{city.name}</h3>
            <img src={city.url} />
        </div>
    )
    
    React.useEffect(() => {
        let id = setInterval(function(){
            next()
        }, interval)
        setIntervalId(id)
        return () => clearInterval(intervalId);
    }, [start])

    function prev() {
        if (start >= range) {
            setStart(start - range)
            setEnd(end - range)
        }else{
            setStart(cities.length - range)
            setEnd(cities.length)
        }
        clearInterval(intervalId)
    }
    function next() {
        if (end < cities.length) {
            setStart(start + range)
            setEnd(end + range)
        }else{
            setStart(0)
            setEnd(4)
        }
        clearInterval(intervalId)
    }
    return (
        <div className='Carousel'>
            <h2>Popular MyTineraries</h2>
            <div className='Carousel-container'>
                <Arrow icon={'<'} click={prev} />
                <div className='Carousel-slider'>
                    {cities.slice(start, end).map(citiesView)}
                </div>
                <Arrow icon={'>'} click={next} />
            </div>
        </div>
    )
}
