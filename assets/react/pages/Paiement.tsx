import React from "react";
import styled from "styled-components";
import SidebarLeft from "../components/sidebarLeft";
import SidebarRight from "../components/sidebarRight";
import jwtDecode from "../services/jwtDecode";
import authentificationService from "../services/authentificationService";
import StripeContainer from "../components/Stripe/StripeContainer";

interface IProps {}

const Paiement: React.FC<IProps> = () => {
    return (
        <Container>
            <SidebarLeft></SidebarLeft>
            <Title>Paiement stripe</Title>
            <StripeContainer />
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    margin-left: 300px;
    justify-content: center;
    align-items: center;
`;

const Title = styled.h1`
    font-family: arial;
    
`;

export default Paiement;
