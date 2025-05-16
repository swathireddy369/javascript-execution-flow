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