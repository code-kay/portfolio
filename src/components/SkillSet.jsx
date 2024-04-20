import styled from "styled-components";
import Title from "./Title";
import Tab from "./Tab";

const SkillSetContainer = styled.div`
    display: grid;
    place-items: center;
    gap: 24px;

    @media (max-width: 768px) {
        gap: 16px;
    }
`

function SkillSet () {
    return (
        <SkillSetContainer>
            <Title titleType='h3' content='SKILL SET' />
            <Tab />
        </SkillSetContainer>
    )
}

export default SkillSet