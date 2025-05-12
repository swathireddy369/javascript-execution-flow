// inversion control:
orderPlace(cart, function redirectToPayment(orderId) {
    console.log("payment");
});
// here we lost our control on the function which we are passing through another
// this is defined as inversion AbortController
// so to avoid that we use
const promis = orderPlace();
promis.then(function redirectToPayment() {
    console.log("payment")
});

// callback hell:
orderPlace(cart, function (orderId) {
    redirectToPayment(orderId, function (orderId) {
        orderSummary(paymentId, function (paymentId) {
            console.log("summary");
        })
    });
});



const promise = orderPlace();

promise.then(
    function (orderId) {
        return redirectToPayment(orderId);
           }).then(function (paymentId) {
        return orderSummary(paymentId);
          })

const promises = orderPlace()
         .then(function (orderId) {
           return redirectToPayment(orderId);
           })
         .then(function (paymentId) {
           return orderSummary(paymentId);
          })

