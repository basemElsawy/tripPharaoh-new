import React from 'react'
import Data from './Data'
import './Cairo.css'
const Cairo = () => {
    return (
        <div className='main-content-Cairo' id='Cairo'>
            <div className='headers-Cairo'>
                <h1>Cairo trips <i class="fa-sharp fa-solid fa-chart-pyramid"></i></h1>
                <span>Most Desired Landmarks In Cairo</span>

            </div>
            <div className='trip-cards-container grid-container' >
                {
                    Data.map((val, id) => {
                        return (
                            <div key={id}  >
                                <div className='image-container'>

                                    <img src={val.image} width='100%' height='100%' alt="" />
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
                <div className='link-to-Cairo'><a href="#" className='more-Cairo'>More Trips</a></div>
            </div>
        </div>
    )
}

export default Cairo
