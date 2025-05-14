// Async/await:

// Async is a keyword which is used define a function which runs asynronously 
// it always return a promise
// even if it returs a value but automatically it will be wrapped in promise and return it

// why async/ await let me check with without aync and await

// okay 

const p=new Promise((resolve,reject)=>{
    resolve("resolved");
})

function handle(){
   p.then((ms)=>console.log(ms));
}


const p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
 resolve("hi swathi");
    },20000)
   
})


const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
 resolve("hi swathi");
    },40000)
   
})
async function handle(){//returns promise only
   p1.then((ms)=>console.log(ms)); //then this
   console.log("how are you swathi",p1);//this is will be printed first  as js does not wait for anything
   //but what if in real world scenario if if the promise result ot be needed in further transation or else previous transction result needed in next
//    then it does work right so  await came into picture
}
// combination of async and await are to handle promises
async function handle1(){//returns promise only
    console.log(":helloo");
    
   const data=await p1;//10sec 

//    call stack: first whenever handle1 enter into call stack it starts executing line by line so fist prints hello and when it encountersa await then the function execution will be suspended from call stack but js does stop its execution while callstack is ready toexecute other events whih evrs comes into it without boking main thread 
//    once the promise is settled themn it ahead into calll stack starts executing from where it was called then it encounter await in our code so if it is already settled ythen simple returns it otherwsie again the function executin will be suspended and it will wait untill promise to be settled then it appear in call stack to resume execution from where it was called.
   console.log(data);//after promise settled this two lined will be executed
   console.log("how are you");

//    data.then((msg)=>console.log("how are you swathi",msg));

 const data1=await p2; //5sec
 console.log(data1);//after promise settled this two lined will be executed
   console.log("how are you2");
}

// handle();
handle1();

// real example


const API_URL="https://api.github.com/user";
//fetch is browswer api not js one
async function handler2(){
  const data=await fetch(API_URL);//it will return the response stream
//   from that response stream we need to get response JSON its again a promise
  const res=await data.json(); //this is 
  console.log(res);
  
}
// handler2();

// to handle errors we use try catch in our async and await whee in promise it then and catch  and we can cathc in in tanother way as well

async function handler2(){
    try{
  const data=await fetch(API_URL);//it will return the response stream
//   from that response stream we need to get response JSON its again a promise
  const res=await data.json(); //this is 
  console.log(res);}catch(err){
console.log(err);

  }
      
}

//another approach of handing error 

handler2().catch((err)=>console.log(err));//here we need to attach failure calll back to it
