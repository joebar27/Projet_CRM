import React from "react";
import {createRoot} from "react-dom/client";
import Header from "./components/exemple";
import { BrowserRouter } from "react-router-dom";
import Sidebar from "./components/sidebar";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <BrowserRouter>
        <Sidebar>
            
        </Sidebar>
    </BrowserRouter>
);
