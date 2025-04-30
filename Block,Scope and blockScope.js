//block
var b=9;//global scope
let a=8;//script scope
{   //block nothing but putting multiple javascript statemnt together inside block where javascript excepts one single satement n=by this if we define let and consta in block it will be removed once the block execution is done by this way we can say let and const block scope but var is global scope
   let a=10;//block
   var b=20;//global scope
   const c=30;//block
   console.log(a);
   console.log(b);
   console.log(c);
}
//it behavious same as block(function scope)
function sample(){   //block nothing but putting multiple javascript statemnt together inside block where javascript excepts one single satement n=by this if we define let and consta in block it will be removed once the block execution is done by this way we can say let and const block scope but var is global scope
   let a=10;//block
   var b=20;//global scope
   const c=30;//block
   console.log(a);
   console.log(b);
   console.log(c);
}
console.log(a);//from script 
console.log(b);//20
console.log(c); //not defined
