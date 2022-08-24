import { useRef } from 'react'
import '../styles/Header.css'
import { Link as LinkRouter } from "react-router-dom"
export default function () {
    const navRef = useRef();
    const showNavbar = () =>{
        navRef.current.classList.toggle("responsive-nav")
    }
    return (
        <div className='Header-container'>
            <div className='Header-nav-container'>
                <LinkRouter to='/'><img src="/logo.png" alt="Logo" /></LinkRouter>
                <nav ref={navRef}>
                    <LinkRouter className='Header-link' to='/'>Home</LinkRouter>
                    <LinkRouter className='Header-link' to='/cities'>Cities</LinkRouter>
                    <LinkRouter className='Header-link' to='/newCites'>New Cities</LinkRouter>
                    <button className='nav-btn nav-close-btn' onClick={showNavbar}>X</button>
                </nav>
                <button className='nav-btn nav-menu-btn' onClick={showNavbar}></button>
            </div>
            <button className='Header-user'></button>
        </div>
    )
}
