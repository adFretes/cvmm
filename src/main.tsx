import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CapillaVMM_app } from './CapillaVmmApp.tsx'

import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CapillaVMM_app />
  </StrictMode>,
)
