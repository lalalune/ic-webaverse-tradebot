import { inventoryBoxNum, tradeBoxNum } from "./constants";
import { getAllUserNFTs } from "@psychedelic/dab-js";

export const clone = (obj) => {
  // const cloneObj = JSON.parse(JSON.stringify(obj));
  // const cloneObj = Array.isArray(obj) ? [...obj] : { ...obj };
  // const cloneObj = Array.isArray(obj)
  //   ? Object.assign([], obj)
  //   : Object.assign({}, obj);
  // All of the above doesn't work.

  const cloneObj = structuredClone(obj);
  return cloneObj;
};

export const getRemoteBoxes = (remoteItems) => {
  const remoteBoxes = [...Array(tradeBoxNum).keys()].map((i) => {
    return { id: i, item: remoteItems.find(item => item.slot === i) ?? null };
  });
  return remoteBoxes;
};

export const getLocalBoxes = (localItems) => {
  const localBoxes = [...Array(tradeBoxNum).keys()].map((i) => {
    return { id: i, item: localItems.find(item => item.slot === i) ?? null };
  });
  return localBoxes;
};

export const getInventoryBoxes = (inventoryItems) => {
  const inventoryBoxes = [...Array(inventoryBoxNum).keys()].map((i) => {
    return { id: i, item: inventoryItems.find(item => item.slot === i) ?? null };
  });
  return inventoryBoxes;
};

export const getUserTokens = async ({ agent, user }) => {
  return [
    {
      id: '1',
      canisterId: "canister 1",
      collection: "collection 1",
      index: "1",
      name: "token 1",
      url: "assets/armor.png",
      slot: 0,
    },
    {
      id: '2',
      canisterId: "canister 2",
      collection: "collection 2",
      index: "2",
      name: "token 2",
      url: "assets/bastard-sword.png",
      slot: 2,
    },
    {
      id: '3',
      canisterId: "canister 3",
      collection: "collection 3",
      index: "3",
      name: "token 3",
      url: "models/chest.glb",
      slot: 4,
    },
  ];

  const collections = await getAllUserNFTs({
    agent,
    user,
  });
  console.log("collections: ", collections);

  // Make an array of all collections[i].tokens
  const newTokens = {};
  let slot = 0;

  // collections.forEach((collection) => {
  //   if (!collection.name.toLowerCase().includes("cipher")) {
  //     collection.tokens.forEach((token) => {
  //       if (!token.canister.includes("6hgw2-nyaaa-aaaai-abkqq-cai")) {
  //         const jsonMetadata = token.metadata?.json?.value.TextContent;

  //         if (jsonMetadata) {
  //           const parseMetadata = JSON.parse(jsonMetadata);
  //           if (parseMetadata.animation_url)
  //             parseMetadata.image = parseMetadata.animation_url;
  //           token.metadata = parseMetadata;
  //         } else {
  //           token.metadata = {
  //             name: token.collection,
  //             image: token.url,
  //           };
  //         }

  //         newTokens[slot] = { ...token, id: slot, slot };
  //         slot++;
  //       }
  //     });
  //   }
  // });

  collections.forEach((collection) => {
    if (collection.name.toLowerCase().includes("cipher")) {
      collection.tokens.forEach((token) => {
        if (token.canister.includes("6hgw2-nyaaa-aaaai-abkqq-cai")) {
          const jsonMetadata = token.metadata?.json?.value.TextContent;

          if (jsonMetadata) {
            const parseMetadata = JSON.parse(jsonMetadata);
            if (parseMetadata.animation_url)
              parseMetadata.image = parseMetadata.animation_url;
            token.metadata = parseMetadata;
          } else {
            token.metadata = {
              name: token.collection,
              image: token.url,
            };
          }

          newTokens[slot] = { ...token, id: slot.toString(), slot };
          slot++;
        }
      });
    }
  });

  console.log("newTokens: ", newTokens);
  return newTokens;
};

export const getExtension = (url) => {
  const extension = url.split(".").pop().toLowerCase();
  // console.log("extension: ", extension);
  return extension;
};

export const isImage = (url) => {
  if (!url) return false;
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
  ];
  const extension = getExtension(url);
  const flag = imageExtensions.indexOf(extension) >= 0;
  return flag;
};

export const isMedia = (url) => {
  if (!url) return false;
  const mediaExtensions = ["mp4", "mov", "wav", "mp3", "ogg", "webm", "avi"];
  const extension = getExtension(url);
  const flag = mediaExtensions.indexOf(extension) >= 0;
  return flag;
};

export const isModel = (url) => {
  if (!url) return false;
  // const modelExtensions = ["glb", "fbx", "obj", "usd", "stl", "stp"];
  const modelExtensions = ["glb"];
  const extension = getExtension(url);
  const flag = modelExtensions.indexOf(extension) >= 0;
  return flag;
};

export const existItems = boxes => {
  if (!boxes || !boxes.length) return false
  const flag = !!(boxes.filter(box => box?.item?.canisterId).length)
  // console.log('existItems: ', flag)
  return flag
}
