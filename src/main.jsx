import React from 'react'
import ReactDOM from 'react-dom/client'
import Calculator from './Calculator'
import Header from './Header'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Calculator />
  </React.StrictMode>
)
