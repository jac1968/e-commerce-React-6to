import React from 'react'
import { Link } from 'react-router-dom'
import '../share/navBar.css'

const NavBar = () => {
  return (
    <header className='narbar'>
        <h1 className='navbar__title'><Link to='/'>e-Commerce</Link></h1>
        <ul className='navbar__list'>
            <li className='navbar__item'><Link to='/login'>Login</Link></li>
            <li className='navbar__item'><Link to='/purchases'>Purchase</Link></li> 
            <li className='navbar__item'><Link to='/cart'>Cart</Link></li>
        </ul>
    </header>
  )
}

export default NavBar