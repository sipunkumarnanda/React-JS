
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
fn : function () {
console.log(this);
},


fn2 : () => {
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


// -----------------------------------------------
// `this` depends on how a function is called.
// It changes based on whether the function is called
// as a regular function, an object method, or with
// `call`, `apply`, or `bind`.

const person1 = {
name: "Sipun",
};

const person2 = {
name: "Sona",
};

function x() {
console.log(this);
}

x(); // In a browser (non-strict mode), `this` is the `window` object.
x.call(this); // `this` is whatever was passed to `call` (here, the current `this`, which is `window` in the global scope).
x.call(person1); // `this` is `person1`.
x.call(person2); // `this` is `person2`.
x.call(obj); // `this` is `obj`.

// How you call a function determines the value of `this`.
// - A normal function call -> `this` is the global object (`window`) in non-strict mode.
// - Calling with `call`, `apply`, or `bind` -> `this` becomes the object you pass.

// -------------------------------------------------
// Calling a function as an object method

const person3 = {
name: "Sipun",
print: function () {
console.log(this);
},
};

person3.print(); // `this` is `person3`.

person3.print.call();
// `call()` was used without an argument.
// Therefore, `this` becomes the global object (`window`) in non-strict mode.

person3.print.call(this);
// `this` is whatever was passed to `call`.
// If `this` is `window` in the current scope, then `this` inside `print` is also `window`.

person3.print.call(person2);
// `this` is `person2`.

// The value of `this` depends on how `print` is invoked,
// not on where it is defined.

// -------------------------------------------------
// Arrow functions

const person4 = {
name: "Sipun",
print1: function () {
    console.log(this);
},

print2: () => {
    console.log(this);
},

};

person4.print1();
// `this` is `person4` because it is a normal method.

person4.print2();
// Arrow functions do not have their own `this`.
// They inherit `this` from the surrounding (lexical) scope.
// In the browser's global scope, this is usually `window`.

// -------------------------------------------------
// call, apply, and bind

// `call`, `apply`, and `bind` can change the `this`
// value of a normal function.

// `call(obj)`
// Whatever object you pass to `call` becomes the value
// of `this` inside the function.

// -------------------------------------------------

// globalThis.firstName = "Ankita";

const obj2 = {
firstName: "Akshya",
printNames: () => {
    console.log(this.firstName); // `this` refers to the surrounding lexical scope, not to `obj2`. If `globalThis.firstName` is not defined, this prints `undefined`.
},

printNames2: function () {
    console.log(this.firstName); // `this` refers to the object that called the method.
},

};

obj2.printNames(); // `undefined` (unless `globalThis.firstName` exists).

obj2.printNames2(); // "Akshya"

// -------------------------------------------------

const obj3 = {
firstName: "Simran",
};

// `call` with an arrow function
obj2.printNames.call(obj3); // Still `undefined`.
// `call` cannot change the `this` value of an arrow function.

// `call` with a normal function
obj2.printNames2.call(obj3); // "Simran"
// `call` changes `this` to `obj3`.
