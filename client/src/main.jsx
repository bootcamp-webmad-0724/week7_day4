import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProviderWrapper } from './contexts/theme.context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProviderWrapper>
      <Router>
        <App />
      </Router>
    </ThemeProviderWrapper>
  </StrictMode>,
)
