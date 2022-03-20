/*The fs.open() method takes a "flag" as the second argument, if the flag is "w" for "writing", 
the specified file is opened for writing. If the file does not exist, an empty file is created:*/

const fs = require('fs');
fs.open('sample.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});

// for write any file we use this.
/*const fs = require('fs');
fs.writeFile('sample.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Written');
});*/

// this method will append the file with given text..
/*const fs = require('fs');
fs.appendFile('sample.txt', 'we have done this', function (err) {
  if (err) throw err;
  console.log('Perfectly append');
});*/