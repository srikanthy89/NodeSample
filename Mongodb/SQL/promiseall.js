/*The Promise.all() method takes an iterable of promises as an input, and
returns a single Promise that resolves to an array of the results of the input promises.
 This returned promise will resolve when all of the input's promises have resolved, or 
if the input iterable contains no promises.*/
//This method can be useful for aggregating the results of multiple promises.

const promise3 = Promise.resolve(3);
const promise2 = 42;
const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log(values);
});