import styled, { keyframes } from "styled-components"
import { useTheme } from "../context/ThemeContext"

const introAnimation = keyframes`
    0% {
        transform: translateY(-50px);
    }
    100% {
        opacity: 1;
    }
`
const getTextShadow = (darkMode) => darkMode ? 'rgb(172, 174, 222)' : 'white'

const StyledIntro = styled.section`
    font-family: "Gowun Batang";
    font-size: max(3.5vw, 4vh);
    text-align: center;
    color: ${props => props.$darkMode ? 'rgb(226, 227, 255)' : 'rgb(172, 174, 222)' };
    text-shadow:
        -1px -1px 0 ${props => getTextShadow(props.$darkMode)},
        1px -1px 0 ${props => getTextShadow(props.$darkMode)},
        -1px 1px 0 ${props => getTextShadow(props.$darkMode)},
        1px 1px 0 ${props => getTextShadow(props.$darkMode)},
        0 0 10px white;
    position: absolute;
    width: 100vw;
    top: 40vh;
    left: 1vw;
    opacity: 0;
    animation: ${introAnimation} 2.5s 1s 1 forwards;
`

function Intro () {
    const { darkMode } = useTheme();

    return (
        <StyledIntro $darkMode={darkMode} >
            안녕하세요 :) 
            <br/> 프론트엔드 개발자
            <br/> 김아윤 입니다
        </StyledIntro>
    )
}

export default Intro