import React, {useEffect, useState} from "react";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import DragLayer from "./DragLayer";
import StyledApp from "./App.style";
import Inventory from "./inventory";
import Frame from "./frame/Frame";
import { usePlug } from '@raydeck/useplug'
import { getAllUserNFTs } from '@psychedelic/dab-js'

function App (props) {
  const {
    authenticated,
    agent,
    principal, 
} = usePlug();
// principal is a byte array that should be converted to a string
// convert using a browser-friendly es6 method
const principalString = principal ? window.ic.plug.principalId : "<none>";

useEffect(() => {
  if(!principal) return;
  (async () => {
    const result = await window.ic.plug.requestBalance();
    console.log(result);
    const user = window.ic.plug.principalId;
    const collections = await getAllUserNFTs({
      agent,
      user,
    })
    console.log('collections')
    console.log(collections)
    // make an array of all collections[i].tokens
    const newTokens = {}
    let slot = 0;

    // for each token in each collection in collections, add to allTokens
    collections.forEach((collection) => {
      if(!collection.name.toLowerCase().includes('cipher'))
        collection.tokens.forEach((token) => {
          console.log('token.canister', token.canister)
          if(!token.canister.includes('6hgw2-nyaaa-aaaai-abkqq-cai')){
    
            newTokens[(slot).toString()] = token;
            newTokens[slot].id = slot
            slot++;
          }
        })
    });

    setState({ items: newTokens });

  })();
}, [principal])

  const [connected, setConnected] = useState(false);
    const [state, setState] = useState({
      items: [],
    });

  const updateItemOrder = (bagId, dragItem) => {
    const items = state.items;
    const target = items[bagId]; // the box we're droping to
    const origin = items[dragItem.bagId];
    if (target) {
      if (dragItem.isForTrade && target.type !== dragItem.type) {
        return false;
      }
      // if we have an item in it
      items[dragItem.bagId] = target; // move that item to the drag past location
    } else {
      delete items[dragItem.bagId]; // otherwise remove the previous reference
    }
    items[bagId] = origin; // move the actual drag item to new bag
    setState({ items });
  };

    return (
      <StyledApp>
        <DndProvider backend={Backend}>
          <DragLayer items={state.items} />
          {state.items && (
            <Inventory items={state.items} remoteItems={[]} connected={connected} connect={() => {setConnected(true)}} updateItemOrder={updateItemOrder} />
            )}
      <div style={{width: "30%", display: "inline-block", verticalAlign: "top", height: "100%"}}>
      <Frame style={{height:"100%"}}>
      
      <div style={{height: "100%", minHeight: "100vh"}}>
      <div style={{padding: "10px"}}>
      </div>
      <div style={{padding: "10px"}}>
      {authenticated && principal ? principalString : "Please connect with your IC wallet"}
      </div>
      </div>
      </Frame>
      </div>
        </DndProvider>
      </StyledApp>
    );
}

export default App;
