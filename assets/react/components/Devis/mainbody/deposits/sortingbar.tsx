import React from "react";
import styled from "styled-components";

const SortingBar = () => {
    return (
        <Container>
            <SocietyInfos>Société infos</SocietyInfos>
            <ArticlesInfos>Articles infos</ArticlesInfos>
            <TotalPriceHT>Total HT</TotalPriceHT>
            <TotalPriceTTC>Total TTC</TotalPriceTTC>
            <TypePayment>Type de payement</TypePayment>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    padding: 0.4rem 1rem;
    background-color: #0a0047;
    margin: 2rem 0;
    border-radius: 5px;
`;

const Text = styled.h1`
    font-size: 0.6rem;
    text-transform: uppercase;
    font-weight: 500;
    color: white;
`;

const SocietyInfos = styled(Text)`
    width: 35%;
`;

const ArticlesInfos = styled(Text)`
    width: 35%;
`;

const TotalPriceHT = styled(Text)`
    width: 10%;
`;

const TotalPriceTTC = styled(Text)`
    width: 10%;
`;

const TypePayment = styled(Text)`
    width: 10%;
`;

export default SortingBar;
