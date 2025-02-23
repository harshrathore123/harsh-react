import './App.css'
import {Navbar} from '../src/container/header/Navbar'
import Home from './container/home/Home.jsx'
import Fotr from './container/footer/fotr'
import { Toaster } from 'react-hot-toast'
import React, { useState } from 'react'
import Signup from './container/signup/SignUp.jsx'
import SignUp from './container/signup/SignUp.jsx'
function App() {

  const[showSignUp,setShowSignUp] = useState(false);
  return (
    <>
    <Navbar showSignUp={showSignUp} setShowSignUp={setShowSignUp}/>
    <Home/>
    {
      showSignUp && 
      <SignUp/>
    }
    <Fotr/>
    <Toaster/>
    </>
  )
}

export default App
