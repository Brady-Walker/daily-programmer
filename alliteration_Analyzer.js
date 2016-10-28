'use strict';

// dp - 10-17-16
// https://www.reddit.com/r/dailyprogrammer/comments/57zcbm/20161017_challenge_288_easy_detecting_alliteration/
// started 10-18-16

const filler = require(`${process.cwd()}/data/fillerWords.js`);
let ignoredArr = filler.split("\n");

let input = `3
Peter Piper Picked a Peck of Pickled Peppers
Bugs Bunny likes to dance the slow and simple shuffle
You'll never put a better bit of butter on your knife`

let input2 = `8
The daily diary of the American dream
For the sky and the sea, and the sea and the sky
Three grey geese in a green field grazing, Grey were the geese and green was the grazing.
But a better butter makes a batter better.
"His soul swooned slowly as he heard the snow falling faintly through the universe and faintly falling, like the descent of their last end, upon all the living and the dead."
Whisper words of wisdom, let it be.
They paved paradise and put up a parking lot.
So what we gonna have, dessert or disaster?`

function findAlitteration (str) {

  function removeFiller (line) {
      for(let filler of ignoredArr) {
        line = line.split(` ${filler} `).join(' ');
      }
    return line;
  }

  let cleanLines = str.toLowerCase().replace(/[.,\/#?!$%\^&\*;:{}=\-_`"~()]/g,"").split('\n').slice(1).map((line)=>removeFiller(line));

  let output = [];

  for (let line of cleanLines) {
    let split = line.split(' ');

    for (var i = 0; i < split.length; i++) {
      let pre = split[i-1];
      let post = split[i+1];
      // check word behind and/or word ahead to see if first letters match
        if (((pre != undefined && pre[0] == split[i][0]) || (post != undefined && post[0] == split[i][0])) && output.indexOf(split[i]+' ')==-1 ) {
          // check to see if its the first words added on this line, then check to see if this is a new alliteration set on the same line
          if (output[output.length-1] && output[output.length-1][0] != split[i][0] && output[output.length-1][0] != '\n') {
            output.push('---> ');
          }
          output.push(split[i] + ' ');
        }

    }
    output.push('\n');
  }

  return output.join('');
}

console.log(findAlitteration(input2));
