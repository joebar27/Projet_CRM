import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import { createRoot } from "react-dom";
import Login from './pages/Login';
import Register from './pages/Register';
import Articles from './pages/Articles';
import AddArticle from './pages/AddArticle';
import Devis from './pages/Devis';
import Factures from './pages/Factures';

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" >
                <Route index element={<Dashboard />} />
                <Route path="login" element={<Login/>}/>
                <Route path="register" element={<Register/>}/>
                <Route path="articles" element={<Articles/>}/>
                <Route path="addarticle" element={<AddArticle/>}/>
                <Route path="devis" element={<Devis/>}/>
                <Route path="factures" element={<Factures/>}/>

            </Route>

        </Routes>
    </BrowserRouter>
);


