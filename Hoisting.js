
sample();//it will "hello javascript" as can use before initlization (reason behind this is in memory allocation phase in execution context it simple copies the hole function to it in that way before code execution pahse as well it gives the entire function ) unlinke var as undefined
console.log(x);//it will print undefined as it is not initialized yet (in memory allocation pahes it's placeholder is undefined until the the initilization code is being executed)
//if i remove the line number 4 now the above line goves not defined means in memory allocation opf execution context there is no entry for variable x.
var x=9;
function sample(){//we can use this function before this line 
    console.log("hello javascript");
}
var func = ()=>{ //if we use this function before this line it simple acts as variable and gives undefinedas it is not initialized yet
    console.log("hello javascript arrow function");
}
var func =function(){//in execution context memory allocation phase this also treats as variable and asign undefined until this ,line being executed
    console.log("hello javascript function expression");
    
}
sample();//it will print as log
console.log(x);//it will print 9 because we are using it after initilization as the initilizaion of x is aready executed in code evaluation phase in execution context
