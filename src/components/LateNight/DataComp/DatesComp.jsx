import React from 'react'
import './Dates.css'
const DatesComp = (props) => {
    return (
        <div className='cards-wrapper'>
            <div className='journey-cards-container'>
                <div className='overlay journey'></div>
                <img src={props.image} style={{ borderRadius: '10px' }} width='100%' height='100%' alt='journeys' />
                <div className='title-container'>
                    <i className="icon-compass icon"></i>
                    <h3 className='journey-name'>{props.title}</h3>
                    <span className='describe'>{props.description}</span>
                </div>
                <a className='journey-link' href="#">Visit</a>
            </div>
        </div>
    )
}

export default DatesComp
