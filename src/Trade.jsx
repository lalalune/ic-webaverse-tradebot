import React, { useEffect, useState } from "react"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"

import { debugMode, inventoryBoxNum, pageBoxNum, tradeBoxNum } from "./utils/constants"
import { canisterItemsToTokens, clone, existItems, getInventoryBoxes, getPrincipalId, getRemoteBoxes, getUserTokens, sendNFT } from "./utils/funcs"
import { idlFactory } from "../trade_canister/src/declarations/trade_canister/index"

import { ModalBox } from './ModalBox'
import RemoteBox from "./RemoteBox"
import BagBox from "./BagBox"
import BagItem from "./BagItem"

import Header from "./Header"
import Footer from "./Footer"

const { ic } = window
const { plug } = ic

const canisterId = "gqux4-4qaaa-aaaao-ab62q-cai"
const whitelist = [canisterId, '6hgw2-nyaaa-aaaai-abkqq-cai']
const host = "https://mainnet.dfinity.network"
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
  const [showConfirmModal, setShowConfirmModal] = useState(false)
  const [showTradeCompletedModal, setShowTradeCompletedModal] = useState(false)
  const [message, setMessage] = useState('')
  const [loginAttempted, setLoginAttempted] = useState(false)
  const [mode, setMode] = useState('inventory') // inventory or trade

  useEffect(() => {
    (async () => {
      if (!principal || !localUserId) return
      setLoading(true)
      // const balance = await plug.requestBalance()
      // console.log("balance: ", balance)
      const newTokens = await getUserTokens({ agent: plug.agent, user: localUserId })
      setInventoryTokens(clone(newTokens))
      setInventoryBoxes(getInventoryBoxes(newTokens))

      // // if user is guest, join the trade
      // if (tradeId) {
      //   startTrade()
      // }
      setLoading(false)
    })()
  }, [principal])

  let localLoginAttempted = false

  useEffect(() => {
    // this should only run once
    (async () => {
    if(type !== "webaverse" || authenticated || loginAttempted || localLoginAttempted) return;
    console.log('calling effect')
    setLoginAttempted(true)
    localLoginAttempted = true;
    login()
    })()
  }, []);

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

      if (tradeData.host_accept && tradeData.guest_accept && tradeData.host_escrow_items.length === tradeData.host_items.length && tradeData.guest_escrow_items.length === tradeData.guest_items.length) {
        setShowTradeCompletedModal(true)
      }

      setLoading(false)

      setTimeout(async () => {
        const trade = await plugActor.get_trade_by_id(tradeData.id)
        setTradeData(trade)
      }, 2000)
    })()
  }, [tradeData])

  useEffect(() => {
    const cloneInventoryBoxes = clone(inventoryBoxes)
    cloneInventoryBoxes.forEach(box => {
      box.item?.token_id && (box.item = inventoryTokens[box.item.token_id])
    })
    console.log('cloneInventoryBoxes: ', cloneInventoryBoxes)
    setInventoryBoxes(cloneInventoryBoxes)

    const cloneLocalBoxes = clone(localBoxes)
    cloneLocalBoxes.forEach(box => {
      box.item?.token_id && (box.item = inventoryTokens[box.item.token_id])
    })
    console.log('cloneLocalBoxes: ', cloneLocalBoxes)
    setLocalBoxes(cloneLocalBoxes)
  }, [inventoryTokens])

  const startTrade = async () => {
    if (!plug.createActor) return
    setLoading(true)
    const tempPlugActor = await plug.createActor({ canisterId, interfaceFactory: idlFactory })
    setLoading(false)
    setPlugActor(tempPlugActor)
  }

  const onConnect = async () => {
    console.log('Connecting...')
    setLoginAttempted(true)
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
    setShowConfirmModal(true)
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
      <DndProvider backend={HTML5Backend}>
      <Header authenticated={authenticated} setMode={setMode} mode={mode} />
        {/* If both players accepted their trade */}
        {authenticated && tradeData && accepted && existItems(localBoxes) && showConfirmModal && ((isCreator && tradeData.guest_accept) || (!isCreator && tradeData.host_accept)) &&
          <ModalBox>
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
          {!authenticated &&
            <div style={{

            }}>
              <div style={{

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
            </div>
          }
          {authenticated && !tradeData &&
            <div style={{

            }}>
              <div style={{
              
            }}>
                {!tradeStarted && (
                  <button onClick={startTrade}>
                    Start Trade
                  </button>
                )}
                {tradeStarted && (
                  <button>Starting...</button>
                )}
              </div>
            </div>
          }
          {authenticated && tradeData &&
            <>
              <div>
                <div style={{
              
                }}>
                  <div style={{
              
                  }}>
                    <div style={{
              
                    }}>Their Trade</div>
                    <div style={{
              
                    }}>
                      {(isCreator && tradeData.guest_accept) ||
                        (!isCreator && tradeData.host_accept)
                        ? "TRADE ACCEPTED"
                        : ""}
                    </div>
                  </div>
                  <div style={{
              
                  }}>
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
                            setMessage={setMessage}
                          />
                        </RemoteBox>
                      )
                    })}
                  </div>
                </div>
              </div>
              <div>
                <div style={{
              
                }}>
                  <div style={{
              
                  }}>Your Trade</div>
                  <div style={{
              
                  }}>
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
                            setMessage={setMessage}
                          />
                        </BagBox>
                      )
                    })}
                  </div>
                </div>
              </div>
              <div>
                <div style={{
              
                }}>
                  <button style={{
              
                  }}
                    onClick={onAccept}
                    disabled={accepted || !existItems(localBoxes)}
                  >
                    Accept
                  </button>
                  <button style={{
              
                  }}
                    onClick={onCancel}
                    disabled={!accepted || !existItems(localBoxes) || (isCreator ? tradeData.guest_accept : tradeData.host_accept)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </>
          }
          {authenticated &&
            <div>
              <div style={{
              
              }}>
                <div style={{
              
                }}>
                  <div style={{
              
                  }}>Inventory</div>
                  <div style={{
              
                  }}>
                    <div style={{
              
                    }} onClick={onPrevPage}>
                      &#60;
                    </div>
                    <div style={{
              
                    }}>{curPage}</div>
                    <div style={{
              
                    }} onClick={onNextPage}>
                      &#62;
                    </div>
                  </div>
                </div>
                <div style={{
              
                }}>
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
                            setMessage={setMessage}
                          />
                        </BagBox>
                      )
                    })}
                </div>
              </div>
            </div>
          }
        </div>
        <Footer showPagination={authenticated} status={loading} curPage={curPage} setCurPage={setCurPage} />
      </DndProvider>
  )
}
