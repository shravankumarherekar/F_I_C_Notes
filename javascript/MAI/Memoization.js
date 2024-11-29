
const heavyCalculation = (val) => {
  let i = 0;
  while (i < 999999999) i++;
  return val * val;
};
 
const cache = () => {
  const cacheObject = {};
  return (val) => {
    let cacheValue = cacheObject[val];
 
    if (!cacheValue) {
      cacheValue = heavyCalculation(val);
      cacheObject[val] = cacheValue;
      console.log("noCache");
    }
 
    return cacheValue;
  };
};
 
const value = cache();
console.log(value(2));
console.log(value(3));
console.log(value(4));
console.log(value(2));
 