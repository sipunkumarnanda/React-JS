
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


const user = "Sipun Kumar Nanda"
const company = (
    <>
    <p className="company" id="company" key="g32gh3">owned by Nanda Vencture</p>
    </>
)
const h2 = <h2>Hello {user} {company}</h2>


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(h2)