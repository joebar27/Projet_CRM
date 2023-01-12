import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {BsBoxArrowRight, BsList} from "react-icons/bs";
import {AiFillHome} from "react-icons/ai";
import {BiStats} from "react-icons/bi";
import Header from "./header";
import Events from "./Events";
import Contact from "./Contact";

interface IProps {

}

const Bodyleft: React.FC<IProps> = () => {
    return(
        <Container>
            <Header></Header>
            <Events></Events>
            <Contact></Contact>
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
    background-color : #FFFFFF;
    flex-direction: column;
    border-radius : 25px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;


export default Bodyleft;
