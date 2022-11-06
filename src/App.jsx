import React, {useEffect, useState} from "react";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import * as R from "ramda";
import { Types } from "./config";
import DragLayer from "./DragLayer";
import StyledApp from "./App.style";
import { isBlank, canStack } from "./helpers";
import Inventory from "./inventory";
import { Button } from "@mui/material";
import Frame from "./frame/Frame";
import { usePlug } from '@raydeck/useplug'
import { Buffer } from 'buffer';
import { getAllUserNFTs } from '@psychedelic/dab-js'
import {Principal} from '@dfinity/principal';

// this would likely be followed by an api call to retrieve item data from those id's.
const items = {
  3: { id: 7 },
  6: { id: 8 },
  7: { id: 10 },
  8: { id: 11 }
};

function Utf8ArrayToStr(array) {
  var out, i, len, c;
  var char2, char3;

  out = "";
  len = array.length;
  i = 0;
  while(i < len) {
  c = array[i++];
  switch(c >> 4)
  { 
    case 0: case 1: case 2: case 3: case 4: case 5: case 6: case 7:
      // 0xxxxxxx
      out += String.fromCharCode(c);
      break;
    case 12: case 13:
      // 110x xxxx   10xx xxxx
      char2 = array[i++];
      out += String.fromCharCode(((c & 0x1F) << 6) | (char2 & 0x3F));
      break;
    case 14:
      // 1110 xxxx  10xx xxxx  10xx xxxx
      char2 = array[i++];
      char3 = array[i++];
      out += String.fromCharCode(((c & 0x0F) << 12) |
                     ((char2 & 0x3F) << 6) |
                     ((char3 & 0x3F) << 0));
      break;
  }
  }

  return out;
}

function App (props) {
  const {
    authenticated,
    agent,
    principal, 
} = usePlug();
console.log('principal', principal)
// principal is a byte array that should be converted to a string
// convert using a browser-friendly es6 method
const principalString = principal ? window.ic.plug.principalId : "<none>";

const [tokens, setTokens] = useState([]);

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
     token.type = Types.ICTOKEN 
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
      items,
    });

  const updateItemOrder = (bagId, dragItem) => {
    const items = state.items;
    const target = items[bagId]; // the box we're droping to
    const origin = R.clone(items[dragItem.bagId]);
    const shouldStack = canStack(
      R.prop("id", target),
      R.prop("id", origin),
      false
    );
    if (target) {
      if (dragItem.isEquiped && target.type !== dragItem.type) {
        return false;
      }
      // if we have an item in it
      if (shouldStack) {
        origin.count += target.count;
        delete items[dragItem.bagId];
      } else {
        items[dragItem.bagId] = target; // move that item to the drag past location
      }
    } else {
      delete items[dragItem.bagId]; // otherwise remove the previous reference
    }
    items[bagId] = origin; // move the actual drag item to new bag
    setState({ items });
  };

    return (
      <StyledApp>
        <DndProvider backend={Backend}>
          <DragLayer items={items} />
          <Inventory items={items} connected={connected} connect={() => {setConnected(true)}} updateItemOrder={updateItemOrder} />
      <div style={{width: "30%", display: "inline-block", verticalAlign: "top", height: "100%"}}>
      <Frame>
      <div style={{height: "100%", minHeight: "630px"}}>
      <div style={{padding: "10px"}}>
      {authenticated ? "authenticated" : "not authenticated"}
      </div>
      <div style={{padding: "10px"}}>
      {principal ? principalString : "no principal"}
      </div>
      </div>
      </Frame>
      </div>
        </DndProvider>
      </StyledApp>
    );
}

export default App;
