'use strict';

// My date: Oct 8 2016
// DP 08-Sep-16

const input = [
  '0111011100',
  '1010010000',
  '0011101110',
  '0000110000',
  '1111110001'
];

function outputNumberFromFingers (input) {
  // for each array input
  for(let value of input) {
    let lh = value.substring(0, 5).split('').reverse();
    let rh = value.substring(5,10).split('');

    if (checkForInvalid(lh) == false || checkForInvalid(rh) == false) {
      console.log(`${value} is INVALID`);
    } else {
      console.log(`${value} is ${calculateHand(lh).toString() + calculateHand(rh).toString()}`);
    }
  }
}

function checkForInvalid (hand) {
  // if anything but thumb is zero
  let firstZero = hand.indexOf('0', 1);

  // if there are any 1's after a zero return false
  if (firstZero) {
    for (var i = firstZero; i < hand.length; i++) {
      if (hand[i] === '1') {
        return false;
      }
    }
  } else {
    return true;
  }
}

function calculateHand (hand) {
  let amt = 0;
  // add thumb
  if (hand[0] == 1) {
    amt += 5;
  }
  // add all other fingers
  for (var i = 1; i < 5; i++) {
    if(hand[i] == 1) {
      amt += 1;
    } else {
      break;
    }
  }

  return amt;
}

outputNumberFromFingers(input);


// someone's mathematical solution

function countTo(str) {
  var L2 = Math.log(2),
      numL = parseInt(str.slice(0, 5), 2),
      numR = parseInt(str.slice(5, 10), 2),
      Ll = Math.log((numL >> 1)+1)/L2,
      Lr = 4 - Math.log(16 - (numR % 16))/L2;
  return Lr!==(Lr|0)||Ll!==(Ll|0)?'Invalid':10*((numL&1)*5+Ll)+(numR>>4)*5+Lr;
}

// console.log(countTo(input[0]));
