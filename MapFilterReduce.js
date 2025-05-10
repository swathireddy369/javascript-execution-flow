let arr = [5, 1, 3, 6, 2];

// function double(i){
//      return i*2;
// }
// function triple(i){
//      return i*3;
// }
// function binary(i){
//      return i.toString(2);//to convert number into binary
// }
// let output=arr.map(double);
console.log(arr.map(function double(i) { ///1way
     return i * 2;
}));
console.log(arr.map(function (i) {
     return i * 3;
}));
console.log(arr.map((i) => i.toString(2)));//finak efficinet way of writting map


console.log("=============================filter===========================");
function isOdd(i) {
     return i % 2;
}
function isEven(i) {
     return i % 2;
}
let output = arr.filter(isOdd);
console.log(arr.filter(function isOdd(i) {
     return i % 2;//odd
}));
console.log(arr.filter((i) => {
     return i % 2 == 0;//even
}));
console.log(arr.filter((i) => i % 2 !== 0));//not even

console.log("========================reduce===========================");
function sum(acc, curr) {
     acc += curr;
     return acc;
}

console.log(arr.reduce(sum, 0));
console.log(arr.reduce(function sum(acc, curr) {
     acc += curr;
     return acc;
}, 0));
console.log(arr.reduce(function max(acc, curr) {
     if (acc < curr) {
          acc = curr;
     }
     return acc;

}, 0));
console.log(arr.reduce((acc, curr)=> {
     if (acc < curr) {
          acc = curr;
     }
     return acc;

}, 0));



