import React, { useState } from 'react'
import './Menu.css'
import Image from './images/comment.png'
import HeaderCom from './CommentsHeader/HeaderCom'
import Filter from './FormFilter.jsx/Filter'
import Testimonials from '../testimonials/Testimonials'
import { useLocation } from 'react-router-dom'
const ReviewsMenu = (props) => {
    const location = useLocation()
    const [comments, setComment] = useState([location.state[0]])
    let commentState = <div className='no-comment'>No Comments Added</div>
    const [filter, setFilter] = useState('')




    if (comments.length == 0) {
        return commentState
    }
    else {

        commentState = comments.map((val) => {
            return (
                <div>
                    <Testimonials firstName={val.firstName} lastName={val.lastName} comment={val.comment} />
                </div>
            )
        })

    }


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
                    {commentState}
                </div>

                <div className='filter'>
                    <Filter filterObj={setFilter} />
                </div>

            </div>
        </div>
    )
}

export default ReviewsMenu
