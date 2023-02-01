import React from "react";
import styled from "styled-components";
import SidebarLeft from "../components/sidebarLeft";
import SidebarRight from "../components/sidebarRight";
import Mainbody from "../components/Articles/mainbody";
import jwtDecode from "../services/jwtDecode";
import authentificationService from "../services/authentificationService";

interface IProps {

}


const Articles : React.FC<IProps> = () => {
        return(
            <Container>
                <SidebarLeft></SidebarLeft>
                <Mainbody></Mainbody>
            </Container>
        );
};

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100vh;
`;

export default Articles;