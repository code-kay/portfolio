import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

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
    ${props => props.$isSelected ? 'border-bottom: 4px solid rgb(172, 174, 222);' : ''}
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

const TopButtonAnimation = keyframes`
    20% {
        transform: translateY(min(-8px, -1vw));
    }

    40% {
        transform: translateY(0);
    }
`

const TopButton = styled.button `
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: max(48px, 5vw);
    height: max(48px, 5vw);
    right: 2.5vw;
    bottom: 2.5vw;
    animation: ${TopButtonAnimation} 4s infinite;
    filter: drop-shadow(0 0 2vw rgba(255, 255, 255, 0.8));

    & div {
        color: white;
        position: absolute;
        transition: transform .5s;
    }

    & div:nth-child(1) {
        width: 100%;
        height: 100%;
        border-radius: 100%;
        background-color: rgb(172, 174, 222);
    }

    & div:nth-child(2) {
        top: 0;
        border-left: max(24px, 2.5vw) solid transparent;
        border-right: max(24px, 2.5vw) solid transparent;
        border-bottom: max(24px, 2.5vw) solid rgb(172, 174, 222);
        &::after {
            content:'';
            position: absolute;
            transform: translateX(min(-14px, -1.5vw));
            top: max(22px, 2.4vw);
            background-color: rgb(172, 174, 222);
            width: max(28px, 3vw);
            height: max(24px, 2.5vw);
        }
        transform: scale(0);
    }

    & div:last-child {
        position: absolute;
        text-align: center;
    }

    &:hover {
        & div:nth-child(1) {
            transform: scale(0);
        }
        & div:nth-child(2) {
            transform: scale(1);
        }

    }
`

function Nav ({currentPart, scrollPoints, ViewRef, refs}) {
    const navArr = ['Information', 'Project', 'Contact']
    const [ selected, setSelected ] = useState(0)

    useEffect(()=> {
        setSelected(currentPart)
    }, [currentPart])

    return (
        <NavContainer>
            {navArr.map((el, idx) => <NavButton key={'NavButton_' + el} $isSelected={selected === idx} onClick={() => {
                setSelected(idx)
                ViewRef.current.scrollBy({top: scrollPoints[`ref${idx}Top`] - 120 })
            }}>{el.toUpperCase()}</NavButton>)}
            <TopButton onClick={() => ViewRef.current.scrollTo({top:0})}>
                <div></div>
                <div></div>
                <div>TOP</div>
            </TopButton>
        </NavContainer>
    )
}

export default Nav