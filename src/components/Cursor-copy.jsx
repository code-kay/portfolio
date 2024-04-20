import { useState, useEffect } from 'react';
import styled, {keyframes} from 'styled-components';
import { ToggleButton } from './Toggle';
import { useTheme } from '../context/ThemeContext'

const breathAnimation = keyframes`
    50% {
        transform: scale(2) translate(-30%, -30%);
    }
    100% {
        transform: scale(1) translate(-50%, -50%);
    }
`

const CursorContainer = styled.div`
    position: fixed;
    z-index: 1000;
    left: ${props => props.$mousePosition.x}px;
    top: ${props => props.$mousePosition.y}px;
    width: 26px;
    height: 26px;
    transform: translate(-50%, -50%);
    pointer-events: none;
    animation: ${breathAnimation} 2s infinite;

    & div {
        left: 0;
        top: 0;
    }

    @media (max-width: 768px) {
        display: none;
    }
`

function Cursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isWide, setIsWide] = useState(window.innerWidth > 768);
    const { darkMode } = useTheme();

    useEffect(() => {
        let animationFrameId;

        const handleMouseMove = (event) => {
        animationFrameId = requestAnimationFrame(() => {
            setMousePosition({ x: event.clientX, y: event.clientY });
        });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        cancelAnimationFrame(animationFrameId);
        };
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setIsWide(window.innerWidth > 768);
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            {isWide ? (
                <CursorContainer $mousePosition={mousePosition}>
                    <ToggleButton $darkMode={darkMode} >
                        <span></span>
                        <span></span>
                        <span></span>
                    </ToggleButton>
                </CursorContainer>
            ) : null}
            </>
    )
}

export default Cursor;