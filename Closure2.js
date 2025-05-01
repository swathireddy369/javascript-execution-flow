
for(var i=0;i<=5;i++){
    setTimeout(function sample(){console.log("var",i)}//it forms clousre and holds the reference of i once the timer is done then it prints pointing to ref and print value
,1000)//it just show 6 because javascript function does not wait for any other function menas it does not wait for settimout to complete times firsy it just do the loop itself after loop done if timer done then that setimeout function execute
};

//to avoid above issue we can simply use let as let and const are block scope when closure form sit just create new copy of variable so it remberbers its new copy Reference itself 
for(let i=0;i<=5;i++){
    setTimeout(function sample(){console.log("let",i)}//it forms clousre and holds the reference of i once the timer is done then it prints pointing to ref and print value
,1000)//it just show 6 because javascript function does not wait for any other function menas it does not wait for settimout to complete times firsy it just do the loop itself after loop done if timer done then that setimeout function execute
};

// then what if we have to use var only 

for(var i=0;i<=5;i++){
    function X(i){//it creates local copy of i for every block for clousre refres to new reference evry time
    setTimeout(function sample(){console.log("var with function args",i)}//it forms clousre and holds the reference of i once the timer is done then it prints pointing to ref and print value
,1000)//it just show 6 because javascript function does not wait for any other function menas it does not wait for settimout to complete times firsy it just do the loop itself after loop done if timer done then that setimeout function execute
    };
X(i);
};


