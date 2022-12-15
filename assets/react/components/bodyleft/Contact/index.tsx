import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {BsBoxArrowRight, BsList} from "react-icons/bs";
import {AiFillHome} from "react-icons/ai";
import {BiStats} from "react-icons/bi";


interface IProps {

}

const Contact: React.FC<IProps> = () => {
    return(
        <Container>
                <Item1></Item1>
                <Item2></Item2>
        </Container>
    );
};

const Container = styled.div`
    // border: solid black;
    display: flex;
    width: 100%;
    height: 25vh;
    flex-direction: row;
`;


const Item1 = styled.div`
    width: 48%;
    background-color : #D9D9D9;
    display: flex;
    justify-content: left;
    align-items: left;
    border-radius: 15px;
`;

const Item2 = styled.div`
    width: 48%;
    background-color : #D9D9D9;
    margin-left: auto; 
    margin-right: 0;
    border-radius: 15px;
`;

export default Contact;
