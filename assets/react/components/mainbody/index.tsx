import React, { useEffect } from "react";
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
import authentificationService from "../../services/authentificationService";
import apiFetcher from "../../services/apiFetcher";


interface IProps {

}

const Mainbody: React.FC<IProps> = () => {

    const [data, setData] = React.useState<any>([]);

    const getApiFetcher = async () => {
        let response  = await apiFetcher.getApiFetcher('https://localhost:8000/api/allarticles');
        let data = response.data[0];
        setData(data);
    }
    useEffect(() => {
        getApiFetcher();
    }, []);
    

    if (sessionStorage.getItem('token') && authentificationService.getCurrentUserRoles().includes('ROLE_ADMIN')) {
        return(
            <Container>
                <SidebarRight></SidebarRight>
                <AnnualReview data={data} ></AnnualReview>
                <NewDepositBtn />
                <Deposits title="Facture en cours" count={2} data={depositData.active} />
                <Deposits title="Facture cloturée" count={8} data={depositData.closed} />
            </Container>
        );
    };
        return(
            <Container>
                <SidebarRight></SidebarRight>
                <Deposits title="Vos facture en cours" count={2} data={depositData.active} />
                <Deposits title="Vos facture cloturée" count={8} data={depositData.closed} />
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
