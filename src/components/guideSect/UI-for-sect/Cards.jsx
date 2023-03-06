import React from 'react'
import './Cards.css'
import Data from './Data'
const Cards = () => {
    return (
        <div className='cards-container'>
            {Data.map(({ id, placeShown, placeShownHover, images, hoverImg, description, title }) => {
                return (
                    <div key={id} className='cards-container__card'>
                        <div className='img-container' >
                            <a href="" className='image-link' data-HdLine={placeShownHover}>
                                <img src={images} className='image-cards' style={{
                                    borderRadius: '5px'
                                }} width='300' height='200' alt="" />

                            </a>
                        </div>
                        <div>
                            <h2 className='cards-header'>{title}</h2>
                            <p className='description-span'>{description}</p>
                        </div>

                    </div>
                )
            })}

        </div>
    )
}

export default Cards
