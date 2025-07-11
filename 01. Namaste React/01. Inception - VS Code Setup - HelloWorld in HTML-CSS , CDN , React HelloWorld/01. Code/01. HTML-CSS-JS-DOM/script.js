
// let root = document.querySelector("#root")

// let h1 = document.createElement("h1")
// h1.textContent = "Namaste Everyone from JS !"
// root.appendChild(h1)





const heading1 = React.createElement("h1", {
    id: "title",
}, "Heading 1 !");
// console.log(heading); 

const heading2 = React.createElement("h2", {
    id: "title-2",
}, "Heading 2 ! ");


const container = React.createElement("div", {
    id: "container",
}, [heading1, heading2]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);