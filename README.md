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

Day 7:

concurrency model:
trust settimeout issues:
as the part of setting up the environment so use live server to run our small website or the things which we are running in our index.html i came to know that witout body or head tag we can not initilaize live server wow amazing i was amazed

as i understand concurrency means it s ability to a system to manage multiple tasks without blocking each other,they do not do necciserly simoultaniously but they manage effecltivly without blocking each other, like a eaxmple a chef boiling water and put aside meanwhile chopping vegetables here he is not doing the tasks at same time managing effiecenlty -----interleaving them on availability and readyness

managing multiple tasks at same time



here if we put setTimeout(function cb(){},0) even the timer set for 0ms still it regietrd as call back in web api's environment and it will be pushed to call stack through event loop only when the call stack becomes empty

here javascript is single syncronous and fast execution beciase of we cannot block main thread execution for call backs or any other thing event loop should wait until call stack becmoes execute lets say we have code to execute time for 10ms after that 10ms execution and call stack became empoty then only our 0times cb will be pused to call stack



JavaScript Concurrency Model Notes
Core Concepts

Concurrency: System's ability to manage multiple tasks without blocking each other

Tasks don't run simultaneously but are interleaved efficiently
Example: Chef boiling water while chopping vegetables (managing tasks efficiently)



JavaScript's Single-Threaded Nature

JavaScript is single-threaded and synchronous in execution
Only one operation runs at a time on the main thread
Cannot block main thread execution for callbacks

Environment Setup

Live server requires proper HTML structure (body/head tags) to initialize
Must include basic HTML structure in index.html

setTimeout Behavior

Even with setTimeout(function cb(){}, 0):

The callback is registered in Web APIs environment
Timer is set (even if 0ms)
Callback is pushed to callback queue
Event loop waits until call stack becomes empty
Only then is the callback pushed to call stack



Execution Order

If main code takes 10ms to execute:

The 10ms code runs completely
Call stack becomes empty
Only then will the 0ms callback be pushed to call stack via event loop



Why This Matters

Understanding this model helps explain why asynchronous operations don't block execution
Even "immediate" timeouts (0ms) must wait for current execution to complete
JavaScript maintains its single-threaded nature while appearing to handle multiple tasks


https://claude.ai/public/artifacts/f51e6545-3e8d-4bcc-801c-5a385bbb493e



Higher order function:

a functions takes function as paramter and return function and the function  which has been passed through this highe rorder function is known as call back
const radius=[3,1,2,4];

const calculateArea=function (radius){
    const output=[];
    for(let i=0;i<radius.length;i++){
        output.push(Math.PI * radius[i] *radius[i]);
    }
    return output;
}
console.log(calculateArea(radius));

const curcumference=function(radius){
    const output=[];
    for(let i=0;i<radius.length;i++){
        output.push(2 * Math.PI * radius[i] );
    }
    return output;
}
console.log(curcumference(radius));

const daimeter=function(radius){
    const output=[];
    for(let i=0;i<radius.length;i++){
        output.push(2 *  radius[i] );
    }
    return output;
}
console.log(daimeter(radius));

const radius=[3,1,2,4];
function area(r){
return Math.PI*r*r;
}
function circumference(r){
    return Math.PI*r;
}
function daimeter(r){
    return 2*r;
}
function calculate(radius,logic){ //higher order function //and here all the function which are passed as paramater to this function bemocome scall backs
    let output=[];
   for(let i=0;i<radius.length;i++){
       output.push(logic(radius[i]));
   }
   return output;
}
console.log(calculate(radius,area));
console.log(calculate(radius,circumference));
console.log(calculate(radius,daimeter));



console.log("============================prototype=======================");



Array.prototype.calculate1 = function(logic){ //higher order function //and here all the function which are passed as paramater to this function bemocome scall backs
    let output=[];
   for(let i=0;i<this.length;i++){
       output.push(logic(this[i]));
   }
   return output;
}
console.log("map",radius.map(area));// i was amazed with this i do not know it works like this before but i was using map  just map the element and remaining this would done my own 
// to achieve map behaviour by using our function calculate lets make changes
console.log("proptotypE",radius.calculate1(area));
console.log("proptotypE",radius.calculate1(circumference));
console.log("proptotypE",radius.calculate1(daimeter));

Array.prototype in JavaScript
Array.prototype is the foundation of JavaScript arrays, containing all the built-in methods and properties that every array can access. Here's what you need to know:
Core Concept
When you create any array in JavaScript, it inherits methods and properties from the Array.prototype object through JavaScript's prototype chain. This is what allows you to use methods like map(), filter(), and push() on any array.
javascriptconst numbers = [1, 2, 3];
numbers.map(x => x * 2); // [2, 4, 6]
Key Array.prototype Methods
Array methods fall into three main categories:
1. Iteration Methods (Non-mutating)

forEach() - Executes a function for each element
map() - Creates a new array with results of calling a function
filter() - Creates a new array with elements that pass a test
reduce() - Reduces array to single value (accumulator pattern)
some() - Tests if at least one element passes a test
every() - Tests if all elements pass a test

2. Mutation Methods (Modify original array)

push() / pop() - Add/remove from end
shift() / unshift() - Remove/add from beginning
splice() - Change contents by removing/replacing elements
sort() - Sorts elements
reverse() - Reverses order of elements

3. Access Methods (Non-mutating)

slice() - Returns shallow copy of portion of array
concat() - Joins arrays and returns new array
join() - Joins elements into string
indexOf() / lastIndexOf() - Find element positions
includes() - Checks if array includes element
flat() / flatMap() - Flatten nested arrays

Extending Array.prototype
You can add custom methods to all arrays by extending Array.prototype:
javascriptArray.prototype.myCustomMethod = function() {
  return this.map(item => item * 2);
};

[1, 2, 3].myCustomMethod(); // [2, 4, 6]
However, this practice is generally discouraged in production code as it can lead to conflicts and unexpected behavior.
Best Practices

