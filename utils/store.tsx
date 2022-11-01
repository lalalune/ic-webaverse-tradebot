import create from 'zustand'
import { Item } from './types'

interface Store {
  nfts: Item[]
  updateNfts: (newNfts: Item[]) => void

  tradeItems: Item[]
  updateTradeItems: (newTradeItems: Item[]) => void

  items: Item[]
  updateItems: (newItems: Item[]) => void

  itemNumPerPage: number
  updateItemNumPerPage: (newItemNumPerPage: number) => void

  selSlot: number
  updateSelSlot: (newSelSlot: number) => void

  curPage: number
  updateCurPage: (newCurPage: number) => void
}

export const useStore = create<Store>((set, get) => ({
  nfts: [
    new Item('1', '1.png'),
    new Item('2', '1.png'),
    new Item('3', '1.png'),
    new Item('4', '1.png'),
    new Item('5', '1.png'),
    new Item('6', '1.png'),
  ],
  updateNfts: (newNfts: Item[]) => set({ nfts: newNfts }),

  tradeItems: [
    new Item('7', '1.png'),
    new Item('8', '1.png'),
  ],
  updateTradeItems: (newTradeItems: Item[]) => set({ tradeItems: newTradeItems }),

  items: [...get().nfts, ...get().tradeItems],
  updateItems: (newItems: Item[]) => set({ items: newItems }),

  itemNumPerPage: 9,
  updateItemNumPerPage: (newItemNumPerPage: number) => set({ itemNumPerPage: newItemNumPerPage }),

  selSlot: -1,
  updateSelSlot: (newSelSlot: number) => set({ selSlot: newSelSlot }),

  curPage: 1,
  updateCurPage: (newCurPage: number) => set({ curPage: newCurPage }),
}))
