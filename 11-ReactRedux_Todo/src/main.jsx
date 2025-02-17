import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './app/store.js'
import Layout from './Layout/Layout.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Addtodo from './components/Addtodo.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path="addtodo" element={<Addtodo/>}/>
      </Route>

  )
)

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
   
  </Provider>,
)
