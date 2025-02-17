import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './Component/Home/Home.jsx'
import Todolist from './Component/Todolist/Todolist.jsx'
import PassGenerate from './Component/PasswordGenerator/PassGenerate.jsx'
import CrudOperation from './Component/CRUD Operation/CrudOperation.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
   <Route path = "/" element = {<App/>}>
      <Route path='' element= {<Home/>}/>
      <Route path='todolist' element={<Todolist/>}/>
      <Route path='PassGenerate' element={<PassGenerate/>}/>
      <Route path='crud' element={<CrudOperation/>}/>



   </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
