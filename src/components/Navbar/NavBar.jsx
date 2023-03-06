import React from 'react'
import './NavBar.css'
import Logo from './Image/Logo.png'
const NavBar = () => {
  return (
    <header className='Header-fixed'>
      <nav className='navbar'>
        <ul className='list'>
          <li ><img src={Logo} width="150" height="75" alt="" /></li>
        </ul>
        <ul>
          <li><a href="#Home">
            Home
          </a></li>
          <li><a href="#">
            About
          </a></li>
          <li><a href="#">
            On demand
          </a></li>

          <li><a href="#">
            Reviews
          </a></li>

        </ul>

      </nav>
    </header>
  )
}

export default NavBar
