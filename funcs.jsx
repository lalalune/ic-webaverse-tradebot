export const getSortedItems = items => {
  if (!items || !items.length) return [];
  const sortedItems = [];
  items.forEach(item => {
    sortedItems[item.slot] = item;
  });
  // console.log('sortedItems: ', sortedItems);
  return sortedItems;
};
