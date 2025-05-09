const radius=[3,1,2,4];
function area(r){
return Math.PI*r*r;
}
function circumference(r){
    return Math.PI*r;
}
function daimeter(r){
    return 2*r;
}
function calculate(radius,logic){ //higher order function //and here all the function which are passed as paramater to this function bemocome scall backs
    let output=[];
   for(let i=0;i<radius.length;i++){
       output.push(logic(radius[i]));
   }
   return output;
}
console.log(calculate(radius,area));
console.log(calculate(radius,circumference));
console.log(calculate(radius,daimeter));



console.log("============================prototype=======================");



Array.prototype.calculate1 = function(logic){ //higher order function //and here all the function which are passed as paramater to this function bemocome scall backs
    let output=[];
   for(let i=0;i<this.length;i++){
       output.push(logic(this[i]));
   }
   return output;
}
console.log("map",radius.map(area));// i was amazed with this i do not know it works like this before but i was using map  just map the element and remaining this would done my own 
// to achieve map behaviour by using our function calculate lets make changes
console.log("proptotypE",radius.calculate1(area));
console.log("proptotypE",radius.calculate1(circumference));
console.log("proptotypE",radius.calculate1(daimeter));
