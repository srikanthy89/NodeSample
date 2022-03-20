/*const fs = require('fs');
const res = fs.readFileSync('sample.txt','utf8');
console.log(res);
console.log(22222);// insync it will execute first console then run sencond console.*/


// Async case 

const fs = require('fs');
fs.readFile('./sample.txt' , 'utf8', (err, data) => {
if(err){
console.log(err);
return;
}
console.log(data);
}