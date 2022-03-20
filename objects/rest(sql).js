//rest operator ia also denoted by ... 
// rest operator catches all the arguements as an array
// rest operator is used as function parameter to ctach the arguements as an array.

const funcOne = (...args) => {
    console.log(args);
    return args.sort((a,b) => b-a)[0];
}

console.log(funcOne(1,2,3,4,5,6));