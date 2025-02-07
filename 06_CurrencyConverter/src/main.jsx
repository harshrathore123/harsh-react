import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Inputbox from './components/Inputbox.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Inputbox/>
  </StrictMode>,
)
