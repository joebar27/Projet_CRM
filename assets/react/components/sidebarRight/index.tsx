import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface IProps {

}

const SidebarRight: React.FC<IProps> = () => {
    return(
        <Container>
            <Profil>
                <Link to={"/profil"}><img src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt="profil picture" /></Link>
            </Profil>
            <Actions>
                <Link to={"/test"}><img src="https://cdn-icons-png.flaticon.com/512/1160/1160358.png" alt=""/></Link>
                <Link to={"/test"}><img src="https://cdn-icons-png.flaticon.com/512/1160/1160358.png" alt=""/></Link>
                <Link to={"/test"}><img src="https://cdn-icons-png.flaticon.com/512/1160/1160358.png" alt=""/></Link>
            </Actions>
        </Container>
    );
}

const Container = styled.div`
    background-color: #020202d4;
    width: 7%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

const Profil = styled.div`
    margin-top: 15%;
    width: 100%;
    display: flex;
    justify-content: center;
    img{
        border-radius: 100%;
        width: 80px;
        height: 80px;
    }
`;

const Actions = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    img{
        width: 50px;
        height: 50px;
        border-radius: 100%;
    }
`;

export default SidebarRight;