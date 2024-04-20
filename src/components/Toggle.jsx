import styled, { keyframes } from "styled-components"
import { useTheme } from '../context/ThemeContext'

const ToggleContainer = styled.div`
    display: inline-block;
    width: 50px;
    height: 32px;
    border: 1px solid rgba(172, 174, 222, 1);
    border-radius: 32px;
    background: ${props => props.$darkMode ? 'rgba(34, 34, 34, 0.15)' : 'rgba(255,255,255,0.3)'};
    position: relative;
    justify-self: end;

    @media (max-width: 768px) {
        width: 28px;
        height: 18px;
        border-radius: 18px;
        margin-right: 8px;
    }
`

const ToggleButtonAnimation = keyframes`
    33%{
        opacity: 0;
    }
    66%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
`

export const ToggleButton = styled.div`
    width: 26px;
    height: 26px;
    border-radius: 100%;
    position: absolute;
    left: ${props => props.$darkMode? 20 : 2}px;
    top: 2px;
    overflow: hidden;
    transition: 0.5s;

    & span {
        display: inline-block;
        width: 100%;
        height: 100%;
        position: absolute;
    }
    
    & span:nth-child(1){
        background: radial-gradient(${props => props.$darkMode ? 'rgb(132, 94, 211), rgba(91, 145, 212) 40%, rgb(179, 83, 150), transparent 70%' : 'rgb(255, 250, 221), rgba(255, 214, 221) 40%, rgb(210, 236, 255), transparent 70%'});
        opacity: 1;
        animation: ${ToggleButtonAnimation} 3s 0s linear infinite;
    }
    & span:nth-child(2){
        background: radial-gradient(${props => props.$darkMode ? 'rgb(179, 83, 150), rgb(132, 94, 211) 40%, rgba(91, 145, 212), transparent 70%' : 'rgb(210, 236, 255), rgb(255, 250, 221) 40%, rgba(255, 214, 221), transparent 70%'});
        opacity: 1;
        animation: ${ToggleButtonAnimation} 3s 1s linear infinite;
    }
    & span:nth-child(3){
        background: radial-gradient(${props => props.$darkMode ? 'rgba(91, 145, 212), rgb(179, 83, 150) 40%, rgb(132, 94, 211), transparent 70%' : 'rgba(255, 214, 221), rgb(210, 236, 255) 40%, rgb(255, 250, 221), transparent 70%'});
        opacity: 1;
        animation: ${ToggleButtonAnimation} 3s 2s linear infinite;
    }


    @media (max-width: 768px) {
        width: 14px;
        height: 14px;
        top: 1px;
        left: ${props => props.$darkMode? 11 : 2}px;
    }
`

function Toggle () {
    const { darkMode, toggleDarkMode } = useTheme();

    return (
        <ToggleContainer $darkMode={darkMode} onClick={()=>toggleDarkMode(!darkMode)}>
            <ToggleButton $darkMode={darkMode}>
                <span />
                <span />
                <span />
            </ToggleButton>
        </ToggleContainer>
    )
}

export default Toggle