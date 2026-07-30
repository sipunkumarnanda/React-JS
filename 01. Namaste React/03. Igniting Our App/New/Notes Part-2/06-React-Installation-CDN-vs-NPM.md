
# 📘 Chapter 6: React Installation — CDN vs npm Package (Complete Deep Dive) ⚛️

---

# 6.1 📌 Introduction

Before building React applications, we need to bring React into our project.

There are two common ways:

1. 🌐 Using CDN
2. 📦 Installing React using npm

Example:

CDN approach:

```html
<script src="https://unpkg.com/react@18/umd/react.development.js"></script>
```

npm approach:

```bash
npm install react
npm install react-dom
```

Modern React applications use the **npm approach**.

---

# 6.2 ⚛️ What is React?

React is a JavaScript library used for building user interfaces.

React helps developers create:

* Reusable components
* Dynamic interfaces
* Single Page Applications (SPA)
* Efficient UI updates

Example:

Without React:

```javascript
document.getElementById("button")
```

Manually updating DOM.

With React:

```jsx
<Button />
```

React manages UI updates.

---

# 6.3 🌐 Method 1: Using React Through CDN

## What is CDN?

CDN means:

> Content Delivery Network

A CDN is a network of servers distributed around the world that delivers files quickly.

Example:

```text
User in India

      |
      |
      v

Nearest CDN Server

      |
      |
      v

React Library
```

---

Example:

```html
<!DOCTYPE html>
<html>

<head>

</head>

<body>

<div id="root"></div>


<script 
src="https://unpkg.com/react@18/umd/react.development.js">
</script>


<script 
src="https://unpkg.com/react-dom@18/umd/react-dom.development.js">
</script>


</body>

</html>
```

Now React is available globally.

---

# 6.4 How CDN React Works Internally?

When browser reads:

```html
<script src="react.js"></script>
```

Browser does:

```text
HTML
 |
 |
 v

Find script URL

 |
 |
 v

Network Request

 |
 |
 v

CDN Server

 |
 |
 v

Download React

 |
 |
 v

Execute React Code
```

---

After loading:

Browser gets:

```javascript
window.React
```

and:

```javascript
window.ReactDOM
```

Now you can write:

```javascript
React.createElement()
```

---

# 6.5 Example Using CDN

index.html:

```html
<div id="root"></div>


<script src="react.js"></script>
<script src="react-dom.js"></script>
<script src="App.js"></script>
```

App.js:

```javascript
const heading =
React.createElement(
    "h1",
    {},
    "Hello React"
);


const root =
ReactDOM.createRoot(
    document.getElementById("root")
);


root.render(heading);
```

Output:

```
Hello React
```

---

# 6.6 ❌ Problems With CDN Approach

CDN works, but it is not preferred for professional applications.

---

# Problem 1: Additional Network Requests 🌐

Example:

Your HTML:

```html
<script src="react.js"></script>

<script src="react-dom.js"></script>

<script src="App.js"></script>
```

Browser must download:

```text
HTML

 |
 |
 +---- React
 |
 +---- ReactDOM
 |
 +---- App.js
```

Every external file is another network request.

---

# Problem 2: No Bundling 📦

Your application:

```text
src/

App.js
Header.js
Footer.js
Button.js
Utils.js
```

CDN does not combine them.

You need to manually manage files.

---

# Problem 3: Dependency Management Problem ⚠️

CDN:

```html
react@18
```

Someone changes:

```html
react@19
```

Your application may break.

---

npm:

```json
{
"react":"18.3.1"
}
```

Version is controlled.

---

# Problem 4: No Build Optimization 🚫

CDN does not automatically provide:

* Tree shaking
* Minification
* Code splitting
* Lazy loading
* Bundle optimization

---

# 6.7 📦 Method 2: Installing React Using npm

Modern React applications use npm.

Install:

```bash
npm install react
```

Install ReactDOM:

```bash
npm install react-dom
```

---

After installation:

```text
my-react-app/

├── node_modules/
│
│   ├── react/
│   │
│   └── react-dom/
│
├── package.json
│
└── package-lock.json
```

---

# 6.8 What Happens When We Run npm install react?

Command:

```bash
npm install react
```

Flow:

```text
Developer

   |
   |
   v

npm install react

   |
   |
   v

npm Registry

   |
   |
   v

Download React

   |
   |
   v

node_modules/react

   |
   |
   v

Update package.json

   |
   |
   v

Update package-lock.json
```

