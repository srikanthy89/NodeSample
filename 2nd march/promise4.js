/*const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('this is the eventual value the promise will return');
    }, 300);
  });
  console.log(myPromise);*/
  
 /* const myPromise = new Promise((resolve, reject) => {
    let a = true;
    setTimeout(() => {
      return (a) ? resolve('a is found!'): reject('sorry, no a');
    }, 300);
  }); */
  
  /*const anotherPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('this is the eventual value the promise will return');
    }, 300);
  });
  
  // CONTINUATION
  anotherPromise
  .then(value => { console.log(value) }) */
  
  const myPromise = new Promise((resolve, reject) => {
    let a = true;
    setTimeout(() => {
      return (a) ? resolve('a is found!'): reject('sorry, no a');
    }, 300);
  }); 
  myPromise
  .then(value => { console.log(value) })
  .catch(err => { console.log(err) })