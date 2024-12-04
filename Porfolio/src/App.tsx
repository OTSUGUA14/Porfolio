import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import Proyect from './components/Proyect'
import { IDatosProyect } from './type/IDatosProyect'
import Footer from './components/Footer'
import AppRouter from './routes/AppRouter'
import {BrowserRouter} from 'react-router-dom'
import Arrow from './components/Arrow'

function App() {
 
  return (
   <BrowserRouter>
    <AppRouter/>
   </BrowserRouter>
  )
}

export default App
