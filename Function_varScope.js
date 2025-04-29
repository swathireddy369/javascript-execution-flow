var x=3;
square1();
square2();
console.log(x);//now we are left with global execution context only so our x will be 3 only
function square1(){
    var x=13;
console.log(x);//it look into its local execution context of square1
}
function square2(){
    var x=14;
  console.log(x);//it look into its local execution context of square2
}