

/*

Parcel Do 
*
* created a server
* Hot Reloading  (Hot module replacement) HMR
* File watcher algorithm   which is written on C++
* Bundling
* MINIFY
* cleaning our code
* Dev and Production Build
* Super fast Build Algorithm 
* Image Optimization
* Caching while development
* Compression
* Compatable with older version of browser 
* HTTPS on dev -> npx parcel index.html --https
* PORT Number 
* consistant Hasing algorithm to ? 
* Zero config 
* Tree Shaking  -> removes unused code from the final bundle to reduce file size.
*
*
*  
* Transitive Dependencies -> Transitive dependencies are the dependencies of your dependencies
*
*
* https://parceljs.org/features/development/ (Read This Docs)
*
* https://browserslist.dev/
*/


import React from "react";
import ReactDOM from "react-dom/client";



const heading1 = React.createElement("h1", {
  id: "title",
  key: "h1"
}, "Heading 1! from parcel");

const heading2 = React.createElement("h2", {
  id: "title-2",
  key: "h2"
}, "Heading 2!");

const container = React.createElement("div", {
  id: "container",
  hello: "world"
}, [heading1, heading2]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);

console.log("Hello how are you my boys");