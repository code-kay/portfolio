import styled, { keyframes } from "styled-components"

const explanationAnimaton = keyframes`
    100% {
        opacity: 1;
    }
`

const BubbleContainer = styled.div`
    width: 200%;
    padding: 12px;
    background-color: white;
    border-radius: 8px;
    display: grid;
    gap: 10px;
    position: relative;
    top: 95%;
    left: -44%;
    opacity: 0;

    filter: drop-shadow(0px 0px 1px rgb(172, 174, 222)) drop-shadow(0px 0px 12px rgb(172, 174, 222));
    animation: ${explanationAnimaton} .5s .2s forwards;

    &::before {
        content: '';
        border-bottom: 24px solid white;
        border-left: 12px solid transparent;
        border-right: 12px solid transparent;
        position: absolute;
        top: -10px;
        left: 32%;
    }
    & * {
        color: black;
    }

    @media (max-width: 768px) {
        padding: 6px;
        gap: 4px;

        &::before {
            border-bottom: 12px solid white;
            border-left: 6px solid transparent;
            border-right: 6px solid transparent;
        }
    }
`

const SkillName = styled.div`
    font-size: 18px;
    @media (max-width: 768px) {
        font-size: 12px;
    }
`

const SkillProgressBar = styled.div`
    width: 100%;
    height: 16px;
    border: 1px solid rgb(172, 174, 222);
    border-radius: 6px;
    padding: 2px;
    position: relative;

    & div:nth-child(1) {
        background: linear-gradient(to right, rgba(254, 203, 236, 1), rgba(255, 227, 184, 1), rgba(205, 255, 210, 1), rgba(210, 236, 255, 1));
        border-radius: 4px;
        width: 100%;
        height: 100%;
    }
    & div:nth-child(2) {
        position: absolute;
        top: 0;
        right: 2px;
        border-radius: 2px;
        width: ${props => 100 - props.$proficiency}%;
        height: 100%;
        background-color: white;
    }
    & div:nth-child(2)::before {
        content: ')';
        font-weight: 900;
        font-size: 12px;
        position: relative;
        top: -3px;
        left: -2px;
        color: white;
    }

    @media (max-width: 768px) {
        height: 14px;
        & div:nth-child(2)::before {
            font-size: 10px;
            top: -5px;
        }
    }
`

const SkillExplanation = styled.div`
    font-family: "Gowun Batang";
    font-size: 14px;

    @media (max-width: 768px) {
        font-size: 10px;
    }
`

function SkillExplanationBubble ({skillInfo}) {
    return (
        <BubbleContainer>
            <SkillName>
                {skillInfo.name}
            </SkillName>
            <SkillProgressBar $proficiency={skillInfo.proficiency} >
                <div></div>
                <div></div>
            </SkillProgressBar>
            <SkillExplanation>
                {skillInfo.explanation}
            </SkillExplanation>
        </BubbleContainer>
    )
}

export default SkillExplanationBubble