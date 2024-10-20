// Async Await

// What is async?
// What is await?
// How async await works behind the scene?
// Example of using async/await
// Error Handling
// Interviews
// Async await vs Promise.then/ .catch

// const p1 = new Promise(function(resolve, reject){
//     setTimeout(()=>{
//         resolve("Promise Resolved Value");
//     },5000)
// });

// const p2 = new Promise(function(resolve, rejcet){
//     setTimeout(()=>{
//         resolve("Promise Resolved Value 2");
//     },10000)
// });

// const p3 = new Promise(function(resolve, reject){
//     setTimeout(()=>{
//         resolve("Promise Resolved Value 3");
//     }, 7000)
// });

// await can only be used inside an async function
// async function handlePromise() {
//     const val = await p1;
//     // when use async await js engine wait for promise to resolve
//     console.log("Namaste Javascript");
//     console.log(val);

//     const val2 = await p2;
//     console.log("Namaste Javascript 2");
//     console.log(val2);

//     const val3 = await p3;
//     console.log("Namaste Javascript 3");
//     console.log(val3);
// }
// handlePromise();

// always returns a promise
// async function getData(){
//     return p;
// }
// const dataPromise = getData();
// dataPromise.then((res) => console.log(res)); 

// function getData(){
//     p.then((res)=> console.log(res));
//     console.log("Namaste Javascript");
// }
// getData();

const API_URL = "https://invalideurl";

async function handlePromise(){

    // try{
    //     const data = await fetch(API_URL);
    //     const jsonValue = await data.json();
    //     console.log(jsonValue);
    // } catch(err) {
    //     console.log(err);
    // }
    // fetch().then(res => res.json()).then(res => console.log());
    // fetch() => Response.json() => jsonValue
    
    const data = await fetch(API_URL);
    const jsonValue = await data.json();
    console.log(jsonValue);
}
handlePromise().catch(err => console.log(err));