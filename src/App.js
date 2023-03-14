import React from 'react'
import { Router } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './LandingPage'
import Reviews from './components/ReviewsComponents/Reviews'
import NavBar from './components/Navbar/NavBar'
const App = () => {
    return (
        <>



            <NavBar />
            <Routes>
                <Route path='/' element={<LandingPage />} />
                <Route path='/reviews' element={<Reviews />} />
            </Routes>
        </>

    )
}

export default App