Leverage existing array methods instead of writing custom loops
Use non-mutating methods when you want to preserve original data
Avoid extending Array.prototype directly in production code
Understand which methods mutate the original array and which don't

The included diagram illustrates how Array.prototype connects to the Array constructor and individual array instances, plus the major method categories available on all arrays.

https://claude.ai/public/artifacts/29027752-4a20-451f-a5a0-743050848a4b



1.first class function: the ability to treat function as variable and pass function as argument it return the function and assign that return value to varibale is first calss function


2.higher order functions: a function that allows function as argument and return function

3.call back function a function that passed trhough argument fir another function


here call back function passed as argument to huigher order function its abiloity is called first class function


Day-8:

// Sample array
let arr = [5, 1, 3, 6, 2];

// ========================== MAP ==========================
console.log("================= MAP =================");
// MAP: Creates a new array by applying a function to each element

// Method 1: Named function declaration outside map
function double(i) {
    return i * 2;
}
console.log("Double:", arr.map(double));

// Method 2: Anonymous function inside map
console.log("Triple:", arr.map(function(i) {
    return i * 3;
}));

// Method 3: Arrow function (most concise)
console.log("Binary:", arr.map(i => i.toString(2)));


// ========================== FILTER ==========================
console.log("\n================= FILTER =================");
// FILTER: Creates a new array with elements that pass a test

// Method 1: Named function declaration
function isOdd(i) {
    return i % 2; // Non-zero values are truthy (odd numbers)
}
console.log("Odd numbers:", arr.filter(isOdd));

// Method 2: Anonymous function
console.log("Even numbers:", arr.filter(function(i) {
    return i % 2 === 0;
}));

// Method 3: Arrow function
console.log("Odd numbers (arrow):", arr.filter(i => i % 2 !== 0));


// ========================== REDUCE ==========================
console.log("\n================= REDUCE =================");
// REDUCE: Accumulates array values into a single result

// Method 1: Named function declaration
function sum(acc, curr) {
    acc += curr;
    return acc;
}
console.log("Sum:", arr.reduce(sum, 0));

// Method 2: Anonymous function
console.log("Sum (anonymous):", arr.reduce(function(acc, curr) {
    acc += curr;
    return acc;
}, 0));

// Method 3: Finding maximum value
console.log("Max value:", arr.reduce(function(acc, curr) {
    if (acc < curr) {
        acc = curr;
    }
    return acc;
}, 0));

// Method 4: Max with arrow function
console.log("Max (arrow):", arr.reduce((acc, curr) => {
    if (acc < curr) {
        acc = curr;
    }
    return acc;
}, 0));


// ========================== PRACTICAL EXAMPLES ==========================
console.log("\n================= PRACTICAL EXAMPLES =================");

// Array of objects
let people = [
    {first: "Swathi", lastName: "Amaravadi", age: "27"}, 
    {first: "Rajesh", lastName: "Kodakandla", age: "33"}, 
    {first: "Gopireddy", lastName: "Amaravadi", age: "25"}, 
    {first: "Anand", lastName: "Yannamaneni", age: "27"}
];

// Example 1: Map - Create full names array
let fullNames = people.map(person => person.first + " " + person.lastName);
console.log("Full names:", fullNames);

// Example 2: Reduce - Count occurrences of each age
let ageFrequency = people.reduce((acc, curr) => {
    if (acc[curr.age]) {
        acc[curr.age]++;
    } else {
        acc[curr.age] = 1;
    }
    return acc;
}, {});
console.log("Age frequency:", ageFrequency);

// Example 3: Chaining methods - Get lastNames of people over 30
let over30LastNames = people
    .filter(person => person.age > 30)
    .map(person => person.lastName);
console.log("LastNames of people over 30:", over30LastNames);

// Example 4: Alternative using reduce for the same operation
let over30LastNamesAlt = people.reduce((acc, curr) => {
    if (curr.age > 30) {
        acc.push(curr.lastName);
    }
    return acc;
}, []);
console.log("LastNames of people over 30 (with reduce):", over30LastNamesAlt);


https://claude.ai/public/artifacts/864c8182-bd9e-4d29-827a-2e21653dbf10




================================
Week -3

Day -9

callbacks: importance of callbacks
asyncronous behaviour exist in javascript only because of callbacks although every feature has its own white and black side so here as we coverd white face of callbacks as asynronous nature in javascript however black face would be 
1)callbackhell:

calling one callback inside another function and one more call back inside that callback this chaining is defined as callback hell

2)inversion control: as we passing our callback to another function then we are missing control of that callback function althpugh it has been controlled by function which it has been passed through


Asynchronous behavior exists in JavaScript only because of callbacks.

Although every feature has its own white and black side, here we covered the white side of callbacks — that is, the asynchronous nature in JavaScript.

However, the black side would be:

1) Callback Hell
Calling one callback inside another function, and then one more callback inside that — this chaining is what we call callback hell.

2) Inversion of Control
When we pass our callback to another function, we lose control over that callback. It’s now managed by the function we passed it to.
https://claude.ai/public/artifacts/7361e1d4-755e-4cf5-9c0b-32e5573ced9e


Topic 2:
What is a Promise?
A Promise is an object which represents eventual completion or failure of an asynchronous operation.

Purpose of Promise:
As we discussed earlier, we have the black side of callback usage in our JavaScript applications. Those are:

Callback Hell

Inversion of Control

To resolve those issues, we need Promises.

Inversion of Control:
Here, we are giving control of our function to another function by passing it as a callback.
So in that case, we are not aware of what’s happening behind the scenes — it may call our callback twice or may skip it, depending on the code of the function we passed our callback to.

Example of Inversion of Control:


orderPlace(cart, function redirectToPayment(orderId) {
    console.log("payment");
});
// here we lost our control on the function which we are passing through another
// this is defined as inversion of control
// so to avoid that we use:

const promis = orderPlace();
promis.then(function redirectToPayment() {
    console.log("payment")
});
To gain trust, we just call our API function — it gives us a Promise (which has 3 states: pending, resolved, rejected).

