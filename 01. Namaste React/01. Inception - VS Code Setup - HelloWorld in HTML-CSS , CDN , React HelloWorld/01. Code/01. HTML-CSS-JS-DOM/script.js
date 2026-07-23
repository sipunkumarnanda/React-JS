
// using js DOM
// let root = document.getElementById("root");

// let heading = document.createElement("h1");
// heading.innerText = "Namaste Everyone from js 🙏";
// root.appendChild(heading);

// using React
const heading1 = React.createElement(
    "h1", 
    {
        id: "title1", 
    }, 
    "Heading 1"
); // Here I have created my heading (React element)

console.log(heading1); // A plain JavaScript object representing an <h1> element

const heading2 = React.createElement(
    "h2", 
    {
        id: "title2", 
    }, 
    "Heading 2"
); 

const container = React.createElement(
    "div", 
    {
    id : "container",
    }, 
    heading1, heading2) ;  // also pass them inside an array: [heading1, heading2]

// Now, how can I put this element inside the root?
const root = ReactDOM.createRoot(document.getElementById("root")); // Here I have created my root

// Now, how can I put the heading inside the root?
// By passing the React element to root.render()
root.render(container);