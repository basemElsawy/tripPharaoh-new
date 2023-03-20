import React, { useEffect, useState } from 'react'
import Form from './InputForm/Form'
import './ReviewsMain.css'
import Footer from './Footer/footer'
import { NavLink, useNavigate } from 'react-router-dom'

const ReviewsMain = (props) => {


  const saveDataHandler = (savedData) => {
    const commentData = {
      ...savedData,
      id: Math.random().toFixed(2).toString()
    }



    props.calledData(commentData)
  }






  return (
    <div className='reviews-container'>

      <div className='form-container'>
        <h1 className='Heading'>How is the <span className='yellow'>service?</span> </h1>
        <Form onSubmitFunction={saveDataHandler} />

        <div className='link-to-comments'>
          <NavLink className='link-to link-to-comment underline' to='/'><span>Contact us </span><i class="fa-solid fa-arrow-right-long"></i></NavLink>

        </div>
      </div>

    </div>
  )
}

export default ReviewsMain
