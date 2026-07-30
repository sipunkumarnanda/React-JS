
# 📘 Chapter 5: CommonJS vs ES Modules — Complete Deep Dive 📦

---

# 5.1 📌 Introduction: Why Do We Need Modules?

As applications grow, JavaScript files become large.

Imagine a real-world React application:

```text
Flipkart Frontend

src/

├── App.js
├── Header.js
├── Footer.js
├── ProductCard.js
├── Cart.js
├── Payment.js
├── Utils.js
└── API.js
```

Keeping everything in one file is impossible.

We divide code into smaller files called **modules**.

---

# 5.2 🧩 What is a Module?

A module is a reusable piece of code that can:

* Export functionality
* Import functionality from another file
* Maintain its own scope

Example:

`math.js`

```javascript
function add(a, b) {
    return a + b;
}

export default add;
```

Another file:

`App.js`

```javascript
import add from "./math.js";

console.log(add(2,3));
```

Here:

```text
math.js

exports add()

        |
        |
        v

App.js

imports add()
```

---

# 5.3 📜 JavaScript Before Modules

Originally JavaScript had no module system.

Example:

```html
<script src="a.js"></script>
<script src="b.js"></script>
<script src="app.js"></script>
```

All files shared the same global scope.

---

Example:

`a.js`

```javascript
var name = "React";
```

`b.js`

```javascript
console.log(name);
```

It works because everything is global.

---

## Problems ❌

### 1. Global namespace pollution

Many variables can conflict.

Example:

File 1:

```javascript
var user = "John";
```

File 2:

```javascript
var user = "Alex";
```

Now:

```text
Which user variable?
```

---

### 2. No dependency management

A file does not clearly tell:

"I need this code from another file."

---

### 3. Difficult maintenance

Large applications become impossible to manage.

---

# 5.4 🚀 Module Systems Were Introduced

Two major module systems:

1. CommonJS (CJS)
2. ES Modules (ESM)

---

# 📦 Part 1: CommonJS

---

# 5.5 What is CommonJS?

CommonJS is a module system created mainly for Node.js.

It became popular because browsers initially did not support modules.

Used in:

* Node.js applications
* Older JavaScript projects

---

# 5.6 CommonJS Export

Syntax:

```javascript
module.exports
```

Example:

`math.js`

```javascript
function add(a,b){

    return a+b;

}

module.exports = add;
```

---

# 5.7 CommonJS Import

Syntax:

```javascript
require()
```

Example:

`app.js`

```javascript
const add = require("./math");

console.log(add(5,10));
```

---

Flow:

```text
math.js

module.exports
       |
       |
       v

app.js

require()
```

---

# 5.8 Exporting Multiple Values in CommonJS

Example:

`math.js`

```javascript
function add(a,b){
    return a+b;
}


function subtract(a,b){
    return a-b;
}


module.exports = {
    add,
    subtract
};
```

---

Import:

```javascript
const math = require("./math");


console.log(math.add(2,3));

console.log(math.subtract(5,2));
```

---

# 5.9 How CommonJS Works Internally

When Node.js sees:

```javascript
const React = require("react");
```

Node does:

```text
require()

    |
    |
    v

Find module

    |
    |
    v

Load file

    |
    |
    v

Execute code

    |
    |
    v

Return module.exports
```

---

# 5.10 CommonJS is Synchronous

Example:

```javascript
const file = require("./largeFile");
```

Node loads it immediately.

Meaning:

```text
Program execution

      |
      |
      v

Wait for module loading

      |
      |
      v

Continue execution
```

This works well in backend environments.

---

# 📦 Part 2: ES Modules

---

# 5.11 What are ES Modules?

ES Modules (ESM) are the official JavaScript module standard.

Introduced in:

```text
ECMAScript 2015 (ES6)
```

Modern JavaScript uses ESM.

Used in:

* React
* Vue
* Angular
* Modern Node.js
* Browser JavaScript

---

# 5.12 ES Module Export

Two types:

1. Named export
2. Default export

---

# 5.13 Named Export

Example:

`math.js`

```javascript
export function add(a,b){

    return a+b;

}


export function subtract(a,b){

    return a-b;

}
```

---

Import:

```javascript
import {add, subtract} from "./math.js";
```

---

Important:

Names must match.

Example:

Export:

```javascript
export function add()
```

Import:

```javascript
import {add}
```

---

# 5.14 Default Export

Example:

`math.js`

