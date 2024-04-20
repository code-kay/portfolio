import { forwardRef } from "react"
import styled from "styled-components"
import { useTheme } from "../context/ThemeContext"
import Toggle from "./Toggle"
import Title from "./Title"
import Nav from "./Nav"

const StyledHeader = styled.header`
    position: fixed;
    width: 100vw;
    height: 88px;
    background: linear-gradient(transparent, rgba(255, 255, 255, 0.2));
    border-bottom: 1px solid rgba(172, 174, 222, 1);
    display: grid;
    grid-template-columns: auto auto 1fr;
    justify-content: start;
    padding: 24px;
    place-items: center;
    gap: 18px;
    z-index: 10;

    @media (max-width: 768px) {
        height: 124px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding-bottom: 0;
        gap: 0px;
        align-items: end;
    }
`
const Blur = styled.div`
    width: 100vw;
    height:200px;
    position: fixed;
    top: 0;
    z-index: 9;
    backdrop-filter: blur(100px);
    background-color: ${props => props.$darkMode ? 'rgba(0,0,0,0.8)' : 'rgba(255,255,255,0.1)'};
    mask-image: linear-gradient(rgba(0,0,0,1), rgba(0,0,0,0));
    pointer-events: none;

    @media (max-width: 768px) {
        height: 240px;
    }
`

const Header = forwardRef(({currentPart, scrollPoints, ViewRef, refs}, ref) => {
    const { darkMode } = useTheme();

    return (
        <>
            <Blur $darkMode={darkMode} />
            <StyledHeader ref={ref}>
                <Toggle />
                <Title titleType='h1' content='AHYOON' />
                <Nav currentPart={currentPart} scrollPoints={scrollPoints} ViewRef={ViewRef} refs={refs}/>
            </StyledHeader>
        </>
    )
})

export default Header