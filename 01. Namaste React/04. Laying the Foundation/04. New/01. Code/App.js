import React from "react";
import ReactDOM from "react-dom/client";

const container = React.createElement(
  "div",
  { id: "conatiner", key: "conatiner" },
  [
    React.createElement("h1", { key: "heading1" }, "React Heading 1"),
    React.createElement("h2", { key: "heading2" }, "React Heading 2"),
  ],
);

// React Element
const elem = <span>React Element</span>;
const heading = (
  <h1 id="heading" className="heading" tabIndex="1">
    {elem}
    Namste React Heading 🚀
  </h1>
);

console.log(heading); // object
let num = 1000;

// React Component
// Functional component
const HeadingComponent = () => {
  return (
    <div id="container">
      <h2>{num}</h2>
      {console.log("Hello")}
      {heading} {/* using ReactElem inside jsx  */}
      <h1>Namaste React Functional Component 🚀</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(HeadingComponent());
root.render(<HeadingComponent />);
