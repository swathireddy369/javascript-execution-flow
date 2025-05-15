let count = 0;
const getData = () => {
    count = count + 1;
    alert(count);
    console.log("apihit", count);
}
const doSomeMagic = (fn, d) => {
    let timer;
    return function () {
        clearInterval(timer);
      timer=  setTimeout(() => {
            fn();
        }, d)
    }
}

const betterFunction = doSomeMagic(getData, 500); //this is debounce function
