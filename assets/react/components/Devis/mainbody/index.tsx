import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {BsBoxArrowRight, BsList} from "react-icons/bs";
import {AiFillHome} from "react-icons/ai";
import {BiStats} from "react-icons/bi";
import SidebarRight from "../../sidebarRight";
import NewDepositBtn from "./newdepositbtn";
import Deposits from "./deposits/Deposits";

import apiFetcher from "../../../services/apiFetcher";
// import depositData from '../../../DevisData.json';

interface IProps {

}

const Mainbody: React.FC<IProps> = () => {
    
    const [data, setData] = React.useState<any>([]);

    const getApiFetcher = async () => {
        let response  = await apiFetcher.getApiFetcher('https://localhost:8000/api/allarticles');
        let data = response.data[0];
        setData(data);
        console.log(data);
    }
    useEffect(() => {
        getApiFetcher();
    }, []);
    

    return(
        <Container>
            <SidebarRight></SidebarRight>
            <NewDepositBtn />
            <Deposits title="Devis" count={5} data={data} />
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
