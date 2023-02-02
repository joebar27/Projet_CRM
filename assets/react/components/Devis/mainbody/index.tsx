import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {BsBoxArrowRight, BsList} from "react-icons/bs";
import {AiFillHome} from "react-icons/ai";
import {BiStats} from "react-icons/bi";
import SidebarRight from "../../sidebarRight";
import NewDepositBtn from "./newdepositbtn";
import Deposits from "./deposits/Deposits";

import depositData from '../../../DevisData.json';

interface IProps {

}

const Mainbody: React.FC<IProps> = () => {
    return(
        <Container>
            <SidebarRight></SidebarRight>
            <NewDepositBtn />
            <Deposits title="Devis" count={5} data={depositData} />
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
    margin-left: 16rem;
    position: relative;
    padding: 0 4rem;
    background-color : #FBFBFBF;
`;


export default Mainbody;
