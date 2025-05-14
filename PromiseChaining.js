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

const cart=["Kurta","shoes","watch","bag"];
const promise=createOrder(cart);
promise.then(function(cartId){
    console.log("createOrder",cartId);
    return proceedToPayment(cartId);         //this is another way of doing but this is readable friendly and it grows horizontally and forms promise hell like call back hell//  proceedToPayment(cartId).then(function(){ orderSummary(paymentInfo)})
}).catch(function(err){
    console.log("error",err);//to handle reject
}).then(function(paymentInfo){    
    console.log("proceedToPayment",paymentInfo);
      return orderSummary(paymentInfo);
}).then(function(summmaryId){
    console.log("orderSummary",summmaryId);
        updateWallet(summmaryId);
})
.catch(function(err){
    console.log("error",err);//to handle reject
})

//v2 (Same code but more cleaner way of doing)

createOrder(cart)
.then((cartId) => proceedToPayment(cartId) ) //  proceedToPayment(cartId).then(function(){ orderSummary(paymentInfo)}) //this is another way of doing but this is readable friendly and it grows horizontally and forms promise hell like call back hell
.then((paymentInfo) => orderSummary(paymentInfo))
.then((summmaryId) =>  updateWallet(summmaryId))
.catch((err)=> console.log("error",err))//to handle reject


function createOrder(){   //step1
    const promise=new Promise(function(resolve,reject){
     if(!validateCard(cart)){
        const error=new Error("cart is not valid");
reject(error);
     }
     resolve("123568");
    })
    return promise;
}
function validateCard(cart){
return false;
}
function proceedToPayment(){ //step2
return new Promise(function(resolve,reject){resolve("3469")});
}
function orderSummary(){ //step2
return new Promise(function(resolve,reject){resolve("done")});
}
function updateWallet(){ //step2
return new Promise(function(resolve,reject){resolve("3469")});
}