import React from 'react'
import styled from 'styled-components'


const Deposit = ({ data }) => {
    console.log(data);
    // const { societyInfos, article_infos, total_price_ht, total_price_ttc, type_of_payment, status_payment } = data;
    return (
        <Container>
            <Property>
                <PropertyImg src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
                <PropertyText>
                    <PropertyStreet>{data.societyInfos.name}</PropertyStreet>
                    <Subtitle>{data.societyInfos.address} {data.societyInfos.city} {data.societyInfos.zip_code}</Subtitle>
                </PropertyText>
            </Property>

            <MoveInDate>{data.articleInfos.name}</MoveInDate>

            <Rent>$ {data.totalPriceHT}</Rent>
            <Rent>$ {data.totalPriceTTC}</Rent>

            <DepositWrapper>
                <Text>{data.typeOfPayment}</Text>
                <Subtitle>{data.statusPayment}</Subtitle>
            </DepositWrapper>

        </Container>
    )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    padding: 1rem 0;
    border-bottom: 1px solid rgba(190,190,190,0.22);
    cursor: pointer;
    background-color: #F7F7F7;
    transition: all ease-in-out 300ms;
    &:hover {
        /* box-shadow: 0px 10px 8px -8px rgba(138, 153, 192, 0.6); */
        background-color: white;
    }
`

const Text = styled.h1`
    font-size: 0.8rem;
    font-weight: 500;
    color: black;
    margin: 0;
`

const Subtitle = styled(Text)`
    font-size: 0.6rem;
    color: #B2BFE1;
    margin-top: 2px;
`

const Property = styled.div`
    width: 30%;
    display: flex;
    align-items: center;
`

const PropertyText = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
`

const PropertyImg = styled.img`
    height: 35px;
    width: 35px;
`
const PropertyStreet = styled(Text)`
    font-size: 1rem;
`
const MoveInDate = styled(Text)`
    width: 15%;
`
const Rent = styled(Text)`
    width: 10%;
`
const DepositWrapper = styled.div`
    width: 15%;
`
const Status = styled.div`
    display: flex;
    align-items: center;
`
const StatusIndicator = styled.div`
    width: 15px;
    height: 15px;
    border-radius: 10px;
    background-color: ${props => props.color};
    margin-left: 1rem;
    position: absolute;
    right: 7rem;
`


export default Deposit