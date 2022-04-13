import React from 'react'
import ReactDom from 'react-dom/client'
import bootstrap from 'bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './styles.css'
import App from './App'

const root = ReactDom.createRoot(document.getElementById('root'))
root.render(<App/>)