import React, { useState } from 'react'
import Form from './InputForm/Form'
import './ReviewsMain.css'
const ReviewsMain = () => {
  const [form, setForm] = useState('');

  const saveDataHandler = (savedData) => {
    const newCommentObj = {
      ...savedData,
      id: Math.random().toString()
    }
  }

  return (
    <div className='reviws-container'>
      <div className='main-section'>
      </div>
      <div className='form-container'>
        <h1 className='Heading'>How is the <span className='yellow'>service?</span> </h1>
        <Form />
      </div>
    </div>
  )
}

export default ReviewsMain
