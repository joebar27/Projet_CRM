import React from 'react'
import styled from 'styled-components'


const SortingBar = () => {
    return (
        <Container>
            <Name>Nom</Name>
            <Description>Description</Description>
            <Date>Date</Date>
            <Price>Prix HT</Price>
            <Quantity>Quantité</Quantity>
            <Disponibility>Disponibilité</Disponibility>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    padding: 0.4rem 1rem;
    background-color: #0a0047;
    margin: 2rem 0;
    border-radius: 5px;
`

const Text = styled.h1`
    font-size: 0.6rem;
    text-transform: uppercase;
    font-weight: 500;
    color: white;
`

const Disponibility = styled(Text)`
    width: 10%;
`

const Date = styled(Text)`
    width: 10%;
`
const Name = styled(Text)`
    width: 25%;
`

const Description = styled(Text)`
    width: 35%;
`

const Price = styled(Text)`
    width: 15%;
`

const Quantity = styled(Text)`
    width: 10%;
`

export default SortingBar;