import { useEffect, useState } from "react";
import styled from "styled-components";

const NavContainer = styled.nav`
    display: flex;
    gap: 24px;
    justify-self: end;
    align-self: end;
    margin-bottom: -11px;

    @media (max-width: 768px) {
        grid-column: 1 / 4;
        grid-row: 2 / 3;
        justify-self: center;
        margin-bottom: 0px;
        margin: 0 200px;
    }
`

const NavButton = styled.button`
    font-size: 20px;
    font-weight: 200;
    padding: 12px 10px;
    border-bottom: 4px solid transparent;
    ${props => props.$isSelected ? 'border-bottom: 4px solid rgba(172, 174, 222, 1);' : ''}
    transition: color 0.3s, border-bottom-color 0.3s, border-bottom-width 0.3s;
    user-select: none;

    &:hover {
        ${props => props.$isSelected ? '' : 'color: rgba(172, 174, 222, 0.5);'}
        transition: color 0.3s, border-bottom-color 0.3s, border-bottom-width 0.3s;
    }

    @media (max-width: 768px) {
        font-size: 14px;
        padding: 4px 10px;
        cursor: pointer;
    }
`

function Nav ({currentPart, scrollPoints, ViewRef, refs}) {
    const navArr = ['Information', 'Project', 'Contact']
    const [ selected, setSelected ] = useState(0)
    const [isWide, setIsWide] = useState(window.innerWidth > 768);
    const {InformationRef, ProjectRef} = refs

    useEffect(()=> {
        setSelected(currentPart)
    }, [currentPart])

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
        <NavContainer>
            {navArr.map((el, idx) => <NavButton key={'NavButton_' + el} $isSelected={selected === idx} onClick={() => {
                setSelected(idx)
                ViewRef.current.scrollBy({top: scrollPoints[el + 'Top'] - (isWide ? 120 : 150)})
            }}>{el.toUpperCase()}</NavButton>)}
        </NavContainer>
    )
}

export default Nav