'use strict';

// DP 19-Sep-16

const fs = require('fs');

// Define input
let input = [
  'qwertyuytresdftyuioknn',
  'gijakjthoijerjidsdfnokg'
]

// return dictionary
function returnDictionary (callback) {
  fs.readFile('./data/enable1.txt', 'utf8', (err, res) => {
    if (err) {
      console.log(err);
    }
    return callback(res);
  });
}

// To lower case, Trim
// Separate into array
function makeInputObject (string) {
  return string.toLowerCase().trim().split('');
}
// Identify first and last characters of input
// Compare to dictionary
// Match first, Match Last, Match all letters somewhere (indexOf != -1)
function searchDictionary(strArr) {
  let swipedKeys = strArr.map(makeInputObject);

  returnDictionary((res)=>{
    let splitDict = res.split('\r\n');

    for (let str of swipedKeys) {
      for (let word of splitDict) {
        if (word.length >= 5 && str[0] === word[0] && str[str.length-1] === word[word.length-1]) {
          let splitWord = word.split("");
          let index = 0;
          for (var i = 0; i < splitWord.length; i++) {
            if (str.indexOf(splitWord[i], index) === -1 && str.indexOf(splitWord[i], index-1)) {
              break;
            }
            index = str.indexOf(splitWord[i], index);
            if (i === splitWord.length-1) {
              console.log(`${str.join('')} could be ${word}`);
            }
          }
        }
      }
    }
  });
}
// returnDictionary((res)=>{console.log(res)});
searchDictionary(input);



// better solution found (this one didn't actually meet the criteria though...)

function matches(text, dictionary, min) {
  var results = [];
  min = min || 5;

  text = text.toLowerCase();

  // Limit dictionary to words min characters or longer, and starting and ending with matching letter.
  dictionary = dictionary.filter(function(word) {
    return (word.length >= min && word[0] == text[0] && word[word.length - 1] == text[text.length - 1]);
  });

  // Go through each word in the dictionary and check if each letter exists in the text (in order). If so, it's a match.
  dictionary.forEach(function(word) {
    var index = -1;
    var isMatch = word.toLowerCase().split('').every(function(char) {
      index = text.indexOf(char, index + 1);
      return (index != -1);
    });

    if (isMatch) {
      results.push(word);
    }
  });

  return results;
}

// Example calling it.
// matches('qwertyuytresdftyuioknn', words, 5);
