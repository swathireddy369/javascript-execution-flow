const obj1 = {
    first: "swathi",
    last: "Amaravadi",
}
const getFullName = function (town, state,msg) {
    console.log(this.first + " " + this.last + " " + town + " " + state+" "+msg);
}


const getName=getFullName.bind(obj1,"hyderabasd","te");
// getName();


//need to implement owr own bind method how the browser bind works underthewood
//polyfill nothing but a piece of code used to represent modern functionaliy in old browsers

Function.prototype.myBind =function (...args){//spreading mandatory
   let params=args.slice(1);
    const obj=this;//should be assign to some var
return function(...subargs){//spreading mandatory
    obj.apply(args[0],[...params,...subargs])
}
}
const getName2=getFullName.myBind(obj1,"hyderabasd","te");
getName2("hello");