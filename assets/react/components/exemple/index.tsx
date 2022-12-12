import React from 'react';
import styled from 'styled-components';

interface IProps {
    title: string;
}

const Header: React.FC<IProps>  = ({title}) => {
    return(
        <NavBar>
            <Container>
                <h1>{title}</h1> 
            </Container>
        </NavBar>
    );
};


const Container = styled.div`
    display: flex;
`;

const NavBar = styled.nav`
`

export default Header;