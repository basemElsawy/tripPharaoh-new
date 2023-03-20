import React, { useState } from 'react'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from '@remix-run/router'
import { createBrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './LandingPage'

import NavBar from './components/Navbar/NavBar'
import ReviewsMenu from './components/ReviewsComponents/RevComp/RevContent/ReviewsMenu'
import { useNavigate } from 'react-router-dom'
const App = () => {
    const navigate = useNavigate()

    const [broswerHistory, setBrowserHistory] = useState(createBrowserHistory())
    const [commentInfo, setInfo] = useState('')




    // navigate(0)
    if (broswerHistory.location.pathname === '/menu') {

        return (

            <Routes>
                <Route path='/' element={<LandingPage />} />

                <Route path='/menu' element={<ReviewsMenu reviewComment={commentInfo} />} />

            </Routes>
        )
    }
    else {
        return (
            <>
                <NavBar />
                <Routes>
                    <Route path='/' element={<LandingPage />} />

                    <Route path='/menu' element={<ReviewsMenu />} />

                </Routes>
            </>
        )

    }






}



export default App
