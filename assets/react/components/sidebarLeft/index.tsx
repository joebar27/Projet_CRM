import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {BsBoxArrowRight, BsList} from "react-icons/bs";
import {AiFillHome} from "react-icons/ai";
import {BiStats} from "react-icons/bi";
import {ImUsers} from "react-icons/im";
import {GoGraph} from "react-icons/go";
import {AiOutlineLogout} from "react-icons/ai";
import authentificationService from '../../services/authentificationService';


interface IProps {

}

const SidebarLeft: React.FC<IProps> = () => {
    const handleLogout = () => {
        authentificationService.logout();
        window.location.href = '/login';
    };
    return(
        <Container>
            <Logo>
                <ProfileImg src={require('../../../img/logo.png')} />
            </Logo>
            <Rooter>
                <ul>
                    <li><Link to={"/"}><AiFillHome/>Dashboard</Link></li>
                    <li><Link to={"/clients"}><ImUsers/>Listes</Link></li>
                    <li><Link to={"/stats"}><GoGraph/>Graphiques</Link></li>
                    <li><Link to={"/register"}><GoGraph/>Gestion utilisateurs</Link></li>
                    <li><Link to={"/articles"}><GoGraph/>Articles</Link></li>
                    <a onClick={handleLogout}><AiOutlineLogout />Déconnexion</a>
                </ul>
            </Rooter>
        </Container>
    );
};

const Container = styled.div`
    background-color: #0A0047;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: 16rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    a{
        cursor: pointer;
    }
`;

const Logo = styled.div`
    width: 100%;
    background-color: #0A0047;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    // border-radius: 0px 35px 0px 0px;
    img{
        margin-top : 15%;
        width: 55%;
    }
`;

const ProfileImg = styled.img`
`

const Rooter = styled.nav`
    display: flex;
    width: 100%;
    margin-top: 15%;
    ul{
        font-size: 1.5rem;
        list-style: none;
        font-family: 'Roboto', sans-serif;
        a{
            display: flex;
            align-items: center;
            text-decoration: none;
            color : white;
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
        cursor: pointer;
    }
`;


export default SidebarLeft;
