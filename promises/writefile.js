const fs=require('fs');
fs.writeFile('read.txt','today is a good day',
(err) =>{
console.log('file is created');
//console.log(err); it will give null means no error
}
);