function x(){
    var x=9;
    function y(){//it has its own function memory and reference of lexical environment as well
        console.log(x);
    }
    return y;//here when we return a function (it return funstion with its lexicalenv)
}
var z=x();//we receive function with its lexical env
console.log("final1",z);
z();//9
console.log("final",z());//by using the lexical env it prints x as 9 in console
//9
//undefined