import React, { useEffect } from "react";
import {HiOutlineChevronLeft} from "react-icons/hi";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface IProps {

}

const SidebarRight: React.FC<IProps> = () => {

    useEffect(() => {
        const sidebarRight  = document.getElementById("sidebar-right");
        const sidebarRightBubble = document.getElementById("sidebar-right-bubble");

        sidebarRightBubble?.addEventListener("mouseover", () => {
            sidebarRightBubble.style.visibility = "hidden";
            sidebarRight?  sidebarRight.style.visibility = "visible" : null;
        });

        sidebarRight?.addEventListener("mouseover", () => {
            sidebarRightBubble? sidebarRightBubble.style.visibility = "hidden" : null;
            sidebarRight?  sidebarRight.style.visibility = "visible" : null;
        });

        sidebarRight?.addEventListener("mouseout", () => {
            sidebarRightBubble? sidebarRightBubble.style.visibility = "visible" : null;
            sidebarRight?  sidebarRight.style.visibility = "hidden" : null;
        });
    },[]);

    return(
        <>
            <SideBarContainer>
                <SidebarPopup>
                    <Bubble id="sidebar-right-bubble"></Bubble>
                </SidebarPopup>
                <Container id="sidebar-right">
                    <Profil>
                        <Link to={"/profil"}><img src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt="profil picture" /></Link>
                    </Profil>
                    <Actions>
                        <Link to={"/test"}><img src="https://cdn-icons-png.flaticon.com/512/1160/1160358.png" alt=""/></Link>
                        <Link to={"/test"}><img src="https://cdn-icons-png.flaticon.com/512/1160/1160358.png" alt=""/></Link>
                        <Link to={"/test"}><img src="https://cdn-icons-png.flaticon.com/512/1160/1160358.png" alt=""/></Link>
                    </Actions>
                </Container>
            </SideBarContainer>
        </>
    );
}

const SideBarContainer = styled.div`
    width: 7%;
`;

const SidebarPopup = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
`;

const Bubble = styled.div`
    display: flex;
    margin-bottom: -5vh;
    width: 50%;
    height: 5vh;
    border-radius: 0 0 0 100%;
    background-color: #020202d4;
`;

const Container = styled.div`
    visibility: hidden;
    background-color: #020202d4;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding : 10px;
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
        width: 30px;
        height: 30px;
    }
`;

export default SidebarRight;