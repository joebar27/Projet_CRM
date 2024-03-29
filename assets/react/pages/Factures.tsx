import React from "react";
import styled from "styled-components";
import SidebarLeft from "../components/sidebarLeft";
import AddArticleForm from "../components/Articles/mainbody/AddArticleForm"
import jwtDecode from "../services/jwtDecode";
import authentificationService from "../services/authentificationService";

interface IProps {

}


const Factures : React.FC<IProps> = () => {
        return(
            <Container>
                <SidebarLeft></SidebarLeft>
            </Container>
        );
};

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100vh;
`;

export default Factures;