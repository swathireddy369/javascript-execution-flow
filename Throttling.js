//its a sibbling of debouncing where  we limit the api calls to network in search option for ecommerce website
//here the main agenda is to limit the number of continouse same apis to the network means rate limit and throgh this we cah achive  performace

//like we use epensive function like api's 
// let see a example where we click the resize window button multiple times it hits millios of calls to network but that leads a bad perfoamce of application right so to limit that alls we have throttling it makes our resize window function betterly

const expensive = () => {
    console.log("i am expensive dont call me many times you will become poor");
}
//here its calling everytime when we click button  so to reduce that limit 
// we use throtle function it does our function better and it gives our better expensive function

const throttle = (fun, delayLimit) => {
    let flag = true;
    return function () {
       
 console.log("flag",flag);
        
        if (flag == true) {
             console.log("inflag",flag);
             flag = false;
            fun();
            
            setTimeout(() => {
                flag = true;
            }, delayLimit)
        }

    }

}
const betterExpensive = throttle(expensive, 900);
// here the throttle function returns a function whcih is actullayu a closured formed where it holds flag of its parent otheriwse it has to inilize everytime and for evrycall it willbe called s as oer our logic window resize,nutton spam clicking
betterExpensive();

//throatling limits the rate of function at least once per time in ms(here how many calls trigger,it call once in a particular time)
//its waiting for perticular time to run (after pause) search option after pause of typing where a pause happen in typing input validation on keypres and search typeing 