import React from 'react'
// import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/HomeSect/Home'
import './index.css'
import GuideSect from './components/guideSect/GuideSect'
import Packages from './components/PackagesSect/Packages'
import Local from './components/GizaAndCairo/Local'
import FunRides from './components/Fun rides/FunRides'
import LongJourney from './components/LongJourneys/LongJourney'
import LateNight from './components/LateNight/LateNight'
import Footer from './components/Footer/footer'
import Side from './components/SideBar/Side'
import NavBar from './components/Navbar/NavBar'
import Router from 'react-router-dom'
const LandingPage = () => {
  return (
    <>


      <main className='main-content__container'>
        <Side className='sidebar-outside' />
        <Home />
        <GuideSect />
        <Packages />
        <Local />
        <FunRides />
        <LongJourney />
        <LateNight />
        <Footer />
      </main>
    </>
  )
}

export default LandingPage
