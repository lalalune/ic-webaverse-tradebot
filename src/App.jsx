import React from "react";

import { Trade } from "./Trade";

import { PlugProvider } from "@raydeck/useplug";

// The mainnet Router Canister Id
const canister_id = "lj532-6iaaa-aaaah-qcc7a-cai";

// Whitelist the canister id for Plug permissions
const whitelist = [canister_id, "vlhm2-4iaaa-aaaam-qaatq-cai", "ryjl3-tyaaa-aaaaa-aaaba-cai"];

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