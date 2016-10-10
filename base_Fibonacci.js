// started 10-7-16
// DP 05-Sep-16

'use strict';

// turns out the last input number was about 2^53, js's max int by a digit. Had to pass in as a string to get it right
const input = [
  [10, 16],
  [10, 32],
  [10, 9024720],
  ['F', 10],
  ['F', 1],
  ['F', 111111],
  ['F', 100000],
  ['F', '10110110100111001'],
]

// make an array of fibonacci numbers
function generateFibArr () {
  let arr = [];
  let previous = 0;
  for (var i = 1; i < 100000000;) {
    arr.push(i);
    i = i + previous;
    previous = i-previous;
  }
  return arr;
}

// upperscoped fibonacci array
let fibLib = generateFibArr();

// convert base 10 to base fibonacci
function baseTenToBaseFib(int) {
  let currentNumber = int;
  let conversion = '';
  let reversedFilteredArr = fibLib.filter((obj)=>{
    if (obj > currentNumber) {
      return false;
    }
    return true;
  }).reverse();

  for (var i = 0; i < reversedFilteredArr.length; i++) {
    if (currentNumber !== 0 && currentNumber >= reversedFilteredArr[i]) {
      conversion += 1;
      currentNumber -= reversedFilteredArr[i];
    } else {
      conversion += 0;
    }
  }

  return conversion;
}

// convert base fibonacci to base 10
function baseFibToBaseTen(int) {
  let conversion = 0;
  let reverseNumArr = int.toString().split('').reverse();
  for (var i = 0; i < reverseNumArr.length; i++) {
    if (reverseNumArr[i] == 1) {
      conversion += fibLib[i];
    }
  }
  return conversion;
}

// take an input and output the conversion
function convertNumbers(inputArray) {
  for (var i = 0; i < inputArray.length; i++) {
    if (inputArray[i][0] === 'F') {
      console.log(`${inputArray[i]} = base 10, ${baseFibToBaseTen(inputArray[i][1])}`);
    } else {
      console.log(`${inputArray[i]} = base-Fib, ${baseTenToBaseFib(inputArray[i][1])}`);
    }
  }
}

convertNumbers(input);
