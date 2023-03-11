import React from 'react'
import './LateNight.css'
import Data from '../LateNight/DataComp/Data'
import DatesComp from './DataComp/DatesComp'
const LateNight = () => {
    return (
        <div className='late-night-wrapper' id='Late'>

            <div className='data-wrapper'>
                {
                    Data.map((val, i) => {
                        return (
                            <DatesComp key={val.id} description={val.description} title={val.title} image={val.image} />
                        )

                    })
                }

            </div>

            <div className='bg-content-date'>
                <h1>Late Night Dates</h1>
                <a href="#" className='more-link'>More Date's</a>
            </div>
        </div>
    )
}

export default LateNight
