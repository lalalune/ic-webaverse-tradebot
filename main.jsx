import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './src/App.jsx'
import { PlugProvider } from '@raydeck/useplug'
// The mainnet Router Canister Id
const canisterId = 'lj532-6iaaa-aaaah-qcc7a-cai'
// Whitelist the canister id for Plug permissions
const whitelist = [canisterId];

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PlugProvider whitelist={whitelist}>
      <App />
    </PlugProvider>
  </React.StrictMode>
)
