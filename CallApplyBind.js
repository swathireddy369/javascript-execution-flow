//mainly for sharing method between objects
const obj1={
    first:"swathi",
    last:"Amaravadi",
    getName:function(town){
        console.log(this.first+" "+this.last+" "+town);
        
    }
}
 const getFullName=function(town,state){
        console.log(this.first+" "+this.last+" "+town+" "+state);
        
    }
const obj2={
    first:"Rajesh",
    last:"kodakandla",
   
}
// what if we want getName in obj2 as well, so here call came into Picture

obj1.getName();//this is just simple this refers to current obj
obj1.getName.call(obj2);//we are calling obj1.getName and but change this reference to obj2
obj1.getName.call(obj2,"Khammam");
// in this case if we want to use same function for multiple objs we can simple seperate that function from obj1
getFullName.call(obj1,"hyderabad")
getFullName.call(obj2,"hyderabad")//this is common function and mention obj1 for this reference and next we can pass arguments as many as you want
//Apply
getFullName.apply(obj1,["hyderabad","Telangana"])//same as call but should pass argsn in the form of array list in the order whoch we want to receive

//bind

// bind is similar to call but we just bind the function and store that in a avariable for future use then later we can call that function
// we donot call that function but we just bind that to a variable and call that later


const bindingVar=getFullName.bind(obj2);
bindingVar("usa");