var num=2; //global execution context will be created
function square(num){
    var ans=num*num;
    return ans;//retruns control to from where it was being called
    //execution context will be destroyed (will be removed from call stack,execution stack,programstack,execution context stack)
}
var square1=square(num); //execution context 1 will be created
var square2=square(4);//execution context 2 will eb created
console.log(square1); //4
console.log(square2); //16