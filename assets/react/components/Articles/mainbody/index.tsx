import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {BsBoxArrowRight, BsList} from "react-icons/bs";
import {AiFillHome} from "react-icons/ai";
import {BiStats} from "react-icons/bi";
import SidebarRight from "../../sidebarRight";
import NewDepositBtn from './NewDepositBtn';
import Deposits from "./deposits/Desposits";

import depositData from '../../../DepositData.json';

interface IProps {

}

const Mainbody: React.FC<IProps> = () => {
    return(
        <Container>
            <SidebarRight></SidebarRight>
            <NewDepositBtn />
            <Deposits title="Articles" count={5} data={depositData.active} />
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
