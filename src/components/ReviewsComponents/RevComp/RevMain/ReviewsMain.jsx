import React, { useState } from 'react'
import Form from './InputForm/Form'
import './ReviewsMain.css'
import Footer from './Footer/footer'
import { NavLink, useNavigate } from 'react-router-dom'
const ReviewsMain = (props) => {

  const navigate = useNavigate()

  const saveDataHandler = (savedData) => {
    const commentData = {
      ...savedData,
      id: Math.random().toFixed(2).toString()
    }
    navigate("/menu", {
      state: { ...commentData }
    })

  }



  return (
    <div className='reviews-container'>
      <div className='main-section'>
      </div>
      <div className='form-container'>
        <h1 className='Heading'>How is the <span className='yellow'>service?</span> </h1>
        <Form onSubmitFunction={saveDataHandler} />

        <div className='link-to-comments underline'>
          <NavLink className='link-to' to='/menu'>Check user's Feedback</NavLink>
          <i class="fa-solid fa-arrow-right-long"></i>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ReviewsMain
