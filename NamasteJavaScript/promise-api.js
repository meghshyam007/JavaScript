// PROMISE API

// Promise.all();
// Promise.allSettled();
// Promise.race();
// Promise.any();

const p1 = new Promise((resolve, reject) => {
    //setTimeout(() => resolve("P1 Success"), 3000);
    setTimeout(() => reject("P1 Fail"), 3000);
});

const p2 = new Promise((resolve, reject) => {
    //setTimeout(() => resolve("P2 Success"), 5000);
    setTimeout(() => reject("P2 Fail"), 1000);
});

const p3 = new Promise((resolve, reject) => {
    //setTimeout(() => resolve("P3 Success"), 2000);
    setTimeout(() => reject("P3 Fail"), 1000);
});

// Promise.all();
Promise.all([p1, p2, p3]).then(res => {
    console.log(res);
})
.catch((err) =>{
    console.error(err);
});

// Promise.allSettled();
Promise.allSettled([p1, p2, p3]).then(res => {
    console.log(res);
})
.catch((err) =>{
    console.error(err);
});

// Promise.race();
Promise.race([p1, p2, p3]).then(res => {
    console.log(res);
})
.catch((err) =>{
    console.error(err);
});

// Promise.any();
Promise.any([p1, p2, p3]).then(res => {
    console.log(res);
})
.catch((err) =>{
    console.error(err);
    console.log(err.errors);
    console.log(err.errors[0]);
});