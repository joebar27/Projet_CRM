import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {BsBoxArrowRight, BsList} from "react-icons/bs";
import {AiFillHome} from "react-icons/ai";
import {BiStats} from "react-icons/bi";



interface IProps {

}

const SidebarLeft: React.FC<IProps> = () => {
    return(
        <Container>
            <Logo>
                <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="Logo" />
            </Logo>
            <Rooter>
                <ul>
                    <li><Link to={"/"}><AiFillHome/>Dashboard</Link></li>
                    <li><Link to={"/clients"}><BsList/>Client list</Link></li>
                    <li><Link to={"/stats"}><BiStats/>Graphiques</Link></li>
                </ul>
            </Rooter>
            <Logout>
                <Link to={"/logout"}><BsBoxArrowRight />sign out</Link>
            </Logout>
        </Container>
    );
};

const Container = styled.div`
    background-color: #020202d4;
    width: 15%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Logo = styled.div`
    width: 100%;
    background-color: #202920ba;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    img{
        margin-top : 15%;
        width: 75%;
    }
`;

const Rooter = styled.nav`
    display: flex;
    width: 100%;
    margin-top: 5%;
    ul{
        font-size: 1.5rem;
        list-style: none;
        font-family: 'Roboto', sans-serif;
        a{
            display: flex;
            align-items: center;
            text-decoration: none;
            color: #018d1b;
            gap : 25px;
            margin: 10% 0;
        }
    }
`;  

const Logout = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    a{
        width: 100%;
        background-color: #202920ba;
        font-size: 1.5rem;
        font-family: 'Roboto', sans-serif;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        padding: 2% 0;
        text-decoration: none;
        color: #018d1b;
    }
`;


export default SidebarLeft;
