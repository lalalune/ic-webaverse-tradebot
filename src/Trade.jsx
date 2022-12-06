import React, { useEffect, useState } from "react"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"

import { debugMode, inventoryBoxNum, tradePageBoxNum, pageBoxNum, tradeBoxNum } from "./constants"
import { canisterItemsToTokens, clone, deepEqual, existItems, getInventoryBoxes, getPrincipalId, getRemoteBoxes, getUserTokens, sendNFT } from "./utils"
import { idlFactory } from "../trade_canister/src/declarations/trade_canister/index"

import { ModalBox } from './ModalBox'
import RemoteBox from "./RemoteBox"
import BagBox from "./BagBox"
import BagItem from "./BagItem"
import Header from "./Header"
import Footer from "./Footer"

const { ic } = window
const { plug } = ic

// const canisterId = "gqux4-4qaaa-aaaao-ab62q-cai"
const canisterId = "rrkah-fqaaa-aaaaa-aaaaq-cai"
const whitelist = [canisterId, '6hgw2-nyaaa-aaaai-abkqq-cai']
// const host = "https://mainnet.dfinity.network"
const host = "http://localhost:8000"
const timeout = 50000
let partnerTokens = {}

const url = new URL(window.location.href)
let tradeId = url.searchParams.get("tradeId")
// if (!tradeId) tradeId = localStorage.getItem('storageTradeId')
tradeId && console.log("tradeId: ", tradeId)

