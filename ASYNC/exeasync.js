const proFun = (a) => {
    const arr = null;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (a === 2) {
                resolve('Resolved');
            } else {
                reject('Rejected');
            }

        }, 1000)
    })
}

const funOne = async () => {
    //eedededed;
    /* try {
         const res = await proFun(2);
         console.log(res);
     }catch(e) {
         console.log('In catch block');
     }*/
}

// All async functions by default acts as promises
funOne().then((res2) => { console.log(res2) }).catch((e) => { console.log('In last catch block') });