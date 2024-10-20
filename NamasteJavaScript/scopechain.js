//7. Scope chain

function a(){
    var b = 10;
    c();
    function c(){
        console.log(b);
    }
}

a();


// lexical environment is the local memory along with the lexical environment of its parent
// here we can say c() function is lexicaly inside a() function