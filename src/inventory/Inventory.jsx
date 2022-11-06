import React, { useEffect, useState } from "react";
import { usePlug } from '@raydeck/useplug'

import BagBox from "./BagBox";
import BagItem from "./BagItem";
import RemoteBox from "./RemoteBox";

import StyledInventory from "./Inventory.style";
import Frame from "../frame/Frame";

import { Button } from "@mui/material";

const isNullOrEmpty = x => x === null || x === undefined || x === "" || x === [];

function Inventory ( { items, remoteItems, updateItemOrder }) {
  const {
    authenticated,
    principal, 
    login
} = usePlug();

const initTradeItems = [0, 1, 2, 3, 4, 5].map(i => {
  return {
    id: i,
    item: null
  }
})

const [remoteTradeItems, setRemoteTradeItems] = useState(initTradeItems)

const [tradeItems, setTradeItems] = useState(initTradeItems)
const [bagBoxes, setBagBoxes] = useState([...Array(18).keys()].map((i) => {
  return ({ id: i, type: 'all', item: null })
}))

useEffect(() => {
  if(!items || items.length === 0) return;
  setBagBoxes(bagBoxes.map((box, i) => {
    return { ...box, item: items[i] ?? null }
  }));
}, [items]);

useEffect(() => {
  if(!remoteItems || remoteItems.length === 0) return;
  setRemoteTradeItems(bagBoxes.map((box, i) => {
    return { ...box, item: remoteItems[i] ?? null }
  }));
}, [remoteItems]);



console.log('authenticated', authenticated);
console.log('principal', principal);

const [accepted, setAccepted] = React.useState(false);

function accept() {
  console.log('trade accepted!');
  setAccepted(true);
}

function cancel() {
  console.log('trade canceled!');
  setAccepted(false);
}

    return (
      <StyledInventory style={{width: "70%", display: "inline-block", height: "100vh", verticalAlign: "middle"}}>
      {!authenticated &&
      <Frame>
        <div style={{minHeight: "100vh"}}>
        {/* center the connect button horizontally and vertically */}
        <Button variant="contained" onClick={() => login()}
        style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>Connect</Button>
        </div>
        </Frame>
      }
      {authenticated &&
        <div style={{minHeight: "100vh", verticalAlign: "middle"}}>
      <Frame>
      <h2 style={{marginBottom: ".25em"}}>Their Trade</h2>
        <div className="boxes-grid" >
          {remoteTradeItems.map(slot => {
            return (
              <RemoteBox
                className={`equip-${slot.id} equip-item`}
                bagId={slot.id}
                accept={false}
                shouldHighlight={false}
                updateItemOrder={updateItemOrder}
                key={slot.id}
              >
                {slot.item && (
                  <BagItem
                    isForTrade={false}
                    item={slot.item}
                    key={slot.id}
                    bagId={slot.id}
                  />
                )}
              </RemoteBox>
            );
          })}
        </div>
      </Frame>
        <Frame >
        <h2 style={{marginBottom: ".25em"}}>Your Trade</h2>
        <div className="boxes-grid">
            {tradeItems.map(slot => {
              return (
                <BagBox
                  className={`equip-${slot.id} equip-item`}
                  bagId={slot.id}
                  accept={'all'}
                  shouldHighlight={accept}
                  updateItemOrder={updateItemOrder}
                  key={slot.id}
                >
                  {slot.item && (
                    <BagItem
                      isForTrade
                      item={slot.item}
                      key={slot.id}
                      bagId={slot.id}
                    />
                  )}
                </BagBox>
              );
            })}
          </div>
        </Frame>

        <Frame>
        {/* center the div horizontally */}
        <div style={{display: "flex", height: "3em", justifyContent: "center", verticalAlign: "middle"}}>
            {/* two buttons: accept (green) and cancel (red) */}
            <Button variant="contained" onClick={() => {accept()}} color="success">Accept</Button>
            <span style={{margin: "1em"}}>
            {/* numerical input for amount of ICP to add to trade */}
            <label htmlFor="icp" style={{marginRight: ".25em"}}>ICP</label>
            <input type="number" id="icp" defaultValue={0} style={{width: "3em", margin: ".25em"}}/>
            </span>
            <Button variant="contained" onClick={() => {cancel()}} disabled={!accepted} color="error">Cancel</Button>
        </div>
        </Frame>

        <Frame  style={{minHeight: "30vh"}}>
        <h2 style={{marginBottom: ".25em"}}>Inventory</h2>

          <div className="boxes-grid">
            {bagBoxes.map(bag => {
              
              const item = bag.item;

              console.log('item', item);
              return (
                <BagBox
                  bagId={bag.id}
                  key={bag.id}
                  hasItem={!isNullOrEmpty(item)}
                  updateItemOrder={updateItemOrder}
                >
                  {item && (
                    <BagItem
                      key={`${bag.id}${item.name}`}
                      bagId={bag.id}
                      item={item}
                    />
                  )}
                </BagBox>
              );
            })}
          </div>
        </Frame>
        </div>
                }    
                 </StyledInventory>
    );
}

export default Inventory;
