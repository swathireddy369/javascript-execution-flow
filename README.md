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
//undefined(allocated memory at GEC ) and notdefined (not allocated any memory yet)
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

let a = 10;
let a = 10; // ❌ Redeclaration with let

let a = 10;
var a = 9;  // ❌ Conflict with let

const a;    // ❌ Must initialize const
📌 TypeError:

const a = 10;
a = 9;      // ❌ Cannot assign new value to const
🔹 Shortest JavaScript Program
An empty file is a valid JS program.

🔹 Functions and Variable Scope

Functions create their own scope.

Variables defined inside functions are not accessible outside.

🔹 this === window
In the global context (non-strict mode), this refers to the window object.

🔹 undefined vs not-defined
undefined: memory allocated but not initialized.

not-defined: not allocated any memory yet.

🔹 Loosely Typed Language
JS allows variables to hold values of any type dynamically.

🔹 Lexical Environment
The structure that holds identifier-variable mapping.

Includes the variable object and reference to the parent lexical environment.

🔹 Scope Chain
Each lexical environment has a reference to its outer environment.

Enables variable access up the chain.

🔸 Example: Block Scope & Variable Declarations

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



function a() {
    var a = 9, z = 8;
    return function b() {
        console.log(a);
    }
}
a()();
Closure is formed with a only because z is unused and gets garbage collected.

Accessing a works, but accessing z throws a ReferenceError.

Day-5:
//function statement and function declaration as well
function xyz(){
    console.log("hii"); 
}

//function expression
// assigning function as a value to the variable

var a=function (){
       console.log("hii"); 
}

//anonymous function 
//a function which does not contain any name
function (){ //identifier exepcted

}
//but we can use anonymous functions in function expression

//Named function Expression
//  nothing usually we use anonymous function in function expressions but if we define name to it then it considered as named function expression

var b=function xyz(){
    console.log("hello");
    console.log(xyz); //here it does not throw any error as it is already had an entry in local scope of xyz
    
}
console.log(b);
console.log(xyz); //as xyz has no entry in the global execution context it throws reference error as it is not defined


//difference between [arameters and arguments

// the function where we define and give names in the paranthesis are called as parameters (idetifiers,labels)
// but from where we call that particular a\function and passing values to the parameters which we have defined while function declaration is knowmn as arguments(values) 


function c( name, age){//these are parametrs
console.log(name,age);

}
c("swathi","27");//these are arguments


// First class functions
//first class citizens
// it's ability to treated as a vlue and passed as argument and return from function

function y(x){
console.log(x);
return x;//it can aslo return a function 
}

y(function (){//it logs the anonymous function which we have passed

})
y(function z(){//ity logs the named function which we have passed

})




document.getElementById("clickMe").addEventListener("click",function (){ //call back function
console.log("button clicked");
});
//whenever event happens then only this call back function enters into call stack


//closures demo with event listners
let count=0;
document.getElementById("clickMe").addEventListener("click",function (){ //call back function
    console.log("button clicked",count++);
    });//here we are using gloabl variable its is not good practise


    // create closure 

  function attacheventListner(){
    let count=0;
document.getElementById("clickMe").addEventListener("click",function (){ //call back function
    console.log("button clicked",count++);
    });//here we are using gloabl variable its is not good practise
    }
    attacheventListner();

    // it forms a clouse with count 


    //scope demo with event listeners

    // event listener have same scope as clouse has

    //Garbage collection for event handlers

    // event listeners are too heavy because they use memory after the event happend should be garbage collected but we dont know who is going to trigger the event again so one of the considering disadavnatge of event listeners



    Day 6:
    event loop and call back queue

    here as we are using settimeout,fetch,localstorage,console.log and document.get all these are not javascript things 
    although these all are browser things okay in our javascript we have functions so to execute those function in browser we have javascript engine inside we have call stack so js engine just execute the function which are in stack as soon as they enter into it ,now comes into topic so in this nature js doesnot wait for any other yhings to execite in functions which are in stack as it is single thread and syncronous but if we need some timer ,fetch and log kind of behaviour browser provides web api's to access these settime and fetch all those browery things to access in our js by using global window ,as it is global mention window.console.log or window.settimout does not explicityly required .whenever w use console.log in our js code it simply call wiindow.console api to get access to the console panel in browser and our message which we provided dispaly in that pannel i got suprised i have been using console.log without knowing this stuff. 
    this is fine
    what if we have to use settimeout and fetch in our js then lets see about set timeout whenevr we see settimout in our code which we executing currenlty the it simple call window.fecth then it simple register call backa nd attach timer to it in webapi's and js engne continues its work as i mentioned earlier js does not wait for anything to execute okay after my call stack is being empty then event loop always monitor whetehr call stack is empty or not and whether call back conatins anything to execute.
    here once the register call brower timer as soon as expired then it direclty pused to call back queue now event loop get to know one cb is inside call back queue then if event loop ckecing if call stack becomes empty the is pull out the cb from callback queue and push it to call stack this is the way our call back executes.then coming to fecth  it is not like call back queue little difference is there.whenevr our js engine encpounter any fetch call it simply call window.fecth api like timout but once window .fecth api calls it regitert he promise in web api's and once the promise gets resolved then it got pushed into microtask queue observer not callback queue its microtaskqueue



    callback pusehd to callbackqueue
    but fecth,mutationobserver things pusehed to microtaskqueue and microtaskqueue has high prioty than call back queue so as soon as event loop got to know somehonh is waiting in the mircostaskqueue as priority cincers it first pulled out the microtask qeeu adn pusehd into call stack queue as soon as it becoems empty once the microtaskqueuebecome empty then only event loop will take care of call backqueue

    here we have mutation observer see it also enter into the microtaskqueue like promises here it observes that any dom content changes if happend it also pused to micortask queue as iyt high priority than call back


    here we have a concept called starvation : the call back queeu tasks being delayed by having microtask piled up recursively 


    JavaScript Event Loop and Asynchronous Operations
