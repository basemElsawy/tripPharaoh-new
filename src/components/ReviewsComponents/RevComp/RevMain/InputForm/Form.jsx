import React, { useState } from 'react'
import './Form.css'
import { useNavigate } from 'react-router-dom';

const Form = (props) => {
    const [enteredFirstName, setFirstState] = useState('');
    const [enteredLastName, setLastState] = useState('');
    const [enteredEmail, setEmailState] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [commentInput, setComment] = useState('')
    const [select, setSelect] = useState('Website Services')
    const navigate = useNavigate()

    const firstNameHandler = (event) => {
        setFirstState(event.target.value)
    }
    const lastNameHandler = (event) => {
        setLastState(event.target.value)
    }

    const emailHandler = (event) => {
        setEmailState(event.target.value)
    }
    const dateHandler = (event) => {
        setEnteredDate(event.target.value)
    }

    const SelectHandler = (event) => {
        setSelect(event.target.value)
    }

    const commentHandler = (e) => {
        setComment(e.target.value)
    }
    const newComment = (e) => {
        e.preventDefault()
        const commentData = [{
            firstName: enteredFirstName,
            lastName: enteredLastName,
            email: enteredEmail,
            selectedCat: select,
            comment: commentInput
            ,
            date: new Date(enteredDate)
        }]

        setFirstState('')
        setLastState('')
        setEmailState('')
        setEnteredDate('')

        props.onSubmitFunction(commentData)

    }
    return (

        <form onSubmit={newComment} className='form-reviews'>
            <div className='input-container'>

                <h3 className='input-heading'>Feel free to add whatever you have felt about a trip or the services and remember your feedback always helps</h3>
                <div className='inputs'>
                    <input onChange={firstNameHandler} value={enteredFirstName} type="text" placeholder='First name' />
                    <input onChange={lastNameHandler} value={enteredLastName} type="text" placeholder='Last name' />
                    <input onChange={emailHandler} value={enteredEmail} type="email" placeholder='Your E-mail' />
                    <input onChange={dateHandler} value={enteredDate} min="2023-30-04" type='date' />
                    <div className='selector'>
                        <label htmlFor="Select">what is it about ?</label>
                        <select onChange={SelectHandler} name="selector" id="Select">
                            <option value="Website Services">Website Services</option>
                            <option value="Traveling Services">Traveling Services</option>
                        </select>
                    </div>
                    <textarea name="comments" onChange={commentHandler} style={{ resize: 'none' }} value={commentInput} placeholder='add your comment' id="comments" cols="30" rows="10"></textarea>
                </div>
                <button className='btn submit-comment' type='submit'>Submit</button>
            </div>

        </form>



    )
}

export default Form
