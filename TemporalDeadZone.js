console.log(a);//(ReferenceError as it does being allocated for in execution context) memory allocation to value initilization these will be in temporal dead zone phase and it sin script block
console.log(b);//undefined(global execution context) global block
//here aslo ref error possible even without declarting var and try to access it

// let a=9;
// var b=9;
/////syntax error

// let a=9;
// let a=9;

// let a=9;
var a=10;

const a;SyntaxError
a=1000; 


// for var it not
 var a=9;
 var a=10; //(no SyntaxError here)

//  type error
 const a=10;
 a=9;





