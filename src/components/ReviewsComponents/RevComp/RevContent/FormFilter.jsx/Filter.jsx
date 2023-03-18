import React, { useState, useEffect } from 'react'
import './Filter.css'
import Data from './Data'

const Filter = (props) => {
    const [checkState, changeState] = useState({
        acitveState: null,
        arrayNums: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }]
    })




    const storedValue = (event) => {

        props.filterObj(event.target.value)

    }





    return (
        <form className='filter-form' >
            <h1 className='filter-header'>
                Filter
            </h1>


            {
                Data.map((val, i) => {
                    return (<div key={i}>
                        <label htmlFor={val.forId}>{val.value}</label>
                        <input type={val.name} value={val.value} name={val.name} id={val.forId} onChange={storedValue} />

                    </div>)
                })
            }



        </form >
    )
}

export default Filter


{/* <label htmlFor="All" >All</label>
<input onChange={storedValue} value='All' type="radio" id='All' name='radio' />
<label htmlFor="Giza" >Giza</label>
<input onChange={storedValue} value='giza' type="radio" id='Giza' name='radio' />
<label htmlFor="Cairo" >Cairo</label>
<input onChange={storedValue} value='cairo' type="radio" id='Cairo' name='radio' />
<label htmlFor="Fun-rides"  >Safari Trips</label>
<input onChange={storedValue} value='safari-trips' type="radio" id='Fun-rides' name='radio' />
<label htmlFor="Long-journeys"  >Long journeys</label>
<input onChange={storedValue} value='long-journeys' type="radio" id='Long-journeys' name='radio' />
<label htmlFor="Restaurants"  >Restaurants</label>
<input onChange={storedValue} value='restaurants' type="radio" id='Restaurants' name='radio' /> */}