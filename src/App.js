import React from 'react'

import Home from './components/HomeSect/Home'
import './index.css'
import GuideSect from './components/guideSect/GuideSect'
import Packages from './components/PackagesSect/Packages'
import Local from './components/GizaAndCairo/Local'
const App = () => {
  return (
    <>

      <main className='main-content__container'>
        <Home />
        <GuideSect />
        <Packages />
        <Local />
      </main>
    </>
  )
}

export default App
