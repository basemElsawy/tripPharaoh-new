import React from 'react'

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
const App = () => {
  return (
    <>
      <main className='main-content__container'>
        <Side />
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

export default App
