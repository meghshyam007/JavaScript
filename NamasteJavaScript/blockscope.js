
if(true){
    // compound statement
    var a = 10;
    console.log(a);
}

var a = 100;
let b = 200;
const c = 300;

{
    var a = 10;
    let b = 20;
    const c = 30;
    console.log("var a inside block = ",a);
    console.log("let b inside block = ",b);
    console.log("const c inside block = ",c);
}
console.log("var a outside block = ",a);
console.log("let b outside block = ",b);
console.log("const c outside block = ",c);

// var attached in global scope
// let and const have block scope
// shadowning

const d = 100;
function x(){
    const d = 30;
    console.log("d inside function",d);
}
x();
console.log("d outside function = ",d);

// shodowing let
let e = 10;
{
    let e = 100;
}

var f = 20;
{
    let f = 200;
}

// var is in its functional scope
let g = 30;
function gg(){
    var g = 300;
    console.log(g);
}
gg();

const h = 10;
{
    const h = 100;
    {
        const h = 1000;
        console.log(h); // 1000; nearest scope
    }
    console.log(h); // 100;
}