import React from "react";
import styled from "styled-components";
import SidebarLeft from "../components/sidebarLeft";
import SidebarRight from "../components/sidebarRight";
import jwtDecode from "../services/jwtDecode";
import authentificationService from "../services/authentificationService";
import StripeContainer from "../components/Stripe/StripeContainer";

interface IProps {

}


const Paiement : React.FC<IProps> = () => {
        return(
            <Container>
                <SidebarLeft></SidebarLeft>
                <h1>Test Stripe</h1>
                <StripeContainer />
                
            </Container>
        );
};

const Container = styled.div`
    margin-left : 400px;
    
`;

export default Paiement;