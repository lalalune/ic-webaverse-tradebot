import React, { useEffect } from "react";
import { Button } from "@mui/material";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Principal } from "@dfinity/principal";
import { usePlug } from "@raydeck/useplug";

import { inventoryBoxNum } from "./utils/constants";
import { clone, getInventoryBoxes, getUserTokens } from "./utils/funcs";
import { useStore } from "./utils/store";
import { idlFactory } from "./trade_canister/trade_canister.did.js";

import Frame from "./Frame";
import RemoteBox from "./RemoteBox";
import BagBox from "./BagBox";
import BagItem from "./BagItem";
import { Loading } from "./Loading";
import { ItemDetails } from "./ItemDetails";

const nullPartner = Principal.fromUint8Array(
  new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 1, 1])
).toText();
const nullPrincipal = "rrkah-fqaaa-aaaaa-aaaaq-cai";
const url = new URL(window.location.href);
let inventoryTokens = [];
const tradeId = url.searchParams.get("tradeId");
console.log("tradeId: ", tradeId);

export const Trade = () => {
  // principal is a byte array that should be converted to a string
  // convert using a browser-friendly es6 method
  const { authenticated, principal, login, agent } = usePlug();
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
    updateLocalUser,
  } = useStore();

  const principalString = principal ? window.ic.plug.principalId : "<none>";

  // handle guest joining existing trade from link
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

  // update the trade data
  useEffect(() => {
    // local boxes changed, which means the user has changed the inventory
    // update the trade data
    
    // first, is the user host or guest?
    const user = window?.ic?.plug?.principalId;
    if(!user) return;

    // compare rtTrade to tradeData
    // if different, update tradeData
    const host = Principal.fromUint8Array(tradeData.host._arr).toText();
    const guest = Principal.fromUint8Array(tradeData.guest._arr).toText();

    const userIsHost = user === host;
    const userIsGuest = user === guest;

    // type Trade = {
    //   id: string;
    //   hostData: Item[];
    //   guestData: Item[];
    //   hostEscrow: Item[];
    //   guestEscrow: Item[];
    //   hostAccept: boolean;
    //   guestAccept: boolean;
    //   host: Principal;
    //   guest: Principal;
    //   fulfilled: boolean;
    // };

    let data = []
    // if the user is the host, update the host's inventory
    if (userIsHost) {
      data = tradeData.hostData;
    } else if(userIsGuest) {
      data = tradeData.guestData;
    } else {
      throw new Error("User is not host or guest");
    }

    // if the length of localBoxes and data are the same, do nothing and return
    if (localBoxes.length === data.length) {
      return;
    }

    // iterate through trade data and check if this item is also contained in localBoxes
    // if it is in localBoxes but not in tradeData, add it to tradeData
    // if it is in tradeData but not in localBoxes, remove it from tradeData
    let added = false;
    for (let i = 0; i < localBoxes.length; i++) {
      // iterate through the localBoxes, which are the user's local trade items
      const localBox = localBoxes[i];
      const index = data.findIndex((element) => element.id === localBox.id);
      if (index === -1 && localBox.item) {
        const item = localBox.item;
        console.log('***** ADDING ITEM', item)
        console.log('***** tradeData', tradeData)

        // type Item = {
        //   name: string;
        //   canisterId: Principal;
        //   tokenId: int;
        // }

        // can item.index (BigInt) to int
        const tokenId = Number(item.index);
        console.log('tradeData.id, {name: item.collection, canister: Principal.fromText(item.canister), tokenId')
        console.log(tradeData.id, {name: item.metadata.name, canisterId: item.canister, tokenId})

        // item is not in tradeData, add it
        plugActor.add_item_to_trade(tradeData.id, {name: item.collection, canisterId: Principal.fromText(item.canister), tokenId}).then((tradeResponse) => {
            console.log ('tradeResponse', tradeResponse)
            updateTradeData(tradeResponse[0]);
          });
          added = true;
        }
    }
    // no items were added, but the lengths aren't the same, so we assume an item has been removed
    if(!added) {
      let removed = false; // we don't need this but useful for debug
      for (let i = 0; i < data.length; i++) {
        const item = data[i];
        const index = localBoxes.findIndex((element) => element.id === item.id);
        if (index === -1) {
          // item is not in localBoxes, remove it
          // plugActor.remove_item_from_trade(tradeId, item.id);
          return removed = true;
        }
      }

      if(!removed) {
        throw new Error("something went wrong");
      }
    }
  }, [localBoxes])

  // update user data and inventory after plug login
  useEffect(() => {
    if (!principal) return;
    (async () => {
      updateLoading(true);
      const user = window.ic.plug.principalId;
      const balance = await window.ic.plug.requestBalance();
      console.log("user: ", user);
      console.log("balance: ", balance);
      const newTokens = await getUserTokens({ agent, user });
      inventoryTokens = clone(newTokens);
      updateLocalUser(user);
      updateInventoryBoxes(getInventoryBoxes(newTokens));
      updateLoading(false);
    })();
  }, [principal]);

  // Host listen for joining guest
  useEffect(() => {
    if (!plugActor || !tradeData || partner) return;
    const interval = setInterval(async () => {
      const rtTrade = await plugActor.get_trade_by_id(tradeData.id);
      console.log("rtTrade: ", rtTrade);
      const guest = Principal.fromUint8Array(rtTrade[0].guest._arr).toText();

      if (
        guest !== null &&
        guest !== "" &&
        guest !== nullPrincipal &&
        guest !== nullPartner // &&
        // partner !== guest // comment out to prevent self trade
      ) {
        updatePartner(guest);
        clearInterval(interval);
        console.log("Trade partner found! guest: ", guest);
      }

      // Todo: synchronization
    }, 1000);
  }, [plugActor, tradeData]);

    // Fetch data from IC in real time
    useEffect(() => {
      if (!plugActor || !tradeData || !partner) return;
      const interval = setInterval(async () => {
        const rtTrade = await plugActor.get_trade_by_id(tradeData.id);
        
        // if rtTrade !== tradeData, update tradeData
        if (JSON.stringify(rtTrade[0]) === JSON.stringify(tradeData)) return;
        console.log('updated!')
        
        updateTradeData(rtTrade[0])
        const user = window.ic.plug.principalId.toText();

        // compare rtTrade to tradeData
        // if different, update tradeData
        const rtHost = Principal.fromUint8Array(rtTrade[0].host._arr).toText();
        const rtGuest = Principal.fromUint8Array(rtTrade[0].guest._arr).toText();

        const userIsHost = user === rtHost;
        const userIsGuest = user === rtGuest;

        if(!userIsHost && !userIsGuest){
          throw new Error('User is not in this trade!');  
        }

        if (rtHost !== tradeData.host) {
          // this should probably be immutable unless we want eject functionality
          throw new Error('host changed!')
        }

        if (rtGuest !== tradeData.guest) {
          // this should probably be immutable unless we want eject functionality
          throw new Error('guest changed!')
        }
        // Todo: synchronization
      }, 1000);
      return () => clearInterval(interval);
    }, [plugActor, tradeData, partner]);
  
    const connect = async () => {
      console.log('connecting...')
      login();
    }


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
    <div className="w-full h-full">
      <DndProvider backend={HTML5Backend}>
        <ItemDetails />
        <div className="absolute top-0 left-0 w-3/4 h-full">
        <Loading />

        {!authenticated && (
            <Frame className="absolute w-full h-full">
              <div className="flex items-center justify-center w-full h-full">
                <Button variant="contained" onClick={connect}>
                  Connect
                </Button>
              </div>
            </Frame>
          )}
          {authenticated && !tradeData && (
            <Frame className="absolute w-full">
              <div className="flex items-center justify-center w-full h-full">
                {!existTrade && (
                  <Button variant="contained" onClick={startTrade}>
                    Start Trade
                  </Button>
                )}
                {existTrade && !tradeData && (
                  <Button variant="disabled">Starting...</Button>
                )}
              </div>
            </Frame>
          )}
            <div className="absolute w-full h-full overflow-auto">
            {authenticated && tradeData && (
              <React.Fragment>
              <Frame>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <div className="text-2xl">Their Trade</div>
                    <div className="text-xl text-blue-900">
                      {(isCreator && tradeData.guestAccept) ||
                      (!isCreator && tradeData.hostAccept)
                        ? "TRADE ACCEPTED"
                        : ""}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3">
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
                </div>
              </Frame>
              <Frame>
                <div className="flex flex-col gap-2">
                  <div className="text-2xl">Your Trade</div>
                  <div className="flex flex-wrap gap-3">
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
                </div>
              </Frame>
              <Frame>
                <div className="flex flex-wrap items-center justify-center w-full h-full gap-8">
                  <Button
                    variant="contained"
                    onClick={onAccept}
                    disabled={accepted}
                    color="success"
                  >
                    Accept
                  </Button>
                  <div className="flex items-center justify-center gap-2">
                    {/* Numerical input for amount of ICP to add to trade */}
                    <label htmlFor="icp">ICP: </label>
                    <input
                      className="w-32 p-0.5 text-xl border rounded opacity-30 bg-amber-900"
                      id="icp"
                      type="number"
                    />
                  </div>
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
              </React.Fragment>
              )}
              {principal && (
              <Frame>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <div className="text-2xl">Inventory</div>
                    <div className="flex items-center gap-2 text-xl">
                      <div className="cursor-pointer" onClick={onPrevPage}>
                        &#60;
                      </div>
                      <div className="text-blue-900">{curPage}</div>
                      <div className="cursor-pointer" onClick={onNextPage}>
                        &#62;
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {inventoryBoxes
                      .slice(
                        (curPage - 1) * boxNumPerPage,
                        curPage * boxNumPerPage
                      )
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
                </div>
              </Frame>
              )}
              </div>
        </div>
        <div className="absolute top-0 right-0 w-1/4 h-full">
          <Frame className="h-full">
            <div className="p-2">
              <b>CONNECTION STATUS</b>
              <br />
              {authenticated && principal
                ? "Connected with " + principalString
                : "Waiting for IC wallet connection..."}
              <br />
              <br />
              {existTrade && tradeData && !partner && !tradeId && (
                <>
                  <b> WAITING FOR TRADE PARTNER... </b>
                  <br />
                  Send this link to your trade partner
                  <br />
                  <a
                    className="text-blue-900"
                    href={`${url.host}/?tradeId=${tradeData.id}`}
                  >
                    {url.host}/?tradeId={tradeData.id}
                  </a>
                </>
              )}
              {existTrade && tradeData && partner && (
                <>Trading with {partner}</>
              )}
            </div>
          </Frame>
        </div>
      </DndProvider>
    </div>
  );
};
