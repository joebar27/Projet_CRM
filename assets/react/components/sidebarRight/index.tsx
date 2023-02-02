import React, { useEffect } from "react";
import {HiOutlineChevronLeft} from "react-icons/hi";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface IProps {

}

const SidebarRight: React.FC<IProps> = () => {
    return(
        <>
            <Container>
                <MessageIcon className="iconify" data-inline="false" data-icon="mdi-light:email"></MessageIcon>
                <ProfileImg src={require('../../../img/bluelogo.png')} />
            </Container>
        </>
    );
}

const Container = styled.div`
    display: flex;
    padding: 1rem;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 3rem;
    background-color : #FBFBFB;
`;


const ProfileImg = styled.img`
    height: 2rem;
    margin: 0 1rem;
    cursor: pointer;
    background-color : #FBFBFB;
`

const MessageIcon = styled.span`
    color: ?; 
    font-size: 27px;
    cursor: pointer;
`

export default SidebarRight;