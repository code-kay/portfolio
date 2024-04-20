import styled from 'styled-components'
import { useTheme } from "../context/ThemeContext"

const StyledFooter = styled.footer`
    position: relative;
    height: 36vw;
    overflow: hidden;
    filter: drop-shadow(0 0 12vw ${props => props.$darkMode ? 'rgba(220,80,60, 0.4)' : 'rgb(220, 180, 210)'});
`
const MountainContainer = styled.div`
    height: 100%;
    position: relative;
    bottom: 0;
`

const Mountain = styled.div`
    position: absolute;
    left: -20vw;
    background: ${props => props.$darkMode ? 'black' : '#b9badb'};
    width: 30vw;
    height: 30vw;
    border: 5vw solid ${props => props.$darkMode ? 'black' : '#b9badb'};
    border-radius: 2vw;
    transform: rotate(45deg) skew(-30deg, -30deg);
    transition: background-color 1s, border-color 1s, box-shadow 1s;

    &:nth-child(2) {
        left: 10vw;
        top: 5vw;
        width: 20vw;
        height: 20vw;
    }

    &:nth-child(3) {
        left: 35vw;
        width: 10vw;
        height: 10vw;
        top: 10vw;
        transform: rotate(45deg) skew(-15deg, -15deg);
    }

    &:nth-child(4) {
        left: 52vw;
        transform: rotate(45deg) skew(-20deg, -20deg);
    }
    &:nth-child(5) {
        left: 64vw;
        width: 30vw;
        height: 30vw;
        transform: rotate(45deg) skew(-27deg, -27deg);
    }
    &:nth-child(6) {
        left: 87vw;
        top: -5vw;
        width: 40vw;
        height: 40vw;
        transform: rotate(45deg) skew(-20deg, -20deg);
    }
    &:nth-child(7) {
        transform: none;
        width: 160vw;
        top: 15vw;
        left: -30vw;
        border-radius: 0;
        border: none;
    }
    &:last-child {
        transform: none;
        width: 160vw;
        top: 15vw;
        left: -30vw;
        border-radius: 0;
        border: none;
        box-shadow: inset 0vw -20vw 20vw ${props => props.$darkMode ? '#28365a' : '#ece7e2'};
        filter: blur(6vw);
    }
`

function Footer () {
    const { darkMode } = useTheme();

    return (
        <StyledFooter $darkMode={darkMode} >
            <MountainContainer >
                {new Array(8).fill(true).map((el, idx) => <Mountain key={'Mountain-'+idx} $darkMode={darkMode} />)}
            </MountainContainer>
        </StyledFooter>
    )
}

export default Footer