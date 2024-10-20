// Map, Filter, Reduce

const arr = [5, 1, 3, 2, 6]

// Double - [10, 2, 6, 4, 12]

// Triple - [15, 3, 9, 6, 18]

// Binary - ["101", "1", "11", "10", "110"]

// use map() to tranform array

function double(x){
    return x * 2;
}

function triple(x){
    return x * 3;
}

function binary(x){
    return x.toString(2);
}

//const output = arr.map(binary);
const output = arr.map((x) => x.toString(2));

console.log(output);

// Filter odd values

function isOdd(x){
    return x % 2;
}
function isEven(x){
    return x % 2 === 0;
}
function greaterThan(x){
    return x > 4;
}

//const filterOutput = arr.filter(greaterThan);
const filterOutput = arr.filter((x) => x > 4);
console.log(filterOutput);

// Reduce 

function findSum(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    return sum;
}
console.log(findSum(arr)); // 17

const reduceSum = arr.reduce(function(acc, curr){
    acc = acc + curr;
    return acc;
});
console.log(reduceSum); // 17

function findMax(arr){
    let max = 0;
    for(let i = 0; i <= arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}
console.log(findMax(arr)); // 6

const reduceMax = arr.reduce(function(max, curr){
    if(curr > max){
        max = curr;
    }
    return max;
}, 0)
console.log(reduceMax);

const users = [
    {firstName: "Akshay", lastName: "Saini", age: 26},
    {firstName: "Donald", lastName: "Trump", age: 75},
    {firstName: "Elon", lastName: "Musk", age: 50},
    {firstName: "Deepika", lastName: "Padukon", age: 26}
];

// list of full name
// ["Akshay Saini", "Donald Trump", "Elon Musk", "Deepika Padukon"]

const outputUsers = users.map((x) => x.firstName +" "+ x.lastName);
console.log(outputUsers);

// acc ={26 : 2, 75: 1, 50: 1}

const outputReduce = users.reduce(function (acc, curr) {
    
    if(acc[curr.age]){
        acc[curr.age] = ++acc[curr.age];
    } else {
        acc[curr.age] = 1;
    }
    return acc;
}, {});
console.log(outputReduce);

// age less than 30

// const outputFilter = users.filter(function(x){
//     return x.age < 30;
// }).map(function(x){
//    return x.firstName;
// });

const outputFilter = users.filter((x) => x.age<30).map((x) => x.firstName);
console.log(outputFilter);