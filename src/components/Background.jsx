import styled, { keyframes } from "styled-components"
import BackgroundSmallDeco from "./BackgroundSmallDeco"
import { useTheme } from "../context/ThemeContext"

const BackgroundContainer = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    overflow: hidden;
    z-index: -1;
    display: flex;
    justify-content:center;
    align-items:center;
    background-color: ${props => props.$darkMode ? 'black' : 'white'};
    transition: background-color 2s;
`

const BackgroundRotateAnimation = keyframes`
    50% {
        transform: rotate(180deg);
    }
    100% {
        transform: rotate(360deg);
    }
`

const BackgroundColor = styled.div`
    width: max(100vw, 100vh);
    height: max(100vw, 100vh);
    background: conic-gradient(${ props => props.$darkMode ? 'from 90deg at 50% 50%, rgba(255, 0, 184, 0.4) 0%, rgba(202, 230, 255, 0) 12%, rgba(4, 80, 65, 0.5) 24%, rgba(4, 80, 65, 0.5) 36%, rgba(202, 230, 255, 0) 50%, rgba(21, 129, 255, 0.4) 60%, rgba(202, 230, 255, 0) 70%, rgba(255, 0, 184, 0.2) 100%' : 'from 90deg at 50% 50%, rgba(202, 230, 255, 1) 0%, rgba(202, 230, 255, 0) 12%, rgba(255, 240, 202, 1) 24%, rgba(255, 240, 202, 1) 36%, rgba(202, 230, 255, 0) 50%, rgba(255, 202, 221, 1) 60%, rgba(202, 230, 255, 0) 70%, rgba(202, 230, 255, 1) 100%'});
    filter: blur(16vw);
    animation: ${BackgroundRotateAnimation} 10s linear infinite;
`

function Background () {
    const { darkMode } = useTheme()
    return (
        <BackgroundContainer $darkMode={darkMode} >
            <BackgroundColor $darkMode={darkMode} />
            <BackgroundSmallDeco />
        </BackgroundContainer>
    )
}

export default Background