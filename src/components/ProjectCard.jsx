import { useState } from "react";
import styled, { keyframes } from "styled-components";
import ProjectModal from "./ProjectModal";
import { projects } from "../assets/content/projects";

const CardContainer = styled.div`
    width: 90vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 8vw;
    
    @media (max-width: 768px) {
        gap: max(6vw, 24px);
    }
`

const CardHoverBefore =  keyframes`
    30% {
        opacity: 0;
    }
    100% {
        opacity: 100;
    }
`
const CardHoverAfter =  keyframes`
    50% {
        transform:translateX(4px)
    }
    100% {
        transform:translateX(0)
    }
`

const Card = styled.section`
    position: relative;
    width: 24vw;
    height: 40vw;
    background-color: white;
    /* rgb(235 234 230) */
    box-shadow: 0 0 8px rgb(172, 174, 222);
    display: grid;
    grid-template-rows: 1fr auto 3fr;
    place-items: center;
    transition: transform 0.5s, box-shadow 0.5s;

    & * {
        font-family: "Gowun Batang";
        color: black;
        font-weight: 300;
    }

    &:hover {
        transform: scale(1.1);
        box-shadow: 0 0 16px rgb(172, 174, 222);

        & div:first-child {
            opacity: 0;
        }
        & div:last-child {
            opacity: 0;
        }

        &::before {
            font-family: "Gowun Batang";
            position: absolute;
            opacity: 0;
            content: "클릭해서 자세히 보기";
            color: white;
            background-color: rgb(172, 174, 222);
            border: 1px solid white;
            border-radius: 4px;
            padding: 4px 24px 4px 12px;
            bottom: 10px;
            right: -10px;
            box-shadow: 2px 2px 8px rgba(172, 174, 222);
            animation: ${CardHoverBefore} 1s 1 forwards;
        }

        &::after {
            font-family: "Gowun Batang";
            position: absolute;
            color: white;
            opacity: 1;
            content: ">";
            bottom: 15px;
            right: 0px;
            animation: ${CardHoverBefore} 1s 1 forwards, ${CardHoverAfter} 1s infinite;
        }
    }

    @media (max-width: 768px) {
        width: 156px;
        height: 260px;

        &:hover::before {
            font-size: 12px;
            bottom: 6px;
        }

        &:hover::after {
            bottom: 9px;
        }
    }
`

const CardTitle = styled.h3`
    font-size: 2.2vw;

    @media (max-width: 768px) {
        font-size: 14px;
    }
`

const CardImg = styled.img`
    width: 22vw;
    height: 24vw;
    object-fit: cover;
    background-color: gray;
    border: 1px solid rgb(200,200,200);

    @media (max-width: 768px) {
        width: 140px;
        height: 150px;
    }
`

const CardContent = styled.p`
    font-size: min(24px, 1.6vw);
    padding: 1.2vw 1.6vw;
    height: 100%;
    white-space: pre-line;
    
    @media (max-width: 768px) {
        font-size: 12px;
    }
`

const Tape = styled.div`
    position: absolute;
    width: 8vw;
    height: 2vw;
    background-color: rgba(216, 201, 179, 0.5);
    border-left: 2px dashed rgba(216, 201, 179, 0.3);
    border-right: 2px dashed rgba(216, 201, 179, 0.3);
    opacity: 1;
    transition: opacity 0.5s;
    &:nth-of-type(1){
        top: 0;
        right: -2vw;
        transform: rotate(30deg)
    }
    &:nth-of-type(2){
        left: -2vw;
        bottom: 0;
        transform: rotate(30deg)
    }

    @media (max-width: 768px) {
        width: 64px;
        height: 16px;

        &:nth-of-type(1){
        right: -16px;
        transform: rotate(30deg)
        }
        &:nth-of-type(2){
            left: -16px;
            bottom: 0;
            transform: rotate(30deg)
        }
    }
`

function ProjectCard () {
    const [ isModalOn, setIsModalOn ] = useState(false)
    const [ modalProject, setModalProject ] = useState(-1)
    return (
        <>
            <CardContainer>
                {projects.map((project, idx) => (
                    <Card key={'Card_' + idx} onClick={()=>{
                        setIsModalOn(true)
                        setModalProject(idx)
                    }} >
                        <Tape />
                        <CardTitle>{project.name}</CardTitle>
                        <CardImg src={project.images[0].img}/>
                        <CardContent>{project.explanation}</CardContent>
                        <Tape />
                    </Card>
                ))}
            </CardContainer>
            {isModalOn ? <ProjectModal modalProject={modalProject} setModalProject={setModalProject} setIsModalOn={setIsModalOn} /> : null}
        </>
    )
}

export default ProjectCard