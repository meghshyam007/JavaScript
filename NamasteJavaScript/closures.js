// 10. Clousers

// function z(){
//     var b = 900;
//     function x(){
//         var a = 7;
//         function y(){
//             console.log(a,b);
//         }
//         y();
//     }
//     x();
// }
// z();

// var z = x();
// console.log(z);
//---
//z();// 7


// function along with its lexical scope bundle together forms a clouser

// uses of clousers:
// 1. Module design pattern
// 2. Currying
// 3. Functions like once
// 4. memoize
// 5. mentaining state in async world
// 6. setTimeouts
// 7. Iterators
// and many more..

// 11. SetTimeouts + Clouser Interview Question

// function x(){
//     var i = 1;
//     setTimeout(function (){
//         console.log(i);
//     }, 3000);
//     console.log("Namaste Javascript");
// }
//x();


// function xx(){
//     for(let i=1; i<=5; i++){
//         setTimeout(function(){
//             console.log(i);
//         }, i * 1000);
//     }
// }
// xx();



// function aa(){
//     for(var i = 1; i <= 5 ; i++){
//         function close(i){
//             setTimeout(function(){
//                 console.log(i);
//             }, i * 1000);
//         }
//         close(i);
//     }
//    console.log("Namaste JavaScript");
// }
// aa();

// 12. Clouser Interview

function outest(){
    var c = 20;
    function outer(b){
        //var a = 10;
        function inner(){
            console.log(a, b, c);
        }
        let a = 10;
        return inner;
    }
    return outer;
}

// let a = 100;
var close = (outest())("hello world");
close();


function counter(){
    var count = 0;
    return function incrementCounter(){
        count++;
        console.log(count);
    }
}

var counter1 = counter();
counter1();
counter1();
counter1();

var counter2 = counter();
counter2();
counter2();
counter2();


function NewCounter(){
    var count = 0;
    this.incrementNewCounter = function (){
        count++;
        console.log(count);
    }
    this.decrementNewCounter = function(){
        count--;
        console.log(count);
    }
}

var NewCounter1 = new NewCounter();

NewCounter1.incrementNewCounter();
NewCounter1.incrementNewCounter();
NewCounter1.decrementNewCounter();


function a(){
    var x = 0; z = 1; // z is garbage collected will be no longer in memory
    return function b(){
        console.log(x);
    }
}

var y = a();
//...
y();