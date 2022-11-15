import { Buffer } from 'buffer'
globalThis.Buffer = Buffer
import React from "react";

import { Trade } from "./Trade";

import { PlugProvider } from "@raydeck/useplug";

// The mainnet Router Canister Id
const canisterId = "lj532-6iaaa-aaaah-qcc7a-cai";

// Whitelist the canister id for Plug permissions
const whitelist = [canisterId, "vlhm2-4iaaa-aaaam-qaatq-cai"];

export const App = ({type}) => {
  return (
    <PlugProvider whitelist={whitelist}>
      <div className="fixed top-0 bottom-0 left-0 right-0">
        <Trade type={type} />
      </div>
    </PlugProvider>
  );
};

export default App;