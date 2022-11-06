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
    const allTokens = [];
    const t = collections.reduce((acc, collection) => {
      console.log('acc', acc);
      return allTokens.concat(collection.tokens);
    }).map(token => {
     return token
    });
    
    const newTokens = {}

    t.forEach((token, i) => {
      newTokens[i.toString()] = token;
      newTokens[i].id = i
    });
    console.log('newTokens', newTokens)



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
      <Frame>
      <div style={{height: "100%", minHeight: "630px"}}>
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
