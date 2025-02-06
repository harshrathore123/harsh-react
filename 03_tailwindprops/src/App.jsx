import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from '../public/component/Card'
function App() {
  
  let arr = [
    1,
    2,
    3,
    4,
    5
  ]

  let obj = {
    name:"akash",
    age:"23",
    dob:"feb"
  }

  return (
    <>
      <h1 className='bg-green-500 text-black rounded-xl p-4'>Hello Tailwind Css</h1>
      <Card username="akash"  price="Rate"/>
      <Card username="harsh" price="Budget"/>
     
    </>
  )
}

export default App
