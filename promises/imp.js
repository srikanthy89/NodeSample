const impData = require('./exp');
const impConcat = require('./exp2');
const calObj = require('./expobj');
const person=require('./expclass');
const num=require('./loop');
const stringarray=require('./numArray');
//const numberarray=require('./numArray');



// Destructuring the object
const {add} = require('./expobj');
const {sub} = require('./expobj');
const {mul} = require('./expobj');


console.log(impData.add(2,3));
console.log(impData.sub(21,3));
console.log(impData.mul(21,3));
console.log(impConcat.concat('Hello ', 'boy'));
console.log(calObj.add(2,3));

console.log(add(34,45));
console.log(sub(34,45));
console.log(mul(65,25));
console.log(person1.getDetails());
num.num(5);
console.log(stringarray);