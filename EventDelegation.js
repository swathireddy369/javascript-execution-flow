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