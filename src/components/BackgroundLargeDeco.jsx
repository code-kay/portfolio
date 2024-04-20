import styled, { keyframes } from "styled-components";
import { useTheme } from "../context/ThemeContext";
import flower1 from "../assets/images/display/flower1.png"
import flower2 from "../assets/images/display/flower2.png"
import lantern1 from "../assets/images/display/lantern1.png"
import lantern2 from "../assets/images/display/lantern2.png"


const PartsContainer = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    user-select: none;
`
const introAnimation = keyframes`
    0% {
        transform: translateY(-50px);
    }
    100% {
        opacity: 1;
    }
`
const partBounceAnimation = keyframes`
    50% {
        transform: translateY(16px);
    }

    100% {
        transform: translateY(0px);
    }
`

const DecoPart = styled.img`
    animation: ${introAnimation} 2s 1 forwards, ${partBounceAnimation} 5s infinite;
    position: absolute;
    opacity: 0;
    transition: width 3s;
    filter: drop-shadow(0px 0px ${props => props.$darkMode ? '8vh rgba(255,0,0,0.3)' : '4vh rgba(172, 174, 222, 0.5)' });
    
    ${props => props.$darkMode ? (
        `&:nth-child(1) {
            width: max(40vw, 40vh);
            left: min(-4vw, -4vh);
        }

        &:nth-child(2) {
            width: max(22vw, 30vh);
            right: min(8vw, 8vh);
            bottom: max(2vw, 2vh);
            animation-delay: 0.2s, 1s;
            
        }`
    ): (
        `&:nth-child(1) {
            width: max(85vw, 85vh);
            left: min(-35vw, -35vh);
            bottom: min(-15vw, -15vh);
        }

        &:nth-child(2) {
            width: max(42vw, 50vh);
            right: min(-10vw, -15vh);
            top: -4vw;
            animation-delay: 0.2s, 1s;
            
        }`
    )}
`

function BackgroundLargeDeco () {
    const { darkMode } = useTheme();

    return (
        <PartsContainer id='flower'>
            <DecoPart $darkMode={darkMode} src={darkMode ? lantern1 : flower1} alt='' />
            <DecoPart $darkMode={darkMode} src={darkMode ? lantern2 : flower2} alt='' />
        </PartsContainer>
    )
}

export default BackgroundLargeDeco