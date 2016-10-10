'use strict';

// started 10/05/16
// DP 12-Sep-16
// https://www.reddit.com/r/dailyprogrammer/comments/52enht/20160912_challenge_283_easy_anagram_detector/

let input = [
  '"wisdom" ? "mid sow"',
  '"Seth Rogan" ? "Gathers No"',
  '"Reddit" ? "Eat Dirt"',
  '"Schoolmaster" ? "The classroom"',
  '"Astronomers" ? "Moon starer"',
  '"Vacation Times" ? "I\'m Not as Active"',
  '"Dormitory" ? "Dirty Rooms"'
]

function checkForAnagram (str) {
  // split by ?
  function splitter(arr, separator) {
    return arr.split(separator);
  }

  // replace() " and emptySpaces
  function mapArr (arr) {
    return arr.map(cleanArr);
  }
  function cleanArr (value) {
    return value.trim().toLowerCase().replace(/"/g,'').replace(/ /g, '').replace(/'/g, '');
  }

  // alphabetize with sort()
  function sortArray (arr) {
    return arr.split('').sort().join("");
  }

  // compare the arrays
  let splitArray = splitter(str, "?");
  let mappedArray = mapArr(splitArray);

  return (sortArray(mappedArray[0]) == sortArray(mappedArray[1])) ? true : false;
}

for (var i = 0; i < input.length; i++) {
  let isAnagram = checkForAnagram(input[i]);
  console.log(isAnagram ? input[i].replace('?', 'is an anagram of') : input[i].replace('?', 'is NOT an anagram of '));
}

// Better solution (I debugged someone else's solution actually. I think they wrote it for palindromes)
function anagram(strin){
    var string=strin.replace(/ /g,"").replace(/'/g, "").toLowerCase();
    var arr=string.split("?");
    var firstWord=arr[0].split("").sort().join();
    var secondWord=arr[1].split("").sort().join();
        if (firstWord !== secondWord) {
          return strin.replace("?", "-")+" not an anagram";
        }
    return strin.replace("?","-")+" is an anagram";
  }

  // for (var i = 0; i < input.length; i++) {
  //   console.log(anagram(input[i]));
  // }
