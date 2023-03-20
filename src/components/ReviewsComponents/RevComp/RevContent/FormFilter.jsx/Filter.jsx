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
                        <label className='filters' htmlFor={val.forId}>{val.value}</label>
                        <input type={val.name} value={val.value} name={val.name} id={val.forId} onChange={storedValue} />

                    </div>)
                })
            }



        </form >
    )
}

export default Filter


