// we can access file by using this method.
const fs=require('fs');
fs.access('read.txt',fs.constants.O_RDWR, (err) =>{
    if(err){
        console.error(err)
    return;
    }
console.log('File Access');
})