import React from 'react'
import image1 from './images/pyramids.jpg'
import imageHover1 from './images/downtown.jpg'
import image2 from './images/fayom.jpg'
import imageHover2 from './images/siwa.jpg'
import image3 from './images/camels.png'
import imageHover3 from './images/buggy.png'
import image4 from './images/nightdates.jpg'
const Data = [
    {
        id: 1,
        title: 'Packages',
        images: image1,
        placeShown: 'Giza Pyramids',
        placeShownHover: 'Down Town'
        ,
        hoverImg: imageHover1,
        description: 'Tours full of excitment for your desire around giza and cairo ',
    },
    {
        id: 2,
        title: 'Long journey\'s',
        placeShown: 'Wadi El Rayan',
        placeShownHover: 'Siwa Oasis',
        images: image2,
        hoverImg: imageHover2,
        description: 'Journey arounds egypt\'s most visited sites and cities',
    },
    {
        id: 3,
        title: 'Fun Rides',
        placeShown: 'Camel Rides',
        placeShownHover: 'Atv Buggies',
        images: image3,
        hoverImg: imageHover3,
        description: 'Fun Rides to add the extra excitment in your visit to egypt',
    }
    ,
    {
        id: 4,
        title: 'Late Night Dates',
        placeShown: 'Restaurant\'s',
        placeShownHover: 'Atv Buggies',
        images: image4,
        hoverImg: imageHover3,
        description: 'Just the right place for your romantic date in egypt',
    }

]

export default Data
