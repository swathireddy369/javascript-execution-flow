let arr = [{first: "Swathi", lastName: "Amaravadi", age: "27"},
{ first: "Rajesh", lastName: "kodakandla", age: "33" },
{ first: "gopireddy", lastName: "Amaravadi", age: "25" },
{ first: "Anand", lastName: "yannamaneni", age: "27" }]

// [{"swathi Amaravadi"}]
// as we need to get transformation of input for all input objects so in that case should use Map

let output1 = arr.map((x) => x.first + " " + x.lastName);
console.log(output1);


//here we need to get a output of object that contains all age entries in the array and frequencyies of it so as we are not transforming input array and not filtering from that juist forming new output from given input

let output2 = arr.reduce((acc, curr) => {
    if (acc[curr.age]) {
        acc[curr.age]++;
    } else {
        acc[curr.age] = 1;
    }
    return acc;
}, {});
console.log(output2);

//here need to get only lastnames of whose age is greater than 30
let output3 = arr.filter((x) => x.age > 30).map((x) => x.lastName);
console.log(output3);


let output = arr.reduce(function (acc, curr) {
    if (curr.age > 30) {
        acc.push(curr.lastName);
    }
    return acc;
}, [])
console.log(output);
