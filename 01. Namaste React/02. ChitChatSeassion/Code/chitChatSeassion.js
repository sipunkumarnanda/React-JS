
// A - Arrow Functions

// How does JS know about the `function` keyword?
// Where do we get this `function` keyword from?

// Ans - It is built into JavaScript / the JavaScript engine.

// How does the JS engine execute the code?
// Whenever we write a JS program, how does it execute?
// It goes line by line, token by token.
// When it sees the `function` keyword, it expects a function name after it.

function x() {
const a = 10; // Local variable. It exists only for this function.
}

// When the browser reads the code line by line,
// it allocates memory and registers the function `x` in memory.
// Then it continues reading the remaining code.

var xyz = 30;

// This variable is also hoisted.

// In the 1st iteration, it goes to the memory space.
// Data structure used for storing objects and functions in JS - Memory Heap.

x();

// When we call this function,
// this is when a Function Execution Context is created.

// There can be anonymous functions as well.

var y = function () {
console.log("I am an anonymous function.");
}; // This is known as a Function Expression because the function is assigned to a variable.

// What is an expression in JS?
// An expression is something that evaluates to a value.

30; // Is this an expression or not?
// Yes, because it evaluates to 30.

xyz = 30; // Assignment expression. It evaluates to 30.

// -------------------------------------------------------------

// Arrow Functions - introduced in ES6.

// let, const, spread operator, promises,
// and many other cool features came in ES6.

const fn = () => {

}; // Here we don't have the `function` keyword.
// `=>` is also known as the Arrow Operator (sometimes called the Fat Arrow).

const obj = {
fn: function () {
console.log(this);
},


fn2: () => {
    console.log(this);
}


};

obj.fn();   // `this` refers to obj.
obj.fn2();  // `this` refers to the window object in the browser, and {} in Node.js.

// When you write `this` inside a normal function,
// it refers to the object that called the function.

// When you write `this` inside an arrow function,
// it refers to the surrounding (lexical) scope.
// In the browser, it is usually the window object.
// In Node.js, it is usually an empty object {} at the top level.

// Whenever you see `this`, it depends on how you are calling the function.

// obj.fn()
// Here, `this` refers to the `obj` object.

console.log("------------------");

function a() {
console.log(this); // Global object in Node.js, Window object in the browser.


function y() {
    console.log(this); // Global object in Node.js, Window object in the browser.

    function z() {
        console.log(this); // Global object in Node.js, Window object in the browser.
    }

    z();
}

y();

}

let a2 = () => {
console.log(this);
}; // {} in Node.js, Window object in the browser.

a();  // Global object in Node.js, Window object in the browser.
a2(); // {} in Node.js, Window object in the browser.

// Continue from 51 min...
