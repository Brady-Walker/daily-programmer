// 10-7-16, mostly finished. Got a little tedious and idk if I want to take the time to rewrite it correctly
// DP 16-Aug-16

'use strict';

const fs = require('fs');

let input = 'Cat';

// String to binary
function strToBinary(str) {
  let binArray = [];
  for (var value of str) {
    let binStr = value.charCodeAt().toString(2);

    while (binStr.length < 8) {
      binStr = "0"+binStr;
    }
    if (binStr.length === 8) {
      binArray.push(binStr);
    }

  }
  return binArray.join().replace(/,/g,'');
}

// Divide into 24 bit segments (3 bytes)
// Divide each 24 bit segment into 6 bit segments
// Make binary into decimal
// Add 32 to that number
// encode back into ascii
function binaryToASCII (str) {
  let binArray = [];
  for (var i = 0; i < str.length; i=i+6) {
    let substr =  String.fromCharCode(parseInt(str.substring(i,i+6), 2) + 32);
    binArray.push(substr);
  }
  return binArray.join('');
}

function uuencode (filepath, filename, string) {
  let binaryString = strToBinary(string);
  let newBinArray = binaryToASCII(binaryString);
  writeUuencodedFile(filepath, filename, newBinArray);
}

function writeUuencodedFile (path, filename, text) {
  let writtenText = `begin 644 ${filename}
M${text}
\`
end
`;

  console.log(writtenText);

  fs.writeFile(`${path}${filename}`, writtenText, (err) => {
    if (err) {
      console.log(err);
    }
    console.log('file written');
  });
}

uuencode('./data/', 'cat.txt', input);
