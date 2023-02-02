import React from "react";
import styled from "styled-components";
import SidebarLeft from "../components/sidebarLeft";
import SidebarRight from "../components/sidebarRight";
import AddArticleForm from "../components/Articles/mainbody/AddArticleForm"
import jwtDecode from "../services/jwtDecode";
import authentificationService from "../services/authentificationService";

interface IProps {

}


const AddArticle : React.FC<IProps> = () => {
        return(
            <Container>
                <SidebarLeft></SidebarLeft>
                <AddArticleForm></AddArticleForm>
            </Container>
        );
};

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100vh;
`;

export default AddArticle;