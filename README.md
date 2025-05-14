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

javascript
Copy
Edit
orderPlace(cart, function redirectToPayment(orderId) {
    console.log("payment");
});
// here we lost our control on the function which we are passing through another
// this is defined as inversion of control
// so to avoid that we use:

javascript
Copy
Edit
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