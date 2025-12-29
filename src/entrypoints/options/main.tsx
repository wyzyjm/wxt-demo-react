import { createRoot } from 'react-dom/client'
import { createPortal, } from 'react-dom'
import App from './App'
import { StrictMode } from 'react'

// createPortal(<StrictMode>
//   <App />
// </StrictMode>, document.getElementById('root_option')!)

createRoot(document.getElementById('root_option')!, {}).render(
  <StrictMode>
    <App />
  </StrictMode>
)