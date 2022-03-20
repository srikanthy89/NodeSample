/*function sayHi() {
    console.log(name);
    //console.log(age);
    var name = 'Lydia';
    let age = 21;
  }
  sayHi();*/

/*student={
    name:'shyam',
    age:20,
    add:'indore'
}
console.log(student.name);*/

/*const number = 10
 for(let i = 1; i <= 10; i++) {
 
     const result = i * number;
 
     console.log(`${number} * ${i} = ${result}`);
 }*/

// It will filter the elements of array based on the condition

function marks(result) {
    console.log(result);
}
let myPromise = new Promise(function (resolve, reject) {
    setTimeout(() => {
        num = 100;
        if (num == 100) {
            resolve('i am pass');
        }
        else {
            reject('bad');
        }
    }, 3000);
})
myPromise.then(
    (value) => { marks(value) },
    (error) => { marks(error) }
);