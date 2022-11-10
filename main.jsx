import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { PlugProvider } from '@raydeck/useplug'
// The mainnet Router Canister Id
const canisterId = 'lj532-6iaaa-aaaah-qcc7a-cai'
// Whitelist the canister id for Plug permissions
const whitelist = [canisterId, 'vlhm2-4iaaa-aaaam-qaatq-cai'];

import Trade from "./src/Trade";
import { Buffer } from 'buffer'
globalThis.Buffer = Buffer

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PlugProvider whitelist={whitelist}>
      <Trade type={'web'} />
    </PlugProvider>
  </React.StrictMode>
)
