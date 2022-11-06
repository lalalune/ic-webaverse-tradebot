import React, { useEffect } from "react";
import { usePlug } from '@raydeck/useplug'

import * as R from "ramda";
import BagBox from "./BagBox";
import BagItem from "./BagItem";
import RemoteBox from "./RemoteBox";

import { bagConfig, itemDictionary, Types } from "../config";

import { isBlank } from "../helpers";
import StyledInventory from "./Inventory.style";
import Frame from "../frame/Frame";
import { remoteItemSlots } from "./helpers";

import { playerItemSlots } from "./helpers";
import { Button } from "@mui/material";

const calculateAccept = (playerSlotType) => {
  if (playerSlotType === Types.MAIN_HAND || playerSlotType === Types.OFF_HAND)
    return Types.WEAPON;

  return playerSlotType;
};

function Inventory (props) {
  const {
    authenticated,
    principal, 
    login
} = usePlug();

console.log('authenticated', authenticated);
console.log('principal', principal);


    const { items, updateItemOrder } = props;
    return (
      <StyledInventory style={{width: "70%", display: "inline-block", height: "100%"}}>
      {!authenticated &&
      <Frame>
        <div style={{minHeight: "630px"}}>
        {/* connect button */}
        <Button variant="contained" onClick={() => login()}>Connect</Button>
        </div>
        </Frame>
      }
      {authenticated &&
        <div>
      <Frame>
      <h1>Their Trade</h1> 
        <div className="boxes-grid">
          {remoteItemSlots.all.map(type => {
            return (
              <RemoteBox
                className={`equip-${type} equip-item`}
                bagId={type}
                accept={false}
                shouldHighlight={false}
                updateItemOrder={updateItemOrder}
                key={type}
              >
                {items[type] && (
                  <BagItem
                    isEquiped
                    item={itemDictionary[items[type].id]}
                    key={type}
                    bagId={type}
                  />
                )}
              </RemoteBox>
            );
          })}
        </div>
      </Frame>
        <Frame>
        <h1>Your Trade</h1> 
          <div className="boxes-grid">
            {playerItemSlots.all.map(type => {
              const accept = calculateAccept(type);
              return (
                <BagBox
                  className={`equip-${type} equip-item`}
                  bagId={type}
                  accept={accept}
                  shouldHighlight={accept}
                  updateItemOrder={updateItemOrder}
                  key={type}
                >
                  {items[type] && (
                    <BagItem
                      isEquiped
                      item={itemDictionary[items[type].id]}
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
            {/* two buttons: accept (green) and cancel (red) */}
            <Button variant="contained" color="success">Accept</Button>
            {/* numerical input for amount of ICP to add to trade */}
            <label htmlFor="icp">ICP</label>
            <input type="number" id="icp" defaultValue={0} style={{width: "30px"}}/>
            <label htmlFor="wicp">wICP</label>
            <input type="number" id="wicp" defaultValue={0} style={{width: "30px"}}/>
            <label htmlFor="xtc">XTC</label>
            <input type="number" id="xtc" defaultValue={0} style={{width: "30px"}}/>
            <Button variant="contained" color="error">Cancel</Button>
        </Frame>

        <Frame>
          <div className="boxes-grid">
            {bagConfig.bagBoxes.map(bagId => {
              const item = itemDictionary[R.path([bagId, "id"], items)];

              return (
                <BagBox
                  bagId={bagId}
                  key={bagId}
                  hasItem={!isBlank(item)}
                  updateItemOrder={updateItemOrder}
                >
                  {item && (
                    <BagItem
                      key={`${bagId}${item.name}`}
                      bagId={bagId}
                      count={R.path([bagId, "count"], items)}
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
