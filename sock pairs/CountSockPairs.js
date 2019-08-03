
let pairs = 0;
function sockMerchant(n, ar) {
  let currentColorSocks = ar[0];
  ar.shift();
  if (ar.indexOf(currentColorSocks) > -1) {
      pairs++;
    ar.splice(ar.indexOf(currentColorSocks), 1);
  }
  if (ar.length > 0) { 
      sockMerchant(ar.length, ar);    
  }
  return pairs;
}

console.log('Total pairs: ', sockMerchant(9, [10, 20, 10, 30, 50, 50, 20]));