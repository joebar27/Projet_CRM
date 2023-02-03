import React from 'react'
import styled from 'styled-components'
import SortingBar from './sortingbar'
import Deposit from './Deposit'


interface IProps {
    title: string;
    data: any;
    count: number;
}


const Deposits : React.FC<IProps> = ({ title, data, count }) => {
console.log(data);
    return (
        <Container>
            <Title>{title}<DepositsCount>{count}</DepositsCount></Title>
            <SortingBar />
            {data.map(deposit => (
                <Deposit data={deposit} key={deposit.id} />
            ))}
        </Container>
    )
}


const Container = styled.div`
`

const Title = styled.h1`
    font-weight: 500;
    color:  black;
    font-size: 1.3rem;
    display: flex;
    align-items: center;
`

const DepositsCount = styled.div`
    margin-left: 1rem;
    font-size: 1rem;
    background-color: #0a0047;
    color: white;
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
`

export default Deposits