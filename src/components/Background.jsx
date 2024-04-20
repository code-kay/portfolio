import styled, { keyframes } from 'styled-components'
import { useTheme } from '../context/ThemeContext';
import BackgroundSmallDeco from './BackgroundSmallDeco'

const circle1Animation = keyframes`
    33%{
        top: -20%;
        left: -10%;
        transform: scale(0.8);
    }
    66%{
        top: 60%;
        left: 20%;
        transform: scale(0.7);
    }
    100%{
        top: 0%;
        left: 50%;
    }
`
const circle2Animation = keyframes`
    33%{
        top: 70%;
        left: 20%;
        transform: scale(0.7);
    }
    66%{
        top: 0%;
        left: 60%;
        transform: scale(1.4);
    }
    100%{
        top: 0;
        left: 0;
    }
`
const circle3Animation = keyframes`
    33%{
        top: 20%;
        left: 70%;
        transform: scale(1.2);
    }
    66%{
        top: 0%;
        left: -10%;
        transform: scale(1.4);
    }
    100%{
        top: 50%;
        left: 10%;
    }
`

const BackgroundContainer = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    overflow: hidden;
    z-index: -1;
    ${props => props.$darkMode ? 'background-color: black;' : ''}
    transition: background-color 2s;

    & div:nth-child(1) {
        top: 0%;
        left: 50%;
        animation: ${circle1Animation} 15s linear infinite;
    }
    & div:nth-child(2) {
        top: 0;
        left: 0;
        animation: ${circle2Animation} 15s linear infinite;
    }
    & div:nth-child(3) {
        top: 50%;
        left: 10%;
        animation: ${circle3Animation} 15s linear infinite;    
    }
`

const Blur = styled.div`
    background-color: ${props => props.$darkMode ? 'rgba(0, 0, 0, 0.45)' : 'rgba(255, 255, 255, 0.45)' };
    backdrop-filter: blur(200px);
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    transition: background-color 1s;
`

const Circle = styled.div`
    background-color: ${props => props.color || 'transparent'};
    height: ${props => props.height || 0};
    width: ${props => props.width || 0};
    border-radius: 100%;
    position: absolute;
    transition: background-color 1s;
`

function Background() {
    const { darkMode } = useTheme();

    return (
        <BackgroundContainer id='background' $darkMode={darkMode} aria-hidden={true} >
            <Circle color={darkMode ? 'rgb(103, 8, 74)' : 'skyblue'} width={'80vw'} height={'70vw'} />
            <Circle color={darkMode ? 'rgb(12, 52, 103)' : 'pink'} width={'50vw'} height={'50vh'} />
            <Circle color={darkMode ? 'rgb(4, 80, 65)' : 'rgba(255, 255, 166, 0.8)'} width={'50vh'} height={'50vh'}></Circle>
            <Blur $darkMode={darkMode}/>
            <BackgroundSmallDeco />
        </BackgroundContainer>
    )
}

export default Background