import React from "react";
import App from "./components/exemple"
import {createRoot} from "react-dom/client";
import Header from "./components/exemple";


const container = document.getElementById("root");
const root = createRoot(container);

root.render(

    <Header title="Hello World" />

);
