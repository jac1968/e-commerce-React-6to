import React from 'react'
import { Link } from 'react-router-dom'
import './styles/navbar.css'
    
const NavBar = () => {
  return (
    <header className='navbar'>
        <div ><h1 className='navbar__title'><Link to='/'>e-Commerce</Link></h1></div>
        <ul className='navbar__list'>
            <div className='navbar__cuadro'><li className='navbar__item'><Link to='/login'>Login</Link></li></div>
            <div className='navbar__cuadro'><li className='navbar__item'><Link to='/purchases'>Purchase</Link></li></div>
            <div className='navbar__cuadro'><li className='navbar__item'><Link to='/cart'>Cart</Link></li></div>
        </ul>
    </header>
  )
}

export default NavBar