---

# 6.9 package.json After React Installation

Before:

```json
{
"dependencies": {}
}
```

After:

```json
{
"dependencies": {

"react":"^19.0.0"

}
}
```

---

# 6.10 Using React From npm

Now instead of:

```javascript
React.createElement()
```

from global CDN,

we import:

```javascript
import React from "react";
```

Example:

```javascript
import React from "react";


const heading =
React.createElement(
"h1",
{},
"Hello React"
);
```

---

React is now:

```text
node_modules

      |
      |
      v

React Package

      |
      |
      v

Imported into App.js
```

---

# 6.11 ReactDOM Installation

React creates UI elements.

ReactDOM puts them into the browser DOM.

Install:

```bash
npm install react-dom
```

---

Example:

React:

```javascript
const element =
React.createElement(
"h1",
{},
"Hello"
);
```

Creates a React element.

---

ReactDOM:

```javascript
ReactDOM.createRoot(
document.getElementById("root")
)
.render(element);
```

Displays it.

---

# 6.12 React vs ReactDOM

Many beginners confuse them.

---

## React

Responsible for:

* Creating components
* Creating elements
* Component logic

Example:

```javascript
React.createElement()
```

---

## ReactDOM

Responsible for:

* Rendering React into browser DOM

Example:

```javascript
ReactDOM.createRoot()
```

---

Diagram:

```
React

Creates UI description

        |
        |
        v

ReactDOM

Displays UI in browser
```

---

# 6.13 Why Do We Need Bundlers?

When using npm:

Example:

App.js:

```javascript
import React from "react";
import Header from "./Header";
import Button from "./Button";
```

Browser cannot directly understand all dependencies.

Bundler:

```text
App.js

 |
 |
 v

Parcel

 |
 |
 v

main.js

 |
 |
 v

Browser
```

---

# 6.14 Import Error With Browser Scripts

Example:

App.js:

```javascript
import React from "react";
```

HTML:

```html
<script src="App.js"></script>
```

Error:

```
Browser scripts cannot have imports or exports
```

---

Why?

Because normal scripts:

```html
<script>
```

do not support ES Modules.

---

# Solution:

Use:

```html
<script 
type="module"
src="App.js">
</script>
```

---

Now:

```javascript
import React from "react";
```

works.

---

# 6.15 React Development Flow With npm

Complete flow:

```
Developer writes React code

        |
        |
        v

npm packages

        |
        |
        v

node_modules

        |
        |
        v

Parcel/Vite

        |
        |
        v

Bundle

        |
        |
        v

dist folder

        |
        |
        v

Browser
```

---

# 6.16 CDN vs npm Comparison

| CDN                           | npm                      |
| ----------------------------- | ------------------------ |
| Download from external server | Installed inside project |
| Manual script tags            | import/export            |
| No bundling                   | Works with bundlers      |
| Less control                  | Version controlled       |
| Good for learning             | Used in production       |
| No optimization               | Full optimization        |

---

# 6.17 Real Company Example

Imagine Flipkart frontend.

Thousands of files:

```
src/

components/
pages/
utils/
hooks/
services/
```

They need:

* Dependency management
* Optimization
* Code splitting
* Version locking

CDN cannot handle this efficiently.

They use:

```
npm
+
bundler
+
CI/CD
```

---

# 6.18 🎯 Interview Questions

---

## Q1. Why don't we use CDN for React in production?

Answer:

> CDN works for simple projects, but production applications require dependency management, bundling, optimization, version control, and build processes.

---

## Q2. Difference between React and ReactDOM?

Answer:

> React is responsible for creating UI elements and components, while ReactDOM renders those elements into the browser DOM.

---

## Q3. Why do we install react-dom separately?

Answer:

> React handles UI creation, while ReactDOM provides browser-specific rendering APIs.

---

## Q4. What happens after npm install react?

Answer:

> React is downloaded into node_modules, package.json is updated, and package-lock.json stores the exact installed version.

---

# 6.19 🧠 Chapter Summary

Remember:

```
CDN

React
 |
 |
 v

Browser directly


npm

React

 |
 |
 v

node_modules

 |
 |
 v

Bundler

 |
 |
 v

dist

 |
 |
 v

Browser
```

---

# ⭐ Golden Rule

> CDN brings React directly to the browser.
> npm brings React into your project so build tools can optimize your application.

---
