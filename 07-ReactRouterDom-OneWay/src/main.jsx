import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Component/Home/Home.jsx'
import AboutUs from './Component/AboutUs/AboutUs.jsx'
import ContactUs from './Component/ContactUs/ContactUs.jsx'

//We will make router provider from two ways

const router = createBrowserRouter([
  {
    // here / is top level element eske andr nesting ho rahi hai to kya chij render karega bo hume batana padega
    path: "/",
    element: <App />,

    //further or value hai esliye hum ek children bana rahe ha then array bana rahe hai or object
    children:[
      {
        path:"",
        element: <Home/>
      },
      {
        path:"AboutUs",
        element: <AboutUs/>
      },
      {
        path:"ContactUs",
        element: <ContactUs/>
      }
    ]
    
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* //In this we will use Router Provider with property router to pass the router */}
    <RouterProvider router={router}/> 

    {/* <App/> */}
  </StrictMode>,
)
