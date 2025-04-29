var x=9;
function b(){
    var y=3;
}
console.log(window);//it refers to global execution context 
console.log(this.x);//this and window  both refers to global context 
console.log(y);//it throws no reference error as we donot have any y in GEC


