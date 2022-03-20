// Promise id an inbuilt object of NodeJS, promise can be wrapped in a function 
// resolve will be called in success scenarios
// reject will be called in failure scenarios
// at a time only one can be called , either resolve or reject

const fs = require('fs');
const funRead = () => {
    return new Promise((resolve, reject) => {
        fs.readFile('sample.txt', 'utf8', (err, data) => {
            if(err) {
                console.error(err);
                reject(err);
            }
            resolve(data);
        })
    })
}
funRead().then((result) => {
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
    
}).then((msgAppend) => {
    console.log(msgAppend);
    // Read again from the file
    fs.readFile('sample.txt', 'utf8', (err, dataR) => {
        if(err) {
            console.error(err);
            throw err;
        }
        console.log('in 3rd block');
        console.log(dataR);
    })
}).catch((err) => {
    console.error(' I am in catch block');
    console.error(err);
}