import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom' // นำเข้าตัวจัดการ ract -router เพื่อให้เป็นหน้าเดียว
createRoot(document.getElementById('root')).render(

  <StrictMode>
    <BrowserRouter>
      <App /> 
    </BrowserRouter>
  </StrictMode>,
)
