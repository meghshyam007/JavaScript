// Trust Issues with setTimeout()

console.log("Start");

setTimeout(function cb(){
    console.log("Callback");
}, 0);

console.log("end");

// let startDate = new Date().getTime();
// let endDate = startDate;

// while(endDate < startDate + 10000){
//     endDate = new Date().getTime();
// }

// console.log("While Expires");