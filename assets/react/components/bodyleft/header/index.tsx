import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {BsBoxArrowRight, BsList} from "react-icons/bs";
import {AiFillHome} from "react-icons/ai";
import {BiStats} from "react-icons/bi";
import { setConfiguration } from 'react-grid-system';


interface IProps {

}

const Header: React.FC<IProps> = () => {
    return(
        <Container>
            <Date>
                <p>14/12/2022</p>
            </Date>
            <Description>
                <p>Retrouvez toutes vos démarches en cours grâce à cet interface simplifier.</p>
            </Description>
            <Button>
                <LinkButton to={"/"}>Ajout client</LinkButton >
                <LinkButton  to={"/"}>Ajout commercial</LinkButton >
            </Button>
            <Clients>
                <LinkClient to={"/"}><img src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt=""/></LinkClient>
                <LinkClient to={"/"}><img src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt=""/></LinkClient>
            </Clients>
        </Container>
    );
};

const Container = styled.div`
    // border: solid black;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 25vh;
    flex-direction: column;
`;

const Description = styled.div`
    font-weight: 400;
    font-family: 'Oswald', sans-serif;
`;

const Date = styled.div`
    width: 40%;
    height : 5vh;
    color : #6f6af8;
    font-weight:bold;
    font-size:18px;
    display: flex;
    justify-content: left;
    align-items: left;
    flex-direction: column;
    font-weight: 600;
    font-family: 'Oswald', sans-serif;
`;

const Button = styled.div`
    width: 70%;
    height : 5vh;
    display: flex;
    justify-content: left;
    align-items: left;
    flex-direction: row;
`;

export const LinkButton = styled(Link)`
    width: 100%;
    background-color: #6f6af8;
    margin-right: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    text-decoration: none;
    font-weight: 600;
    font-family: 'Oswald', sans-serif;
    border-radius : 5px
`;

const LinkClient = styled(Link)`
    width: 100%;
`;

const Clients = styled.div`
    width: 100%;
    height : 10vh;
    display: flex;
    justify-content: left;
    align-items: center;
    flex-direction: row;

    img{
        width: 50px;
        height: 50px;
        border-radius: 100%;
    }
`;



export default Header;
