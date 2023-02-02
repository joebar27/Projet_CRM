import React from 'react'
import styled from 'styled-components'
import {RiAddCircleFill} from 'react-icons/ri'
import { Link } from 'react-router-dom'

interface IProps {
}

const NewDepositBtn: React.FC<IProps> = () => {

    return (
         <Link to={"/addfacture"}>
        <AddButton>            
                <RiAddCircleFill color="#0a0047" fontSize="3em"/>
        </AddButton>
        </Link>
    );


};


const AddButton = styled.div`
    background-color: #FBFBFB;
    color : black;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    position: absolute;
    top: 6rem;
    right: 7rem;
    cursor: pointer;

`


export default NewDepositBtn