// we will rename the given text file by using this method
const fs = require('fs');

fs.rename('sample.txt', 'myrenamedfile.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});