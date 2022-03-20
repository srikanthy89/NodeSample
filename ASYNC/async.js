const proFun = (a) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Resolved');
        }, 1000)
    })
}

const proFun2 = (a) => {
    setTimeout(() => {
        return 'Resolved';
    }, 1000)
}

// proFun().then((res) => {
//     console.log(res);
//     console.log('All DOne');
// })

// Await can be used only inside async functions
// await can be used only with promises.

const funTwo = async () => {
    const resA = await proFun();
    console.log(resA);
    console.log('All done in await');
}

funTwo();