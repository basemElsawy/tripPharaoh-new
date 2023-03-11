import React from 'react'
import './sideStyle.css'
const Side = () => {
    return (
        <div className='Sidebar-container' >
            <div className='navbar-header'>
                <span className='pin'><i class="fa-solid fa-location-dot"></i></span>
                <h1>TP</h1>
            </div>
            <nav>
                <ul className='sidebar-list'>
                    <li className='Home'> <a href="#Home"><i class="fa-solid fa-house"></i></a>  </li>
                    <li className='Packages'> <a href="#Packages"><i class="fa-solid fa-box"></i></a> </li>
                    <li className='Giza'> <a href="#Giza"><i class="fa-solid fa-car-side"></i></a> </li>
                    <li className='Fun'> <a href="#Fun"><i class="fa-solid fa-heart"></i></a> </li>
                    <li className='Late'> <a href="#Late"><i class="fa-solid fa-moon"></i></a> </li>
                </ul>
            </nav>
            <div className='sidebar-footer'>
                <h3>© 2023-2024</h3>
            </div>

        </div>
    )
}

export default Side
