
let heading1 = React.createElement("h1", {
    className : "heading",
    key : "heading-1"
}, "Hello World From JS Heading-1")

let heading2 = React.createElement("h2", {
    className : "heading",
    key : "heading-2"
}, "Hello World From JS Heading-2")

let conatiner = React.createElement("div", {
    className : "conatiner"
},[heading1, heading2])


let root = ReactDOM.createRoot(document.getElementById("root"))
root.render(conatiner)