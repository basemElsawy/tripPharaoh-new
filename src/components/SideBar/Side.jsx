import React from 'react'
import './sideStyle.css'
const Side = () => {
    return (
        <div className='Sidebar-container' >

            <ul className='sidebar-list'>
                <li> <a href="#"><i class="fa-solid fa-house"></i></a>  </li>
                <li> <a href="#"><i class="fa-solid fa-box-check"></i></a> </li>
                <li> <a href="#"><i class="fa-solid fa-car-side"></i></a> </li>
                <li> <a href="#"><i class="fa-solid fa-ferris-wheel"></i></a> </li>
                <li> <a href="#"><i class="fa-solid fa-moon"></i></a> </li>
            </ul>

        </div>
    )
}

export default Side
