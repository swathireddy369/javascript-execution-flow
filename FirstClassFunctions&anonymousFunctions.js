//function statement and function declaration as well
function xyz(){
    console.log("hii"); 
}

//function expression
// assigning function as a value to the variable

var a=function (){
       console.log("hii"); 
}

//anonymous function 
//a function which does not contain any name
// function (){ //identifier exepcted

// }
//but we can use anonymous functions in function expression

//Named function Expression
//  nothing usually we use anonymous function in function expressions but if we define name to it then it considered as named function expression

var b=function xyz(){
    console.log("hello");
    console.log(xyz); //here it does not throw any error as it is already had an entry in local scope of xyz
    
}
console.log(b);
console.log(xyz); //as xyz has no entry in the global execution context it throws reference error as it is not defined


//difference between [arameters and arguments

// the function where we define and give names in the paranthesis are called as parameters (idetifiers,labels)
// but from where we call that particular a\function and passing values to the parameters which we have defined while function declaration is knowmn as arguments(values) 


function c( name, age){//these are parametrs
console.log(name,age);

}
c("swathi","27");//these are arguments


// First class functions
//first class citizens
// it's ability to treated as a vlue and passed as argument and return from function

function y(x){
console.log(x);
return x;//it can aslo return a function 
}

y(function (){//it logs the anonymous function which we have passed

})
y(function z(){//ity logs the named function which we have passed

})



