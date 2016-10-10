'use strict';
// DP 03-Oct-16
// Completed 10-4-2016

// My solution
let input = [3628800, 479001600, 6, 18];

for (let value of input) {

  let newValue = value;

  for (var i = 2; i <= value ; i++) {

    if (newValue / i === 1) {
      console.log(`${value} = ${i}!`);
      break;
    }

    if (newValue < 1) {
      console.log(`${value} = not factorial`);
      break;
    }

    newValue = newValue / i;

  }

}


// Found Cleaner solution from someone else
// function reverseFactorial (n) {
//   let i = 1;
//   while (n !== 1 && n > 1) {
//     ++i;
//     n /= i;
//   }
//   return n === Math.floor(n) ? i + "!" : "NONE";
// }
//
// for (let value of input) {
//   console.log(value + " = " + reverseFactorial(value));
// }
