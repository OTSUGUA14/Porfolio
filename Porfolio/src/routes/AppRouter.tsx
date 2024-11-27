import React from 'react'
import { Route, Routes } from 'react-router'
import Main from '../components/Screens/Main'
import SobreMi from '../components/Screens/SobreMi'
import { Navbar } from '../components/Navbar'
import Arrow from '../components/Arrow'
import Footer from '../components/Footer'

function AppRouter() {
  return (
    <>
    <Navbar/>
    <Arrow/>
    <Routes>
      <Route element ={<Main/>}path='/'/>
      <Route element ={<SobreMi/>}path='/sobre-mi'/>
    </Routes>
    <Footer/>
    </>
    
  )
}

export default AppRouter