import { usePlug } from '@raydeck/useplug';
import React, { useEffect, useState } from "react";

import BagBox from "./BagBox";
import BagItem from "./BagItem";
import RemoteBox from "./RemoteBox";

import Frame from "./frame/Frame";
import StyledInventory from "./Inventory.style";

import { Button } from "@mui/material";

import { idlFactory as trade_idl } from './trade_canister/trade_canister.did.js';

import { getAllUserNFTs } from '@psychedelic/dab-js';
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import DragLayer from "./DragLayer";

const canisterId = import.meta.env.TRADE_CANISTER_CANISTER_ID;

const isNullOrEmpty = x => x === null || x === undefined || x === "" || x === [];

function Inventory() {
  const {
    authenticated,
    principal,
    login,
    agent
  } = usePlug();
  const principalString = principal ? window.ic.plug.principalId : "<none>";

  const [connected, setConnected] = useState(false);
  const [items, setItems] = useState({});
  const [remoteItems, setRemoteItems] = useState({});
  const [tradePartner, setTradePartner] = useState(null);


// principal is a byte array that should be converted to a string
// convert using a browser-friendly es6 method

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

    setItems(newTokens);

  })();
}, [principal])

  const updateItemOrder = (bagId, dragItem) => {
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
    setItems(items);
  };

  const initTradeItems = [0, 1, 2, 3, 4, 5].map(i => {
    return {
      id: i,
      item: null
    }
  })

  const [remoteTradeItems, setRemoteTradeItems] = useState(initTradeItems)
  const [tradeData, setTradeData] = useState(null)
  const [plugActor, setPlugActor] = useState(null)
  const [tradeInitialized, setTradeInitialized] = useState(false)
  const [tradeItems, setTradeItems] = useState(initTradeItems);


  useEffect(() => {
    // get the current url with no params
    const url = new URL(window.location.href);

    // get the tradeid params
    const tradeId = url.searchParams.get("tradeId");

    // if tradeId is not null, then we are in a trade
    if (tradeId !== null) {
      window.ic.plug.createActor({ canisterId: 'jljwu-oiaaa-aaaam-qbala-cai', interfaceFactory: trade_idl }).then(actor => {
        setPlugActor(actor);
        actor.get_trade_by_id(tradeId).then(res => {
          console.log('trade response:', res);
          setTradeData(res);
        });
      });
      setTradeInitialized(true);

      console.log("***** TRADE DETECTED *****")
    }

  }, [])

  const [bagBoxes, setBagBoxes] = useState([...Array(18).keys()].map((i) => {
    return ({ id: i, type: 'all', item: null })
  }))

  useEffect(() => {
    if (!items || items.length === 0) return;
    setBagBoxes(bagBoxes.map((box, i) => {
      return { ...box, item: items[i] ?? null }
    }));
  }, [items]);

  useEffect(() => {
    if (!remoteItems || remoteItems.length === 0) return;
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

  async function startTrade() {
    window.ic.plug.createActor({ canisterId: 'jljwu-oiaaa-aaaam-qbala-cai', interfaceFactory: trade_idl }).then(actor => {
      setPlugActor(actor);
      actor.create_trade().then(res => {
        console.log('res', res);
        setTradeData(res);
      });
    });
    setTradeInitialized(true);
  }

  return (
    <DndProvider backend={Backend}>
      <DragLayer items={items} />
    <StyledInventory style={{ width: "70%", display: "inline-block", height: "100vh", verticalAlign: "middle" }}>
      {!authenticated &&
        <Frame>
          <div style={{ minHeight: "100vh" }}>
            {/* center the connect button horizontally and vertically */}
            <Button variant="contained" onClick={() => login()}
              style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>Connect</Button>
          </div>
        </Frame>
      }
      {authenticated && !tradeData &&
        <Frame>
          <div style={{ minHeight: "100vh" }}>
            {/* center the connect button horizontally and vertically */}
            {!tradeInitialized &&
            <Button variant="contained" onClick={() => startTrade()}
              style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>Start Trade</Button>
            }
            {tradeInitialized && !tradeData &&
              <Button variant="disabled"
              style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>Starting...</Button>
            }
          </div>
        </Frame>
      }
      {authenticated && tradeData &&
        <div style={{ minHeight: "100vh", verticalAlign: "middle" }}>
          <Frame>
            <h2 style={{ marginBottom: ".25em" }}>Their Trade</h2>
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
            <h2 style={{ marginBottom: ".25em" }}>Your Trade</h2>
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
            <div style={{ display: "flex", height: "3em", justifyContent: "center", verticalAlign: "middle" }}>
              {/* two buttons: accept (green) and cancel (red) */}
              <Button variant="contained" onClick={() => { accept() }} color="success">Accept</Button>
              <span style={{ margin: "1em" }}>
                {/* numerical input for amount of ICP to add to trade */}
                <label htmlFor="icp" style={{ marginRight: ".25em" }}>ICP</label>
                <input type="number" id="icp" defaultValue={0} style={{ width: "3em", margin: ".25em" }} />
              </span>
              <Button variant="contained" onClick={() => { cancel() }} disabled={!accepted} color="error">Cancel</Button>
            </div>
          </Frame>

          <Frame style={{ minHeight: "30vh" }}>
            <h2 style={{ marginBottom: ".25em" }}>Inventory</h2>

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

    <div style={{width: "30%", display: "inline-block", verticalAlign: "top", height: "100%"}}>
    <Frame style={{height:"100%"}}>
    
    <div style={{height: "100%", minHeight: "100vh"}}>
    <div style={{padding: "10px"}}>
    </div>
    <div style={{padding: "10px"}}>
    {authenticated && principal ? principalString : "Please connect with your IC wallet"}
    <span>Trade initialized: {tradeInitialized} | Trade data: {tradeData ? JSON.stringify(tradeData) : "none"}</span>
    {tradeInitialized && tradeData && !tradePartner &&
      <span style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -40%)" }}>
        Send this link to your trade partner
          <br />
        <a href={`https://ic-trade.vercel.app/?tradeId=${tradeData.id}`}>https://ic-trade.vercel.app/?tradeId={tradeData.id}</a>
      </span>
    }
    </div>
    </div>
    </Frame>
    </div>
    </DndProvider>
  );
}

export default Inventory;
