import React from 'react'
import styled from 'styled-components'


const SortingBar = () => {
    return (
        <Container>
            <ID>ID</ID>
            <Name>Nom</Name>
            <Description>Description</Description>
            <Price>Prix HT</Price>
            <Quantity>Quantité</Quantity>
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

const ID = styled(Text)`
    width: 10%;
`

const Name = styled(Text)`
    width: 30%;
`

const Description = styled(Text)`
    width: 30%;
`

const Price = styled(Text)`
    width: 15%;
`

const Quantity = styled(Text)`
    
`

export default SortingBar