export const Trade = ({ type }) => {
  const initRemoteBoxes = [...Array(tradeBoxNum).keys()].map((i) => {
    return { id: i, item: null }
  })

  const initLocalBoxes = [...Array(tradeBoxNum).keys()].map((i) => {
    return { id: i, item: null }
  })

  const initInventoryBoxes = [...Array(inventoryBoxNum).keys()].map((i) => {
    return { id: i, item: null }
  })

  const [loading, setLoading] = useState(false)
  const [connected, setConnected] = useState(false)
  const [plugActor, setPlugActor] = useState(null)

  const [isCreator, setIsCreator] = useState(false)
  const [partnerId, setPartnerId] = useState(null)
  const [tradeData, setTradeData] = useState(null)
  const [tradeStarted, setTradeStarted] = useState(false)
  const [remoteBoxes, setRemoteBoxes] = useState(clone(initRemoteBoxes))
  const [localBoxes, setLocalBoxes] = useState(clone(initLocalBoxes))
  const [confirmed, setConfirmed] = useState(false)
  const [showConfirmModal, setShowConfirmModal] = useState(false)
  const [showTradeCompletedModal, setShowTradeCompletedModal] = useState(false)
  const [accepted, setAccepted] = useState(false)

  const [inventoryTokens, setInventoryTokens] = useState({})
  const [inventoryBoxes, setInventoryBoxes] = useState(initInventoryBoxes)
  const [curPage, setCurPage] = useState(1)
  const [selItem, setSelItem] = useState(null)

  const [message, setMessage] = useState('')
  const [mode, setMode] = useState('inventory') // inventory or trade

  let localLoginAttempted = false
  let localTradeId = tradeId || tradeData?.id

  useEffect(() => {
    if (type !== "webaverse" || connected || localLoginAttempted || loading) return; // for webaverse
    console.log('Calling effect')
    onConnect()
    localLoginAttempted = true
  }, []);

  useEffect(() => {
    (async () => {
      if (!connected || !plug.agent || !plug.principalId || loading) return
      setLoading(true)
      const newTokens = await getUserTokens({ agent: plug.agent, user: plug.principalId })
      setInventoryTokens(clone(newTokens))
      setInventoryBoxes(getInventoryBoxes(newTokens))
      tradeId && await onStartTrade()
      setLoading(false)
    })()
  }, [connected])

  // Update game status whenever trade data is changed (real time)
  useEffect(() => {
    (async () => {
      if (!tradeData || !plugActor || !plug.principalId) return
      setLoading(true)
      const hostId = getPrincipalId(tradeData.host)
      const guestId = getPrincipalId(tradeData.guest)
      if (!isCreator && guestId !== plug.principalId) {
        return console.error("Trade already initialized to another wallet. guestId: ", guestId)
      }

      if (isCreator && guestId && guestId !== partnerId) {
        console.log('trade partner found(guestId): ', guestId)
        setPartnerId(guestId)
      }

      if (!isCreator && hostId && hostId !== partnerId) {
        console.log('trade partner found(hostId): ', hostId)
        setPartnerId(hostId)
      }

      const partnerTokenLen = Object.keys(partnerTokens).length
      // console.log('isCreator: ', isCreator)
      // console.log('partnerId: ', partnerId)
      // console.log('partnerTokenLen: ', partnerTokenLen)
      // console.log('tradeData.guest_items.length: ', tradeData.guest_items.length)
      // console.log('tradeData.host_items.length: ', tradeData.host_items.length)

      if (tradeData && ((isCreator && tradeData.guest_items.length) || (!isCreator && tradeData.host_items.length)) && !partnerTokenLen && partnerId) {
        partnerTokens = await getUserTokens({ agent: plug.agent, user: partnerId })
        console.log('partnerTokens: ', partnerTokens)
      }

      const rts = isCreator ? canisterItemsToTokens(tradeData.guest_items, partnerTokens) : canisterItemsToTokens(tradeData.host_items, partnerTokens)
      // console.log('remoteTokens: ', rts)
      const rbs = getRemoteBoxes(rts)
      // console.log('remoteBoxes: ', rbs)
      setRemoteBoxes(rbs)

      if (confirmed) {
        const canisterItems = isCreator ? tradeData.host_items : tradeData.guest_items
        const cloneInventoryTokens = clone(inventoryTokens)

        for (let i = 0; i < canisterItems.length; i++) {
          const item = cloneInventoryTokens[canisterItems[i].token_id]
          // try {
          //   !item.confirmed && await sendNFT({ item, to: partnerId, agent: plug.agent })
          // } catch (e) {
          //   console.log("NFT is non-existent: ", e)
          // }
          item.confirmed = true
        }

        console.log('cloneInventoryTokens: ', cloneInventoryTokens)
        setInventoryTokens(cloneInventoryTokens)
        setConfirmed(false)
        debugMode && setTimeout(() => setShowTradeCompletedModal(true), 2000) // To test modal
      }

      if (
        tradeData.host_accept && tradeData.guest_accept &&
        tradeData.host_items.length &&
        tradeData.host_escrow_items.length === tradeData.host_items.length &&
        tradeData.guest_items.length &&
        tradeData.guest_escrow_items.length === tradeData.guest_items.length) {
        setShowTradeCompletedModal(true)
      }

      setLoading(false)

      setTimeout(async () => {
        const trade = await plugActor.get_trade_by_id(tradeData.id)
        if (!deepEqual(trade, tradeData)) console.log('trade: ', trade)
        setTradeData(trade)
      }, 2000)
    })()
  }, [tradeData])

  useEffect(() => {
    const cloneInventoryBoxes = clone(inventoryBoxes)
    cloneInventoryBoxes.forEach(box => {
      box.item?.token_id && (box.item = inventoryTokens[box.item.token_id])
    })
    // console.log('cloneInventoryBoxes: ', cloneInventoryBoxes)
    setInventoryBoxes(cloneInventoryBoxes)

    const cloneLocalBoxes = clone(localBoxes)
    cloneLocalBoxes.forEach(box => {
      box.item?.token_id && (box.item = inventoryTokens[box.item.token_id])
    })
    // console.log('cloneLocalBoxes: ', cloneLocalBoxes)
    setLocalBoxes(cloneLocalBoxes)
  }, [inventoryTokens])

  const onConnect = async () => {
    if (loading) return
    console.log('onConnect')
    setLoading(true)
    let publicKey

    try {
      publicKey = await plug.requestConnect({
        whitelist, host, timeout,
        onConnectionUpdate: () => {
          console.log('sessionData: ', plug.sessionManager.sessionData)
        }
      })
    } catch (e) {
      console.log('Connection failed. error: ', e)
      setLoading(false)
      return
    }

    if (publicKey) {
      console.log('publicKey: ', publicKey)
      const tempPlugActor = await plug.createActor({ canisterId, interfaceFactory: idlFactory, agent: plug.agent })
      console.log('tempPlugActor: ', tempPlugActor)
      setPlugActor(tempPlugActor)
    } else {
      console.log('Connection failed')
      setLoading(false)
      return
    }

    console.log('plug: ', plug)
    setLoading(false)
    setConnected(true)
  }

  const onStartTrade = async () => {
    if (!plugActor || !plug.principalId || loading) return
    console.log('onStartTrade')
    setLoading(true)

    let trade
    if (tradeId) trade = await plugActor.get_trade_by_id(tradeId)
    else {
      trade = await plugActor.create_trade()
      localStorage.setItem('storageTradeId', trade.id)
    }

    const hostId = getPrincipalId(trade.host)
    const guestId = getPrincipalId(trade.guest)
    if (hostId === plug.principalId) setIsCreator(true)
    else if (!guestId || guestId !== plug.principalId) {
      trade = await plugActor.join_trade(trade.id)
      setIsCreator(false)
    }
    else return

    setLoading(false)
    console.log('trade: ', trade)
    setTradeData(trade)
    setTradeStarted(true)
  }

  const onAccept = () => {
    if (!plugActor || !tradeData) return
    plugActor.accept(tradeData.id)
    setShowConfirmModal(true)
    setAccepted(true)
    console.log("Trade accepted")
  }

  const onCancel = () => {
    if (!plugActor || !tradeData) return
    plugActor.cancel(tradeData.id)
    setShowConfirmModal(false)
    setAccepted(false)
    console.log("Trade canceled")
  }

  return (
    <div style={{
      position: "absolute",
      // dark grey background
      backgroundColor: '#1A1A1A',

      marginLeft: "auto",
      marginRight: "auto",
      // width
      width: '600px',
      height: '400px',
    }}>
      <DndProvider backend={HTML5Backend}>
        <Header authenticated={authenticated} setMode={setMode} mode={mode} />
        {mode === "trade" && authenticated && !tradeData &&
          <div style={{
            position: "absolute",
            bottom: "40px",
            left: "50%",
            transform: "translate(-50%, 0)",
          }}>
            {!tradeStarted && (
              <button onClick={startTrade} style={{ zIndex: 1000, backgroundColor: "green", padding: "5px" }}>
                Start Trade
              </button>
            )}
          </div>
        }
        {/* If both players accepted their trade */}
        {connected && tradeData && accepted && existItems(localBoxes) && showConfirmModal && ((isCreator && tradeData.guest_accept) || (!isCreator && tradeData.host_accept)) &&
          <ModalBox>
            <div style={{
              display: 'flex',
              alignItems: 'center',

            }}>
              <div style={{}}>Do you want to confirm the current trade?</div>
              <div style={{}}>
                <button
                  onClick={async () => {
                    if (!tradeData.host_items.length || !tradeData.guest_items || !tradeData.host_accept || !tradeData.guest_accept) return
                    setConfirmed(true)
                    setShowConfirmModal(false)
                  }}
                >
                  Confirm
                </button>
                <button
                  onClick={() => { setShowConfirmModal(false) }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </ModalBox>
        }
        {showTradeCompletedModal &&
          <ModalBox>
            <div style={{}}>Trade Completed!</div>
            <button
              onClick={() => { setShowTradeCompletedModal(false) }}
            >
              Ok
            </button>
          </ModalBox>
        }
        {message &&
          <ModalBox>
            <div style={{}}>{message}</div>
            <button
              onClick={() => { setMessage('') }}
            >
              Ok
            </button>
          </ModalBox>
        }
        <div>
          {!connected &&
            <button onClick={onConnect} style={{
              // center the button in the div
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              // style the button
              padding: "1rem 2rem",
              // rounded corners
              borderRadius: "0.5rem",
              // background color slate
              backgroundColor: "#2c3e50",
            }}>
              Connect
            </button>
          }
          {connected && mode === "trade" &&
            <>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                padding: '0 1em',
                opacity: 0.5,
              }}>
                <button onClick={onConnect} style={{
                  // center the button in the div
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  // style the button
                  padding: "1rem 2rem",
                  // rounded corners
                  borderRadius: "0.5rem",
                  // background color slate
                  backgroundColor: "#2c3e50",
                }}>
                  Connect
                </button>
              </div>
            </>
          }
          {authenticated && mode === "trade" &&
            <>
              <div>
                <span style={{
                  opacity: 0.5,
                  // justify to the left
                  textAlign: "left",
                  // make sure its snapped to the left
                  display: "inline-block",
                  width: "300px",
                  paddingLeft: "10px"
                }}>YOUR OFFERINGS</span>

                <span style={{
                  opacity: 0.5,
                  // justify to the left
                  textAlign: "right",
                  // make sure its snapped to the right of the parent div
                  display: "inline-block",
                  width: "300px",
                  paddingRight: "10px"
                  // make sure its snapped to the right
                }}>PARTNER OFFERINGS</span>
              </div>
              <div style={{

              }}>
                <span style={{
                  display: "inline-block",
                  textAlign: "left",
                  width: "300px",
                  paddingLeft: "10px"
                }}>
                  {localBoxes.map((box, index) => {
                    return (
                      <BagBox key={box.id}>
                        {tradeData &&
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
                            setMessage={setMessage}
                          />
                        }
                      </BagBox>
                    )
                  })}
                </span>
                <span style={{
                  display: "inline-block",
                  textAlign: "right",
                  width: "300px",
                  paddingRight: "10px"
                }}>
                  {remoteBoxes.map((box, index) => {
                    return (
                      <RemoteBox key={box.id}>
                        {tradeData &&
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
                            setMessage={setMessage}
                          />
                        }
                      </RemoteBox>
                    )
                  })}
                </span>
              </div>
              {tradeData && ((isCreator && tradeData.guest_accept) ||
                (!isCreator && tradeData.host_accept))
                ? "TRADE ACCEPTED"
                : ""}
            </>
          }
          {mode === "trade" && tradeData && tradeData.host !== "" && tradeData.guest !== "" && tradeData.host_accept && tradeData.guest_accept && !confirmed &&
            <div style={{
              height: "30px",
              backgroundColor: "gray",
              marginLeft: "10px",
              marginRight: "10px",
            }}>
              <button style={{
                // green background
                backgroundColor: "#2ecc71",
                // rounded borders
                borderRadius: "3px",
                // padding
                padding: "3px 5px",
                opacity: accepted ? 1 : 0.5,
              }}
                onClick={onAccept}
                disabled={accepted || !existItems(localBoxes)}
              >
                Accept
              </button>
              <button style={{
                // red background
                backgroundColor: "#e74c3c",
                // rounded borders
                borderRadius: "3px",
                // padding
                padding: "3px 5px",
                opacity: accepted || existItems(localBoxes) ? 1 : 0.5,
              }}
                onClick={onCancel}
                disabled={!accepted || !existItems(localBoxes) || (isCreator && tradeData ? tradeData.guest_accept : tradeData.host_accept)}
              >
                Cancel
              </button>
            </div>
          }
          {authenticated &&
            <div className={"inventory"} style={{
              // flexbox of items
              display: "flex",
              flexWrap: "wrap",
              padding: "10px"
            }}>
              {inventoryBoxes
                .slice(
                  (curPage - 1) * (mode === "trade" ? tradePageBoxNum : pageBoxNum),
                  curPage * (mode === "trade" ? tradePageBoxNum : pageBoxNum)
                )
                .map((box, index) => {
                  return (
                    <BagBox key={box.id}>
                      <BagItem
                        key={`inventory_${box.id}`}
                        item={clone(box.item)}
                        index={(curPage - 1) * (mode === "trade" ? tradePageBoxNum : pageBoxNum) + index}
                        tradeBoxes={clone(inventoryBoxes)}
                        setTradeBoxes={setInventoryBoxes}
                        tradeLayer="inventory"
                        plugActor={plugActor}
                        tradeData={tradeData}
                        localUserId={localUserId}
                        setSelItem={setSelItem}
                        setLoading={setLoading}
                        setMessage={setMessage}
                      />
                    </BagBox>
                  )
                })}
            </div>
          }
          {tradeStarted && tradeData && partnerId && !tradeId && (
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
          {tradeStarted && (
            <button onClick={cancelTrade} style={{
              zIndex: 1000,
              backgroundColor: "red",
              padding: "5px",
              float: "right",
              marginRight: "10px"
            }}>
              Cancel Trade
            </button>
          )}
        </div>
        <Footer showPagination={connected} loading={loading} curPage={curPage} setCurPage={setCurPage} />
      </DndProvider>
    </div>
  )
}