Find the above definition for Promise.
The structure of a Promise object:

javascript
Copy
Edit
{
  prototype: Promise,
  state: fulfilled (or pending, rejected),
  result: data
}
Once we get the Promise, we attach a callback function to it using .then().
It will be called only when the Promise has been resolved — this way we achieve trust over the callbacks.

Now inversion of control is resolved.
But we still have one more main issue: callback hell.

To resolve that, we use Promise chaining.
In callback hell (pyramid of doom – very ugly and hard to maintain), we pass one callback into another repeatedly.
So it grows horizontally.

Example of Callback Hell:

javascript
Copy
Edit
orderPlace(cart, function (orderId) {
    redirectToPayment(orderId, function (paymentId) {
        orderSummary(paymentId, function (summary) {
            console.log("summary");
        });
    });
});
To avoid that, we use Promise chaining — in one Promise, we pass another function.
Once the Promise is resolved, it calls our callback automatically and repeatedly.

Promise chaining example:

javascript
Copy
Edit
const promise = orderPlace();

promise.then(function (orderId) {
    return redirectToPayment(orderId);
}).then(function (paymentId) {
    return orderSummary(paymentId);
});
Or another way:

javascript
Copy
Edit
const promises = orderPlace()
    .then(function (orderId) {
        return redirectToPayment(orderId);
    })
    .then(function (paymentId) {
        return orderSummary(paymentId);
    });
To use one Promise’s result in another, we should return the result from the .then() block.

To represent callbacks in Promise chaining, instead of anonymous functions, we can use arrow functions as well — it’s up to the developer’s decision.

Now it does not grow horizontally but follows a vertical, readable order.

https://claude.ai/public/artifacts/077cb0df-d099-42db-b0b0-8942b66f3ebc



Day-10:

// Create a new promise using the Promise constructor.
// It takes a callback function as an argument, which has two parameters: resolve and reject — these are given by JS.

// Based on the scenario, the promise will either be resolved or rejected.
// If resolved, we simply return: resolve(value);
// If rejected, we throw an error using: reject(new Error("error message"));

// All the above part is related to the producer of the promise.

// Now coming to the consumer part:
// When we are receiving a promise, we can attach a callback function to handle the resolved value
// and a failure callback function to handle rejected cases — using .then and .catch respectively.

// To handle a resolved promise, we use:
// promise.then() — here we receive the resolved value, and if we want to use that value in the next step, we should return it from this callback.

// To handle errors, we use .catch():
// It catches any error thrown in the promise chain above it.
// If we want to continue processing even after a rejection, we can place .catch() just below that promise.
// Once the error is handled, the rest of the steps will continue their work.

# Making Sense of JavaScript Promises 🔄

Here's my notes on how Promises work in JavaScript:

## The Basics of Promises:

### Producer Side:
- Create a new promise using the Promise constructor
- It takes a callback with two parameters: resolve and reject (given by JS)
- Based on the scenario, promise either resolves or rejects
- If resolved: `resolve(value)`
- If rejected: `reject(new Error("error message"))`

### Consumer Side:
- When receiving a promise, attach callbacks with `.then` and `.catch`
- For resolved promises: `promise.then()` - we get the resolved value
- To use that value in next step, return it from this callback
- For errors: `.catch()` catches any error thrown in promise chain above it
- If we want to continue even after a rejection, place `.catch()` right below
- Once error is handled, rest of steps continue working

## Real Example - Shopping Cart Flow:

```javascript
const cart = ["Kurta", "shoes", "watch", "bag"];

// Version 1: Promise Chain with Complete Syntax
const promise = createOrder(cart);
promise.then(function(cartId) {
    console.log("createOrder", cartId);
    return proceedToPayment(cartId);
}).catch(function(err) {
    console.log("error", err); // handle reject
}).then(function(paymentInfo) {
    console.log("proceedToPayment", paymentInfo);
    return orderSummary(paymentInfo);
}).then(function(summmaryId) {
    console.log("orderSummary", summmaryId);
    updateWallet(summmaryId);
}).catch(function(err) {
    console.log("error", err); // handle reject
});

// Version 2: Cleaner Way
createOrder(cart)
  .then((cartId) => proceedToPayment(cartId))
  .then((paymentInfo) => orderSummary(paymentInfo))
  .then((summmaryId) => updateWallet(summmaryId))
  .catch((err) => console.log("error", err)) // handle reject
```

This avoids promise hell (similar to callback hell) where code grows horizontally and becomes hard to read.

Each function (createOrder, proceedToPayment, etc.) returns its own promise, making the chain work properly.

#JavaScript #WebDevelopment #Promises #AsyncProgramming


https://claude.ai/public/artifacts/07a61b9b-fa25-4cd2-a017-c568b8d48479


Promise types:
# JavaScript Promise Combinators Explained

Here's my notes on the 4 types of Promise combinators in JavaScript:

## 1) Promise.all()
- Waits for all promises to be settled
- Success case: Returns array of all resolved values when ALL promises resolve
- Failure case: Rejects IMMEDIATELY when ANY promise rejects
- Returns the error of the first rejected promise
- Example:
```javascript
Promise.all([p1, p2, p3])
  .then((value) => console.log("Promise.all", value))
  .catch((err) => console.log(err))
```

## 2) Promise.allSettled()
- Similar to Promise.all() but handles failures differently
- Waits for ALL promises to be settled (either resolved or rejected)
- Always returns results of all promises, whether success or failure
- Each result has a status ("fulfilled" or "rejected") and value/reason
- Example:
```javascript
Promise.allSettled([p1, p2, p3])
  .then((value) => console.log("Promise.allSettled", value))
  .catch((err) => console.log(err))
```

## 3) Promise.race()
- Returns as soon as ANY promise settles (either resolved or rejected)
- Doesn't wait for others to complete
- Returns first settled result (could be success or error)
- Example:
```javascript
Promise.race([p1, p2, p3])
  .then((value) => console.log("Promise.race", value))
  .catch((err) => console.log(err))
```

