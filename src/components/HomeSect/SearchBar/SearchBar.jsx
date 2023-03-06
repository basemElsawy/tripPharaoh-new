import React, { useState } from 'react'
import './SearchBar.css'

const SearchBar = () => {
    const title = `Feeling lost i'm your guide...`;
    const [clickState, setClickState] = useState(false);
    const [userInput, setInput] = useState('')

    const userInputHandler = (event) => {
        setInput(event.target.value)
    }
    const clickHandler = () => {
        setClickState(true)
    }
    return (
        <form className='form'>
            <div className={clickState ? 'container slide-back' : 'container'}>
                <input type="text" onChange={userInputHandler} placeholder={title} className={clickState ? 'user-input__search animate-onclick' : 'user-input__search'} />
                <input type="button" className={clickState ? 'button btn' : 'btn'} onClick={clickHandler} value='Search' />
            </div>
        </form>
    )
}

export default SearchBar
