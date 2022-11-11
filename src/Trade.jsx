// import { usePlug } from "@raydeck/useplug";
import {
  middleUsePlug as usePlug,
  middleExistTrade,
  middleTradeData,
  middleInventoryItems,
} from "./icMiddle";
import React, { useEffect, useState } from "react";
import { Principal } from "@dfinity/principal";

import BagBox from "./BagBox";
import BagItem from "./BagItem";
import RemoteBox from "./RemoteBox";

import Frame from "./frame/Frame";
import StyledTrade from "./Trade.style";

import { Button, Input } from "@mui/material";

import { idlFactory as trade_idl } from "./trade_canister/trade_canister.did.js";

import { getAllUserNFTs } from "@psychedelic/dab-js";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { clone } from "./funcs";
import { Stack } from "@mui/material";
import { inventoryBoxNum } from "./constants";
import { useStore } from "./store";
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

  const {
    tradeData,
    updateTradeData,
    inventoryItems,
    updateInventoryItems,
    remoteBoxes,
    updateRemoteBoxes,
    localBoxes,
    updateLocalBoxes,
    inventoryBoxes,
    updateInventoryBoxes,
    partner,
    updatePartner,
    plugActor,
    updatePlugActor,
    existTrade,
    updateExistTrade,
    accepted,
    updateAccepted,
    boxNumPerPage,
    updateBoxNumPerPage,
    curPage,
    updateCurPage,
    loading,
    updateLoading,
  } = useStore();

  useEffect(() => {
    // Todo: check if the partner accepted.
    updateAccepted(true);

    updatePartner("jf9s8s");

    setTimeout(() => {
      updateLoading(false);
    }, 2000);
  }, []);

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

      updateInventoryItems(newTokens);
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
          updatePlugActor(actor);
          actor.get_trade_by_id(tradeId).then((res) => {
            console.log("trade response:", res);
            updateTradeData(res);

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
      updateExistTrade(true);

      console.log("***** TRADE DETECTED *****");
    }
  }, []);

  useEffect(() => {
    // console.log("inventoryItems: ", inventoryItems, inventoryItems.length);
    if (!inventoryItems || inventoryItems.length === 0) return;
    updateInventoryBoxes(
      inventoryBoxes.map((box, i) => {
        // console.log("item: ", i, inventoryItems[i]);
        return { ...box, item: inventoryItems[i] ?? null };
      })
    );
  }, [inventoryItems]);

  function accept() {
    console.log("trade accepted!");
    updateAccepted(true);
  }

  function cancel() {
    console.log("trade canceled!");
    updateAccepted(false);
  }

  const onPrevPage = () => {
    if (curPage <= 1) return;
    updateCurPage(curPage - 1);
  };

  const onNextPage = () => {
    const pageNum = Math.ceil(inventoryBoxNum / boxNumPerPage);
    if (curPage >= pageNum) return;
    updateCurPage(curPage + 1);
  };

  async function startTrade() {
    let _actor = null;
    window.ic.plug
      .createActor({
        canisterId: "jljwu-oiaaa-aaaam-qbala-cai",
        interfaceFactory: trade_idl,
      })
      .then((actor) => {
        _actor = actor;
        updatePlugActor(actor);
        actor.create_trade().then((res) => {
          console.log("res", res);
          updateTradeData(res);
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
              updatePartner(guest);
              console.log("trade partner found!", guest);
              clearInterval(interval);
            }
          }, 2000);
        });
      });
    updateExistTrade(true);
  }

  return (
    <DndProvider backend={HTML5Backend}>
      {/* <DragLayer inventoryItems={inventoryItems} /> */}
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
              {!existTrade && (
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
              {existTrade && !tradeData && (
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
              <Stack
                justifyContent="space-between"
                alignItems="center"
                direction="row"
              >
                <Stack marginBottom={".25em"}>
                  <h2>Their Trade</h2>
                </Stack>
                <Stack color="green" marginBottom=".25em" alignItems="center">
                  {accepted && "[TRADE ACCEPTED]"}
                </Stack>
              </Stack>
              <div className="boxes-grid">
                {remoteBoxes.map((slot, index) => {
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
                        tradeItems={clone(remoteBoxes)}
                        updateTradeItems={updateRemoteBoxes}
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
                {localBoxes.map((slot, index) => {
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
                        tradeItems={clone(localBoxes)}
                        updateTradeItems={updateLocalBoxes}
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
                <span
                  style={{
                    margin: "1em",
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "1em",
                    alignItems: "center",
                  }}
                >
                  {/* numerical input for amount of ICP to add to trade */}
                  <label htmlFor="icp" style={{ marginRight: ".25em" }}>
                    ICP
                  </label>
                  <input
                    type="number"
                    id="icp"
                    defaultValue={0}
                    style={{
                      width: "3em",
                      margin: ".25em",
                      fontSize: "2em",
                      borderRadius: ".2em",
                    }}
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
              <Stack
                justifyContent={"space-between"}
                alignItems={"center"}
                direction={"row"}
              >
                <Stack marginBottom={".25em"}>
                  <h2>Trade</h2>
                </Stack>
                <Stack
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  direction={"row"}
                  gap={".25em"}
                >
                  <Stack style={{ cursor: "pointer" }} onClick={onPrevPage}>
                    <h2> &#60;</h2>
                  </Stack>
                  <Stack color={"red"}>
                    <h2> {curPage}</h2>
                  </Stack>
                  <Stack style={{ cursor: "pointer" }} onClick={onNextPage}>
                    <h2> &#62;</h2>
                  </Stack>
                </Stack>
              </Stack>

              <div className="boxes-grid">
                {inventoryBoxes
                  .slice((curPage - 1) * boxNumPerPage, curPage * boxNumPerPage)
                  .map((bag, index) => {
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
                          index={(curPage - 1) * boxNumPerPage + index}
                          tradeItems={clone(inventoryBoxes)}
                          updateTradeItems={updateInventoryBoxes}
                          tradeLayer="inventory"
                        />
                      </BagBox>
                    );
                  })}
                <Stack
                  style={{
                    position: "absolute",
                    width: "95%",
                    height: "80%",
                    zIndex: 1,
                    display: loading ? "flex" : "none",
                    justifyContent: "center",
                    alignItems: "center",
                    opacity: "0.3",
                    backgroundColor: "white",
                  }}
                >
                  <Stack
                    style={{
                      border: "16px solid #f3f3f3",
                      borderTop: "16px solid #3498db",
                      borderRadius: "50%",
                      width: "130px",
                      height: "130px",
                      animation: "spin 2s linear infinite",
                    }}
                  ></Stack>
                </Stack>
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
              {existTrade && tradeData && !partner && !tradeId && (
                <span
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -40%)",
                  }}
                >
                  <b> WAITING FOR TRADE PARTNER... </b>
                  <br />
                  Send this link to your trade partner
                  <br />
                  <a href={`${url.host}/?tradeId=${tradeData.id}`}>
                    {url.host}/?tradeId={tradeData.id}
                  </a>
                </span>
              )}
              {existTrade && tradeData && partner && (
                <span
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -40%)",
                  }}
                >
                  Trading with {partner}
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
