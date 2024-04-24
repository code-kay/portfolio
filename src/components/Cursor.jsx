import { useState, useEffect, useMemo } from 'react';
import styled, {keyframes} from 'styled-components';
import { ToggleButton } from './Toggle';
import { useTheme } from '../context/ThemeContext';
import { useMousePosition } from '../context/MousePositonContext';

const breathAnimation = keyframes`
    50% {
        transform: scale(2);
    }
    100% {
        transform: scale(1);
    }
`;

// attrs로 정해준 값은 inline 속성으로 적용되므로, class를 이용하는 StyledComponents가 attrs로 전달되는 속성을 다루기 위해서 굳이 클래스 명을 바꿀 필요가 없어진다.
// 최적화 굳굳~~~
const CursorContainer = styled.div.attrs(props => ({
    style: {
        transform: `translate(${props.$mousePosition.x - 13}px, ${props.$mousePosition.y - 13}px) scale(1)`,
    }
}))`
    position: fixed;
    top:0;
    z-index: 1000;
    width: 26px;
    height: 26px;
    pointer-events: none;

    @media (max-width: 768px) {
        display: none;
    }
`;

const CursorPointer = styled(ToggleButton)`
    animation: ${breathAnimation} 2s infinite;
    left: 0;
`

function Cursor() {
    const [isWide, setIsWide] = useState(window.innerWidth > 768);
    const mousePosition = useMousePosition()
    const { darkMode } = useTheme();

    useEffect(() => {
        const handleResize = () => {
            setIsWide(window.innerWidth > 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // toggleButton이 받는 props가 변하지 않아도 Cursor가 마우스 커서 위치 변경 때문에 리렌더링 될 때 같이 리렌더링 되는 현상을 막아줄 수 있다.
    // useMemo.. 너 이렇게 쓰는거였구나?! 함수를 왜 저장하나 했어.
    const toggleButtonMemo = useMemo(() => (
        <CursorPointer $darkMode={darkMode}>
            <span></span>
            <span></span>
            <span></span>
        </CursorPointer>
    ), [darkMode]);

    return (
        <>
            {isWide && (
                <CursorContainer id='cursor' $mousePosition={mousePosition}>
                    {toggleButtonMemo}
                </CursorContainer>
            )}
        </>
    );
}

export default Cursor;
