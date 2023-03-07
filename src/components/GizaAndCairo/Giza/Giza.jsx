import React from 'react'
import './Giza.css'
import Data from './Data'
const Giza = () => {
    return (
        <div className='main-content-giza' id='Giza'>
            <div className='headers-giza'>
                <h1>Giza Trips <i class="fa-sharp fa-solid fa-chart-pyramid"></i></h1>
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
                                        <a href="#" className='visit-btn'>Visit</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                <div className='link-to-giza'><a href="#" className='more-giza'>More Trips</a></div>
            </div>
        </div>
    )
}

export default Giza
