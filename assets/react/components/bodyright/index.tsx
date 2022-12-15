import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {BsBoxArrowRight, BsList} from "react-icons/bs";
import {AiFillHome} from "react-icons/ai";
import {BiStats} from "react-icons/bi";

interface IProps {

}

const BodyRight: React.FC<IProps> = () => {
    return(
        <Container>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 90vh;
    margin : 20px;
    padding : 30px;
    background-color : #D9D9D9;
    flex-direction: column;
`;


export default BodyRight;
