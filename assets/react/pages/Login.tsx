import React from "react";
import { Container } from "react-grid-system";
import styled from "styled-components";
import LoginForm from "../components/LoginForm";
import StripeContainer from "../components/Stripe/StripeContainer";

interface IProps {

}

const Login: React.FC<IProps> = (props) => {
    return (
        <Container>
            <LoginForm />
            <h1>Test Stripe</h1>
            <StripeContainer />
        </Container>

    );
}

export default Login;