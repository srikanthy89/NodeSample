/*const fs=require ('fs');
const { resolve } = require('path/posix');
fs.watchFile('sample.txt','I am fine', function(err){
if(err) throw err;
    console.log('Written');
}); */
const fs=require ('fs');
const funWrite = () => {
     return new Promise((resolve,reject) => {
         fs.writeFile('sample.txt','i am fine', (err) =>{
            if (err){
                console.error(error);
                reject (err);
            }   
            resolve('write succesfuly');
         })
     })
    }
    funWrite().then((result) => {
        console.log(' I am in then block');
        console.log(result);
        // Append to the file
        return new Promise((resolve, reject) => {
            fs.appendFile('sample.txt','Indore', (err) => {
                if (err) {
                    reject(err);
                }
                console.log('in 2nd block');
                return resolve('Append successful');
            })
        }) 
    })
    .then((msgAppend) => {
        console.log(msgAppend);
        // Read again from the file
        fs.writeFile('sample.txt', 'i am  good', (err) => {
            if(err) {
                console.error(err);
                throw err;
            }
            console.log('in 3rd block');
            console.log('written');
        })
    }).catch((err) => {
        console.error(' I am in catch block');
        console.error(err);
    })