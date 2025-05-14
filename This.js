// "use strict"
//in global scope how this works

console.log("global object",this); //it referes the global object this gloabl object would be dependein on javascript runtime envrironment where we are runing this pice of code like in broswers it s window where as in nodejs its global


// how this works in functions:

// it dependents on strict mode an dnon strict mode 
// if we are running our javascript code in stroct mode ity would be uindefined 

// where as in non strict mode it would be window why because we have tis substitution in non strict mode menas in non stricgt mode if this refres undefined then it would be replced with global object here in bowser its window
//strict mode

function x(){
console.log(this); //undefined
}
console.log("strict mode",x()) //it is undefined
//not strict mode
function y(){
    console.log(this); // undefined but becaus of this substitution it will be window(broswer)
}

// and one more thing we neeed consider is the this value will also be depending on from where the funcion is being ChannelSplitterNode

// let say if we call 
 console.log("normal calling",y());
console.log("window.y();",window.y());//window

// now let seee how the this worjks in object


const obj={
    x:9,
    y:function(){ //this is called method (whenever we define any function inside object refered as method)
     console.log(this);//it referen to this entire obj as y is normal function 
    }
}
console.log("obj func",obj.y());

const obj1={
    x:9,
    y:()=>{ //this is called method (whenever we define any function inside object refered as method)
     console.log(this);//here y is call back so call abcks function does not have any this refrence but it behavious lke its enclosing lexical context of where it was written in code
    //   here it will work as a this value of outside obj1 means (window)
    }
}
console.log("arrow",obj1.y());

{/* <button onclick={alert(this)}>click me</button> //this refres this buttom html element */}


