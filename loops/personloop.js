//The for in statement loops through the properties of an Object:
const person = {fname:"george", lname:"Dave", age:25};
let text = "";
for (let x in person) {
  text += person[x];
  console.log(person);
}
//console.log(text.length);