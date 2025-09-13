import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/navbar.jsx'

import 'remixicon/fonts/remixicon.css'
import Footer from './components/footer.jsx'
import Prelooder from './components/Prelooder.jsx'
import 'animate.css';

// Untuk Render Coding Di sini 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Prelooder />
    <div className="container mx-auto px-4">
    <Navbar />
    <App />
    <Footer />
    </div>
  </StrictMode>,
)
