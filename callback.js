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