import React from 'react'
import './Giza.css'
import Data from './Data'
const Giza = () => {
    return (
        <div className='main-content-giza' id='Giza'>
            <div>
                <h1>Giza Trips</h1>
                <span>Most Desired Landmarks In Giza</span>
            </div>
            <div className='trip-cards-container grid-container' >
                {
                    Data.map((val, id) => {
                        return (
                            <div key={id}  >
                                <div className='image-container'>

                                    <img src={val.image} width='100%' height='300' alt="" />
                                    <div className='position-abs'>
                                        <i className="icon-location-pin"></i>
                                        <h3>{val.tripTo}</h3>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Giza
