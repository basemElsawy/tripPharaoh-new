import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './HeaderCom.css'
const HeaderCom = () => {
    const [style, setstate] = useState({ fontWeight: 'bold' });
    return (
        <div className='comments-header'>
            <div> <NavLink className='arrow-link underline-rev' style={style} to={'/'}> <div><i class="fa-solid fa-arrow-left"></i> <span>Go back</span> </div> </NavLink> </div>
            <div className='familliar-links'>
                <NavLink className='links-backward' style={style} to={'/'}>Home</NavLink>

            </div>


        </div>
    )
}

export default HeaderCom
