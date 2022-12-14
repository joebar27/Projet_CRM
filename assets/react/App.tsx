import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import { createRoot } from "react-dom";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" >
                <Route index element={<Dashboard />} />
            </Route>

        </Routes>
    </BrowserRouter>
);


