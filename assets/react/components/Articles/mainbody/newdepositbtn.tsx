import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { AiFillHome } from 'react-icons/ai'


interface IProps {
}

const NewDepositBtn: React.FC<IProps> = () => {

    return (
        <AddButton>            
            <Link to={"/addarticle"}>
                <AddIcon className="iconify" data-inline="false" data-icon="mdi-light:plus" ></AddIcon>
            </Link>
        </AddButton>
    );


};


const AddButton = styled.a`
    background-color: #0a0047;
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
    transition: all ease-in-out 300ms;
    &:hover {
        /* box-shadow: 10px 10px 8px -8px rgba(117, 194, 130, 0.6); */
    }
`

const AddIcon = styled.span`
    color: white;
    font-size: 36px;
`

export default NewDepositBtn