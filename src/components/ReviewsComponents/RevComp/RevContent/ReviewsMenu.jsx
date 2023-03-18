import React, { useState } from 'react'
import './Menu.css'
import Image from './images/comment.png'
import HeaderCom from './CommentsHeader/HeaderCom'
import Filter from './FormFilter.jsx/Filter'
import Testimonials from '../testimonials/Testimonials'
const ReviewsMenu = (props) => {
    const [comments, setComment] = useState(props.comment)

    console.log(comments)
    const [filter, setFilter] = useState('')



    console.log(filter)
    return (
        <div className='main-comment-menu'>
            <HeaderCom />
            <div>
                <div className='comments-main-header'>
                    <div>
                        <h1>Testmonials</h1>
                        <p>What our customers saying About us</p>
                    </div>
                    <img src={Image} className='svg-image' width='30%' height='300px' alt="" />
                </div>
            </div>
            <div className='comments-body'>
                <div className='testimonials'>
                    <Testimonials commentData={comments} />
                </div>

                <div className='filter'>
                    <Filter filterObj={setFilter} />
                </div>

            </div>
        </div>
    )
}

export default ReviewsMenu