## 4) Promise.any()
- Returns as soon as ANY promise is FULFILLED (successfully resolved)
- Ignores rejections unless ALL promises reject
- Only catches if ALL promises reject
- Example:
```javascript
Promise.any([p1, p2, p3])
  .then((value) => console.log("Promise.any", value))
  .catch((err) => console.log(err))
```

## Promise Result Objects
- Success object: `{status: "fulfilled", value: "p2 success"}`
- Failure object: `{status: "rejected", reason: "p2 fail"}`
- allSettled returns array of these objects
- all just returns array of values (or throws error)

#JavaScript #Promises #WebDevelopment #AsyncProgramming

https://claude.ai/public/artifacts/75155264-be40-4992-8a77-a12c7f07e0f0



Day-11:

# Understanding Async/Await in JavaScript

## Async Keyword
- Async is a keyword used to define a function which runs asynchronously
- It always returns a promise
- Even if it returns a value, that value will be automatically wrapped in a promise

## Basic Promise Example
```javascript
const p = new Promise((resolve, reject) => {
    resolve("resolved");
});

function handle() {
   p.then((ms) => console.log(ms));
}
```

## Promise Timing Examples
```javascript
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("hi swathi");
    }, 20000)
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("hi swathi");
    }, 40000)
});
```

## Async Without Await
```javascript
async function handle() { // returns promise only
   p1.then((ms) => console.log(ms)); // then this
   console.log("how are you swathi", p1); // this will be printed first as JS does not wait for anything
   
   // But what if in real world scenario if the promise result is needed in further transaction
   // or if previous transaction result is needed in next? Then it doesn't work right,
   // so await came into picture
}
```

## Async With Await
```javascript
async function handle1() { // returns promise only
    console.log(":helloo");
    
    const data = await p1; // 10sec
    // Call stack: First whenever handle1 enters into call stack it starts executing line by line
    // so first prints hello and when it encounters await, then the function execution will be suspended
    // from call stack but JS doesn't stop its execution while callstack is ready to execute other events
    // which ever comes into it without blocking main thread
    
    // Once the promise is settled then it goes ahead into call stack and starts executing from where it was called
    // If it encounters await in our code and if it is already settled then simply returns it
    // Otherwise again the function execution will be suspended and it will wait until promise to be settled
    // then it appears in call stack to resume execution from where it was called.
    
    console.log(data); // after promise settled this line will be executed
    console.log("how are you"); 
    
    const data1 = await p2; // 5sec
    console.log(data1); // after promise settled this line will be executed
    console.log("how are you2");
}
```

## Real Example with API
```javascript
const API_URL = "https://api.github.com/user"; // fetch is browser API, not JS one

async function handler2() {
  const data = await fetch(API_URL); // it will return the response stream
  // from that response stream we need to get response JSON, it's again a promise
  const res = await data.json();
  console.log(res);
}

// handler2();
```

## Error Handling in Async/Await
```javascript
// To handle errors we use try-catch in our async and await 
// whereas in promise it's then and catch

// Method 1: Try-catch inside function
async function handler2() {
    try {
        const data = await fetch(API_URL);
        const res = await data.json();
        console.log(res);
    } catch(err) { 
        console.log(err);
    }
}

// Method 2: Attaching catch to function call
handler2().catch((err) => console.log(err)); // here we need to attach failure callback to it
```

https://claude.ai/public/artifacts/86bdb625-9de1-49da-b5c6-99d3460e8465



whereever js runs there the JSRE will exist 


# Understanding 'this' Keyword in JavaScript

## In Global Scope
```javascript
console.log("global object", this); // It refers to the global object
```
- The global object depends on JavaScript runtime environment
- In browsers: `window` object
- In Node.js: `global` object

## In Functions
The behavior depends on strict mode and how the function is called:

### Strict Mode
```javascript
"use strict"
function x() {
    console.log(this); // undefined
}
console.log("strict mode", x());
```

### Non-Strict Mode
```javascript
function y() {
    console.log(this); // undefined, but substituted with window (in browser)
}
```
- In non-strict mode, if `this` references undefined, it's replaced with the global object (this substitution)
- In browsers, the global object is `window`

## Function Calling Context
The value of `this` also depends on how the function is called:

```javascript
console.log("normal calling", y()); // window (due to substitution)
console.log("window.y();", window.y()); // window
```

## In Objects (Methods)

### Regular Function as Method
```javascript
const obj = {
    x: 9,
    y: function() { // This is called a method (function inside object)
        console.log(this); // References the entire obj
    }
}
console.log("obj func", obj.y());
```

### Arrow Function as Method
```javascript
const obj1 = {
    x: 9,
    y: () => { // Arrow function as method
        console.log(this); // References enclosing lexical context (window)
    }
}
console.log("arrow", obj1.y());
```
- Arrow functions don't have their own `this` reference
- They use the `this` value from their enclosing lexical context

## In DOM Event Handlers
```html
<button onclick={alert(this)}>click me</button> <!-- 'this' refers to the button element -->
```

https://claude.ai/public/artifacts/08e511d6-c865-4c21-b7de-26bb5afa8cfa










Day-12:




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




=================================
JavaScript Advanced Concepts - Organized Notes
1. Call, Apply, and Bind Methods
These methods are mainly used for sharing methods between objects and controlling the this reference in JavaScript functions.
Call Method

Syntax: function.call(objectReference, arg1, arg2, ...)
Purpose: Calls a function with a specified this value and arguments provided individually
Example from your notes:
javascriptobj1.getName(); // Normal call - 'this' refers to obj1
obj1.getName.call(obj2); // Calling obj1's method but 'this' refers to obj2
obj1.getName.call(obj2, "Khammam"); // With additional arguments


Apply Method

Syntax: function.apply(objectReference, [arg1, arg2, ...])
Purpose: Same as call but arguments are passed as an array
Example from your notes:
javascriptgetFullName.apply(obj1, ["hyderabad", "Telangana"]);


Bind Method

