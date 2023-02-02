import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {BsBoxArrowRight, BsList} from "react-icons/bs";
import {AiFillHome} from "react-icons/ai";
import {BiStats} from "react-icons/bi";
import SidebarRight from "../sidebarRight";
import NewDepositBtn from "./newdepositbtn";
import Deposits from "./deposits/Desposits";

import depositData from '../../DepositData.json';
import AnnualReview from "../Charts/ReviewCharts/AnnualReview";

interface IProps {

}

const Mainbody: React.FC<IProps> = () => {
    return(
        <Container>
            <SidebarRight></SidebarRight>
            <AnnualReview ></AnnualReview>
            <NewDepositBtn />
            <Deposits title="Derniers événements" count={2} data={depositData.active} />
            <Deposits title="Facture cloturée" count={8} data={depositData.closed} />
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
