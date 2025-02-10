import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './Component/Home/Home.jsx'
import AboutUs from './Component/AboutUs/AboutUs.jsx'
import ContactUs from './Component/ContactUs/ContactUs.jsx'
import Layout from '../../07-1_ReactRouterDom-AnotherWay/src/Layout.jsx'
import User from './Component/MyUser/User.jsx'
import Github from './Component/Github/Github.jsx'
import { LoaderGithubInfo } from './Component/Github/Github.jsx'
//We will make router provider from two ways


//IT IS ONE METHOD
// const router = createBrowserRouter([
//   {
//     // here / is top level element eske andr nesting ho rahi hai to kya chij render karega bo hume batana padega
//     path: "/",
//     element: <App />,

//     //further or value hai esliye hum ek children bana rahe ha then array bana rahe hai or object
//     children:[
//       {
//         path:"",
//         element: <Home/>
//       },
//       {
//         path:"AboutUs",
//         element: <AboutUs/>
//       },
//       {
//         path:"ContactUs",
//         element: <ContactUs/>
//       }
//     ]
    
//   }
// ])

//NOW CURRENT WAY TO ROUTING

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>}/>
      <Route path='AboutUs' element={<AboutUs/>}/>
      <Route path='ContactUs' element={<ContactUs/>}/>

      {/* for link pr parameter lena */}
      <Route path='user/:userid' element={<User/>}/>
      
      <Route 
      loader={LoaderGithubInfo}
      path='github' 
      element={<Github/>}/>
      

    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* //In this we will use Router Provider with property router to pass the router */}
    <RouterProvider router={router}/> 

    {/* <App/> */}
  </StrictMode>,
)


//Now we will discuss how to create another link

//create one component
