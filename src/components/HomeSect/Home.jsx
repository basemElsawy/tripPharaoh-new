import React from 'react'
import './Home.css'
import SearchBar from './SearchBar/SearchBar'
import NavBar from './Navbar/NavBar'
const Home = () => {
    return (
        <div className='bg-content'>
            <NavBar />
            <div className='main-content'>
                <div>
                    <h1 className='headers'>
                        Egypt's Domestic Delights
                    </h1>
                    <h2 className='headers'>Egypt is not a country we live in, <br />but a country that lives within us</h2>
                </div>
                <div>
                    <SearchBar />
                </div>
            </div>
        </div>
    )
}

export default Home
