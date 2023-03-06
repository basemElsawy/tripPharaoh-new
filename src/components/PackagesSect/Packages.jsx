import React from 'react'
import './Packages.css'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Packages = () => {
    return (
        <div>

            <div className='background-content'>
                <div className='description-packages'>
                    <h1>Carefully Chosen Traveling Packages</h1>
                    <p>Because we know your taste and we know your style in traveling we chose these trips based on your traveling taste </p>
                    <a href="" className='package-start'>Start your trip</a>
                </div>
            </div>

        </div>

    )
}

export default Packages

