import './App.css'
import {Navbar} from '../src/container/header/Navbar'
import { Outlet } from 'react-router-dom'
import Fotr from './container/footer/fotr'
import React from 'react'
function App() {

  return (
    <>
    <Navbar/>
    <Outlet/>
    <Fotr/>
   
    </>
  )
}

export default App
