import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css"
import App from './App.jsx'
import { WorkingModelProvider } from "./context/WorkingModelContext";
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WorkingModelProvider>
      <App />
    </WorkingModelProvider>
  </StrictMode>,
)
