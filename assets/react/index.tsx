import React from "react";
import {createRoot} from "react-dom/client";
import styled from "styled-components";
import Header from "./components/exemple";
import { BrowserRouter } from "react-router-dom";
import SidebarLeft from "./components/sidebarLeft";
import SidebarRight from "./components/sidebarRight";

const container = document.getElementById("root");
const root = createRoot(container);


const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100vh;
`;

root.render(
    <BrowserRouter>
        <Container>
            <SidebarLeft>
            </SidebarLeft>
            <SidebarRight>

            </SidebarRight>
        </Container>
        
    </BrowserRouter>
);

