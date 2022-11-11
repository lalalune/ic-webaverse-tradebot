import { usePlug } from "@raydeck/useplug";
import React, { useEffect } from "react";
import { Principal } from "@dfinity/principal";
import BagBox from "./BagBox";
import BagItem from "./BagItem";
import RemoteBox from "./RemoteBox";
import Frame from "./frame/Frame";
import StyledTrade from "./Trade.style";
import { Button } from "@mui/material";
import { idlFactory } from "./trade_canister/trade_canister.did.js";
import { getAllUserNFTs } from "@psychedelic/dab-js";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { clone, getInventoryBoxes } from "./funcs";
import { Stack } from "@mui/material";
import { inventoryBoxNum } from "./constants";
import { useStore } from "./store";
import { Loading } from "./Loading";
import { ItemDetails } from "./ItemDetails";

const nullPartner = Principal.fromUint8Array(
  new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 1, 1])
).toText();
const nullPrincipal = "rrkah-fqaaa-aaaaa-aaaaq-cai";
const url = new URL(window.location.href);
const tradeId = url.searchParams.get("tradeId");
console.log("tradeId: ", tradeId);

export const Trade = () => {
  // principal is a byte array that should be converted to a string
  // convert using a browser-friendly es6 method
  const { authenticated, principal, login, agent } = usePlug();
  const principalString = principal ? window.ic.plug.principalId : "<none>";
  const {
    isCreator,
    updateIsCreator,
    tradeData,
    updateTradeData,
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
    (async () => {
      // If tradeId is not null, then we are in a trade
      if (tradeId) {
        updateLoading(true);
        const actor = await window.ic.plug.createActor({
          canisterId: "jljwu-oiaaa-aaaam-qbala-cai",
          interfaceFactory: idlFactory,
        });
        updatePlugActor(actor);
        const trade = await actor.get_trade_by_id(tradeId);
        console.log("get_trade_by_id trade: ", trade);
        updateTradeData(trade);
        updateIsCreator(false);
        const guest = Principal.fromUint8Array(trade[0].guest._arr).toText();
        console.log("get_trade_by_id guest: ", guest);
        const host = Principal.fromUint8Array(trade[0].host._arr).toText();
        console.log("get_trade_by_id host: ", host);

        if (
          guest !== null &&
          guest !== "" &&
          guest !== nullPrincipal &&
          guest !== nullPartner
        ) {
          if (guest !== principal) {
            return console.error(
              "Trade already initialized to another wallet! guest: ",
              guest
            );
          }
        }

        if (
          host !== null &&
          host !== "" &&
          host !== nullPrincipal &&
          host !== nullPartner
        ) {
          console.log("Trade partner found! host: ", host);
          updatePartner(host);
        }

        const tradeJoined = await actor.join_trade(tradeId);
        console.log("tradeJoined: ", tradeJoined);
        updateExistTrade(true);
        console.log("***** TRADE DETECTED *****");
        updateLoading(false);
      }
    })();
  }, []);

  useEffect(() => {
    if (!principal) return;
    (async () => {
      updateLoading(true);
      const user = window.ic.plug.principalId;
      const balance = await window.ic.plug.requestBalance();
      console.log("balance: ", balance);
      const collections = await getAllUserNFTs({
        agent,
        user,
      });
      console.log("collections: ", collections);

      // make an array of all collections[i].tokens
      const newTokens = {};
      let slot = 0;

      // collections.forEach((collection) => {
      //   if (!collection.name.toLowerCase().includes("cipher"))
      //     collection.tokens.forEach((token) => {
      //       if (!token.canister.includes("6hgw2-nyaaa-aaaai-abkqq-cai")) {
      //         newTokens[slot.toString()] = token;
      //         newTokens[slot].id = slot;
      //         slot++;
      //       }
      //     });
      // });

      collections.forEach((collection) => {
        collection.tokens.forEach((token) => {
          newTokens[slot.toString()] = token;
          newTokens[slot].id = slot;
          slot++;
        });
      });

      console.log("newTokens: ", newTokens);

      updateInventoryBoxes(getInventoryBoxes(newTokens));
      updateLoading(false);
    })();
  }, [principal]);

  const startTrade = async () => {
    updateLoading(true);
    const actor = await window.ic.plug.createActor({
      canisterId: "jljwu-oiaaa-aaaam-qbala-cai",
      interfaceFactory: idlFactory,
    });
    updatePlugActor(actor);
    const trade = await actor.create_trade();
    console.log("new trade: ", trade);
    updateTradeData(trade);
    updateIsCreator(true);
    const interval = setInterval(async () => {
      console.log("Looking for trade partner...");
      const rtTrade = await actor.get_trade_by_id(trade.id);
      console.log("rtTrade: ", rtTrade[0]);
      const guest = Principal.fromUint8Array(rtTrade[0].guest._arr).toText();
      console.log("Principal of trading partner: ", guest);
      if (
        guest !== null &&
        guest !== "" &&
        guest !== nullPrincipal &&
        guest !== nullPartner
      ) {
        updatePartner(guest);
        console.log("Trade partner found! guest: ", guest);
        clearInterval(interval);
      }
    }, 2000);
    updateExistTrade(true);
    updateLoading(false);
  };

  const onAccept = () => {
    if (!plugActor) return;
    plugActor.accept(tradeData.id);
    updateAccepted(true);
    console.log("Trade accepted!");
  };

  const onCancel = () => {
    if (!plugActor) return;
    plugActor.cancel(tradeData.id);
    updateAccepted(false);
    console.log("Trade canceled!");
  };

  const onPrevPage = () => {
    if (curPage <= 1) return;
    updateCurPage(curPage - 1);
  };

  const onNextPage = () => {
    const pageNum = Math.ceil(inventoryBoxNum / boxNumPerPage);
    if (curPage >= pageNum) return;
    updateCurPage(curPage + 1);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <Loading />
      <ItemDetails />

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
              {/* Center the connect button horizontally and vertically */}
              <Button
                variant="contained"
                onClick={login}
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
              {/* Center the trade button horizontally and vertically */}
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
                  {(isCreator && tradeData.guestAccept) ||
                  (!isCreator && tradeData.hostAccept)
                    ? "TRADE ACCEPTED"
                    : "Waiting..."}
                </Stack>
              </Stack>
              <div className="boxes-grid">
                {remoteBoxes.map((box, index) => {
                  return (
                    <RemoteBox key={box.id}>
                      <BagItem
                        key={`remote_${box.id}`}
                        item={clone(box.item)}
                        index={index}
                        tradeBoxes={clone(remoteBoxes)}
                        updateTradeBoxes={updateRemoteBoxes}
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
                {localBoxes.map((box, index) => {
                  return (
                    <BagBox key={box.id}>
                      <BagItem
                        key={`local_${box.id}`}
                        isForTrade={true}
                        item={clone(box.item)}
                        index={index}
                        tradeBoxes={clone(localBoxes)}
                        updateTradeBoxes={updateLocalBoxes}
                        tradeLayer="local"
                      />
                    </BagBox>
                  );
                })}
              </div>
            </Frame>

            <Frame>
              {/* Center the div horizontally */}
              <div
                style={{
                  display: "flex",
                  height: "3em",
                  justifyContent: "center",
                  verticalAlign: "middle",
                }}
              >
                <Button
                  variant="contained"
                  onClick={onAccept}
                  disabled={accepted}
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
                  {/* Numerical input for amount of ICP to add to trade */}
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
                    disabled={accepted}
                  />
                </span>
                <Button
                  variant="contained"
                  onClick={onCancel}
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
                  .map((box, index) => {
                    return (
                      <BagBox key={box.id}>
                        <BagItem
                          key={`inventory_${box.id}`}
                          item={clone(box.item)}
                          index={(curPage - 1) * boxNumPerPage + index}
                          tradeBoxes={clone(inventoryBoxes)}
                          updateTradeBoxes={updateInventoryBoxes}
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
};
