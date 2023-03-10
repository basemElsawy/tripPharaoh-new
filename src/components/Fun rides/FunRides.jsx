import React from 'react'
import './FunRides.css'
import Data from './Data'
const FunRides = () => {
    return (
        <div className='fun-rides-container' id='Fun'>
            <div className="headlines">
                <h1 className='header-fun-rides'>
                    Fun Rides Around Your Favorite places
                </h1>
                <span className='description-rides'>Have the Utmost Fun Watching your Favorite Landmark While Doing something edgy..</span>
            </div>
            <div className='Cards'>
                {
                    Data.map((val, i) => {
                        return (
                            <div className='Card-picture' data-psuedo={val.DataPsuedo}>
                                <div className='overlay rides'></div>
                                <img className='images' src={val.image} alt="" />

                                <div className='para-describe'>
                                    <h3 className='describing-ride'>{val.description}</h3>
                                </div>

                                <a href="" className='ride-link'>Start Adventure</a>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default FunRides
