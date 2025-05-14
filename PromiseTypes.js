/* here we have 4tyesp 

 1) Promise.all();

 2) Promise.allsettled();
 3) Promise.race();
 4)Promise.any();*/



 const p1=new Promise(function(resolve,reject){
    setTimeout(()=>resolve("P1 Success"),3000);
    });
    
 const p2=new Promise(function(resolve,reject){
    setTimeout(()=>reject("P2 fail"),1000); //as we should not contain uncaught error so that should be caught them before broswer caughts it by using catch
    // setTimeout(resolve("P2 Success"),1000);
    })
    
 const p3=new Promise(function(resolve,reject){
    setTimeout(()=>reject("P3 Success"),2000);
    })

    // console.log(Promise.all([p1,p2,p3]));//first fail
// in success case it waits fro all promices to be settled and then return all values whereas in failure case as soon as it encounters failure it directly return the same error for all of them 
   Promise.all([p1,p2,p3]).then((value)=>{
console.log("Promise.all",value)
    }).catch((err)=>console.log(err)
    )

//its some what similar to promise.all in success case although in failure case it behavious same like success whether it failure or success it waits for all to be settled and then return output of all them waht ever it settled
    Promise.allSettled([p1,p2,p3]).then((value)=>{
console.log("Promise.allSettled",value)
    }).catch((err)=>console.log(err)
    )


    //its name suggest that it returns as soon as any of the promicess settled either resolved or rejected does not wait for others  whether their can be resolved or rejected does  not matter
    Promise.race([p1,p2,p3]).then((value)=>{
console.log("Promise.race",value)
    }).catch((err)=>console.log(err)
    )

//its name suggest that it returns as soon as any of the promicess settled either resolved or rejected does not wait for others  whether their can be resolved or rejected does  not matter
    Promise.any([p1,p2,p3]).then((value)=>{
console.log("Promise.any",value)
    }).catch((err)=>console.log(err)
    )


    // lingo //
    // resolve reject
    // sucess failure
    // fulfilled  reject


    // object for success   {status:"fullfilled",value:"p2 success"};
    //  object for failue   {status:"fullfilled",reason:"f2 fail"};
    // all thought for all it just return values becuase it waits for all in sucess  in failure simple throw error for all