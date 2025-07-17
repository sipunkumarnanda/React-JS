
let heading1 = React.createElement("h1", {
    className : "heading",
    key : "heading-1"
}, "Hello World From JS Heading-1")

let heading2 = React.createElement("h2", {
    className : "heading",
    key : "heading-2"
}, "Hello World From JS Heading-2")

// let h2 = React.createElement("h2", {
//     className : "subheading",
//     id : "subtitle",
//     key : "heading-3"
// }, "Hello iam Subheading")

// console.log(h2);



// ✅ Manually creating a valid React element object (not using JSX or React.createElement)
// ⚠️ This is for educational purposes; normally, use JSX or React.createElement

let h2 = {
    $$typeof : Symbol.for("react.element"),
    type : "h2",
    key : "heading-3",
    ref : null,
    props : {
        className : "subheading",
        id : "subtitle",
        children : "Hello iam Subheading created by OBJECT"
    }
}


let conatiner = React.createElement("div", {
    className : "conatiner"
},[heading1, heading2, h2])


let root = ReactDOM.createRoot(document.getElementById("root"))
root.render(conatiner)