// Callback hell & Inversion of control

const cart = ["Shoes","pants","kurta"];

api.createOrder(cart, function(){
    api.proceedToPayment(function(){
        api.showOrderSummary(function(){
            api.updateWallete(); 
        }); 
    }); 
})

//0. Importance of callbacks
//1. Issues of callbacks
    //a. Callback Hell
    //b. Inversion of Control
