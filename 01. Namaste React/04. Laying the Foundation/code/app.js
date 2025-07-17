
// import {createElement} from "react";
import { createRoot } from "react-dom/client";

// React.createElement => Gives us an  Object => Object is Compiled and converted into html code and put to upom DOM HTML(DOM)

// Suppose we have to create a big HTML  structure then we use   JSX
// JSX - JavaScript XML people  say , but there is no where written js xml in any documentation .
// why jsx come explain ? why facebook engineer introduced jsx ?

// JSX
// React Element
const Heading1 = (
  <h1 id="title1" key="heading">
    This is a React Element
  </h1>
);

// React components (2 types)
// - functional components
// - class based components

// React component
const Heading2 = () => {
  return (
    <h1 id="title2" key="heading2">
      This is a React functional component
    </h1>
  );
};

const string = "Hello iam a string";

// functional components
// Name of functional component start with capital letter - its not mandatory
const Headercomponent = () => {
  return (
    <div>
      {Heading1} // React component
      {/* <Heading2 /> */} // calling functional component in jsx
      {Heading2()} // calling functional component
      {console.log(
        "Any piece of js code we can write inside jsx using {} curly braces "
      )}
      {1 + 2} // we can write any js code over here 
      {string}
      <h2>Namste React Functional component</h2>
      <h2>This ia a h2 tag</h2>
    </div>
  );
};  

// How to use above React Element insdie the React Component

const root = createRoot(document.getElementById("root"));
root.render(<Headercomponent />);
