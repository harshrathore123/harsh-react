import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './component/Home/Home'
import Navbar from './component/Navbar/Navbar'
import Paste from './component/Paste/Paste'
import ViewPaste from './component/ViewPaste/ViewPaste'

const router = createBrowserRouter(
  [
    {
      path:'/',
      element:
      <div>
        <Navbar/>
        <Home/>

      </div>
    },
    {
      path:'/pastes',
      element:
      <div>
        <Navbar/>
        <Paste/>

      </div>
    },
    {
      path:'/pastes/:id',
      element:
      <div>
        <Navbar/>
        <ViewPaste/>
      </div>
    }
  ]
  
)


function App() {

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
