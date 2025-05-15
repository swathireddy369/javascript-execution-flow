//function currying nothing but sharing a function for multiple use cases by using concept of binding and clousure

function multiply(x,y){
    let z=x*y;
    console.log(x,y);
        console.log(z);
}
const multiplyTwo=multiply.bind(this);//here wht i have observed is while binding by ,emtioning this keyword in firt param is refereining that function
multiplyTwo(3,5);
const multiplyThree=multiply.bind(this,2);//here wht i have observed is while binding by ,emtioning this keyword in firt param is refereining that function
multiplyThree(3,6);


// lets see by using closure

const multiple=function(x){//here this second function forms a clousre with its parent lexical enviroment
    return function(y){
   console.log(x*y);
    }
}
// console.log(multiple()(3));
const multiplyTwos=multiple(2);
multiplyTwos(3);
// multiple(3)(6);

