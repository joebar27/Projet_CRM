import React from "react";
import styled from "styled-components";
import SidebarLeft from "../components/sidebarLeft";
import AddArticleForm from "../components/Articles/mainbody/AddArticleForm"
import jwtDecode from "../services/jwtDecode";
import authentificationService from "../services/authentificationService";
import Mainbody from "../components/Devis/mainbody";

interface IProps {

}


const Devis : React.FC<IProps> = () => {
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

export default Devis;