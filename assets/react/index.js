import React from "react";
import App from "../components/exemple"
import {createRoot} from "react-dom/client";


const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,

);
