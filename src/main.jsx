import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import S8GlobalsLandingPage from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <S8GlobalsLandingPage />
  </StrictMode>,
)
