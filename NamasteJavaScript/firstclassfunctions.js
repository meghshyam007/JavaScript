// Function statement- memory created Hoisting done
// Function Declaration
a();
function a(){
    console.log("a called");
}

// Function Expression - memory created for variable which is undefined first - hoisting not allowed
//(b())- error
var b = function(){
    console.log("b called");
}

// Function Declaration
// function statement same as function declaration


// Anonymous Function

// -- Function used as values


// Named Function Expression
var c = function xyz(){
    console.log(xyz);
}
c();
// xyz(); error not defined

// Diference between Parametere & Arguments ?

var d = function(param1, param2){// parameters
    console.log(param1 * param2);
}
d(7, 5);// arguments

// First Class Functions
// the ability to pass function as an argument
// Ability to used like a value
// First class citizens

var e = function(param1, param2){ // parameters
    console.log(param1, param2);
}
function xyz(){

}
e(function(){

}, xyz);

// Arrow Functions