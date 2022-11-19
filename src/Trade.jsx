import React, { useContext, useEffect } from "react"
import { Button } from "@mui/material"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import { usePlug } from "@raydeck/useplug"
import { Principal } from 'azle'

import { inventoryBoxNum, nullPrincipalId, pageBoxNum } from "./utils/constants"
import { clone, existItems, getInventoryBoxes, getRemoteBoxes, getUserTokens } from "./utils/funcs"
import { StateContext } from "./StateProvider"
import { trade_canister } from "./declarations/trade_canister/index"

import Frame from "./Frame"
import RemoteBox from "./RemoteBox"
import BagBox from "./BagBox"
import BagItem from "./BagItem"
import { Loading } from "./Loading"
import { ItemDetails } from "./ItemDetails"

const url = new URL(window.location.href)
const tradeId = url.searchParams.get("tradeId")
tradeId && console.log("I'm joiner. tradeId: ", tradeId)
let inventoryTokens = []
let partnerId
const updatePartnerId = val => {
  partnerId = val
}

export const Trade = () => {
  const { authenticated, principal, login, agent } = usePlug()
  const {
    isCreator,
    setIsCreator,
    tradeData,
    setTradeData,
    remoteBoxes,
    setRemoteBoxes,
    localBoxes,
    setLocalBoxes,
    inventoryBoxes,
    setInventoryBoxes,
    plugActor,
    setPlugActor,
    tradeStarted,
    setTradeStarted,
    accepted,
    setAccepted,
    curPage,
    setCurPage,
    setLoading,
    localUserId,
    setLocalUserId,
    curTradeId,
    setCurTradeId,
  } = useContext(StateContext)

  const principalString = principal ? window.ic.plug.principalId : "<none>"

  // run after wallet connection
  useEffect(() => {
    (async () => {
      if (!principal) return
      setLoading(true)
      // const balance = await window.ic.plug.requestBalance()
      // console.log("balance: ", balance)
      const newTokens = Object.values(await getUserTokens({ agent, user: window.ic.plug.principalId }))
      inventoryTokens = clone(newTokens)
      setInventoryBoxes(getInventoryBoxes(inventoryTokens))

      // if user is guest, join the trade
      if (tradeId) {
        startTrade()
      }
      setLoading(false)
    })()
  }, [principal])

  // run when starting trade
  useEffect(() => {
    (async () => {
      if (!plugActor) return
      setLoading(true)
      console.log('plugActor: ', plugActor)
      let trade, tempLocalUserId

      if (tradeId) {
        console.log("***** TRADE DETECTED *****")
        trade = await plugActor.get_trade_by_id(tradeId)
        tempLocalUserId = Principal.fromUint8Array(trade.guest._arr).toText()
        setIsCreator(false)
      } else {
        trade = await plugActor.create_trade()
        tempLocalUserId = Principal.fromUint8Array(trade.host._arr).toText()
        setIsCreator(true)
      }

      console.log('tempLocalUserId: ', tempLocalUserId)
      console.log('trade: ', trade)
      setLocalUserId(tempLocalUserId)
      setTradeData(trade)
      setCurTradeId(trade.id)
      setTradeStarted(true)
      setLoading(false)
    })()
  }, [plugActor])

  // fetch data from IC in real time (run if trade is existed)
  useEffect(() => {
    if (!curTradeId || !plugActor) return
    console.log('curTradeId: ', curTradeId)
    // const interval = setInterval(async () => {
    //   const trade = await plugActor.get_trade_by_id(curTradeId)
    //   setTradeData(trade)
    // }, 2000)
    // return () => {
    //   clearInterval(interval)
    // }
  }, [curTradeId])

  // update game status whenever trade data is changed
  useEffect(() => {
    (async () => {
      if (!plugActor || !curTradeId || !tradeData || !localUserId) return
      setLoading(true)
      const hostId = Principal.fromUint8Array(tradeData.host._arr).toText()
      const guestId = Principal.fromUint8Array(tradeData.guest._arr).toText()
      console.log('hostId: ', hostId)
      console.log('guestId: ', guestId)

      if (!isCreator && guestId !== nullPrincipalId && guestId !== localUserId) {
        return console.error(
          "Trade already initialized to another wallet: ",
          guestId
        )
      }

      if (isCreator && guestId !== nullPrincipalId && guestId !== localUserId && guestId !== hostId && guestId !== partnerId) {
        console.log('trade partner found(guestId): ', guestId)
        updatePartnerId(guestId)
      }

      if (!isCreator && hostId !== nullPrincipalId && hostId !== localUserId && hostId !== partnerId) {
        console.log('trade partner found(hostId): ', hostId)
        await plugActor.join_trade(curTradeId)
        updatePartnerId(hostId)
      }

      // if (isCreator) {
      //   const rb = getRemoteBoxes(tradeData.guest_data)
      //   console.log('guest_data: ', tradeData.guest_data)
      //   console.log('remoteBoxes: ', rb)
      //   setRemoteBoxes(rb)
      // } else {
      //   const rb = getRemoteBoxes(tradeData.host_data)
      //   console.log('host_data: ', tradeData.host_data)
      //   console.log('remoteBoxes: ', rb)
      //   setRemoteBoxes(rb)
      // }

      setLoading(false)
    })()
  }, [tradeData])



  const startTrade = async () => {
    setPlugActor(trade_canister)
  }

  const onConnect = async () => {
    console.log('connecting...')
    login()
  }

  const onAccept = () => {
    if (!plugActor) return
    plugActor.accept(tradeData.id)
    setAccepted(true)
    console.log("Trade accepted!")
  }

  const onCancel = () => {
    if (!plugActor) return
    plugActor.cancel(tradeData.id)
    setAccepted(false)
    console.log("Trade canceled!")
  }

  const onPrevPage = () => {
    if (curPage <= 1) return
    setCurPage(curPage - 1)
  }

  const onNextPage = () => {
    const pageNum = Math.ceil(inventoryBoxNum / pageBoxNum)
    if (curPage >= pageNum) return
    setCurPage(curPage + 1)
  }

  return (
    <div className="w-full h-full">
      <DndProvider backend={HTML5Backend}>
        <ItemDetails />
        <div className="absolute top-0 left-0 w-3/4 h-full">
          <Loading />

          {!authenticated && (
            <Frame className="absolute w-full h-full">
              <div className="flex items-center justify-center w-full h-full">
                <Button variant="contained" onClick={onConnect}>
                  Connect
                </Button>
              </div>
            </Frame>
          )}
          {authenticated && !tradeData && (
            <Frame className="absolute w-full">
              <div className="flex items-center justify-center w-full h-full">
                {!tradeStarted && (
                  <Button variant="contained" onClick={startTrade}>
                    Start Trade
                  </Button>
                )}
                {tradeStarted && !tradeData && (
                  <Button variant="disabled">Starting...</Button>
                )}
              </div>
            </Frame>
          )}
          <div className="absolute w-full h-full overflow-auto">
            {authenticated && tradeData && (
              <>
                <Frame>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <div className="text-2xl">Their Trade</div>
                      <div className="text-xl text-blue-900">
                        {(isCreator && tradeData.guest_accept) ||
                          (!isCreator && tradeData.host_accept)
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
                              setTradeBoxes={setRemoteBoxes}
                              tradeLayer="remote"
                            />
                          </RemoteBox>
                        )
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
                              setTradeBoxes={setLocalBoxes}
                              tradeLayer="local"
                            />
                          </BagBox>
                        )
                      })}
                    </div>
                  </div>
                </Frame>
                <Frame>
                  <div className="flex flex-wrap items-center justify-center w-full h-full gap-8">
                    <Button
                      variant="contained"
                      onClick={onAccept}
                      disabled={accepted || !existItems(localBoxes)}
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
                      disabled={!accepted && existItems(localBoxes)}
                      color="error"
                    >
                      Cancel
                    </Button>
                  </div>
                </Frame>
              </>
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
                        (curPage - 1) * pageBoxNum,
                        curPage * pageBoxNum
                      )
                      .map((box, index) => {
                        return (
                          <BagBox key={box.id}>
                            <BagItem
                              key={`inventory_${box.id}`}
                              item={clone(box.item)}
                              index={(curPage - 1) * pageBoxNum + index}
                              tradeBoxes={clone(inventoryBoxes)}
                              setTradeBoxes={setInventoryBoxes}
                              tradeLayer="inventory"
                            />
                          </BagBox>
                        )
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
              {tradeStarted && tradeData && !partnerId && !tradeId && (
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
              {tradeStarted && tradeData && partnerId && (
                <>Trading with {partnerId}</>
              )}
            </div>
          </Frame>
        </div>
      </DndProvider>
    </div>
  )
}
