import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css';
import App from './App.jsx'
import Gellary from '../components/Gellary'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Gellary />
  </StrictMode>,
)
