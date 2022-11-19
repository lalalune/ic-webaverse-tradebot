import { Actor, HttpAgent } from "@dfinity/agent";

// Imports and re-exports candid interface
import { idlFactory } from "./trade_canister.did.js";
export { idlFactory } from "./trade_canister.did.js";

// CANISTER_ID is replaced by webpack based on node environment
// export const canister_id = process.env.TRADE_CANISTER_CANISTER_ID;
export const canister_id = "rrkah-fqaaa-aaaaa-aaaaq-cai";

export const createActor = (canister_id, options = {}) => {
  const agent = options.agent || new HttpAgent({ ...options.agentOptions });

  if (options.agent && options.agentOptions) {
    console.warn(
      "Detected both agent and agentOptions passed to createActor. Ignoring agentOptions and proceeding with the provided agent."
    );
  }

  // Fetch root key for certificate validation during development
  // if (process.env.DFX_NETWORK !== "ic") {
  agent.fetchRootKey().catch((err) => {
    console.warn(
      "Unable to fetch root key. Check to ensure that your local replica is running"
    );
    console.error(err);
  });
  // }

  // Creates an actor with using the candid interface and the HttpAgent
  return Actor.createActor(idlFactory, {
    agent,
    canister_id,
    ...options.actorOptions,
  });
};

export const trade_canister = createActor(canister_id, {
  agentOptions: {
    host: 'http://127.0.0.1:4943'
  }
});
