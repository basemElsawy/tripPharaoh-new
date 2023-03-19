import React from 'react'
import './Testimonials.css'
const Testimonials = (props) => {




    return (
        <div className='comments-body'>
            <div className='test-container'>
                <div className="person-name">

                    <h2> {props.firstName}</h2>
                    <h2>{props.lastName}</h2>
                    <span>{props.date}</span>

                </div>
                <div className='comment'>{props.comment} </div>
                <div className='rating'>{props.rating}</div>
            </div>
        </div>
    )
}

export default Testimonials
