import { getAllUserNFTs, getNFTActor } from "@psychedelic/dab-js"
import { Principal } from "@dfinity/principal"
import { inventoryBoxNum, tradeBoxNum, isDebug } from "./constants"

export const clone = (obj) => {
  // const cloneObj = JSON.parse(JSON.stringify(obj))
  // const cloneObj = Array.isArray(obj) ? [...obj] : { ...obj }
  // const cloneObj = Array.isArray(obj)
  //   ? Object.assign([], obj)
  //   : Object.assign({}, obj)
  // All of the above doesn't work.

  const cloneObj = structuredClone(obj)
  return cloneObj
}

export const getRemoteBoxes = (remoteItems) => {
  remoteItems = Object.values(remoteItems)
  const remoteBoxes = [...Array(tradeBoxNum).keys()].map((i) => {
    return { id: i, item: remoteItems.find(item => item.slot === i) ?? null }
  })
  return remoteBoxes
}

export const getLocalBoxes = (localItems) => {
  localItems = Object.values(localItems)
  const localBoxes = [...Array(tradeBoxNum).keys()].map((i) => {
    return { id: i, item: localItems.find(item => item.slot === i) ?? null }
  })
  return localBoxes
}

export const getInventoryBoxes = (inventoryItems) => {
  inventoryItems = Object.values(inventoryItems)
  const inventoryBoxes = [...Array(inventoryBoxNum).keys()].map((i) => {
    return { id: i, item: inventoryItems.find(item => item.slot === i) ?? null }
  })
  return inventoryBoxes
}

const player1TokenId = 143
const player2TokenId = 149

export const getUserTokens = async ({ agent, user }) => {
  if (isDebug) {
    if (user === '6b7jr-gch2d-hjkwd-nwoxa-ilw3z-hj547-nyvll-3ohgd-epuof-7adkv-2qe') {
      return {
        [player1TokenId]: {
          canister_id: "6hgw2-nyaaa-aaaai-abkqq-cai",
          standard: "DIP721",
          index: player1TokenId,
          token_id: player1TokenId,
          name: "Player 1",
          collection: "Test",
          url: "https://local.webaverse.com:3000/src/assets/body1.glb",
          slot: 0,
        }
      }
    } else {
      return {
        [player2TokenId]: {
          canister_id: '6hgw2-nyaaa-aaaai-abkqq-cai',
          standard: "DIP721",
          index: player2TokenId,
          token_id: player2TokenId,
          name: "Player 2",
          collection: "Test",
          url: "https://local.webaverse.com:3000/src/assets/body2.glb",
          slot: 0,
        }
      }
    }
  }

  let collections = []

  // try {
  collections = await getAllUserNFTs({
    agent,
    user,
  })
  // } catch (e) {
  //   console.log('getAllUserNFTs error: ', e)
  // }

  console.log("collections: ", collections)

  // Make an array of all collections[i].tokens
  const newTokens = {}
  let slot = 0

  collections.forEach((collection) => {
    // if (!collection.name.toLowerCase().includes("cipher")) {
    collection.tokens.forEach((token) => {
      const token_id = token.index.toString()
      let newToken = { canister_id: token.canister, collection: token.collection, token_id, slot, standard: token.standard, index: token.index }
      const jsonMetadata = token.metadata?.json?.value.TextContent

      if (jsonMetadata) {
        const parseMetadata = JSON.parse(jsonMetadata)
        console.log('parseMetadata: ', parseMetadata)
        newToken.name = parseMetadata.name ?? token.collection
        newToken.url = parseMetadata.image ?? collection.icon
      } else {
        newToken.name = token.collection
        newToken.url = collection.icon
      }

      newTokens[token_id] = newToken
      slot++
    })
    // }
  })

  console.log("newTokens: ", newTokens)
  return newTokens
}

export const getExtension = (url) => {
  const extension = url.split(".").pop().toLowerCase()
  return extension
}

export const isImage = (url) => {
  if (!url) return false
  // const flag = url.match(/\.(jpeg|jpg|gif|png)$/) != null
  const imageExtensions = [
    "apng",
    "avif",
    "gif",
    "jpg",
    "jpeg",
    "jfif",
    "pjpeg",
    "pjp",
    "png",
    "svg",
    "webp",
    "bmp",
    "ico",
    "cur",
    "tif",
    "tiff",
  ]
  const extension = getExtension(url)
  const flag = imageExtensions.indexOf(extension) >= 0
  return flag
}

export const isMedia = (url) => {
  if (!url) return false
  const mediaExtensions = ["mp4", "mov", "wav", "mp3", "ogg", "webm", "avi"]
  const extension = getExtension(url)
  const flag = mediaExtensions.indexOf(extension) >= 0
  return flag
}

export const isModel = (url) => {
  if (!url) return false
  // const modelExtensions = ["glb", "fbx", "obj", "usd", "stl", "stp"]
  const modelExtensions = ["glb"]
  const extension = getExtension(url)
  const flag = modelExtensions.indexOf(extension) >= 0
  return flag
}

export const existItems = boxes => {
  if (!boxes || !boxes.length) return false
  const flag = !!(boxes.filter(box => box?.item?.canister_id).length)
  return flag
}

export const getPrincipalId = principal => {
  if (!principal) return ''
  if (Array.isArray(principal)) {
    if (!principal.length) return ''
    principal = principal[0]
  }
  const principalId = principal._arr ? Principal.fromUint8Array(principal._arr).toText() : ''
  return principalId
}

export const canisterItemsToTokens = (canisterItems, userTokens) => {
  if (!Array.isArray(canisterItems) || !userTokens) return {}
  const tokens = {}
  canisterItems.forEach(item => {
    userTokens[item.token_id] && (tokens[item.token_id] = userTokens[item.token_id])
  })
  return tokens
}

export const sendNFT = async ({ item, to, agent }) => {
  const NFTActor = getNFTActor({ canisterId: item.canister_id, agent, standard: item.standard })
  await NFTActor.transfer(Principal.fromText(to), item.index)
}

export const deepEqual = (object1, object2) => {
  const keys1 = Object.keys(object1)
  const keys2 = Object.keys(object2)
  if (keys1.length !== keys2.length) {
    return false
  }
  for (const key of keys1) {
    const val1 = object1[key]
    const val2 = object2[key]
    const areObjects = isObject(val1) && isObject(val2)
    if (
      areObjects && !deepEqual(val1, val2) ||
      !areObjects && val1 !== val2
    ) {
      return false
    }
  }
  return true
}

export const isObject = (object) => {
  return object != null && typeof object === 'object'
}

export const getMismatchedItems = (focusItems, compareItems) => {
  const mismatchedItems = []
  focusItems.forEach(focusItem => {
    if (!compareItems.find(compareItem => (compareItem.name === focusItem.name && compareItem.canister_id === focusItem.canister_id && compareItem.token_id === focusItem.token_id))) {
      mismatchedItems.push(focusItem)
    }
  })
  return mismatchedItems
}
