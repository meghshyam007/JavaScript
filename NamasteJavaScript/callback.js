// What is callback function in javascript

setTimeout(function(){
    console.log("timer");
}, 5000);

function x(y){
    console.log("x");
    y();
}
x(function y(){
    console.log("y");
});

// Javascript is synchronous single threaded language

// Blocking the main thread

// Power of Callbacks ?

// Deep amount event listners

// Clousers Demo with event Listners

// Scope Demo with event Listners

// Garbage Collection & removeEventListners

function attachEventListner(){
    let count = 0;
        document.getElementById("clickMe").addEventListener("click", function xzy() {
        console.log("Button Clicked", ++count);
    });
}
attachEventListner();