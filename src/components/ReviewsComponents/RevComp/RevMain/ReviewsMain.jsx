import React, { useState } from 'react'
import Form from './InputForm/Form'
import './ReviewsMain.css'
import Footer from './Footer/footer'
import { NavLink, useNavigate } from 'react-router-dom'
const dummyComment = [{
  firstName: 'Basem',
  lastName: 'elsawy',
  email: 'besoelpop2@gmail.com'
  , date: new Date()
  ,
  comment: 'this website is amazing'
  , selectedCat: 'Website Services'
}]
const ReviewsMain = (props) => {
  const [commentArr, setArr] = useState(dummyComment)
  const [stored, setStored] = useState()
  const navigate = useNavigate()
  const saveDataHandler = (savedData) => {
    var commentData = {
      ...savedData,
      id: Math.random().toFixed(2).toString()
    }

    setArr((prev) => {
      return [commentData, ...prev]
    })

  }

  navigate("/menu", {
    state: commentArr
  })

  console.log(commentArr)



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
