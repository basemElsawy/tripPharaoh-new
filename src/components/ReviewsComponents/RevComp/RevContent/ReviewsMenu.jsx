import React, { useState, useEffect, useRef } from 'react'
import './Menu.css'
import Image from './images/comment.png'
import HeaderCom from './CommentsHeader/HeaderCom'
import Filter from './FormFilter.jsx/Filter'
import Testimonials from '../testimonials/Testimonials'
import { useLocation } from 'react-router-dom'
import ReviewsMain from '../RevMain/ReviewsMain'
const dummyComment = [{
    firstName: 'Basem',
    lastName: 'elsawy',
    email: 'besoelpop2@gmail.com'
    , date: new Date(23, 4, 2000)
    ,
    comment: 'this website is amazing'
    , selectedCat: 'Website Services'
}]
const ReviewsMenu = (props) => {

    const [comments, setComment] = useState(dummyComment)
    let commentState;
    const [filter, setFilter] = useState('')


    const commentData = (calledComments) => {
        setComment((prev) => {
            return [calledComments, ...prev]
        })
    }

    const filteredComments = comments.filter((comment) => {
        if (comment.selectedCat === filter) {
            return (comment.selectedCat === filter)
        } if (filter === 'All') {
            return comment
        }

    })

    if (comments.length > 0) {
        commentState =
            filteredComments.map((val, id) => {
                return <Testimonials key={val.id} firstName={val.firstName} lastName={val.lastName} date={val.date} comment={val.comment} />
            })

    }

    console.log(comments)
    return (
        <div className='main-comment-menu'>
            <HeaderCom />
            <div>
                <div className='Reviews-form'>
                    <ReviewsMain calledData={commentData} />
                </div>
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
            <div className='footer-review'>
                <h1>Egypt</h1>
                <div>
                    <span>Trip Pharaoh © 2022 All Right Reserved</span>
                </div>
            </div>
        </div>
    )
}

export default ReviewsMenu
