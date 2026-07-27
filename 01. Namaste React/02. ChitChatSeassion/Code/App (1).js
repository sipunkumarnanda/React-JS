

const heading1 = React.createElement("h1", { id: "heading1", key : "heading1" }, "React Heading 1");
const heading2 = React.createElement("h2", { id: "heading2", key: "heading2" }, "React Heading 2");
const container = React.createElement("div", { id: "container", className : "container"}, [heading1, heading2]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);