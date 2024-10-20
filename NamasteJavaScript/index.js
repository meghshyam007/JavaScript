
// 2. How JavaScript code Executed
console.log("// 2. How JavaScript code Executed");
    
    var n = 2;
    function square(num){
        var ans = num * num;
        return ans;
    }
    var square2 = square(n);
    var square4 = square(4);

    console.log(square2,square4);


//3. Hoisting in JavaScript (Variables & Functions)
console.log("//3. Hoisting in JavaScript (Variables & Functions)");
   
    getName();
    console.log(getName);
    console.log(x); 
    console.log(getNameArrowFunc);

    var x = 7;
    function getName(){
        console.log("Namaste Javascript");
    }
    // only proper function declaration will work in hoisting
    // in hoisting shows undefined / arrow func work like variable
    var getNameArrowFunc = () =>{
        console.log("Namaste JS");
    }

//4. How function works in JS
console.log("//4. How function works in JS");

var x = 1;
a(); // 10
b(); // 100
console.log(x); // 1

function a(){
    var x = 10;
    console.log(x);
}

function b(){
    var x = 100;
    console.log(x);
}

//5. Shortest JS Program - empty js file
console.log("//5. Shortest JS Program - empty js file");
    // program defined in an empty.js file


//6. Undefined vs not defined in JS
console.log("//6. Undefined vs not defined in JS");

    console.log(z);
    var z = 7;
    console.log(z);

    if(z === undefined){
        console.log("z is undefined");
    } else {
        console.log("z is not undefined");
    }

    var zz;
    console.log(zz);
    zz = 10;
    console.log(zz);
    zz = "Hellow World";
    console.log(zz);


