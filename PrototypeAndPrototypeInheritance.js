let arr=["swathi","raji","reddy"];
// here once we create arr its accessble to use all Array methods just becaus eof type array its allows to access all array methods
// variable name does not matter type matters
// if we see Array.prototype and arr.__proto__ gives same 

let obj={
    name:"swathi",
    city:"khammam",
  
}
let obj2={
    name:"swathi",
    city:"khammam"
}
console.log();

//here also obj.__proto__ is same like Object.prototype

// soo Array.prototype is Fist in Chain
// Object.prototype
// null


// arr.__proto__

// arr.__proto__.__proto__=obj.__proto__

// rr.__proto__.__proto__.__proto__ =null se the chaining first arr then obj then its null

// here when evr we are creating a particulr arr or object javascript attaching a object to in in the form of __proto__ (woth all hidden function in it)



let obj3={
    name:"swathi",
    city:"khammam",
    getName:function(){
console.log(this.name+" "+this.city);
    }
}
let obj4={
    name:"rajesh",
    // city:"thummma"
}
console.log(obj3.__proto__);
console.log(obj4.__proto__);
console.log(obj3.getName());
// console.log(obj4.getName());//here it throws error obj4 does not have any function of getName

// so here prototypal inheritance came into PictureInPictureEvent
// seee magic

obj4.__proto__=obj3;
console.log(obj4.getName());//first it checks inthis obj4 if it does have any key which needs to render in fucnction then it goes to its parent


// in one of our previous practice we mentione dthat 
//in bind polyfill
Function.prototype.myBind=function(){

}
// right here by attching this in every function in thisfile directly access the myBind

// like sample.myBind();
