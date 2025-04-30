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

//execution context 
//hoisting variable and function
//functions working and variable scope
//shortest java program
//this === window
//undefined(allocated memory at GEC ) and defined (not allocated any memory yet)
//loosely type(any type of data can be assigned)
//lexical environment 
//scope chain
//TemporalDeadZone (it is belongs to let and const hoisting)
here as we have seen for var let and const will be hoisted but time being they will be in teporaldead done mean sfrom memory allocation to value initialization the let and const will be in temporal dead zone)
if we are trying to access the variable before initialization we will get reference error as these memory allocation not being present in the global scope(window) it will be in the other script.so it does not work like var where we get undefined before initilization


reference error: var if it is not defined(not present in memory context of execution context)
                 for let and const if we use it beofre initilization (there will be in temporal dead zone)(script scope)

syntax error:   let a=10; let a=10;  redeclaration not possible for let 
                let a=10;var a=9;  same here as well what if var a=0; var a=9;(it works well)
                const a;(this is also a syntax error ) as const should declaredta dn initialized at atime
type error:     typerror occures when we try to assign another value to const variable
console.log(a);//(ReferenceError as it does being allocated for in execution context) memory allocation to value initilization these will be in temporal dead zone phase and it sin script block
console.log(b);//undefined(global execution context) global block
//here aslo ref error possible even without declarting var and try to access it

let a=9;
var b=9;
/////syntax error

let a=9;
let a=9;

let a=9;
var a=10;

const a;SyntaxError
a=1000; 


// for var it not
 var a=9;
 var a=10; (no SyntaxError here)

//  type error
 const a=10;
 a=9;





