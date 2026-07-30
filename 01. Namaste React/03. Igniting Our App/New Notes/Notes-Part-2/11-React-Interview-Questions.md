
# 📘 Chapter 11: React Interview Questions (Beginner → Advanced) 🎯⚛️

---

# 11.1 📌 Introduction

React interviews usually test:

* React fundamentals ⚛️
* JavaScript concepts 🟨
* Browser knowledge 🌐
* Build tools like Parcel/Vite 📦
* Performance optimization ⚡
* Deployment knowledge 🚀
* Real-world architecture 🏗️

A good React developer should understand not only:

> "How to write React code"

but also:

> "How React works internally and how applications are built, optimized, and deployed."

---

# 🟢 Beginner Level React Questions

---

# Q1. What is React? ⚛️

### Answer:

React is a JavaScript library used to build user interfaces, especially single-page applications.

It allows developers to create reusable UI components.

Example:

```jsx
function Header(){

return (

<h1>
Welcome
</h1>

)

}
```

---

React application:

```
Components

     |
     |
     v

UI
```

---

# Q2. Why was React created?

### Answer:

React was created by Facebook to solve problems with large, frequently changing user interfaces.

Example:

Facebook had:

* News feed
* Likes
* Comments
* Chat

Updating these manually using DOM was difficult.

React introduced:

* Component architecture
* Virtual DOM
* Efficient updates

---

# Q3. Is React a framework or library?

### Answer:

React is a library.

Difference:

## Library

Provides a specific solution.

Example:

```
React
```

Handles:

```
UI Layer
```

---

## Framework

Provides complete application structure.

Examples:

```
Angular
Next.js
```

Handles:

```
Routing
State
Database
Structure
```

---

# Q4. What is JSX?

### Answer:

JSX is a syntax extension that allows writing HTML-like code inside JavaScript.

Example:

```jsx
const element = (

<h1>
Hello React
</h1>

);
```

---

Browser does not understand JSX.

It is converted by:

```
JSX

 |

 v

JavaScript

 |

 v

Browser Code
```

---

Example:

JSX:

```jsx
<h1>Hello</h1>
```

Converted:

```javascript
React.createElement(
"h1",
{},
"Hello"
)
```

---

# Q5. Can browsers understand JSX directly?

### Answer:

No.

Browsers understand:

* HTML
* CSS
* JavaScript

They do not understand:

```jsx
<Component />
```

A bundler/transpiler converts JSX.

Examples:

* Babel
* Parcel
* Vite

---

# Q6. What is a Component?

### Answer:

A component is a reusable independent piece of UI.

Example:

```jsx
function Button(){

return (

<button>
Click
</button>

)

}
```

---

Application:

```
App

 |
 +-- Header

 |
 +-- Button

 |
 +-- Footer
```

---

# Q7. What are functional components?

### Answer:

Components written using JavaScript functions.

Example:

```jsx
function Welcome(){

return (

<h1>
Hello
</h1>

)

}
```

---

Modern React mostly uses functional components.

---

# Q8. What is the Virtual DOM? 🧠

### Answer:

Virtual DOM is a lightweight JavaScript representation of the real DOM.

Real DOM:

```
Browser DOM
```

Virtual DOM:

```
JavaScript Object
```

---

Flow:

```
State Change

     |

     v

Virtual DOM Update

     |

     v

Compare Changes

     |

     v

Update Real DOM
```

---

# Q9. Why does React use Virtual DOM?

### Answer:

Direct DOM manipulation is expensive.

React minimizes DOM updates.

Example:

Old UI:

```
Hello
```

New UI:

```
Hello React
```

React updates only changed part.

---

# Q10. What is reconciliation?

### Answer:

Reconciliation is the process where React compares old Virtual DOM and new Virtual DOM.

Example:

Before:

```html
<h1>
Hello
</h1>
```

After:

```html
<h1>
Hello React
</h1>
```

React finds difference:

```
Text changed
```

and updates only that.

---

# Q11. What is ReactDOM?

### Answer:

ReactDOM connects React with the browser DOM.

Example:

```javascript
ReactDOM.createRoot(
document.getElementById("root")
)
.render(<App/>);
```

---

React:

Creates UI

ReactDOM:

Places UI into browser.

---

# Q12. Difference between React and ReactDOM?

| React              | ReactDOM           |
| ------------------ | ------------------ |
| Creates components | Renders components |
| UI logic           | Browser connection |
| createElement      | createRoot         |

---

# 🟡 Intermediate Questions

---

# Q13. What is State?

### Answer:

State is data managed inside a component that can change over time.

Example:

Counter:

```jsx
const [count,setCount]
=
useState(0);
```

---

State change:

```
count = 0

button click

count = 1
```

React updates UI.

---

# Q14. What is Props?

### Answer:

Props are data passed from parent component to child component.

Example:

Parent:

```jsx
<User name="John"/>
```

Child:

```jsx
function User(props){

return (

<h1>
{props.name}
</h1>

)

}
```

---

Flow:

```
Parent

 |

 v

Child
```

---

# Q15. Difference between Props and State?

| Props              | State                    |
| ------------------ | ------------------------ |
| Passed from parent | Managed inside component |
| Read-only          | Can change               |
| External data      | Internal data            |

---

# Q16. What is useState?

### Answer:

`useState` is a React hook used to create state.

Example:

```javascript
const [name,setName]
=
useState("");
```

---

# Q17. What are Hooks?

### Answer:

Hooks are functions that allow functional components to use React features.

Examples:

```
useState
useEffect
useMemo
useCallback
useContext
```

---

# Q18. What is useEffect?

### Answer:

useEffect performs side effects.

Examples:

* API calls
* Timers
* Subscriptions

Example:

