import React from 'react'
import './NavBar.css'
import Logo from './Image/Logo.png'
const NavBar = () => {
  return (
    <header className='Header-fixed'>
      <nav className='navbar'>


        <ul className='list'>
          <li><a href="#Home">
            Home <i className="icon-home"></i>
          </a></li>
          <li><a href="#">
            About <i className="icon-book-open"></i>
          </a></li>
          <li className='list-item-logo' ><img src={Logo} className='Logo' width="300" height="275" alt="" /></li>

          <li><a href="#">
            On demand <i className="icon-cursor"></i>
          </a></li>

          <li><a href="#">
            Reviews <i className="icon-notebook"></i>
          </a></li>

        </ul>

      </nav>
    </header>
  )
}

export default NavBar
