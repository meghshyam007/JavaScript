//Promises

const cart = ["Shoes", "Pants", "Kurta"];



// createOrder(cart, function(orderId){

//     proceedToPayment(orderId, function(paymentInfo){
       
//         showOrderSammary(paymentInfo, function(){

//             updateWalleteBalance();

//         });

//     });

// }); 

// createOrder(cart).then(function(orderId){
//     return proceedToPayment(orderId);
// })
// .then(function(paymentInfo){
//     return showOrderSammary(paymentInfo);  
// })
// .then(function(paymentInfo){
//     return updateWalleteBalance(paymentInfo);
// });

function createOrder(cart){
    const pr = new Promise(function(resolve, reject){

    });

    return pr;
}



const promise = createOrder(cart);

promise.then(function(orderId){
    proceedToPayment(orderId);
});

createOrder(cart)
    .then((orderId) => proceedToPayment(orderId))
    .then((paymentInfo) => showOrderSammary(paymentInfo))
    .then((paymentInfo) => updateWalleteBalance(paymentInfo));





// const GITHUB_API = "http://api.github.com/users/akshaymarch7";

// const user = fetch(GITHUB_API);

// console.log(user);