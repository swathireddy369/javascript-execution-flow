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

## 🔒 JavaScript Closures

### 📘 What is a Closure?

- A closure defines a combination of a function with its lexical environment bundled together.
- When a function is returned, it returns with its lexical environment (i.e., it remembers its lexical scope).
- It does not hold values directly — it holds a **reference** to the lexical scope.

---

### 🔁 Example: Unexpected Behavior with `var`

```javascript
for (var i = 0; i <= 5; i++) {
    setTimeout(function sample() {
        console.log("var", i);
    }, 1000);
}
It prints 6 six times.

JavaScript does not wait for setTimeout to complete; the loop finishes first.

Closures formed here hold a reference to the same variable i.

✅ Solution: Use let to Fix the Above Issue
javascript

for (let i = 0; i <= 5; i++) {
    setTimeout(function sample() {
        console.log("let", i);
    }, 1000);
}
let is block-scoped.

A new copy of i is created in each iteration, and the closure remembers its own reference.

✅ Another Solution: Use Function Wrapper with var
javascript

for (var i = 0; i <= 5; i++) {
    function X(i) {
        setTimeout(function sample() {
            console.log("var with function args", i);
        }, 1000);
    }
    X(i);
}
A new scope is created inside X(i) function.

Closure holds reference to the local copy of i.

🧠 Closure Behavior in Lexical Scope
Each function in JavaScript has access to its parent lexical environment.

Even if the function is executed outside its original scope, it remembers where it was created.

javascript

function outer() {
    var outer = 10;
    function inner() {
        console.log(outer); // lexical outer env
    }
    return inner;
}
outer()();
outer() returns the inner function.

outer()() executes the returned inner().

javascript

function outer(b) {
    function inner() {
        console.log(outer, b); // lexical outer env
    }
    var outer = 10;
    return inner;
}
outer("hello")();
inner() forms a closure and remembers b and the outer scope.

⚠️ Memory Considerations
Closures may lead to over-consumption of memory.

Variables captured in closures are not garbage collected until the closure is destroyed.

Can lead to memory leaks if not managed properly.

🧹 Garbage Collection and Closures
Garbage Collector: A program in JavaScript engines that frees up space for unused variables.

javascript

function a() {
    var a = 9, z = 8;
    return function b() {
        console.log(a);
    }
}
a()();
Closure is formed with a only because z is unused and gets garbage collected.

Accessing a works, but accessing z throws a ReferenceError.