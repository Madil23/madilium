import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// J'ai vu que tu as un fichier style.css dans ta liste, on l'importe ici :
import './style.css' 

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)