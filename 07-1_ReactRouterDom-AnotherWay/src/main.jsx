import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Component/Home/Home.jsx'
import AboutUs from './Component/About/AboutUs.jsx'
import ContactUs from './Component/Contact/ContactUs.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"AboutUs",
        element:<AboutUs/>
      },
      {
        path:"ContactUs",
        element:<ContactUs/>
      }
    ]
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router = {router}/>
  </StrictMode>,
)
