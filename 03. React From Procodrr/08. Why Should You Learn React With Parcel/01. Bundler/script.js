
import { user } from '../01. Bundler/data.js'
import React from 'react';
import ReactDOM from 'react-dom/client'

console.log("Hello");
console.log(user.name);

// React code 
console.log(React);
const h1 = <h1>Hello iam from script.js</h1>

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(h1)