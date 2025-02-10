import React from 'react'
import Header from './Component/Header/Header'
import Footer from './Component/Footer/Footer'
import { Outlet } from 'react-router-dom'
function App() {

  return (
    <>
      <Header/>

      {/* Now i want that i can change dynamically passing content like home bhi kardu aboutus bhi kardu 
      for this from react-router dom we will use outlet  and change content under outlet */}
      <Outlet/>
      <Footer/>
    </> 
  )
}

export default App
