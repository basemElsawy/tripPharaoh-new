import React, { useState } from 'react'
import './sideStyle.css'
const Side = () => {
    const [barState, changeState] = useState({
        activeState: null,
        objects: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]
    })
    


    const clickedIconHandler = (idx) => {


        changeState({ ...barState, activeState: barState.objects[idx] })



    }


    const addStyleHandler = (idx) => {
        if (barState.objects[idx] === barState.activeState) {
            return 'clicked'
        }
        else {
            return 'inactive'
        }
    }




    return (
        <div className='Sidebar-container' >
            <div className='navbar-header'>
                <span className='pin'><i class="fa-solid fa-location-dot"></i></span>
                <h1>TP</h1>
            </div>
            <nav>
                <ul className='sidebar-list'>
                    <li className={addStyleHandler(0)} > <a onClick={() => clickedIconHandler(0)} href="#Home"><i class="fa-solid fa-house"></i></a>  </li>
                    <li className={addStyleHandler(1)}> <a onClick={() => clickedIconHandler(1)} href="#Packages"><i class="fa-solid fa-box"></i></a> </li>
                    <li className={addStyleHandler(2)}> <a onClick={() => clickedIconHandler(2)} href="#Giza"><i class="fa-solid fa-car-side"></i></a> </li>
                    <li className={addStyleHandler(3)}> <a onClick={() => clickedIconHandler(3)} href="#Fun"><i class="fa-solid fa-heart"></i></a> </li>
                    <li className={addStyleHandler(4)}> <a onClick={() => clickedIconHandler(4)} href="#Late"><i class="fa-solid fa-moon"></i></a> </li>
                </ul >
            </nav >
            <div className='sidebar-footer'>
                <h3>© 2023-2024</h3>
            </div>

        </div >
    )
}

export default Side
