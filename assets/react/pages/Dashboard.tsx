import React from "react";
import styled from "styled-components";
import SidebarLeft from "../components/sidebarLeft";
import SidebarRight from "../components/sidebarRight";


interface IProps {

}


const Dashboard : React.FC<IProps> = () => {
    return(

        <Container>
            <SidebarLeft></SidebarLeft>
            <SidebarRight></SidebarRight>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100vh;
`;

export default Dashboard;