Call stack, Web APIs, callback queue, and microtask queue work together to handle JavaScript execution:

JavaScript Engine:

Has a call stack to execute functions
Single-threaded and synchronous
Executes code immediately without waiting


Browser Web APIs:

Not part of JavaScript but accessible via global window object
Examples: setTimeout, fetch, localStorage, console.log, document.getElementById
Don't need explicit window. prefix (it's implied)


Callback Queue (Task Queue):

Contains callbacks from timers and I/O operations
Lower priority than microtask queue
Examples: setTimeout, setInterval callbacks


Microtask Queue:

Higher priority than callback queue
Contains promises and mutation observers
Examples: fetch (Promise), MutationObserver


Event Loop:

Monitors call stack and queues
When call stack is empty:

First checks microtask queue and moves tasks to call stack
Only after microtask queue is empty, checks callback queue




Execution Process:

setTimeout: Register callback in Web API → timer expires → callback queue → call stack
fetch: Register promise in Web API → resolved → microtask queue → call stack


Starvation:

Callback queue tasks get delayed by recursive microtasks
Higher priority microtasks continuously push new microtasks
Callbacks in the task queue never get processed

https://claude.ai/public/artifacts/e25c5b19-4008-49ad-a06d-b270ca025c7b
https://claude.ai/public/artifacts/06ea46e6-c1da-47fb-a185-99498e5ef92c

Java script engine:

to execute piece of js code we need javascript runtime environ ment it contains js engine,web api,microtaskqueue,call back queue and event loop so here broswer has JRe and nodejs has JRE where the some api are same together but some are different right.

here lets come to js engine

every brower has different js engines it's not a machine it just piece of code written in c++ 
it has been executed by our brower.

the process includes 

js code-parsing(generate tokens - AST((ast exploer)(abstarct syntax tree))- interpreter +compilation 
earlier did not have compiler for javascript it direclty execute the code later versions has jit compiler it make code efficient as much as it can(here are some techniques inlining,copy elusion,inline caching) and convert it into bytecode althought execution and compilaion done paralley 
if we use interpreter it's fast whereas compiler give efficiency
the execution can be done using memory heap and call stack as we know call stack well and come to memory heap it allocats memory to the functions and variables which are in callstack and once execution is done and if there any unused var or function found just do garbage colletion by mark sweep algo and the very famous js engine is V8 chrome one it has iginite interpret and turbo fan compiler and mark and sweep orinaooc garbage colletor lets go to v8 blog and explore more on it 

as we have processureal ,functional and object oriented languages here java script can do all of these lets explore more it does all these




JavaScript Runtime Environment
JavaScript Runtime Environment (JRE)

Required to execute JavaScript code
Contains: JS Engine, Web APIs, Microtask Queue, Callback Queue, Event Loop
Different environments: Browsers and Node.js have their own JREs

Some APIs are common between them
Some APIs are environment-specific



JavaScript Engine

Not a machine but code written in C++
Executed by browsers
Each browser has its own JS engine
Famous example: V8 (Chrome, Node.js)

JavaScript Processing Flow

Parsing:

Generates tokens
Creates AST (Abstract Syntax Tree)
Tool: AST Explorer


Execution:

Earlier versions: Only interpreter
Modern versions: JIT (Just-In-Time) Compiler
Execution and compilation happen in parallel
Interpreter: Fast startup
Compiler: Better efficiency


Optimization Techniques:

Inlining
Copy elision
Inline caching


Execution Environment:

Memory Heap: Allocates memory to functions and variables
Call Stack: Execution context


Garbage Collection:

Mark and Sweep algorithm
Cleans unused variables and functions



V8 Engine Components

Ignition: Interpreter
TurboFan: Compiler
Orinoco: Garbage collector

JavaScript Programming Paradigms

Procedural
Functional
Object-oriented



ASP Exploer.net
v8
marker sweep
Ecmascript


V8:

v8 is the javascript engine which is developed by google chrome and written in c++(google engineers) and it uses in the  platforms like chrome and node.js
 
javascript source code-> parser & AST Generator -> then 
Interpretor(iginition) lightweight interpretor executes the code quickyl before that conver it into bytecode to execute quickly but not as much as machinecode.

turbofan (JIT compiler) it monitors frequenclty used code 
it optimizes and   compiles byte code to efficient machinecode 

Garbage collector: do memory management by efficient garbage collection system for unused var and functions eg: mark-sweeper,mark-compact,scavanger 

optimizations: inline caching,hidden calsses


V8 Processing Pipeline
1. JavaScript Source Code

Starting point: Raw JavaScript code

2. Parser & AST Generator

Parses JavaScript source code
Creates Abstract Syntax Tree (AST)

3. Interpreter (Ignition)

Lightweight interpreter
Converts code to bytecode
Executes code quickly (but not as fast as machine code)

4. JIT Compiler (TurboFan)

Monitors frequently used code
Optimizes and compiles bytecode to efficient machine code

5. Garbage Collector

Handles memory management
Removes unused variables and functions
Implements efficient collection systems:

Mark-sweep
Mark-compact
Scavenger



Key Optimizations

Inline caching
Hidden classes (for organization)

https://claude.ai/public/artifacts/fd52059d-e388-40de-abf2-317a00114bc7