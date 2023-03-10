import React from 'react'
import './LongJourney.css'
import JourneyCards from './JourneyCards/JourneyCards'
import Data from './JourneyCards/Data'
const LongJourney = () => {
    return (
        <div className='journey-container' id='Long'>
            <div className='bg-content-journey'>
                <h1>Long Journey's</h1>
                <a href="#" className='more-link'>More Journey's</a>
            </div>
            <div className='data-cards'>
                {
                    Data.map((val, i) => {
                        return (
                            <JourneyCards key={val.id} title={val.title} image={val.image} />
                        )
                    })
                }

            </div>
        </div>
    )
}

export default LongJourney
