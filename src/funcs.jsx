export const clone = (obj) => {
  const cloneObj = JSON.parse(JSON.stringify(obj));
  return cloneObj;
};
