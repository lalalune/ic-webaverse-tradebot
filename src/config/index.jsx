const foodTypes = {
  WILD_FOOD: "wild food",
  FARM_FOOD: "farm food",
  HUNTING_FOOD: "venison"
};

const usableTypes = {
  POTION: "potion"
};
export const Types = {
  HEAD: "head",
  CHEST: "chest",
  HANDS: "hands",
  ICTOKEN: "ICTOKEN",
  MAIN_HAND: "main-hand",
  OFF_HAND: "off-hand",
  RING: "ring",
  AMULET: "amulet",
  PANTS: "pants",
  FEET: "feet",
  HEAD2: "head2",
  CHEST2: "chest2",
  HANDS2: "hands2",
  WEAPON2: "WEAPON2",
  MAIN_HAND2: "main-hand2",
  OFF_HAND2: "off-hand2",
  RING2: "ring2",
  AMULET2: "amulet2",
  PANTS2: "pants2",
  FEET2: "feet2"
};

export const enchantDictionary = {
  17: {
    name: "Purple Glow"
  }
};

export const bagConfig = {
  bagBoxes: [...Array(18).keys()]
};

export default Types;

export const itemDictionary = {
  5: {
    id: 5,
    name: "Chest Plate",
    stackable: false,
    type: Types.ICTOKEN,
    image: "assets/armor.png",
  },
  8: {
    id: 8,
    name: "Bastard Sword",
    stackable: false,
    image: "assets/bastard-sword.png",
    type: Types.ICTOKEN
  }
};
