import { useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import { skills } from "../assets/content/skills";
import SkillExplanationBubble from './SkillExplanationBubble'

const TabContainer = styled.ul`
    list-style: none;
    display: flex;
    gap: 48px;
    font-size: 20px;

    @media (max-width: 768px) {
        font-size: 14px;
        gap: 8px;
    }
`

const TabButton = styled.li`
    padding: 0 10px;
    border-bottom: 3px solid transparent;
    ${props => props.$isSelected ? 'border-bottom: 3px solid rgb(172, 174, 222);' : ''}
    transition: text-shadow 0.3s, border-bottom-color 0.3s;
    user-select: none;

    &:hover {
        ${props => props.$isSelected ? '' : 'text-shadow: 0 0 8px rgb(172, 174, 222);'}
        transition: text-shadow 0.3s, border-bottom-color 0.3s;
    }

    @media (max-width: 768px) {
        cursor: pointer;
    }
`

const TabPanel = styled.ul`
    position: relative;
    z-index: 5;
    width: 84vw;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 24px;
`
const buttonRenderAnimation = keyframes`
    0% {
        transform: translateX(-10px);
    }

    100% {
        transform: translateX(0px);
        opacity: 1;
    }
`

const buttonHoverAnimation1 = keyframes`
    30% {
        transform: scale(0.9);
        border: 3px solid transparent;
    }

    100% {
        transform: scale(1.1);
        opacity: 1;
        border: 3px solid rgb(172, 174, 222);
        box-shadow: 0 0 20px rgb(172, 174, 222);
    }
`
const buttonHoverAnimation2 = keyframes`
    50% {
        box-shadow: 0 0 10px rgb(172, 174, 222);
    }

    100% {
        box-shadow: 0 0 20px rgb(172, 174, 222);
    }
`


const SkillButton = styled.li`
    list-style: none;
    width: 100px;
    height: 100px;
    background-color: white;
    background-image: url(${props => props.$img || ''});
    background-size: cover;
    background-position: center;
    border-radius: 100%;
    box-shadow: 0 0 12px rgb(172, 174, 222);
    ${props => props.$renderAnimation ? css`opacity: 0; animation: ${buttonRenderAnimation} 0.5s forwards;` : ''}
    

    @media (max-width: 768px) {
        width: 60px;
        height: 60px;
    }

    &:hover {
        animation: ${buttonHoverAnimation1} .5s forwards, ${buttonHoverAnimation2} 1s infinite;
    }
`

function Tab () {
    const tabs = ['LANGUAGE', 'FRONT-END', 'BACK-END', 'OTHERS']
    const [ selected, setSelected ] = useState(0)
    const [ hoveredSkill, setHoveredSkill ] = useState('')
    const [ renderAnimation, setRenderAnimation ] = useState(true)
    
    useEffect(()=> {
        setTimeout(()=> setRenderAnimation(false), 500)
        return ()=> setRenderAnimation(true)
    }, [selected])

    return (
        <>
            <TabContainer>
                {tabs.map((el, idx) => <TabButton key={'TabButton_' + el} $isSelected={selected === idx} onClick={()=> setSelected(idx)}>{el}</TabButton>)}
            </TabContainer>
            <TabPanel>
                {Object.keys(skills).filter(skill => skills[skill].type === tabs[selected])
                                    .map((skill) => (
                                    <SkillButton 
                                        key={'SkillButton_' + skill} 
                                        $img={skills[skill].img} 
                                        $renderAnimation={renderAnimation}
                                        onMouseEnter={() => setHoveredSkill(skill)}
                                        onMouseLeave={() => setHoveredSkill('')}
                                    >
                                        { hoveredSkill === skill ? <SkillExplanationBubble skillInfo={skills[skill]} /> : null }
                                    </SkillButton>
                                    ))}
            </TabPanel>
        </>
    )
}

export default Tab