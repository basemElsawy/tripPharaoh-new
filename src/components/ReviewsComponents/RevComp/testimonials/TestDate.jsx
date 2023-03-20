import React from 'react'
import './Testimonials.css'
const TestDate = (props) => {
    const year = props.date.getFullYear()
    const month = props.date.toLocaleString('en-us', { month: 'long' });
    const day = props.date.toLocaleString('en-us', { day: '2-digit' })
    return (
        <div className='date'>
            {day}

            {month}

            {year}
        </div>
    )
}

export default TestDate
