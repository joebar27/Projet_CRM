import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {BsBoxArrowRight, BsList} from "react-icons/bs";
import {AiFillHome} from "react-icons/ai";
import {BiStats} from "react-icons/bi";
import {ImUsers} from "react-icons/im";
import {GoGraph} from "react-icons/go";
import {AiOutlineLogout} from "react-icons/ai";


interface IProps {

}

const SidebarLeft: React.FC<IProps> = () => {
    return(
        <Container>
            <Logo>
                <img src="https://freesvg.org/img/Google_logo_white_2015.png" alt="Logo" />
            </Logo>
            <Rooter>
                <ul>
                    <li><Link to={"/"}><AiFillHome/>Dashboard</Link></li>
                    <li><Link to={"/clients"}><ImUsers/>Client list</Link></li>
                    <li><Link to={"/stats"}><GoGraph/>Graphiques</Link></li>
                </ul>
            </Rooter>
            <Logout>
                <Link to={"/logout"}><AiOutlineLogout />sign out</Link>
            </Logout>
        </Container>
    );
};

const Container = styled.div`
    background-color: #6f6af8;
    width: 40%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    // border-radius: 0px 35px 35px 0px;
`;

const Logo = styled.div`
    width: 100%;
    background-color: #6f6af8;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    // border-radius: 0px 35px 0px 0px;
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
            color: white;
            gap : 25px;
            margin: 10% 0;
        }

        img{
            with : 25px;
            height : 25px;
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
        font-size: 1.5rem;
        font-family: 'Roboto', sans-serif;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        padding: 2% 0;
        text-decoration: none;
        color: white;
    }
`;


export default SidebarLeft;
