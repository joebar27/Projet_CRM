import React from "react";
import { Container } from "react-grid-system";
import styled from "styled-components";
import LoginForm from "../components/LoginForm";


interface IProps {

}

const Login: React.FC<IProps> = (props) => {
    return (
        <Container>
            <LoginForm />
            
        </Container>

    );
}

export default Login;