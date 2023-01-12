import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {BsBoxArrowRight, BsList} from "react-icons/bs";
import {AiFillHome} from "react-icons/ai";
import {BiStats} from "react-icons/bi";


interface IProps {

}

const Events: React.FC<IProps> = () => {
    return(
        <Container>
            <Planning>
                <EventsItems>
                    <Event1>
                        <h3>21/12/2022</h3>
                        <p>Meeting avec un client hyper super mega important</p>
                    </Event1>
                    <Event2>
                        <h3>21/12/2022</h3>
                        <p>Meeting avec un client hyper super mega important</p>
                    </Event2>
                </EventsItems>
            </Planning>
            <Button>
                <LinkButton to={"/"}>Ajout une réunion</LinkButton >
            </Button>
        </Container>
    );
};

const Container = styled.div`
    // border: solid black;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 35vh;
    flex-direction: column;
`;

const Planning = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 28vh;
    background-color : white;
    background-repeat: no-repeat;
    flex-direction: column;
    background-color : #d9d9d9;
    color : #6f6af8;
    font-weight: 600;
    font-family: 'Oswald', sans-serif;

    border-radius:15px;
    hr {
        height: 1px;
        margin: -0.5em 0;
        padding: 0;
        color: #F00;
        background-color: #F00;
        border: 0;
      }
`;

const EventsItems = styled.div`
      padding : 20px;
      width: 100%;
      height : 5vh;
      display: flex;
      justify-content: left;
      align-items: left;
      flex-direction: row;
`;

const Event1 = styled.div`

`;

const Event2 = styled.div`
`;

const Button = styled.div`
    width: 33%;
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


export default Events;
