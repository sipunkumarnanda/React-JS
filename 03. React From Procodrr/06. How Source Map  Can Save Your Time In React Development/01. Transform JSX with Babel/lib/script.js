"use strict";

/* 
const h1 = React.createElement("h1", {
    className : "heading",
    id : "heading",
    key : "heading-1"
}, "Hello React")

console.log(h1);

let customReactElem = {
    $$typeof : Symbol.for('react.element'),
    type: "h1",
    key: "heading-1",
    ref: null,
    props: {
        className: "heading",
        id: "heading",
        children: "Hello React , created by OBJECT"
    },
    _owner: null,
    _store: {}
}
    */

var user = "Sipun Kumar Nanda";
var company = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
  className: "company",
  id: "company",
  key: "g32gh3"
}, "owned by Nanda Vencture"));
var h2 = /*#__PURE__*/React.createElement("h2", null, "Hello ", user, " ", company);
var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(h2);
//# sourceMappingURL=script.js.map