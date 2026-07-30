import React from "react";
import ReactDOM from "react-dom/client";

const h1 = React.createElement("h1", { id: "header1", key : 1 }, "h1 From React");

const h2 = React.createElement("h2",{ id: "header2", key : 2 },"h2 From React");

const container = React.createElement("div",{ id: "container", key : "container" },[h1, h2]);

const root = ReactDOM.createRoot(document.getElementById("root"));

const parent = React.createElement("div",{ id: "parent" },[ 
    React.createElement("div",{ id: "child", key: "child" },
        [
                React.createElement("h1", { key: "child-h1" }, "Iam an h1 tag"),
                React.createElement("h2", { key: "child-h2" }, "Iam an h2 tag")
            ]
        ),

    React.createElement("div",{ id: "child2", key: "child2" },
            [
                React.createElement("h1", { key: "child2-h1" }, "Iam an h1 tag"),
                React.createElement("h2", { key: "child2-h2" }, "Iam an h2 tag")
            ]
        ),

        container
    ]
);

root.render(parent);