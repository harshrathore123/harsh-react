import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './container/Home/Home.jsx'
import Login from './container/Login/Login.jsx'
import SignUp from './container/signup/SignUp.jsx'
import {Provider} from 'react-redux'
import {store} from './store/store'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path='' element={<Home/>} />
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>

    
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>,
)