Syntax: function.bind(objectReference, arg1, arg2, ...)
Purpose: Returns a new function with the specified this value and initial arguments
Unlike call/apply, it doesn't invoke the function immediately but creates a bound function for later use
Example from your notes:
javascriptconst bindingVar = getFullName.bind(obj2);
bindingVar("usa");


2. Debouncing
Debouncing is a programming technique used to limit the rate at which a function can be executed.

Purpose: Prevents a function from being called multiple times in quick succession
Common use cases: Search inputs, resize events, scroll events
Implementation in your notes:
javascriptconst doSomeMagic = (fn, d) => {
    let timer;
    return function() {
        clearInterval(timer);
        timer = setTimeout(() => {
            fn();
        }, d);
    };
};

// Usage
const betterFunction = doSomeMagic(getData, 500);

How it works:

A timer is set when the function is first called
If the function is called again before the timer completes, the timer resets
The actual function only runs once after the user stops calling it for the delay period



3. Function Currying
Function currying is a technique to transform a function with multiple arguments into a sequence of functions, each taking a single argument.
Using Bind Method
javascriptfunction multiply(x, y) {
    let z = x * y;
    console.log(z);
}

const multiplyTwo = multiply.bind(this, 2); // Pre-sets first argument to 2
multiplyTwo(3); // Outputs 6 (2*3)
Using Closures
javascriptconst multiple = function(x) {
    return function(y) {
        console.log(x * y);
    };
};

const multiplyTwos = multiple(2);
multiplyTwos(3); // Outputs 6 (2*3)
// Alternative: multiple(3)(6); // Outputs 18 (3*6)
4. Polyfill for Bind Method
A polyfill is code that provides modern functionality in older browsers that don't natively support it.
javascriptFunction.prototype.myBind = function(...args) {
    let params = args.slice(1);
    const obj = this; // Reference to the original function
    
    return function(...subargs) {
        obj.apply(args[0], [...params, ...subargs]);
    };
};

// Usage
const getName2 = getFullName.myBind(obj1, "hyderabad", "te");
getName2("hello");
How your polyfill works:

Stores the original function in obj (using this)
Takes the first argument as the context object
Extracts remaining arguments as pre-bound parameters
Returns a new function that accepts additional arguments
When called, it uses apply to invoke the original function with the right context
Combines pre-bound parameters with new parameters
https://claude.ai/public/artifacts/e2892349-32ca-4403-abed-80f3b1d6c464

JavaScript Advanced Concepts - Notes Summary
Your notes cover several important JavaScript concepts:

Call, Apply, and Bind methods
Debouncing
Function Currying
Creating a Polyfill for Bind

Let me organize these concepts for you:JavaScript Advanced Concepts OverviewImage JavaScript Advanced Concepts - Organized NotesDocument ## JavaScript Advanced Concepts - Organized Notes

### 1. Call, Apply, and Bind Methods

These methods are mainly used for sharing methods between objects and controlling the `this` reference in JavaScript functions.

