

// at the global level this points to window object
// window is actualy global object which is created along with the global execution context
// whenever any javascript program run a global object is created, global execution context is created and along with that exectution context a this variable is created
// simply anything which is not inside function is global space

var a = 10;

function b(){
    var x = 10;
}

console.log(a); //10
console.log(window.a); //10
console.log(this.a); //10
// all are reffering to same space in memory

console.log(x);