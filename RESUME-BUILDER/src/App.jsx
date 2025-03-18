import './App.css'
import {Navbar} from '../src/container/header/Navbar'
import Home from './container/home/Home.jsx'
import Fotr from './container/footer/fotr'
import { Toaster } from 'react-hot-toast'
import React, { useState } from 'react'
import Login from './container/Login/Login.jsx'
import SignUp from './container/signup/SignUp.jsx'
import { BrowserRouter } from 'react-router-dom'
function App() {

  const[showSignUp,setShowSignUp] = useState(false);
  const[showLogin,setShowLogin] = useState(false);

  return (
    <BrowserRouter>
    <Navbar showSignUp={showSignUp} setShowSignUp={setShowSignUp} showLogin={showLogin} setShowLogin={setShowLogin}/>
    <Home/>
    {
      showSignUp && 
      <SignUp/>
    }
    {
      showLogin && 
      <Login/>
    }
    <Fotr/>
    <Toaster/>
    </BrowserRouter>
  )
}

export default App
