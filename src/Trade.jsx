// import { usePlug } from "@raydeck/useplug";
import {
  middleUsePlug as usePlug,
  middleTradeInitialized,
  middleTradeData,
  middleItems,
} from "./icMiddle";
import React, { useEffect, useState } from "react";
import { Principal } from "@dfinity/principal";

import BagBox from "./BagBox";
import BagItem from "./BagItem";
import RemoteBox from "./RemoteBox";

import Frame from "./frame/Frame";
import StyledTrade from "./Trade.style";

import { Button } from "@mui/material";

import { idlFactory as trade_idl } from "./trade_canister/trade_canister.did.js";

import { getAllUserNFTs } from "@psychedelic/dab-js";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { clone } from "./funcs";
// import DragLayer from "./DragLayer";

const nullPartner = Principal.fromUint8Array(
  new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 1, 1])
).toText();
const nullPrincipal = "rrkah-fqaaa-aaaaa-aaaaq-cai";

const isNullOrEmpty = (x) =>
  x === null || x === undefined || x === "" || x === [];
const url = new URL(window.location.href);
const tradeId = url.searchParams.get("tradeId");

function Trade({ type, identifier }) {
  // principal is a byte array that should be converted to a string
  // convert using a browser-friendly es6 method
  const { authenticated, principal, login, agent } = usePlug();
  const principalString = principal ? window.ic.plug.principalId : "<none>";
  const initTradeItems = [0, 1, 2, 3, 4, 5].map((i) => {
    return {
      id: i,
      item: null,
    };
  });

  const [items, setItems] = useState(middleItems);
  const [tradePartner, setTradePartner] = useState(null);
  const [remoteTradeItems, setRemoteTradeItems] = useState(
    clone(initTradeItems)
  );
  const [tradeData, setTradeData] = useState(middleTradeData);
  const [plugActor, setPlugActor] = useState(null);
  const [tradeInitialized, setTradeInitialized] = useState(
    middleTradeInitialized
  );
  const [tradeItems, setTradeItems] = useState(clone(initTradeItems));
  const [bagBoxes, setBagBoxes] = useState(
    [...Array(18).keys()].map((i) => {
      return { id: i, type: "all", item: null };
    })
  );
  const [accepted, setAccepted] = React.useState(false);

  useEffect(() => {
    if (!principal) return;
    (async () => {
      const result = await window.ic.plug.requestBalance();
      console.log(result);
      const user = window.ic.plug.principalId;
      const collections = await getAllUserNFTs({
        agent,
        user,
      });
      console.log("collections");
      console.log(collections);
      // make an array of all collections[i].tokens
      const newTokens = {};
      let slot = 0;

      // for each token in each collection in collections, add to allTokens
      collections.forEach((collection) => {
        if (!collection.name.toLowerCase().includes("cipher"))
          collection.tokens.forEach((token) => {
            console.log("token.canister", token.canister);
            if (!token.canister.includes("6hgw2-nyaaa-aaaai-abkqq-cai")) {
              newTokens[slot.toString()] = token;
              newTokens[slot].id = slot;
              slot++;
            }
          });
      });

      setItems(newTokens);
    })();
  }, [principal]);

  useEffect(() => {
    // get the current url with no params
    // get the tradeId params

    // if tradeId is not null, then we are in a trade
    if (tradeId !== null) {
      window.ic.plug
        .createActor({
          canisterId: "jljwu-oiaaa-aaaam-qbala-cai",
          interfaceFactory: trade_idl,
        })
        .then((actor) => {
          setPlugActor(actor);
          actor.get_trade_by_id(tradeId).then((res) => {
            console.log("trade response:", res);
            setTradeData(res);

            const guest = Principal.fromUint8Array(res[0].guest._arr).toText();
            console.log("guest is", guest);

            if (
              guest !== null &&
              guest !== "" &&
              guest !== nullPrincipal &&
              guest !== nullPartner
            ) {
              if (guest !== principal) {
                // the trade is already initialized with another wallet!
                return console.error(
                  "trade already initialized with another wallet!",
                  guest
                );
              }
            }

            actor.join_trade(tradeId).then((res) => {
              console.log("join trade response:", res);
            });
          });
        });
      setTradeInitialized(true);

      console.log("***** TRADE DETECTED *****");
    }
  }, []);

  useEffect(() => {
    // console.log("items: ", items, items.length);
    if (!items || items.length === 0) return;
    setBagBoxes(
      bagBoxes.map((box, i) => {
        // console.log("item: ", i, items[i]);
        return { ...box, item: items[i] ?? null };
      })
    );
  }, [items]);

  // console.log("authenticated", authenticated);
  // console.log("principal", principal);
  // console.log("bagBoxes: ", bagBoxes);

  function accept() {
    console.log("trade accepted!");
    setAccepted(true);
  }

  function cancel() {
    console.log("trade canceled!");
    setAccepted(false);
  }

  // const updateItemOrder = (bagId, dragItem) => {
  //   const target = items[bagId]; // the box we're dropping to
  //   const origin = items[dragItem.bagId];
  //   if (target) {
  //     if (dragItem.isForTrade && target.type !== dragItem.type) {
  //       return false;
  //     }
  //     // if we have an item in it
  //     items[dragItem.bagId] = target; // move that item to the drag past location
  //   } else {
  //     delete items[dragItem.bagId]; // otherwise remove the previous reference
  //   }
  //   items[bagId] = origin; // move the actual drag item to new bag
  //   setItems(items);
  // };

  async function startTrade() {
    let _actor = null;
    window.ic.plug
      .createActor({
        canisterId: "jljwu-oiaaa-aaaam-qbala-cai",
        interfaceFactory: trade_idl,
      })
      .then((actor) => {
        _actor = actor;
        setPlugActor(actor);
        actor.create_trade().then((res) => {
          console.log("res", res);
          setTradeData(res);
          const interval = setInterval(async () => {
            console.log("looking for trade partner...");

            const res2 = await _actor.get_trade_by_id(res.id);
            console.log("tradeData", res2[0]);

            const guest = Principal.fromUint8Array(res2[0].guest._arr).toText();
            console.log("guest", guest);
            console.log("principal of trading partner is", guest);
            if (
              guest !== null &&
              guest !== "" &&
              guest !== nullPrincipal &&
              guest !== nullPartner
            ) {
              setTradePartner(guest);
              console.log("trade partner found!", guest);
              clearInterval(interval);
            }
          }, 2000);
        });
      });
    setTradeInitialized(true);
  }

  return (
    <DndProvider backend={HTML5Backend}>
      {/* <DragLayer items={items} /> */}
      <StyledTrade
        style={{
          width: "70%",
          display: "inline-block",
          height: "100vh",
          verticalAlign: "middle",
        }}
      >
        {!authenticated && (
          <Frame>
            <div style={{ minHeight: "100vh" }}>
              {/* center the connect button horizontally and vertically */}
              <Button
                variant="contained"
                onClick={() => {
                  login();
                }}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                Connect
              </Button>
            </div>
          </Frame>
        )}
        {authenticated && !tradeData && (
          <Frame>
            <div style={{ minHeight: "100vh" }}>
              {/* center the connect button horizontally and vertically */}
              {!tradeInitialized && (
                <Button
                  variant="contained"
                  onClick={() => startTrade()}
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  Start Trade
                </Button>
              )}
              {tradeInitialized && !tradeData && (
                <Button
                  variant="disabled"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  Starting...
                </Button>
              )}
            </div>
          </Frame>
        )}
        {authenticated && tradeData && (
          <div style={{ minHeight: "100vh", verticalAlign: "middle" }}>
            <Frame>
              <h2 style={{ marginBottom: ".25em" }}>Their Trade</h2>
              <div className="boxes-grid">
                {remoteTradeItems.map((slot, index) => {
                  return (
                    <RemoteBox
                      className={`equip-${slot.id} equip-item`}
                      bagId={slot.id}
                      accept={false}
                      shouldHighlight={false}
                      // updateItemOrder={updateItemOrder}
                      key={slot.id}
                    >
                      <BagItem
                        isForTrade={false}
                        item={clone(slot.item)}
                        key={`remote_${slot.id}`}
                        bagId={slot.id}
                        index={index}
                        tradeItems={clone(remoteTradeItems)}
                        updateTradeItems={setRemoteTradeItems}
                        tradeLayer="remote"
                      />
                    </RemoteBox>
                  );
                })}
              </div>
            </Frame>
            <Frame>
              <h2 style={{ marginBottom: ".25em" }}>Your Trade</h2>
              <div className="boxes-grid">
                {tradeItems.map((slot, index) => {
                  return (
                    <BagBox
                      className={`equip-${slot.id} equip-item`}
                      bagId={slot.id}
                      accept={"all"}
                      shouldHighlight={accept}
                      // updateItemOrder={updateItemOrder}
                      key={slot.id}
                    >
                      <BagItem
                        isForTrade={true}
                        item={clone(slot.item)}
                        key={`local_${slot.id}`}
                        bagId={slot.id}
                        index={index}
                        tradeItems={clone(tradeItems)}
                        updateTradeItems={setTradeItems}
                        tradeLayer="local"
                      />
                    </BagBox>
                  );
                })}
              </div>
            </Frame>

            <Frame>
              {/* center the div horizontally */}
              <div
                style={{
                  display: "flex",
                  height: "3em",
                  justifyContent: "center",
                  verticalAlign: "middle",
                }}
              >
                {/* two buttons: accept (green) and cancel (red) */}
                <Button
                  variant="contained"
                  onClick={() => {
                    accept();
                  }}
                  color="success"
                >
                  Accept
                </Button>
                <span style={{ margin: "1em" }}>
                  {/* numerical input for amount of ICP to add to trade */}
                  <label htmlFor="icp" style={{ marginRight: ".25em" }}>
                    ICP
                  </label>
                  <input
                    type="number"
                    id="icp"
                    defaultValue={0}
                    style={{ width: "3em", margin: ".25em" }}
                  />
                </span>
                <Button
                  variant="contained"
                  onClick={() => {
                    cancel();
                  }}
                  disabled={!accepted}
                  color="error"
                >
                  Cancel
                </Button>
              </div>
            </Frame>

            <Frame style={{ minHeight: "30vh" }}>
              <h2 style={{ marginBottom: ".25em" }}>Trade</h2>

              <div className="boxes-grid">
                {bagBoxes.map((bag, index) => {
                  const item = bag.item;
                  // console.log("item: ", item);

                  return (
                    <BagBox
                      bagId={bag.id}
                      key={bag.id}
                      hasItem={!isNullOrEmpty(item)}
                      // updateItemOrder={updateItemOrder}
                    >
                      <BagItem
                        key={`inventory_${bag.id}`}
                        bagId={bag.id}
                        item={clone(item)}
                        index={index}
                        tradeItems={clone(bagBoxes)}
                        updateTradeItems={setBagBoxes}
                        tradeLayer="inventory"
                      />
                    </BagBox>
                  );
                })}
              </div>
            </Frame>
          </div>
        )}
      </StyledTrade>

      <div
        style={{
          width: "30%",
          display: "inline-block",
          verticalAlign: "top",
          height: "100%",
        }}
      >
        <Frame style={{ height: "100%" }}>
          <div style={{ height: "100%", minHeight: "100vh" }}>
            <div style={{ padding: "10px" }}></div>
            <div style={{ padding: "10px" }}>
              <b>CONNECTION STATUS</b>
              <br />
              {authenticated && principal
                ? "Connected with " + principalString
                : "Waiting for IC wallet connection..."}
              {tradeInitialized && tradeData && !tradePartner && !tradeId && (
                <span
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -40%)",
                  }}
                >
                  <b> WAITING FOR TRADE PARNTER... </b>
                  <br />
                  Send this link to your trade partner
                  <br />
                  <a href={`${url.host}/?tradeId=${tradeData.id}`}>
                    {url.host}/?tradeId={tradeData.id}
                  </a>
                </span>
              )}
              {tradeInitialized && tradeData && tradePartner && (
                <span
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -40%)",
                  }}
                >
                  Trading with {tradePartner}
                </span>
              )}
            </div>
          </div>
        </Frame>
      </div>
    </DndProvider>
  );
}

export default Trade;