#### Call Method
- Syntax: `funcI've organized your JavaScript concept practice notes while maintaining your original language. I've created two artifacts:

A visual diagram showing the key concepts and their relationships
Detailed organized notes explaining each concept

Technical Notes & Small Corrections
Looking through your code, there are a few minor technical points to note:

In your PolyfillBind.js, there's a small issue in the implementation:
javascript// Inside your myBind function:
clearInterval(timer); // You're using clearInterval but setting with setTimeout
It's more accurate to use clearTimeout(timer) since you're using setTimeout.
In the debouncing implementation, the timer variable is being managed correctly to ensure only one function call happens after the delay period.
For the bind polyfill, your implementation has the right approach. Just note that when you spread the arguments with ...args, the first element (args[0]) represents the context object, and the rest are parameters.

Summary of Concepts

Call, Apply, Bind Methods

These allow you to control what this refers to in function execution
Call: Execute immediately with arguments listed individually
Apply: Execute immediately with arguments as an array
Bind: Return a new function with bound context for later execution


Debouncing

Prevents excessive function calls by delaying execution
Useful for search inputs, window resizing, etc.
Implements a timer that resets on repeated calls


Function Currying

Transform multi-argument functions into a sequence of single-argument functions
Can be implemented with either bind or closures
Enables partial application of function arguments


Polyfill for Bind

Custom implementation of a native JavaScript method
Uses Function.prototype to extend JavaScript's built-in functionality
Combines closure with apply to recreate bind behavior

Day-13:

Sricpt:here its start with html parsing where ever it encounters sripti then it pauses the html parsing and fetch script form network then it executes that scripot once done tiwth scrit then html parsing will be resumed untill html is paused,ths is general

Async: if we put async it startw tih html parsing when encounters scriot then it parallely fecthes from netwrok once it fected then only html parsing will be paused an dscriot is executiing then nonce script execution is done then html prsing will be continues some pausing time is less

defer:
starts with html parsing when encounter script it parallely fecthes from netwokr once html parsing is done then only it start executing script ,no html pausing time here


soo final observation is if we have depende on sripti on another then defer would be better it follows order where in no depenedeny between sript like any other script (extenrl script needed)then async will be fine

Understanding Script Loading Strategies in HTML
Based on your notes, I'll organize this information about how different script loading attributes work. Let me create a clear explanation with a visual representation.
Script Loading Strategies
Regular Script Loading

HTML parsing begins
When <script> tag is encountered, HTML parsing PAUSES
Script is fetched from network
Script is executed
Only after script execution completes, HTML parsing RESUMES
Results in longer page load times due to blocking behavior

Async Loading (async attribute)

HTML parsing begins
When <script async> is encountered, HTML parsing CONTINUES
Script is fetched from network IN PARALLEL with HTML parsing
When script download completes, HTML parsing PAUSES
Script is executed
After script execution completes, HTML parsing RESUMES
Reduces page load time, but scripts may execute in unpredictable order

Defer Loading (defer attribute)

HTML parsing begins
When <script defer> is encountered, HTML parsing CONTINUES
Script is fetched from network IN PARALLEL with HTML parsing
HTML parsing completes fully WITHOUT interruption
Only after HTML parsing is 100% complete, deferred scripts execute
Scripts with defer execute in the same order they appear in the document
Provides the most efficient page load with predictable script execution order

When to Use Each Strategy

Regular Scripts: When the script is essential for initial page rendering
Async: When scripts are independent and don't rely on each other
Defer: When script order matters and scripts can wait until after HTML is parsed

Key Takeaways

Regular Script: Completely blocks HTML parsing while fetching and executing scripts, causing slowest page rendering.
Async Script: Improves performance by fetching scripts in parallel with HTML parsing, only blocking briefly during execution. Best for independent scripts (like analytics) where execution order doesn't matter.
Defer Script: Offers best performance by never interrupting HTML parsing. Scripts execute in their document order, but only after HTML is fully parsed. Ideal for scripts that depend on each other or on DOM elements.

https://claude.ai/public/artifacts/db831113-986c-4ddd-bdc9-3549a12ee723

event bubbling and capturing(tricking)


document.querySelector("#grandParent").addEventListener("click",()=>{
    console.log("grandParent");
},true)
document.querySelector("#parent").addEventListener("click",(e)=>{
   
    console.log("parent");
},true)
document.querySelector("#child").addEventListener("click",(e)=>{
     e.stopPropagation();
    console.log("child");
},false)
//here event bubbling the events are bulled from current to end of dom in upward direction n
// where as in capturing or trciking the evenyts are propagated from starting of dom to current div in downlward motion
//while adding event listeners by mention true is does capturing where false for bubbling
// so as per w3c conclusion  the events are propagated in cycle motion like first it does tricking and then bubbling if we mention in specififc for particluar div that occures as per true or pfalse


// to avoid this we can control propagation by using else.stopPropagation();

// in this case wherever we mention stopPropagation the propogation of event does not go beyond that in in cyle in bubbling or capturing



Understanding Event Propagation in JavaScript
Based on your notes, I'll organize the information about event propagation (capturing and bubbling) in JavaScript.
Event Propagation Phases
Events in JavaScript propagate in two phases:

Capturing Phase (Trickling): Events propagate from the root of the DOM tree down to the target element
Bubbling Phase: Events propagate from the target element back up to the root of the DOM tree

Event Listener Parameters
When adding event listeners with addEventListener, the third parameter controls which phase the listener responds to:

true: Capturing phase (top-down)
false or omitted: Bubbling phase (bottom-up) - this is the default

Controlling Propagation

event.stopPropagation(): Stops the event from continuing its propagation path (in either phase)
This prevents the event from traveling further up or down the DOM tree

Your Code Example Analysis
In your example:
javascriptdocument.querySelector("#grandParent").addEventListener("click", () => {
    console.log("grandParent");
}, true) // Capturing phase

document.querySelector("#parent").addEventListener("click", (e) => {
    console.log("parent");
}, true) // Capturing phase

document.querySelector("#child").addEventListener("click", (e) => {
    e.stopPropagation();
    console.log("child");
}, false) // Bubbling phase
When clicking on the child element, the events will trigger in this order:

"grandParent" logs (capturing phase, traveling down)
"parent" logs (capturing phase, traveling down)
"child" logs (bubbling phase, at target)
No more propagation occurs because e.stopPropagation() was called in the child handler

Your understanding is correct! According to W3C specifications, events propagate in a cycle - first capturing (top-down) and then bubbling (bottom-up). Calling stopPropagation() prevents the event from continuing in either direction.JavaScript Event Propagation VisualizationImage Expected Console Output for a Click on the Child Element
If someone clicks on the child element in your example, here's what will happen:

First, the capturing phase starts from the document root and moves down:

"grandParent" logs (because its listener has true for capturing)
"parent" logs (because its listener has true for capturing)


Then, at the target element (child):

"child" logs
e.stopPropagation() is called


The propagation stops completely, so:

The event doesn't bubble up to parent or grandparent
No other handlers are called



Key Points About Event Propagation

Events always follow this sequence: capturing phase → target phase → bubbling phase
The third parameter in addEventListener determines which phase the handler responds to:

addEventListener(event, handler, true) - capturing phase
addEventListener(event, handler, false) - bubbling phase (default)


e.stopPropagation() prevents the event from continuing in either direction from where it's called
When an event reaches its target element, both capturing and bubbling handlers on that element will fire (in capturing → bubbling order)

https://claude.ai/public/artifacts/8ebf00a0-4587-4d46-b664-febc77767984


event Delegation:
// here to avoid multiple event handlers we are adding handler to parent as parent listens to all its child evnts as we know event bubbling the event propagation will be bubbled up so that byssuing that we can ahndle this by adding event listener to the parent concept is called event deletgation m
//so this we can avoid performance bottle necks as if we have ultiple event im application iyty will lead to slow performance and by havimg delegtion we have chave less codee an dless memory and more performace 

//but here we have cons as well some evt sdoes not bubbled up like blur an dfocus so that we need to handle them speerately adn we shoudl not use stoppropagatuon if we use thet dthe delegation does not work as delegation works under the power of event bubbling
document.querySelector("#category").addEventListener("click",(e)=>{
console.log(e.target.id,"clicked");
// console.log("are you there");
})

document.querySelector("#login").addEventListener("keyup",(e)=>{
console.log("make me into uppercase",e.target.dataset.uppercase,e.target.value);
if(e.target.dataset.uppercase != undefined){
    e.target.value= e.target.value.toUpperCase();
}

})


Understanding Event Delegation in JavaScript
Based on your notes, I'll organize the information about event delegation in JavaScript.
What is Event Delegation?
Event delegation is a technique where we add a single event listener to a parent element instead of adding many event listeners to individual child elements. This pattern leverages the event bubbling phase of event propagation.
How Event Delegation Works

Events that occur on child elements bubble up to their parent elements
A single event handler on the parent catches all events from its children
Using event.target, we can identify which specific child element triggered the event

Benefits of Event Delegation

Performance Improvement: Fewer event listeners means less memory usage
Less Code: Only need to write one event handler instead of many
Dynamic Elements: Automatically works for elements added to the DOM later
Cleaner Code: Centralizes event handling logic

Limitations of Event Delegation

Some events don't bubble up (e.g., focus, blur) so they can't be delegated
If stopPropagation() is used on child elements, delegation won't work for those events
Requires additional logic to determine which element triggered the event

Less Dom Manipulation 

Your Code Example Analysis
In your example:
javascript// Event delegation for category items
document.querySelector("#category").addEventListener("click", (e) => {
    console.log(e.target.id, "clicked");
})

// Event delegation for form inputs with data attribute handling
document.querySelector("#login").addEventListener("keyup", (e) => {
    console.log("make me into uppercase", e.target.dataset.uppercase, e.target.value);
    if(e.target.dataset.uppercase != undefined){
        e.target.value = e.target.value.toUpperCase();
    }
})
This demonstrates two common use cases for event delegation:

Handling clicks on a list of items (laptops, cameras, shoes)
Applying behavior to specific form inputs based on their data attributes

Your understanding of event delegation is correct! It's a powerful pattern that uses event bubbling to improve performance and reduce code complexity.JavaScript Event Delegation VisualizationImage Practical Application of Event Delegation
Example 1: Category List
javascriptdocument.querySelector("#category").addEventListener("click", (e) => {
    console.log(e.target.id, "clicked");
    // Perform actions based on which item was clicked
})
When you click on any list item (laptop, camera, dresses), the event bubbles up to the #category parent, where your single handler captures it. The e.target property identifies exactly which item was clicked.
Example 2: Form Input with Data Attributes
javascriptdocument.querySelector("#login").addEventListener("keyup", (e) => {
    if(e.target.dataset.uppercase != undefined) {
        e.target.value = e.target.value.toUpperCase();
    }
})
This demonstrates a clever use of data attributes with event delegation. By adding data-uppercase only to the fields that need this behavior, a single event handler can apply different behaviors to different inputs.
When to Use Event Delegation

Lists or grids with many items: Menus, tables, product listings
Dynamic content: When elements are frequently added/removed from the DOM
Forms with multiple inputs: Apply validation or formatting rules
Large applications: Reduce memory footprint and improve performance

Important Considerations

Only events that bubble can be delegated (click, keyup, submit, etc.)
Events like focus, blur, and mouseenter don't bubble naturally
Never use e.stopPropagation() on elements that need delegation
Always check e.target to ensure you're handling the right element


https://claude.ai/public/artifacts/9e51439c-aa8d-48bb-8818-b1a871c2ce6b

prototype and prototypeinheritance:
Understanding JavaScript Prototypal Inheritance
Based on your notes, I'll organize the information about JavaScript's prototype chain and inheritance.
JavaScript Prototype Chain Basics
In JavaScript, when you create arrays or objects, they automatically get linked to a prototype that contains built-in methods:
javascriptlet arr = ["swathi", "raji", "reddy"];
// arr can access all Array methods through its prototype
// arr.__proto__ is the same as Array.prototype

let obj = {
    name: "swathi",
    city: "khammam"
}
// obj.__proto__ is the same as Object.prototype
The Prototype Chain
JavaScript follows a prototype chain when looking for properties and methods:

First, it checks the object itself
If not found, it checks the object's __proto__ (its prototype)
If still not found, it checks the prototype's prototype
This continues until it reaches null

For arrays, the chain looks like:

arr.__proto__ → Array.prototype
arr.__proto__.__proto__ → Object.prototype
arr.__proto__.__proto__.__proto__ → null

Implementing Prototypal Inheritance
You can set an object's prototype to another object to create inheritance:
javascriptlet obj3 = {
    name: "swathi",
    city: "khammam",
    getName: function() {
        console.log(this.name + " " + this.city);
    }
}

let obj4 = {
    name: "rajesh",
    // city is not defined here
}

// obj4.getName(); // Would throw an error initially

// Set up inheritance
obj4.__proto__ = obj3;

// Now obj4 can use methods from obj3
obj4.getName(); // Outputs: "rajesh khammam"
When obj4.getName() is called:

JavaScript first checks if obj4 has a getName method (it doesn't)
Then it checks obj4.__proto__ (which is obj3) and finds getName
It calls the method with this referring to obj4
The method uses obj4.name ("rajesh") and falls back to obj3.city ("khammam") since obj4 doesn't have city

This is how prototypal inheritance allows objects to access properties and methods from their prototypes.JavaScript Prototypal Inheritance VisualizationImage JavaScript Prototypal Inheritance
The __proto__ Connection
In JavaScript, every object gets a special hidden property called __proto__ which connects it to its prototype:
javascriptlet arr = ["swathi", "raji", "reddy"];
// here once we create arr its accessible to use all Array methods just because of type array 
// its allows to access all array methods
// variable name does not matter type matters
// if we see Array.prototype and arr.__proto__ gives same
Similarly for objects:
javascriptlet obj = {
    name: "swathi",
    city: "khammam",
}
let obj2 = {
    name: "swathi",
    city: "khammam"
}
//here also obj.__proto__ is same like Object.prototype
The Prototype Chain Order
The prototype chain always follows this hierarchy:

Array.prototype (for arrays)
Object.prototype (for all objects)
null (end of chain)

For arrays:
javascript// arr.__proto__ points to Array.prototype
// arr.__proto__.__proto__ equals obj.__proto__ (Object.prototype)
// arr.__proto__.__proto__.__proto__ equals null (end of chain)
Creating Inheritance Between Objects
You can make one object inherit from another by setting its __proto__:
javascriptlet obj3 = {
    name: "swathi",
    city: "khammam",
    getName: function() {
        console.log(this.name + " " + this.city);
    }
}

let obj4 = {
    name: "rajesh",
    // city:"thummma" (commented out in your code)
}

console.log(obj3.__proto__); // Shows Object.prototype
console.log(obj4.__proto__); // Shows Object.prototype
console.log(obj3.getName()); // "swathi khammam"

// console.log(obj4.getName()); // This would throw error before inheritance is set up

// Set up inheritance
obj4.__proto__ = obj3;
console.log(obj4.getName()); // "rajesh khammam"
How Property Lookup Works
When you access obj4.getName():

JavaScript checks if obj4 has a getName method - it doesn't
It then checks obj4.__proto__ (which is obj3) and finds getName
It executes the function with this referencing obj4
Inside the function, this.name is "rajesh" (from obj4)
For this.city, since obj4 doesn't have a city property, JavaScript checks obj4.__proto__ (which is obj3) and finds "khammam"

https://claude.ai/public/artifacts/7ac2290d-5286-4472-9e93-d64a9aff8155


throttling:
throatt:


Understanding Throttling in JavaScript
I see you've shared your notes on throttling, a technique for limiting function execution rates. Let me organize this information clearly while keeping your original explanations intact.
What is Throttling?
Throttling is a technique that limits how often a function can be called within a specific time period. Unlike debouncing (which delays execution until activity stops), throttling ensures a function executes at most once per specified time interval, regardless of how many times it's triggered.
When to Use Throttling
Throttling is ideal for:

Limiting API calls in search functions for e-commerce websites
Handling window resize events
Managing scroll events
Processing continuous user inputs where you need regular updates but not for every input

How Throttling Works
Your implementation correctly demonstrates the throttling concept:
javascriptconst expensive = () => {
    console.log("i am expensive dont call me many times you will become poor");
}

const throttle = (fun, delayLimit) => {
    let flag = true;
    return function () {
        console.log("flag", flag);
        
        if (flag == true) {
            console.log("inflag", flag);
            flag = false;
            fun();
            
            setTimeout(() => {
                flag = true;
            }, delayLimit)
        }
    }
}

const betterExpensive = throttle(expensive, 900);
betterExpensive(); // Will execute immediately
betterExpensive(); // Ignored (within cooldown period)
betterExpensive(); // Ignored (within cooldown period)
// After 900ms, the function will be available to call again
How Your Implementation Works

The throttle function creates a closure that maintains a flag variable
When the returned function is called:

If flag is true, it executes the expensive function
It then sets flag to false, preventing further calls
A setTimeout resets the flag to true after the specified delay


Any calls during the cooldown period are simply ignored

Practical Applications

Search functionality: Limiting API calls while a user types in a search box
Window resizing: Running resize calculations at controlled intervals
Input validation: Checking input at steady intervals during typing
Scroll-based animations: Controlling how often scroll handlers fire

Throttling vs. Debouncing

Throttling: Executes at regular intervals during continuous activity (useful for continuous feedback)
Debouncing: Waits until activity stops before executing (useful for final results)
Throttling vs Normal Function ExecutionImage This visualization shows how throttling limits function execution. Without throttling, every event triggers the function (red dots). With throttling, only one function call is executed during each cooldown period (larger teal dots), while subsequent calls within that period are ignored (lighter gray dots).
Your implementation works correctly by:

Using a flag variable to track whether we're in a cooldown period
Only executing the expensive function when the flag is true
Setting a timeout to reset the flag after the specified delay

This approach effectively limits how frequently your expensive operations (like API calls or DOM manipulations) run, significantly improving performance for event handlers that trigger frequently like window resizing, scrolling, or continuous user input.RetryClaude does not have the ability to run the code it generates yet.Claude can make mistakes. Please double-check responses. 3.7 Sonnet
https://claude.ai/public/artifacts/b2193788-66d1-497b-b49d-9cacaa75941c



Day-14:

Recurrsion:
const user = {
    name: "rajesh",
    address: {
        personal: {
            city: "hyderabad",
            area: "chaitanyapuri"
        },
        office: {
            city: "hyderabad",
            area: {
                landmark:
                    "chaitanyapuri"
            }
        }
    }
}
let final = {};
const prepareMagicObj = function (user, parent_path) {

    for (let key in user) {
        if (typeof (user[key]) == "object") {
            prepareMagicObj(user[key], parent_path + "-" + key);
        } else {
              final = {
                ...final,
                [parent_path + "-" + key]: user[key]
            };
        }

    }
   
 console.log(final);
}

prepareMagicObj(user, "user");


LocalStorage:it stores the data in broswer 
we can get that data whenever loginto same origin 
origin: 
protocal: http,https
host: "www.s30.com"
port:3000

if you want to get your data these 3 should match other wise it will be not able to get  the data

here ok to set data in localstorage we use localStorage.setItem("key","value")
to get the data localStorage.getItem("key")
const user={
    name:"swathi",
    id:333
}

localStorage.setItem("sample",user);
//this is not work because to set data into localstorage everyting should be in string format
so 
localStorage.setItem("sample",JSON.stringify(user))
nd if we get the data direclty after this it will give in string formate as we strinfyed the object to we need to parse it

JSON.parse(localStorage.getItem("sample"))
we can create our own functions to create this template once to use in our appplication without doing this tringfying and parsing multiple times 
accessing data from localstroage is quite faster than getting api res from network


again recurrsion problem:
// const sum=function(val){
//     console.log(val);
//     return x
// }

// const x=function(val){
//     console.log(val);
//     return y;
// }
// const y=function(val){
//     console.log(val);
//     return z;
// }
// const z=function(val){
//     console.log(val);

// }
const sum1 = function (a) {
    return function (b) {
        if (b) {
            return sum1(a + b)
        }
        else {
            return a;
        }
    }
}



const total = sum1(1)(2)(3)(4)();
// console.log(sum1(1));
// console.log(sum1(1)(2));
// console.log(sum1(1)(2)(3));
// console.log(sum1(1)(2)(3)(4));
console.log(sum1(1)(2)(3)(4)());

//es6
const sum2 =  (a) => (b) =>  b? sum2(a + b):a;



const efficient = sum2(1)(2)(3)(4)();
console.log(efficient);


