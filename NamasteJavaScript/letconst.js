//8. let & const in JS , Temporal dead zone

console.log(a); // ReferenceError: Cannot access 'a' before initialization
// a is in temporal dead zone

let a = 10;
console.log(a);

var b = 100;

console.log(y); // ReferenceError: y is not defined
// y is not in local memory

// for let before initialization there is different momory space than global
// window.a shows undefined // this.a shows undefined  let variable not stored their at global
// const is more strict than let

// const c;
// c = 1000;
// must declair with const in same line;
// browser will through syntax error: Missing initializer in const declaration

const c = 1000;

c = 100;
// this will be the TypeError: Assignment to constant variable