```javascript
function add(a,b){

return a+b;

}


export default add;
```

---

Import:

```javascript
import addition from "./math.js";
```

Notice:

The name can change.

Export:

```javascript
add
```

Import:

```javascript
addition
```

Works.

---

# 5.15 Multiple Exports Example

```javascript
export const username = "John";


export function login(){

}
```

Import:

```javascript
import {
 username,
 login
}
from "./user.js";
```

---

# 5.16 CommonJS vs ES Modules Comparison

| CommonJS             | ES Modules                   |
| -------------------- | ---------------------------- |
| Node.js older system | Official JavaScript standard |
| require()            | import                       |
| module.exports       | export                       |
| Synchronous loading  | Static structure             |
| Runtime loading      | Compile-time analysis        |
| Mostly backend       | Frontend + backend           |
| Older projects       | Modern projects              |

---

# 5.17 Why React Uses ES Modules?

React applications use:

```javascript
import React from "react";
import ReactDOM from "react-dom/client";
```

because modern bundlers understand ES Modules.

Examples:

* Parcel
* Vite
* Webpack

They can perform optimizations:

* Tree shaking
* Code splitting
* Dead code elimination

---

# 5.18 Why Browser Gives Import Error?

Example:

HTML:

```html
<script src="App.js"></script>
```

App.js:

```javascript
import React from "react";
```

Browser error:

```
Cannot use import statement outside a module
```

---

Why?

Because normal scripts do not support imports.

---

Solution:

```html
<script 
type="module"
src="App.js">
</script>
```

Now browser understands:

```javascript
import
export
```

---

# 5.19 package.json `"type"` Field

Example:

```json
{
"type":"module"
}
```

This tells Node.js:

"Treat `.js` files as ES Modules."

---

Example:

package.json:

```json
{
"type":"module"
}
```

Now:

```javascript
import express from "express";
```

works.

---

Without it:

Node assumes:

```javascript
require()
module.exports
```

---

# 5.20 CommonJS in package.json

Example:

```json
{
"type":"commonjs"
}
```

Now Node expects:

```javascript
const express = require("express");
```

---

# 5.21 Node.js Modern Support

Modern Node supports both:

CommonJS:

```javascript
const fs = require("fs");
```

and

ES Modules:

```javascript
import fs from "fs";
```

---

# 5.22 How Parcel Handles Modules

Your code:

```javascript
import React from "react";
```

↓

Parcel analyzes dependency:

```text
App.js

 |
 |
 v

React Package
```

↓

Bundles:

```text
dist/

main.js
```

Browser receives optimized code.

---

# 5.23 Static Analysis Advantage of ES Modules

ES Modules are predictable.

Example:

```javascript
import {add} from "./math.js";
```

Parcel knows:

"Only add is required."

So it removes unused:

```javascript
subtract()
```

This enables:

🌳 Tree shaking

---

CommonJS:

```javascript
const math = require("./math");
```

Harder to analyze because loading happens dynamically.

---

# 5.24 Real React Example

Before modules:

```javascript
// everything in App.js

function Header(){}
function Footer(){}
function Button(){}
```

---

After modules:

```text
src/

├── App.js
├── Header.js
├── Footer.js
└── Button.js
```

---

Header.js:

```javascript
function Header(){

return <h1>Header</h1>;

}

export default Header;
```

---

App.js:

```javascript
import Header from "./Header";

function App(){

return <Header/>;

}

export default App;
```

---

# 5.25 🎯 Interview Questions

---

## Q1. Difference between CommonJS and ES Modules?

Answer:

> CommonJS is the older Node.js module system using require and module.exports, while ES Modules are the official JavaScript standard using import and export.

---

## Q2. Why are ES Modules preferred in React?

Answer:

> ES Modules allow bundlers to perform optimizations like tree shaking, code splitting, and static analysis.

---

## Q3. What does `"type":"module"` do?

Answer:

> It tells Node.js to treat JavaScript files as ES Modules instead of CommonJS.

---

## Q4. Why does browser need type="module"?

Answer:

> Normal browser scripts do not support import/export syntax. type="module" enables ES Module support.

---

# 5.26 🧠 Chapter Summary

Remember:

```text
CommonJS

require()
module.exports

Mostly Node.js


        VS


ES Modules

import
export

Modern JavaScript
React
Browser
Node.js
```

---

# ⭐ Golden Rule

> CommonJS was built for Node.js.
> ES Modules are the modern JavaScript standard used by today's React ecosystem.

---
