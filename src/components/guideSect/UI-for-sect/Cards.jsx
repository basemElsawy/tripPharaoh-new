import React, { useState, useRef } from 'react'
import ReactDOM from 'react-dom'
import './Cards.css'
import Data from './Data'

const Cards = () => {
    const myRef = useRef();
    const [scrolled, setScrolledState] = useState(false);

    window.addEventListener('scroll', () => {

        if (window.scrollY >= 300 && window.scrollY <= 1000) {
            setScrolledState(true)

        }
        else {
            setScrolledState(false)
        }

    })



    return (
        <div className='cards'>
            <div className='header'>
                <h1>Quick Guide</h1>
            </div>
            <div className='card'>
                {Data.map(({ id, placeShown, placeShownHover, images, hoverImg, description, title }) => {

                    return (
                        <div key={id} className={scrolled ? 'cards-container__card active' : 'cards-container__card'}>
                            <div className='img-container' >

                                <a href={id === 3 ? '#Fun' : '' || id === 2 ? '#Long' : '' || id === 1 ? '#Packages' : '' || id === 4 ? '#Late' : ''} ref={myRef} className='image-link' data-headChange={placeShownHover} data-HdLine={placeShown}>
                                    <div className='overlay'></div>
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
        </div>
    )
}

export default Cards
