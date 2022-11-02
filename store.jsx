import create from 'zustand';

export const useStore = create(set => ({
  items: [
    {name: '0', image: 'images/item.jpg', slotType: 'inventory'},
    {name: '1', image: 'images/item.jpg', slotType: 'inventory'},
    {name: '2', image: 'images/item.jpg', slotType: 'inventory'},
    {name: '3', image: 'images/item.jpg', slotType: 'inventory'},
    {name: '4', image: 'images/item.jpg', slotType: 'inventory'},
    {name: '5', image: 'images/item.jpg', slotType: 'inventory'},
    {name: '6', image: 'images/item.jpg', slotType: 'local', isTrade: true},
    {name: '7', image: 'images/item.jpg', slotType: 'local', isTrade: true},
  ],
  updateItems: newItems => set(state => ({items: newItems})),

  itemNumPerPage: 9,
  updateItemNumPerPage: newItemNumPerPage =>
    set(state => ({itemNumPerPage: newItemNumPerPage})),

  selItemEl: null,
  updateSelItemEl: newSelItemEl => set(state => ({selItemEl: newSelItemEl})),

  curInventoryPage: 1,
  updateCurInventoryPage: newCurPage =>
    set(state => ({curInventoryPage: newCurPage})),
}));
