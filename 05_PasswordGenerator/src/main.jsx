import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import PasswordGenerator from '../public/component/passwordgenerator.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <PasswordGenerator/>
  </StrictMode>,
)
