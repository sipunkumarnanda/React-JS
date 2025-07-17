
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react';

function MyApp(){
    return (
        <h1>Custom App | chai aur code</h1>
    )
}

// const ReactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "Click me to visit google",
// };


const anotherUser = "chai aur react"

const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit google</a>
)


const reactElement = React.createElement("a", {
    href : "https://google.com",
    target : "_blank"
}, "Visit Google ", anotherUser)

console.log(reactElement);

/* 
const OwnReactElement = {
     $$typeof: Symbol.for("react.element"),
    type : "a",
    key: null,
    props: {
        href: "https://google.com",
        target: "_blank",
        children: [
            "Visit Google ",
            "chai aur react"
        ]
    },
    _owner: null,
    _store: {}
}
//   React intentionally blocks rendering manually created React elements that don't match the exact version it expects
*/

createRoot(document.getElementById('root')).render(
    reactElement
)