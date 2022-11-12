import { inventoryBoxNum } from "./constants";
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

export const getInventoryBoxes = (inventoryItems) => {
  const inventoryBoxes = [...Array(inventoryBoxNum).keys()].map((i) => {
    return { id: i, type: "all", item: inventoryItems[i] ?? null };
  });
  // console.log("inventoryBoxes: ", inventoryBoxes);
  return inventoryBoxes;
};

export const getUserTokens = async ({ agent, user }) => {
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
  //           token.metadata = JSON.parse(jsonMetadata);
  //         } else {
  //           token.metadata = {
  //             name: token.collection,
  //             image: token.url,
  //           };
  //         }

  //         newTokens[slot] = { ...token, id: slot };
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
            token.metadata = JSON.parse(jsonMetadata);
          } else {
            token.metadata = {
              name: token.collection,
              image: token.url,
            };
          }

          newTokens[slot] = { ...token, id: slot };
          slot++;
        }
      });
    }
  });

  console.log("newTokens: ", newTokens);
  return newTokens;
};
