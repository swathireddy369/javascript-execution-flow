# javascript-execution-flow
Exploring the execution flow of JavaScript through small programs focused on functions, scopes, memory, and core language behavior.
# JavaScript Execution Flow Programs

This repository contains a collection of small JavaScript programs created to explore and understand the internal execution flow of JavaScript.  
The focus is on mastering how JavaScript handles functions, scopes, memory allocation, hoisting, closures, and basic operations at a deeper level.

## 📚 Topics Covered
- Function Declarations and Expressions
- Execution Context and Call Stack
- Variable Scope (Global, Function, Block)
- Hoisting Behavior
- Closures and Lexical Environment
- Primitive vs Reference Types
- Memory Management Concepts
- Asynchronous Execution Basics (setTimeout, Promises)

## 🎯 Purpose
- Build a strong foundational understanding of how JavaScript works under the hood.
- Visualize and trace execution contexts, scopes, and memory behavior.
- Prepare for technical interviews by deeply understanding language mechanics.
- Improve ability to debug and write optimized, clean JavaScript code.

## 🛠 Repository Organization
- Each program focuses on a single concept or behavior.
- Clear comments are included to explain step-by-step execution.
- Folder structure categorizes programs by JavaScript feature.

Example Structure:
 DAY - 1:
//execution context 
//hoisting variable and function
//functions working and variable scope
 DAY - 2:
//shortest javascript program
//this === window
 DAY - 3:
//undefined(allocated memory at GEC ) and defined (not allocated any memory yet)
//loosely type(any type of data can be assigned)
//lexical environment 
//scope chain
//TemporalDeadZone (it is belongs to let and const hoisting)
🔹 Execution Context
The environment in which JavaScript code is evaluated and executed.

🔹 Hoisting
Variables and functions are hoisted.

var, let, and const are hoisted, but only var is initialized with undefined.

Temporal Dead Zone (TDZ) applies to let and const.

🔹 Temporal Dead Zone (TDZ)
TDZ is the time between hoisting and initialization for let and const.

Accessing let or const before initialization → ReferenceError.

Unlike var, which is hoisted and initialized with undefined, let and const are not initialized until the interpreter evaluates their definition.

js
Copy
Edit
console.log(a); // ReferenceError
console.log(b); // undefined (due to var hoisting)

let a = 9;
var b = 9;
🔹 Reference Errors vs Syntax Errors vs Type Errors
📌 ReferenceError:
Trying to access a variable that is:

Not defined (for var)

In TDZ (for let and const)

📌 SyntaxError:
js
Copy
Edit
let a = 10;
let a = 10; // ❌ Redeclaration with let

let a = 10;
var a = 9;  // ❌ Conflict with let

const a;    // ❌ Must initialize const
📌 TypeError:
js
Copy
Edit
const a = 10;
a = 9;      // ❌ Cannot assign new value to const
🔹 Shortest JavaScript Program
An empty file is a valid JS program.

🔹 Functions and Variable Scope
Functions create their own scope.

Variables defined inside functions are not accessible outside.

🔹 this === window
In the global context (non-strict mode), this refers to the window object.

🔹 undefined vs defined
undefined: memory allocated but not initialized.

defined: not allocated any memory yet.

🔹 Loosely Typed Language
JS allows variables to hold values of any type dynamically.

🔹 Lexical Environment
The structure that holds identifier-variable mapping.

Includes the variable object and reference to the parent lexical environment.

🔹 Scope Chain
Each lexical environment has a reference to its outer environment.

Enables variable access up the chain.

🔸 Example: Block Scope & Variable Declarations
js
Copy
Edit
var b = 9;  // global scope
let a = 8;  // script scope

{
   let a = 10;    // block scope
   var b = 20;    // still global scope
   const c = 30;  // block scope
   console.log(a); // 10
   console.log(b); // 20
   console.log(c); // 30
}

console.log(a); // 8 (from script)
console.log(b); // 20 (var is globally updated)
console.log(c); // ReferenceError (c is block-scoped)
🔹 Scope
Scope defines where you can access a particular variable or function:

Global Scope

Script Scope

Block Scope

Function Scope



Day-3:

//variable is a conatiner which holds value
//java static and strongly type language
//static:because its data type defined initailly
//after defined data type we should assign the values as per that datatype range itself it tells us java is stronlgy typed as well
//variable names can contain alll unicodes
//variable starting should be either of these _,$ or character not digit
//if we have two words in variabke anme then should follow camelcase
//if we define static variable then give all captail letters for that


Day-4:

Closure: clousre defines a combination of function with its lexical environment bundles together

when we return a function it return with lexical env together(actullay it rembebers it lexical env)

it does not hold value while retruning function it actually hold reference to lexical 



for(var i=0;i<=5;i++){
    setTimeout(function sample(){console.log("var",i)}//it forms clousre and holds the reference of i once the timer is done then it prints pointing to ref and print value
,1000)//it just show 6 because javascript function does not wait for any other function menas it does not wait for settimout to complete times firsy it just do the loop itself after loop done if timer done then that setimeout function execute
};

//to avoid above issue we can simply use let as let and const are block scope when closure form sit just create new copy of variable so it remberbers its new copy Reference itself 
for(let i=0;i<=5;i++){
    setTimeout(function sample(){console.log("let",i)}//it forms clousre and holds the reference of i once the timer is done then it prints pointing to ref and print value
,1000)//it just show 6 because javascript function does not wait for any other function menas it does not wait for settimout to complete times firsy it just do the loop itself after loop done if timer done then that setimeout function execute
};

// then what if we have to use var only 

for(var i=0;i<=5;i++){
    function X(i){//it creates local copy of i for every block for clousre refres to new reference evry time
    setTimeout(function sample(){console.log("var with function args",i)}//it forms clousre and holds the reference of i once the timer is done then it prints pointing to ref and print value
,1000)//it just show 6 because javascript function does not wait for any other function menas it does not wait for settimout to complete times firsy it just do the loop itself after loop done if timer done then that setimeout function execute
    };
X(i);
};





