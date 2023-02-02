import React from "react";
import styled from "styled-components";
import SidebarLeft from "../components/sidebarLeft";
import SidebarRight from "../components/sidebarRight";
import Mainbody from "../components/mainbody";
import jwtDecode from "../services/jwtDecode";
import authentificationService from "../services/authentificationService";

interface IProps {
}


const Dashboard : React.FC<IProps> = () => {
    // if (sessionStorage.getItem('token') && authentificationService.getCurrentUserRoles().includes('ROLE_ADMIN')) {
        return(
            <Container>
                <SidebarLeft></SidebarLeft>
                <Mainbody></Mainbody>
            </Container>
        );
    // }
    // else if (!sessionStorage.getItem('token')){
    //     window.location.href = '/login';
    // }else{
    //     alert('Vous n\'avez pas les droits pour accéder à cette page');
    // }
};

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100vh;
`;

export default Dashboard;