import React, { useState } from 'react'
import './Form.css'
const Form = () => {
    const [enteredFirstName, setFirstState] = useState();
    const [enteredLastName, setLastState] = useState();
    const [enteredEmail, setEmailState] = useState();
    const [enteredDate, setEnteredDate] = useState();

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

    const newComment = (e) => {
        e.preventDefault()
        const commentData = [{
            firstName: enteredFirstName,
            lastName: enteredLastName,
            email: enteredEmail,
            date: new Date(enteredDate)
        }]

        setEmailState('')
        setEnteredDate('')
        setFirstState('')
        setLastState('')
    }

    return (
        <div className='form-container-inputs'>
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
                            <select name="selector" id="Select">
                                <option value="Website Services">Website Services</option>
                                <option value="Traveling Services">Traveling Services</option>
                            </select>
                        </div>
                        <textarea name="comments" style={{ resize: 'none' }} placeholder='add your comment' id="comments" cols="30" rows="10"></textarea>
                    </div>
                    <button className='btn submit-comment' type='submit'>Submit</button>
                </div>

            </form>
            <form action="" className='radio-form'>
                <div className='filter-container'>
                    <h3 className='filter-heading'>Filter</h3>
                    <div className='comments-filter'>
                        <div>
                            <label htmlFor="all">All</label>
                            <input type="radio" id='all' name='radio' />
                        </div>
                        <div>
                            <label htmlFor="Giza">Giza</label>
                            <input type="radio" id='Giza' name='radio' />
                        </div>
                        <div>
                            <label htmlFor="Cairo">Cairo</label>
                            <input type="radio" id='Cairo' name='radio' />
                        </div>
                        <div>
                            <label htmlFor="Journeys">Journeys</label>
                            <input type="radio" id='Journeys' name='radio' />
                        </div>
                        <div>
                            <label htmlFor="Rest">Restaurants</label>
                            <input type="radio" id='Rest' name='radio' />
                        </div>

                    </div>

                </div>
            </form>
        </div>

    )
}

export default Form
