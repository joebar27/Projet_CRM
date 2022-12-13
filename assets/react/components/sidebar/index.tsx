import React from "react";
import styled from "styled-components";
import {BsBoxArrowRight} from "react-icons/bs";

interface IProps {

}

const Sidebar: React.FC<IProps> = () => {
    return(
        <Container>
            <Logo>
                <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="Logo" />
            </Logo>
            <Rooter>
                <ul>
                    <li><a href={`home`}>Home</a></li>
                    <li><a href={`clients`}>Client list</a></li>
                </ul>
            </Rooter>
            <Logout>
                <BsBoxArrowRight />
                <a href={`logout`}> Lougout</a>
            </Logout>
        </Container>
    );
};

const Container = styled.div`
    background-color: #43434345;
    width: 20%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Logo = styled.div`
    margin-top : 15%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    img{
        width: 75%;
    }
`;

const Rooter = styled.nav`
    display: flex;
    width: 100%;
    margin-top: 5%;
    ul{
        font-size: 1.2rem;
        list-style: none;
        a{
            text-decoration: none;
            color: #000;
        }
    }
`;  

const Logout = styled.div`
    margin-top: 160%;
    display: flex;
    justify-content: center;
    width: 100%;
    a{
        text-decoration: none;
        color: #000;
    }
`;


export default Sidebar;
