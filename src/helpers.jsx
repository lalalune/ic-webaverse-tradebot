import * as R from "ramda";

export const isBlank = x => R.isNil(x) || R.isEmpty(x);

export const canStack = (id1, id2, isStackable) => id1 === id2 && isStackable;

export default {
  isBlank,
  canStack
};
