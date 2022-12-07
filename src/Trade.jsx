import React, { useEffect, useState } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import { debugMode, inventoryBoxNum, tradePageBoxNum, pageBoxNum, tradeBoxNum } from './constants'
import { canisterItemsToTokens, clone, deepEqual, existItems, getInventoryBoxes, getLocalBoxes, getMismatchedItems, getPrincipalId, getRemoteBoxes, getUserTokens, sendNFT } from './utils'
import { idlFactory } from '../trade_canister/src/declarations/trade_canister/index'

import { ModalBox } from './ModalBox'
import RemoteBox from './RemoteBox'
import BagBox from './BagBox'
import BagItem from './BagItem'
import Header from './Header'
import Footer from './Footer'

const { ic } = window
const { plug } = ic

// const canisterId = 'gqux4-4qaaa-aaaao-ab62q-cai'
const canisterId = 'rrkah-fqaaa-aaaaa-aaaaq-cai'
const whitelist = [canisterId, '6hgw2-nyaaa-aaaai-abkqq-cai']
// const host = 'https://mainnet.dfinity.network'
const host = 'http://localhost:8000'
const timeout = 50000
let partnerTokens = {}

const url = new URL(window.location.href)
let tradeId = url.searchParams.get('tradeId')

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

  const [plugActor, setPlugActor] = useState(null)
  const [connected, setConnected] = useState(false)
  const [tradeData, setTradeData] = useState(null)
  const [isCreator, setIsCreator] = useState(false)
  const [partnerId, setPartnerId] = useState(null)

  const [remoteBoxes, setRemoteBoxes] = useState(clone(initRemoteBoxes))
  const [localBoxes, setLocalBoxes] = useState(clone(initLocalBoxes))
  const [inventoryTokens, setInventoryTokens] = useState({})
  const [inventoryBoxes, setInventoryBoxes] = useState(initInventoryBoxes)
  const [accepted, setAccepted] = useState(false)
  const [confirmed, setConfirmed] = useState(false)

  const [loading, setLoading] = useState(false)
  const [mode, setMode] = useState('inventory') // inventory or trade
  const [selItem, setSelItem] = useState(null)
  const [curPage, setCurPage] = useState(1)
  const [alertMessage, setAlertMessage] = useState('')
  const [message, setMessage] = useState('')

  let localLoginAttempted = false
  let localTradeId = tradeData ? tradeData.id : tradeId ? tradeId : localStorage.getItem('storageTradeId')

  useEffect(() => {
    (async () => {
      await waitLoading()
      if (type !== 'webaverse' || connected || localLoginAttempted) return // for webaverse
      localLoginAttempted = true
      onConnect()
    })()
  }, [])

  useEffect(() => {
    (async () => {
      await waitLoading()
      if (!connected || !plug.agent || !plug.principalId) return
      setLoading(true)
      const newTokens = await getUserTokens({ agent: plug.agent, user: plug.principalId })
      setInventoryTokens(clone(newTokens))
      setInventoryBoxes(getInventoryBoxes(newTokens))

      // Disable this for partner to start the trade himself
      if (localTradeId) {
        const trade = await onStartTrade() // Start trade if it's existed

        if (trade && Object.keys(newTokens).length) {
          const hostId = getPrincipalId(trade.host)
          const guestId = getPrincipalId(trade.guest)
          let ltts // Local Trade Tokens

          if (hostId === plug.principalId) {
            ltts = canisterItemsToTokens(trade.host_items, newTokens)
          } else {
            if (guestId === plug.principalId) {
              ltts = canisterItemsToTokens(trade.guest_items, newTokens)
            }
          }

          if (ltts) {
            const its = Object.values(newTokens).filter(token => !ltts[token.token_id]) // Inventory Tokens
            const ibs = getInventoryBoxes(its) // Inventory Boxes
            setInventoryBoxes(ibs)
            const lbs = getLocalBoxes(ltts) // Local Boxes
            setLocalBoxes(lbs)
          }
        }
      }

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
        return console.error('Trade already initialized to another wallet. guestId: ', guestId)
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

      // Get partner NFT tokens once
      if (tradeData && ((isCreator && tradeData.guest_items.length) || (!isCreator && tradeData.host_items.length)) && !partnerTokenLen && partnerId) {
        partnerTokens = await getUserTokens({ agent: plug.agent, user: partnerId })
        console.log('partnerTokens: ', partnerTokens)
      }

      const rtts = isCreator ? canisterItemsToTokens(tradeData.guest_items, partnerTokens) : canisterItemsToTokens(tradeData.host_items, partnerTokens) // Remote Trade Tokens
      const rbs = getRemoteBoxes(rtts) // Remote Boxes
      setRemoteBoxes(rbs)

      if (
        hostId && guestId &&
        tradeData.host_items.length && tradeData.host_items.length !== tradeData.host_escrow_items.length &&
        tradeData.guest_items.length && tradeData.guest_items.length !== tradeData.guest_escrow_items.length &&
        tradeData.host_accept && tradeData.guest_accept
      ) {
        console.log('Sending NFTs...')
        const canisterItems = isCreator ? tradeData.host_items : tradeData.guest_items
        const canisterEscrowItems = isCreator ? tradeData.host_escrow_items : tradeData.guest_escrow_items
        const canisterAddableItems = getMismatchedItems(canisterItems, canisterEscrowItems)
        console.log('canisterAddableItems: ', canisterAddableItems)

        for (let i = 0; i < canisterAddableItems.length; i++) {
          const canisterAddableItem = canisterAddableItems[i]
          const item = inventoryTokens[canisterAddableItem.token_id]

          try {
            // await sendNFT({ item, to: partnerId, agent: plug.agent })
            await plugActor.add_item_to_escrow(tradeData.id, canisterAddableItem)
          } catch (e) {
            console.log('NFT is non-existent: ', e)
          }
        }

        setConfirmed(false)
        debugMode && setTimeout(() => setAlertMessage('Trade completed!'), 1000) // To test modal
      }

      if (
        tradeData.host_accept && tradeData.guest_accept &&
        tradeData.host_items.length &&
        tradeData.host_escrow_items.length === tradeData.host_items.length &&
        tradeData.guest_items.length &&
        tradeData.guest_escrow_items.length === tradeData.guest_items.length) {
        localStorage.setItem('storageTradeId', '')
        setAlertMessage('Trade completed!')
      }

      setTimeout(async () => {
        try {
          const trade = await plugActor.get_trade_by_id(tradeData.id)
          if (!deepEqual(trade, tradeData)) console.log('trade: ', trade)
          setTradeData(trade)
        } catch (e) {
          console.log('get_trade_by_id error: ', e)
          if (tradeId && !isCreator) {
            setAlertMessage('The host left the trade')
          }
        }
      }, 1000)

      setLoading(false)
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
    (async () => {
      await waitLoading()
      setMessage('Connecting...')
      let publicKey

      try {
        publicKey = await plug.requestConnect({
          whitelist, host, timeout,
          onConnectionUpdate: () => {
            console.log('sessionData: ', plug.sessionManager.sessionData)
          }
        })
      } catch (e) {
        setMessage('')
        setAlertMessage('Connection failed')
        return
      }

      if (publicKey) {
        console.log('publicKey: ', publicKey)
        const tempPlugActor = await plug.createActor({ canisterId, interfaceFactory: idlFactory, agent: plug.agent })
        console.log('tempPlugActor: ', tempPlugActor)
        setPlugActor(tempPlugActor)
      } else {
        setMessage('')
        setAlertMessage('Connection failed')
        return
      }

      console.log('plug: ', plug)
      setConnected(true)
      setMessage('')
    })()
  }

  const onStartTrade = async () => {
    if (!plugActor || !plug.principalId) return
    setLoading(true)
    let trade

    if (localTradeId) {
      console.log('localTradeId: ', localTradeId)

      try {
        trade = await plugActor.get_trade_by_id(localTradeId)
      } catch (e) {
        console.log('get_trade_by_id error: ', e)

        if (tradeId && !isCreator) {
          setAlertMessage('The host left the trade')
          setLoading(false)
          return
        }
      }
    }

    if (!trade) {
      trade = await plugActor.create_trade()
    }
    localStorage.setItem('storageTradeId', trade.id)
    const hostId = getPrincipalId(trade.host)
    const guestId = getPrincipalId(trade.guest)

    if (hostId === plug.principalId) {
      setIsCreator(true)
    } else {
      if (!guestId || guestId !== plug.principalId) {
        trade = await plugActor.join_trade(trade.id)
      }
      if (getPrincipalId(trade.guest) === plug.principalId) {
        setIsCreator(false)
      } else {
        // This will never occur if rust is correct, but added for exception
        setMessage('Trading is incorrect')
        setLoading(false)
        return
      }
    }

    console.log('trade: ', trade)
    setTradeData(trade)
    setLoading(false)
    return trade
  }

  const onCancelTrade = async () => {
    if (!plugActor || !tradeData) return
    setLoading(true)
    await plugActor.leave_trade(tradeData.id)
    setTradeData(null)
    setPartnerId(null)
    localStorage.setItem('storageTradeId', '')
    setLoading(false)
  }

  const onConfirm = async () => {
    if (!plugActor || !tradeData) return
    setLoading(true)
    setConfirmed(true)
    await plugActor.accept(tradeData.id)
    setLoading(false)
  }

  const onCancel = async () => {
    if (!plugActor || !tradeData) return
    setLoading(true)
    setConfirmed(false)
    await plugActor.cancel(tradeData.id)
    setLoading(false)
  }

  const waitLoading = async () => {
    await new Promise(resolve => !loading && resolve())
  }

  const isConfirmedItem = tokenId => {
    if (!tradeData) return false
    const escrowItems = isCreator ? tradeData.host_escrow_items : tradeData.guest_escrow_items
    return !!escrowItems.find(escrowItem => escrowItem.token_id === tokenId)
  }

  return (
    <div style={{
      position: 'absolute',
      backgroundColor: '#1A1A1A',
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '600px',
      height: '400px',
    }}>
      <DndProvider backend={HTML5Backend}>
        <Header connected={connected} setMode={setMode} mode={mode} />
        {!connected &&
          <button onClick={onConnect} style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            padding: '.5rem 2rem',
            borderRadius: '0.5rem',
            backgroundColor: '#2c3e50',
          }}>
            Connect
          </button>
        }
        {connected && plug.principalId &&
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            padding: '.5em'
          }}>
            {inventoryBoxes
              .slice(
                (curPage - 1) * (mode === 'trade' ? tradePageBoxNum : pageBoxNum),
                curPage * (mode === 'trade' ? tradePageBoxNum : pageBoxNum)
              )
              .map((box, index) => {
                return (
                  <BagBox key={box.id}>
                    <BagItem
                      key={`inventory_${box.id}`}
                      item={clone(box.item)}
                      index={(curPage - 1) * (mode === 'trade' ? tradePageBoxNum : pageBoxNum) + index}
                      tradeBoxes={clone(inventoryBoxes)}
                      setTradeBoxes={setInventoryBoxes}
                      tradeLayer='inventory'
                      plugActor={plugActor}
                      tradeData={tradeData}
                      localUserId={plug.principalId}
                      setSelItem={setSelItem}
                      setLoading={setLoading}
                      setAlertMessage={setAlertMessage}
                      isConfirmedItem={isConfirmedItem}
                    />
                  </BagBox>
                )
              })}
          </div>
        }
        {mode === 'trade' && connected && plug.principalId &&
          <>
            <div>
              <span style={{
                width: '50%',
                display: 'inline-block',
                textAlign: 'left',
                paddingLeft: '.5em',
                opacity: 0.5,
              }}>YOUR OFFERINGS</span>
              <span style={{
                width: '50%',
                display: 'inline-block',
                textAlign: 'right',
                paddingRight: '.5em',
                opacity: 0.5,
              }}>
                {tradeData && ((isCreator && tradeData.guest_accept) || (!isCreator && tradeData.host_accept)) ? 'TRADE ACCEPTED' : 'PARTNER OFFERINGS'}
              </span>
            </div>
            <div>
              <span style={{
                width: '50%',
                display: 'inline-block',
                textAlign: 'left',
                paddingLeft: '.5em'
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
                          tradeLayer='local'
                          plugActor={plugActor}
                          tradeData={tradeData}
                          localUserId={plug.principalId}
                          setSelItem={setSelItem}
                          setLoading={setLoading}
                          setAlertMessage={setAlertMessage}
                          isConfirmedItem={isConfirmedItem}
                        />
                      }
                    </BagBox>
                  )
                })}
              </span>
              <span style={{
                width: '50%',
                display: 'inline-block',
                textAlign: 'right',
                paddingRight: '.5em'
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
                          tradeLayer='remote'
                          plugActor={plugActor}
                          tradeData={tradeData}
                          localUserId={plug.principalId}
                          setSelItem={setSelItem}
                          setLoading={setLoading}
                          setAlertMessage={setAlertMessage}
                          isConfirmedItem={isConfirmedItem}
                        />
                      }
                    </RemoteBox>
                  )
                })}
              </span>
            </div>
          </>
        }
        <div style={{
          width: '100%',
          marginTop: '.5em',
        }}>
          {!tradeData && mode === 'trade' && connected &&
            <button style={{
              position: 'absolute',
              left: '50%',
              transform: 'translate(-50%, 0)',
              backgroundColor: 'green',
              padding: '.3em 1em',
              borderRadius: '.3em',
            }} onClick={onStartTrade}>
              Start Trade
            </button>
          }
          {tradeData && mode === 'trade' &&
            <button onClick={onCancelTrade} style={{
              position: 'absolute',
              right: '.5em',
              backgroundColor: 'red',
              padding: '.3em 1em',
              borderRadius: '.3em',
            }}>
              Cancel Trade
            </button>
          }
          {tradeData && (!tradeData.host_accept || !tradeData.guest_accept) && mode === 'trade' &&
            <div style={{
              display: 'flex',
              gap: '1em',
              paddingLeft: '.5em',
            }}>
              <button style={{
                backgroundColor: '#2ecc71',
                borderRadius: '.3em',
                padding: '.3em 1em',
                opacity: (!existItems(localBoxes) || accepted) ? 0.5 : 1,
              }}
                onClick={() => {
                  if (!existItems(localBoxes) || accepted) return
                  setAccepted(true)
                }}
              >
                Accept
              </button>
              <button style={{
                backgroundColor: '#e74c3c',
                borderRadius: '.3em',
                padding: '.3em 1em',
                opacity: (!existItems(localBoxes) || !accepted) ? 0.5 : 1,
              }}
                onClick={() => {
                  if (!existItems(localBoxes) || !accepted) return
                  setAccepted(false)
                }}
              >
                Cancel
              </button>
            </div>
          }
        </div>
        <div style={{
          width: '100%',
        }}>
          {partnerId && (
            <div style={{
              position: 'absolute',
              left: '.5em',
              bottom: '2em',
            }}>
              Trading with&nbsp;
              <span style={{
                color: 'yellow',
              }}>
                {partnerId}
              </span>
            </div>
          )}
        </div>
        {isCreator && tradeData && tradeData.id && !tradeData.guest.length && (
          <ModalBox>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              padding: '50px 10px',
              flexDirection: 'column',
              justifyContent: 'space-between',
              width: '100%',
              height: '100%',
            }}>
              <b> WAITING FOR TRADE PARTNER...</b>
              Send this link to your trade partner
              <a style={{
                color: 'yellow',
              }} href='#'>
                {url.host}/?tradeId={tradeData.id}
              </a>
            </div>
          </ModalBox>
        )}
        {accepted && tradeData && (!tradeData.host_accept || !tradeData.guest_accept) &&
          <ModalBox>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              padding: '50px',
              flexDirection: 'column',
              justifyContent: 'space-between',
              width: '100%',
              height: '100%',
            }}>
              <div>Do you want to confirm the current trade?</div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                width: '100%',
              }}>
                <button style={{
                  backgroundColor: '#2ecc71',
                  borderRadius: '.3em',
                  padding: '.3em 1em',
                  opacity: confirmed ? 0.5 : 1,
                }} onClick={onConfirm}>
                  Confirm
                </button>
                <button style={{
                  backgroundColor: '#e74c3c',
                  borderRadius: '.3em',
                  padding: '.3em 1em',
                  opacity: !confirmed ? 0.5 : 1,
                }} onClick={onCancel}>
                  Cancel
                </button>
              </div>
            </div>
          </ModalBox>
        }
        {alertMessage &&
          <ModalBox>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              padding: '50px',
              flexDirection: 'column',
              justifyContent: 'space-between',
              width: '100%',
              height: '100%',
            }}>
              <div>{alertMessage}</div>
              <button style={{
                backgroundColor: '#2ecc71',
                borderRadius: '.3em',
                padding: '.3em 1em',
              }} onClick={() => { setAlertMessage('') }}>
                Ok
              </button>
            </div>
          </ModalBox>
        }
        {message &&
          <ModalBox>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              padding: '50px',
              flexDirection: 'column',
              justifyContent: 'center',
              width: '100%',
              height: '100%',
            }}>
              <div>{message}</div>
            </div>
          </ModalBox>
        }
        <Footer showPagination={connected} loading={loading} curPage={curPage} setCurPage={setCurPage} />
      </DndProvider>
    </div>
  )
}
