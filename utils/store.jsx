import create from 'zustand';

export const useStore = create(set => ({
  nfts: [
    {name: '1', image: 'images/item.jpg'},
    {name: '2', image: 'images/item.jpg'},
    {name: '3', image: 'images/item.jpg'},
    {name: '4', image: 'images/item.jpg'},
    {name: '5', image: 'images/item.jpg'},
    {name: '6', image: 'images/item.jpg'},
  ],
  updateNfts: newNfts => set(state => ({nfts: newNfts})),

  tradeItems: [
    {name: '7', image: 'images/item.jpg'},
    {name: '8', image: 'images/item.jpg'},
  ],
  updateTradeItems: newTradeItems =>
    set(state => ({tradeItems: newTradeItems})),

  items: [],
  updateItems: newItems => set(state => ({items: newItems})),

  itemNumPerPage: 9,
  updateItemNumPerPage: newItemNumPerPage =>
    set(state => ({itemNumPerPage: newItemNumPerPage})),

  selSlot: -1,
  updateSelSlot: newSelSlot => set(state => ({selSlot: newSelSlot})),

  curPage: 1,
  updateCurPage: newCurPage => set(state => ({curPage: newCurPage})),
}));
