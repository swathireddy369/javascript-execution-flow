// const sum=function(val){
//     console.log(val);
//     return x
// }

// const x=function(val){
//     console.log(val);
//     return y;
// }
// const y=function(val){
//     console.log(val);
//     return z;
// }
// const z=function(val){
//     console.log(val);

// }
const sum1 = function (a) {
    return function (b) {
        if (b) {
            return sum1(a + b)
        }
        else {
            return a;
        }
    }
}



const total = sum1(1)(2)(3)(4)();
// console.log(sum1(1));
// console.log(sum1(1)(2));
// console.log(sum1(1)(2)(3));
// console.log(sum1(1)(2)(3)(4));
console.log(sum1(1)(2)(3)(4)());

//es6
const sum2 =  (a) => (b) =>  b? sum2(a + b):a;



const efficient = sum2(1)(2)(3)(4)();
console.log(efficient);
