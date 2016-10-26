'use strict';

// dp - 10-10-16
// https://www.reddit.com/r/dailyprogrammer/comments/56tbds/20161010_challenge_287_easy_kaprekars_routine/
// started 10-15-16

function addZeros(numStr){
  while (numStr.length < 4) {
    numStr = "0" + numStr;
  }
  return numStr;
}

// saw after that I could've used Math.max()
function findLargestDigit(num) {
  let numStr = num.toString();
  numStr = addZeros(numStr);
  let biggest = 0;
  for (var i = 0; i < numStr.length; i++) {
    if (numStr[i] > biggest) {
      biggest = numStr[i];
    }
    if (i == numStr.length -1) {
      return biggest;
    }
  }
}

function sortDescending(num) {
  let numStr = num.toString();
  numStr = addZeros(numStr);
  return numStr.split('').sort().reverse().join('');
}

function sortAscending(num) {
  let numStr = num.toString();
  numStr = addZeros(numStr);
  return numStr.split('').sort().join('');
}

function iterationsInKaprekar(num) {
  let numArr = num.toString().split("");
  // not sure why this works
  if (numArr[0] == numArr[1] && numArr[0] == numArr[2] && numArr[0] == numArr[3]) {
    return 0;
  }
  let count = 0;
  let constant = 6174;
  let current = addZeros(num);
  while (current != constant) {
    count ++;
    current = sortDescending(current) - sortAscending(current);
  }
  return count;
}

function findHighestKaprekar() {
  let highestIts = 0;
  let highestNum = 0;
  for (var i = 1; i < 10000; i++) {
    let its = iterationsInKaprekar(i);
    if (its >= highestIts) {
      highestIts = its;
      highestNum = i;
    }
  }
  return `Highest possible iterations: ${highestIts}\nUsing this number: ${highestNum}`;
}

let input = '4445';
console.log("Number: ", input);
console.log("biggest number: ", findLargestDigit(input));
console.log("Descending order: ", sortDescending(input));
console.log("Ascending order: ", sortAscending(input));
console.log("Iterations: ", iterationsInKaprekar(input));
console.log(findHighestKaprekar());

// Someone else's solution that I liked
const largestDigit = n => Math.max(...n+"");
const ascDigits = n => +[...n+""].sort().join("");
const descDigits = n => +[...n+""].sort().reverse().concat("0000".slice((n+"").length)).join("");
const kaprekar = n => n===6174 || n===0 || ((n+"").length>3 && new Set([...n+""]).size<2)?
                    0:1+kaprekar(descDigits(n)-ascDigits(n));
const maxIters = Math.max(...Array.from({length:10000}).map((x, i) => {return kaprekar(i)}));
