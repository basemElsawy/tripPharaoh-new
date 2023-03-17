import React, { useState } from 'react'
import './Reviews.css'
import ReviewsMain from '../ReviewsComponents/RevComp/RevMain/ReviewsMain'
import { Routes, Route } from 'react-router-dom'
import ReviewsMenu from './RevComp/RevContent/ReviewsMenu'

const Reviews = (props) => {
    const [comment, setComment] = useState()

    const commentData = (commentData) => {
        setComment(
            () => {
                return [commentData]
            }
        )
        props.fetchCommentData(comment)


    }



    return (

        <>
            <ReviewsMain newCommentHandler={commentData} />

        </>
    )
}

export default Reviews
