import React, { useEffect } from "react";
import { usePlug } from '@raydeck/useplug'

import BagBox from "./BagBox";
import BagItem from "./BagItem";
import RemoteBox from "./RemoteBox";

import { bagConfig, tradeSlots } from "../config";

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
      <StyledInventory style={{width: "70%", display: "inline-block", height: "100%"}}>
      {!authenticated &&
      <Frame>
        <div style={{minHeight: "630px"}}>
        {/* center the connect button horizontally and vertically */}
        <Button variant="contained" onClick={() => login()}
        style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>Connect</Button>
        </div>
        </Frame>
      }
      {authenticated &&
        <div>
      <Frame>
      <h2 style={{marginBottom: ".25em"}}>Their Trade</h2>
        <div className="boxes-grid">
          {tradeSlots.map(slotId => {
            return (
              <RemoteBox
                className={`equip-${slotId} equip-item`}
                bagId={slotId}
                accept={false}
                shouldHighlight={false}
                updateItemOrder={updateItemOrder}
                key={slotId}
              >
                {remoteItems[slotId] && (
                  <BagItem
                    isForTrade={false}
                    item={remoteItems[slotId]}
                    key={slotId}
                    bagId={slotId}
                  />
                )}
              </RemoteBox>
            );
          })}
        </div>
      </Frame>
        <Frame>
        <h2 style={{marginBottom: ".25em"}}>Your Trade</h2>
        <div className="boxes-grid">
            {tradeSlots.map(type => {
              return (
                <BagBox
                  className={`equip-${type} equip-item`}
                  bagId={type}
                  accept={'all'}
                  shouldHighlight={accept}
                  updateItemOrder={updateItemOrder}
                  key={type}
                >
                  {items[type] && (
                    <BagItem
                      isForTrade
                      item={items[type].id}
                      key={type}
                      bagId={type}
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
            <label htmlFor="wicp" style={{marginRight: ".25em"}}>wICP</label>
            <input type="number" id="wicp" defaultValue={0} style={{width: "3em", margin: ".25em"}}/>
            <label htmlFor="xtc" style={{marginRight: ".25em"}}>XTC</label>
            <input type="number" id="xtc" defaultValue={0} style={{width: "3em", margin: ".25em"}}/>
            </span>
            <Button variant="contained" onClick={() => {cancel()}} disabled={!accepted} color="error">Cancel</Button>
        </div>
        </Frame>

        <Frame>
        <h2 style={{marginBottom: ".25em"}}>Inventory</h2>

          <div className="boxes-grid">
            {bagConfig.bagBoxes.map(bagId => {
              
              const item = bagId.id;
              console.log('item', item);
              return (
                <BagBox
                  bagId={bagId}
                  key={bagId}
                  hasItem={!isNullOrEmpty(item)}
                  updateItemOrder={updateItemOrder}
                >
                  {item && (
                    <BagItem
                      key={`${bagId}${item.name}`}
                      bagId={bagId}
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
