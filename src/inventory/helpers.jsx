import { Types, itemDictionary } from "../config";
import * as R from "ramda";

export const RACES = {
  elven: "ELF",
  humanoid: "HUMAN",
  angel: "ANGEL",
  demon: "DEMON",
  vampire: "VAMPIRE",
  wolf: "WOLF"
};

export const RANKS = {
  Private: "Private",
  "Private First Class": "Private First Class",
  Specialist: "Specialist",
  Corporal: "Corporal",
  Sergeant: "Sergeant",
  "Staff Sergeant": "Staff Sergeant",
  "Sergeant First Class": "Sergeant First Class",
  "Master Sergeant": "Master Sergeant",
  "First Sergeant": "First Sergeant",
  "Sergeant Major": "Sergeant Major",
  "Command Sergeant Major": "Command Sergeant Major",
  "Sergeant Major of the Army": "Sergeant Major of the Army"
};

export const playerItemSlots = {
  all: [Types.HEAD, Types.CHEST, Types.PANTS, Types.FEET, Types.MAIN_HAND, Types.OFF_HAND]
};

export const remoteItemSlots = {
  all: [Types.HEAD2, Types.CHEST2, Types.PANTS2, Types.FEET2, Types.MAIN_HAND2, Types.OFF_HAND2]
};