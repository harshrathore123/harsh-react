import './App.css'
import {Navbar} from '../src/container/header/Navbar'
import { Outlet } from 'react-router-dom'
import Fotr from './container/footer/fotr'
import { Toaster } from 'react-hot-toast'
import React from 'react'
function App() {

  return (
    <>
    <Navbar/>
    <Outlet/>
    <Fotr/>
    <Toaster/>
    </>
  )
}

export default App
