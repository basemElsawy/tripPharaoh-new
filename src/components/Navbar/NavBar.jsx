import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'
import Logo from './Image/Logo.png'
const NavBar = () => {
  const [activeState, setstate] = useState({
    color: '#212b4e', backgroundColor: '#f3ed96', padding: '20px', borderRadius: '10px', transition: '.2s ease-in-out'
  });

  return (
    <header className='Header-fixed'>
      <nav className='navbar'>


        {/* style={({ isActive }) => {
              return { color: isActive ? '#f3ed96' : '', backgroundColor: isActive ? '#393f52' : '' }

            }} */}

        <ul className='list'>
          <li><NavLink
            className='link'
            style={({ isActive }) => {
              return isActive ? { ...activeState } : {}

            }} to="/">Home</NavLink></li>
          <li><a href="#">
            About
          </a></li>
          <li className='list-item-logo' ><img src={Logo} className='Logo' width="300" height="275" alt="" /></li>

          <li><a href="#">
            On demand
          </a></li>

          <li><NavLink
            className='link'
            style={({ isActive }) => {
              return isActive ? { ...activeState } : {}

            }}
            ClassName='visited' to="/menu">
            Reviews
          </NavLink></li>

        </ul>

      </nav>
    </header>
  )
}

export default NavBar
