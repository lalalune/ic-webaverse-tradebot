import React, { useEffect, useState } from "react"
import { Button } from "@mui/material"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"

import { inventoryBoxNum, pageBoxNum, tradeBoxNum } from "./utils/constants"
import { canisterItemsToTokens, clone, existItems, getInventoryBoxes, getPrincipalId, getRemoteBoxes, getUserTokens, sendNFT } from "./utils/funcs"
import { idlFactory } from "../trade_canister/src/declarations/trade_canister/index"

import Frame from "./Frame"
import { ModalBox } from './ModalBox'
import RemoteBox from "./RemoteBox"
import BagBox from "./BagBox"
import BagItem from "./BagItem"
import { Loading } from "./Loading"
import { ItemDetails } from "./ItemDetails"

const { ic } = window
const { plug } = ic

const canisterId = "gqux4-4qaaa-aaaao-ab62q-cai"
// const canisterId = "rrkah-fqaaa-aaaaa-aaaaq-cai"
const whitelist = [canisterId, '6hgw2-nyaaa-aaaai-abkqq-cai']
const host = "https://mainnet.dfinity.network"
// const host = 'http://127.0.0.1:8000'
const timeout = 50000
let partnerTokens = {}

const url = new URL(window.location.href)
const tradeId = url.searchParams.get("tradeId")
tradeId && console.log("I'm joiner. tradeId: ", tradeId)

