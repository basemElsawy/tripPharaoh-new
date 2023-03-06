import React from 'react'
import NavBar from '../src/components/Navbar/NavBar'
import Home from './components/HomeSect/Home'
import './index.css'
import GuideSect from './components/guideSect/GuideSect'
const App = () => {
  return (
    <>
      <NavBar />
      <main className='main-content__container'>
        <Home />
        <GuideSect />
      </main>
    </>
  )
}

export default App
