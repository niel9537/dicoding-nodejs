const _lodash = require("lodash");
const myOddEvenArrays = _lodash.partition([1, 2, 3, 4, 5, 6], (n) => n % 2);
console.log(myOddEvenArrays);
