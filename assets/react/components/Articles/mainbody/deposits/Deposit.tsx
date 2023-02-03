import React from 'react'
import styled from 'styled-components'


const Deposit = ({ data }) => {

    return (
        <Container>
            <Property>
                {/* <PropertyImg src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" /> */}
                <PropertyText>
                    <PropertyStreet>{data.name}</PropertyStreet>
                    {/* <Subtitle>{data.description}</Subtitle> */}
                </PropertyText>
            </Property>
                    <Description>{data.description}</Description>
            <MoveInDate>{data.createdDate}</MoveInDate>
            <DepositWrapper>
                <Text>${data.priceHT}</Text>
                <Subtitle>TVA :{data.TVA}</Subtitle>
            </DepositWrapper>
            <Quantity>{data.quantity}</Quantity>
            <Status>
                <Text>{data.availability}</Text>
                {/* {(() => {
                    switch (status.level) {
                        case 1: return <StatusIndicator color="#F17E7E" />;
                        case 2: return <StatusIndicator color="#FFD056" />;
                        case 3: return <StatusIndicator color="#75C282" />;
                        default: return <StatusIndicator color="#AAA5A5" />;
                    }
                })()} */}
            </Status>

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
    width: 20%;
    display: flex;
    align-items: center;
`
const Description = styled.div`
    width: 30%;
    display: flex;
    align-items: center;
    margin-right: 1rem;
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
    margin-right: 1rem;
`
const Quantity = styled(Text)`
    width: 10%;
`
const DepositWrapper = styled.div`
    width: 15%;
    align-items: center;
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