export const Trade = ({ type }) => {
  const initRemoteBoxes = [...Array(tradeBoxNum).keys()].map((i) => {
    return {
      id: i,
      item: null,
    }
  })

  const initLocalBoxes = [...Array(tradeBoxNum).keys()].map((i) => {
    return {
      id: i,
      item: null,
    }
  })

  const initInventoryBoxes = [...Array(inventoryBoxNum).keys()].map((i) => {
    return { id: i, type: "all", item: null }
  })

  const [loading, setLoading] = useState(false)
  const [agent, setAgent] = useState(null)
  const [principal, setPrincipal] = useState(false)
  const [authenticated, setAuthenticated] = useState(false)
  const [plugActor, setPlugActor] = useState(null)
  const [isCreator, setIsCreator] = useState(false)
  const [localUserId, setLocalUserId] = useState(null)
  const [partnerId, setPartnerId] = useState(null)
  const [tradeData, setTradeData] = useState(null)
  const [tradeStarted, setTradeStarted] = useState(false)
  const [inventoryTokens, setInventoryTokens] = useState({})
  const [remoteBoxes, setRemoteBoxes] = useState(clone(initRemoteBoxes))
  const [localBoxes, setLocalBoxes] = useState(clone(initLocalBoxes))
  const [inventoryBoxes, setInventoryBoxes] = useState(initInventoryBoxes)
  const [accepted, setAccepted] = useState(false)
  const [curPage, setCurPage] = useState(1)
  const [selItem, setSelItem] = useState(null)
  const [confirmed, setConfirmed] = useState(false)

  useEffect(() => {
    (async () => {
      if (!principal || !localUserId) return
      setLoading(true)
      // const balance = await plug.requestBalance()
      // console.log("balance: ", balance)
      const newTokens = await getUserTokens({ agent: plug.agent, user: localUserId })
      setInventoryTokens(clone(newTokens))

      // // if user is guest, join the trade
      // if (tradeId) {
      //   startTrade()
      // }
      setLoading(false)
    })()
  }, [principal])

  useEffect(() => {
    setInventoryBoxes(getInventoryBoxes(inventoryTokens))
  }, [inventoryTokens])

  useEffect(() => {
    (async () => {
      if (!plugActor) return
      setLoading(true)
      console.log('plugActor: ', plugActor)
      let trade

      if (tradeId) {
        console.log("***** TRADE DETECTED *****")
        trade = await plugActor.get_trade_by_id(tradeId)
        setIsCreator(false)
      } else {
        trade = await plugActor.create_trade()
        setIsCreator(true)
      }

      setTradeData(trade)
      setTradeStarted(true)
      setLoading(false)
    })()
  }, [plugActor])

  // update game status whenever trade data is changed (real time)
  useEffect(() => {
    if (!tradeData) return
    (async () => {
      if (!plugActor || !localUserId) return
      setLoading(true)
      console.log('tradeData: ', tradeData)
      const hostId = getPrincipalId(tradeData.host)
      const guestId = getPrincipalId(tradeData.guest)
      console.log('hostId: ', hostId)
      console.log('guestId: ', guestId)

      if (!isCreator && guestId && guestId !== localUserId) {
        return console.error(
          "Trade already initialized to another wallet: ",
          guestId
        )
      }

      if (isCreator && guestId && guestId !== partnerId) {
        console.log('trade partner found(guestId): ', guestId)
        setPartnerId(guestId)
      }

      if (!isCreator && hostId && hostId !== partnerId) {
        console.log('trade partner found(hostId): ', hostId)
        await plugActor.join_trade(tradeData.id)
        setPartnerId(hostId)
      }

      const partnerTokenLen = Object.keys(partnerTokens).length
      console.log('isCreator: ', isCreator)
      console.log('partnerTokenLen: ', partnerTokenLen)
      console.log('tradeData.guest_items.length: ', tradeData.guest_items.length)
      console.log('tradeData.host_items.length: ', tradeData.host_items.length)
      console.log('partnerId: ', partnerId)

      if (((isCreator && tradeData.guest_items.length) || (!isCreator && tradeData.host_items.length)) && !partnerTokenLen && partnerId) {
        partnerTokens = await getUserTokens({ agent: plug.agent, user: partnerId })
        console.log('partnerTokens: ', partnerTokens)
      }

      const rts = isCreator ? canisterItemsToTokens(tradeData.guest_items, partnerTokens) : canisterItemsToTokens(tradeData.host_items, partnerTokens)
      console.log('remoteTokens: ', rts)
      const rbs = getRemoteBoxes(rts)
      console.log('remoteBoxes: ', rbs)
      setRemoteBoxes(rbs)
      setLoading(false)

      setTimeout(async () => {
        const trade = await plugActor.get_trade_by_id(tradeData.id)
        setTradeData(trade)
      }, 2000)
    })()
  }, [tradeData])

  const startTrade = async () => {
    if (!plug.createActor) return
    setLoading(true)
    const tempPlugActor = await plug.createActor({ canisterId, interfaceFactory: idlFactory })
    setLoading(false)
    setPlugActor(tempPlugActor)
  }

  const onConnect = async () => {
    console.log('Connecting...')
    login()
  }

  const login = async () => {
    const publicKey = await plug.requestConnect({
      whitelist, host, timeout,
      onConnectionUpdate: () => {
        console.log('sessionData: ', plug.sessionManager.sessionData)
      }
    })

    if (publicKey) {
      console.log('publicKey: ', publicKey)
      await onConnected()
    }
  }

  const onConnected = async () => {
    console.log('plug: ', plug)
    if (!plug.agent || !plug.principalId) return
    const principal = await plug.agent.getPrincipal()
    setPrincipal(principal)
    setAuthenticated(true)
    setLocalUserId(plug.principalId)
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
        <ItemDetails selItem={selItem} />
        {/* If both players accepted their trade */}
        {authenticated && tradeData && accepted && existItems(localBoxes) && !confirmed && ((isCreator && tradeData.guest_accept) || (!isCreator && tradeData.host_accept)) &&
          <ModalBox>
            <div className="text-xl">Do you want to confirm the current trade?</div>
            <div className="flex gap-8">
              <Button
                variant="contained"
                onClick={async () => {
                  if (!tradeData.host_items.length || !tradeData.guest_items || !tradeData.host_accept || !tradeData.guest_accept) return
                  setLoading(true)
                  const canisterItems = isCreator ? tradeData.host_items : tradeData.guest_items
                  const cloneInventoryTokens = Object.values(inventoryTokens)
                  for (let i = 0; i < canisterItems.length; i++) {
                    !cloneInventoryTokens[i].confirmed && await sendNFT({ item: cloneInventoryTokens[canisterItems[i].token_id], to: partnerId, agent: plug.agent })
                    cloneInventoryTokens[i].confirmed = true
                  }
                  setInventoryTokens(cloneInventoryTokens)
                  setConfirmed(true)
                  setLoading(false)
                }}
                color="success"
              >
                Confirm
              </Button>
              <Button
                variant="contained"
                onClick={() => { console.log('Cancel') }}
                color="error"
              >
                Cancel
              </Button>
            </div>
          </ModalBox>
        }
        {authenticated && tradeData && tradeData.host_items.length === tradeData.host_escrow_items && tradeData.guest_items === tradeData.guest_escrow_items &&
          <ModalBox>
            <div className="text-xl">Trade Completed!</div>
          </ModalBox>
        }
        <div className="absolute top-0 left-0 w-3/4 h-full overflow-auto">
          <Loading loading={loading} />
          {!authenticated &&
            <Frame className="h-full">
              <div className="flex items-center justify-center h-full">
                <Button variant="contained" onClick={onConnect}>
                  Connect
                </Button>
              </div>
            </Frame>
          }
          {authenticated && !tradeData &&
            <Frame>
              <div className="flex items-center justify-center h-full">
                {!tradeStarted && (
                  <Button variant="contained" onClick={startTrade}>
                    Start Trade
                  </Button>
                )}
                {tradeStarted && (
                  <Button variant="disabled">Starting...</Button>
                )}
              </div>
            </Frame>
          }
          {authenticated && tradeData &&
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
                            plugActor={plugActor}
                            tradeData={tradeData}
                            localUserId={localUserId}
                            setSelItem={setSelItem}
                            setLoading={setLoading}
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
                            plugActor={plugActor}
                            tradeData={tradeData}
                            localUserId={localUserId}
                            setSelItem={setSelItem}
                            setLoading={setLoading}
                          />
                        </BagBox>
                      )
                    })}
                  </div>
                </div>
              </Frame>
              <Frame>
                <div className="flex flex-wrap items-center justify-center gap-8">
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
                    disabled={!accepted || !existItems(localBoxes) || (isCreator ? tradeData.guest_accept : tradeData.host_accept)}
                    color="error"
                  >
                    Cancel
                  </Button>
                </div>
              </Frame>
            </>
          }
          {!!Object.keys(inventoryTokens).length &&
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
                            plugActor={plugActor}
                            tradeData={tradeData}
                            localUserId={localUserId}
                            setSelItem={setSelItem}
                            setLoading={setLoading}
                          />
                        </BagBox>
                      )
                    })}
                </div>
              </div>
            </Frame>
          }
        </div>
        <div className="absolute top-0 right-0 w-1/4 h-full overflow-auto">
          <Frame className="h-full">
            <div className="p-2">
              <b>CONNECTION STATUS</b>
              <br />
              {authenticated && principal
                ? "Connected with " + localUserId
                : "Waiting for IC wallet connection..."
              }
              <br />
              <br />
              {tradeStarted && tradeData && !partnerId && !tradeId &&
                <>
                  <b> WAITING FOR TRADE PARTNER... </b>
                  <br />
                  Send this link to your trade partner
                  <br />
                  <a
                    // className="text-blue-900"
                    href={`${url.host}/?tradeId=${tradeData.id}`}
                  >
                    {url.host}/?tradeId={tradeData.id}
                  </a>
                </>
              }
              {tradeStarted && tradeData && partnerId &&
                <>Trading with {partnerId}</>
              }
            </div>
          </Frame>
        </div>
      </DndProvider>
    </div>
  )
}
