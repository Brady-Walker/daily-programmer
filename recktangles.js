'use strict';

// started 10/9/16
// DP 18-Jul-16
// https://www.reddit.com/r/dailyprogrammer/comments/4tetif/20160718_challenge_276_easy_recktangles/
// This one took much longer than the other "easy" puzzles

function rekt (inputWord, width, height) {

  let word = inputWord.toUpperCase();
  let reversedWord = word.toUpperCase().split("").reverse().join("");
  let output = '';

  // if you reverse the string that you input, you get the odd horizontal rows
  function makeHorizontal(strin) {
    let sqrStrin = '';
    for (let i = 1; i <= width; i++) {
      // print first letter once
      if (i == 1) {
        sqrStrin += strin[i-1] + " ";
      }
      // if its odd, finish the word
      if (i % 2 != 0) {
        for (let i = 1; i < strin.length; i++) {
          sqrStrin += strin[i] + " ";
        }
      // if its even, print the word reversed, missing the first letter
      } else {
        for (let i = 0; i < strin.length-1; i++) {
          let reverse = strin.split('').reverse().join('').substring(1);
          sqrStrin += reverse[i] + " ";
        }
      }
    }
    return sqrStrin;
  }

  // inputting a reversed string should make the reversed columns
  function makeVertical(strin) {
    let sqrStrin = '';
    let reverse = strin.split('').reverse().join('');

    // vertical for
    for (let i = 1; i < strin.length - 1; i++) {
      // horizontal for
      for (var k = 0; k < width + 1; k++) {
        if (k % 2 == 0) {
          sqrStrin += strin[i];
          makeSpaces();
        }
        if (k % 2 != 0) {
          sqrStrin += reverse[i];
          makeSpaces();
        }
      }
      sqrStrin += "\n"
    }

    function makeSpaces() {
      for (var j = 0; j < 2*strin.length - 3; j++) {
        sqrStrin += " ";
      }
    }

    return sqrStrin;
  }

  // construct the output using makeHorizontal, makeVertical, and word/reversedWord
  for (var i = 0; i < height; i++) {
    if (i == 0) {
      output += makeHorizontal(word) + "\n";
    }
    if (i % 2 == 0) {
      output += makeVertical(word);
      output += makeHorizontal(reversedWord) + "\n";
    }
    if (i % 2 != 0) {
      output += makeVertical(reversedWord);
      output += makeHorizontal(word) + "\n";
    }
  }

  return output; //makeHorizontal(word) + "\n" + makeVertical(word);
}

console.log(rekt('rekt', 3, 3));