```javascript
useEffect(()=>{

fetchData();

},[]);
```

---

# Q19. What does dependency array do?

Example:

```javascript
useEffect(()=>{


},[]);
```

Empty array:

Runs once.

---

```javascript
useEffect(()=>{


},[count]);
```

Runs when:

```
count changes
```

---

# Q20. Why do we use keys in React lists?

Example:

```jsx
users.map(user=>(

<User key={user.id}/>

))
```

---

Key helps React identify elements.

Without key:

```
React cannot track items efficiently
```

---

# Q21. Why should keys be unique?

Because React uses keys for comparison.

Example:

Wrong:

```jsx
key="1"
```

for every item.

Correct:

```jsx
key={user.id}
```

---

# Q22. What is conditional rendering?

Showing UI based on condition.

Example:

```jsx
{
isLoggedIn ?

<Home/>

:

<Login/>

}
```

---

# Q23. What is React Router?

### Answer:

React Router provides navigation in React SPA applications.

Example:

```
/home

/products

/cart
```

---

# Q24. Difference between Link and anchor tag?

## Anchor:

```html
<a href="/about">
```

Causes:

```
Page reload
```

---

## Link:

```jsx
<Link to="/about">
```

Causes:

```
Client-side navigation
```

---

# 🟠 Advanced Questions

---

# Q25. What happens when state changes?

Flow:

```
setState()

     |

     v

React creates new Virtual DOM

     |

     v

Diffing

     |

     v

Update Real DOM
```

---

# Q26. What is React.memo?

### Answer:

React.memo prevents unnecessary re-rendering.

Example:

```javascript
export default React.memo(Button);
```

---

Before:

```
Parent update

     |

     v

Child renders
```

After:

```
Parent update

     |

     v

Child checks props

     |

     v

No change = No render
```

---

# Q27. What is useMemo?

Used to memoize expensive calculations.

Example:

```javascript
const result =
useMemo(()=>{

calculate();

},[value]);
```

---

# Q28. What is useCallback?

Stores function reference.

Example:

```javascript
const handleClick =
useCallback(()=>{

},[]);
```

---

Useful when passing functions to optimized child components.

---

# Q29. What is lazy loading?

Loading components only when needed.

Example:

```javascript
const Admin =
lazy(()=>import("./Admin"));
```

---

Benefit:

Smaller initial bundle.

---

# Q30. What is code splitting?

Breaking large JavaScript bundle into smaller chunks.

Example:

Before:

```
main.js

500MB
```

After:

```
home.js

cart.js

payment.js
```

---

# Q31. What is bundling?

Combining multiple files into optimized files.

Example:

Before:

```
App.js

Header.js

Footer.js
```

After:

```
main.js
```

---

# Q32. What does Parcel do?

Parcel provides:

✅ Bundling

✅ HMR

✅ Minification

✅ Tree shaking

✅ Image optimization

✅ Code splitting

✅ Compression

---

# Q33. Why don't we commit node_modules?

Answer:

Because dependencies can be recreated.

Command:

```bash
npm install
```

uses:

```
package.json

package-lock.json
```

---

# Q34. Difference between package.json and package-lock.json?

## package.json

Contains:

```
Required dependency ranges
```

Example:

```json
"react":"^18.2.0"
```

---

## package-lock.json

Contains:

```
Exact installed versions
```

Example:

```json
"react":"18.2.0"
```

---

# Q35. Why do we use ^ in package.json?

Example:

```json
"react":"^18.2.0"
```

Allows:

```
18.2.0

to

18.x.x
```

Minor and patch updates.

---

# Q36. What is dist folder?

Answer:

Production-ready static files.

Contains:

```
index.html

JS

CSS

Assets
```

---

# Q37. Does production server need Node.js?

For React frontend:

No.

Architecture:

```
Browser

 |

CDN/Nginx

 |

dist files
```

---

# Q38. What is CI/CD?

Answer:

Automation pipeline that:

```
Code Push

 |

Test

 |

Build

 |

Deploy
```

---

# Q39. Explain React deployment flow.

Answer:

```
Developer

 |

GitHub

 |

CI/CD

 |

npm run build

 |

dist

 |

CDN

 |

Users
```

---

# Q40. Why use image CDN?

Because large images increase loading time.

Better:

```
React App

 |

Image URL

 |

Image CDN
```

---

# 🔴 Senior Level Questions

---

# Q41. Explain React rendering process.

Answer:

```
State Change

 |

Render Phase

 |

Virtual DOM Creation

 |

Reconciliation

 |

Commit Phase

 |

DOM Update
```

---

# Q42. What causes component re-render?

Examples:

* State change
* Parent re-render
* Context update
* Props change

---

# Q43. How to optimize React application?

Techniques:

✅ React.memo

✅ useMemo

✅ useCallback

✅ Lazy loading

✅ Code splitting

✅ Image optimization

✅ Avoid unnecessary state

---

# Q44. What is tree shaking?

Answer:

Removing unused code during production build.

Example:

Unused:

```javascript
unusedFunction()
```

removed from bundle.

---

# Q45. Explain complete React production architecture.

Answer:

```
Developer

 |

GitHub

 |

CI/CD

 |

Build

 |

dist

 |

CDN

 |

Browser

 |

React Application
```

---

# 🎯 Final Interview Revision

Remember this complete picture:

```
React Code
    |
    |
    v
Components
    |
    |
    v
Bundle Tool (Parcel/Vite)
    |
    |
    v
Production Build
    |
    |
    v
dist Folder
    |
    |
    v
CI/CD
    |
    |
    v
CDN/Server
    |
    |
    v
Users
```

---

# ⭐ Golden Rule

> A strong React developer understands not only components and hooks, but also how code is bundled, optimized, deployed, and maintained in production.

---