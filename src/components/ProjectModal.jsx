import styled, { keyframes } from "styled-components";
import paper from "../assets/images/display/paper.webp"
import { useRef, useState } from "react";
import { projects } from "../assets/content/projects";

const colors = ['#ed9c9c', '#f9dc6c', '#9de89e','skyblue', '#87a8eb', '#ca87eb', 'pink']

const modalOpen = keyframes`
    0% {
        transform: translateY(100%)
    }

    100% {
        top: 0;
    }
`
const modalClose = keyframes`
    0% {
        top: 0;
    }

    100% {
        transform: translateY(100%)
    }
`

const ModalContainer = styled.div`
    position: fixed;
    top:0;
    width: 100vw;
    height: 100vh;
    z-index: 10;
    display:flex;
    justify-content:center;
    align-items: start;
    overflow-X: hidden;
    overflow-Y: auto;
    scrollbar-width: none;
    filter: drop-shadow(30px 30px 100px rgba(0,0,0,0.9));
    animation: ${props => props.$isClosing ? modalClose : modalOpen} 1s 1 forwards;

    & * {
        font-family: "Gowun Batang";
        color: black;

        @media (max-width: 768px) {
            font-size: 14px;
        }
    }
`
const LeftModalButtonAnimaton = keyframes`
    30% {
        transform: translateX(-1vw) scale(1.3);
    }
    60% {
        transform: translateX(0);
    }
`
const RightModalButtonAnimaton = keyframes`
    30% {
        transform: translateX(1vw) scale(1.3);
    }
    60% {
        transform: translateX(0);
    }
`

const ModalButton = styled.button`
    position: sticky;
    color: rgb(226, 227, 255);
    font-size: 2.5rem;
    font-weight: 900;
    text-shadow: 0 0 8px rgb(172, 174, 222);
    z-index: 11;
    top: 50vh;
    padding: 0 3vw;

    &:nth-of-type(1) {
        animation: ${LeftModalButtonAnimaton} 3s infinite;
    }
    &:nth-of-type(2) {
        animation: ${RightModalButtonAnimaton} 3s infinite;
    }

`

const Modal = styled.article`
    margin: 10vh 0;
    width: 80vw;
    padding: max(4vw, 24px);
    background-image: url("${paper}");
    background-size: cover;
`

const ModalTitle = styled.h1`
    font-size: 2.3rem;
    letter-spacing: 2px;
`
const ModalSubTitle = styled.h2`
    font-size: 1.4rem;
    margin-top: 2rem;
`
const ModalContent = styled.p`
    & strong {
        display: inline-block;
        font-weight: 900;
        margin-top: 8px;
    }
    & span {
        font-family: 'Saira';
        font-size: 14px;
        font-weight: 200;
        display: inline-block;
        border: 1px solid black;
        background: gray;
        color: white;
        border-radius: 4px;
        padding: 0 6px;
        margin: 8px 4px 0 8px;
    }
`
const ModalImageContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 12px;
`
const ModalImage = styled.div`
    width: 50%;
    padding: 12px;

    & div {
        font-weight: 900;
        text-align: center;
    }

    & img {
        width: 100%;
        background-color: gray;
        border: 1px solid rgb(200,200,200);
        border-radius: 4px;
    }

    & video {
        width: 100%;
        background-color: gray;
        border: 1px solid rgb(200,200,200);
        border-radius: 4px;
    }

    @media (max-width: 768px) {
        width: 100%;
    }
`

const ModalStackContainer = styled.ul`
        list-style-type: none;
        padding: 12px;
        display: flex;
        flex-wrap: wrap;
        gap: 12px;


        & li {
            font-family: 'Saira';
            font-weight: 400;
            font-size: 14px;
            padding: 0 8px;
            border-radius: 4px;
            border: 1px solid gray;

            &:hover {
                filter: brightness(1.1);
            }
        }

        @media (max-width: 768px) {
            gap: 8px;

            & li {
                font-size: 10px;
                padding: 0 3px;
                border-radius: 2px;
            }
        }
`


const ModalLinkContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 12px;
    row-gap: 4px;
    column-gap: 16px;

    & a {
        transition: 0.2s;
        padding-right: 4px;
        text-decoration: none;
        border-bottom: 1px solid transparent;

        &:hover {
            color: gray;
            border-bottom: 1px solid gray;
        }
    }

    & a::before {
        content: '🔗 '
    }


`
const ModalWorkList = styled.ul`
    padding: 12px 12px 12px 24px;

    & .title-ul {
        margin-top: 4px;
        font-weight: 900;
    }

    & li {
        margin-bottom: 8px;
        font-weight: 300;
    }

    & ul {
        padding:  8px;
    }
`

function ProjectModal ({ modalProject, setModalProject, setIsModalOn }) {
    const [isClosing, setIsClosing] = useState(false);
    const currentProject = projects[modalProject]
    const ModalContainerRef = useRef(null)

    return (
        <>
        <ModalContainer ref={ModalContainerRef}
            $isClosing={isClosing}
            onClick={() => {
                ModalContainerRef.current.scrollTo({top:0})
                setIsClosing(true)
                setTimeout(() => setIsModalOn(false), 1000)
            }}
        >
            <ModalButton onClick={(e) => {
                e.stopPropagation()
                ModalContainerRef.current.scrollTo({top:0})
                setModalProject(modalProject ? modalProject-1 : projects.length-1)
            }} >{'<'}</ModalButton>

            <Modal onClick={(e)=>e.stopPropagation()}>
                <ModalTitle>
                    {currentProject.name}
                </ModalTitle>
                <hr />
                <ModalContent>
                    {currentProject.explanation.text}
                </ModalContent>
                <ModalContent>
                    <strong>프로젝트 기간:</strong> {currentProject.explanation.duration}
                </ModalContent>
                <ModalContent>
                    {currentProject.explanation.type.map((el, idx) => <span key={currentProject.name + '-explanation_' + idx} >{el}</span>)}
                </ModalContent>
                <ModalImageContainer>
                    {currentProject.images ? currentProject.images.map((image, idx) => (
                        <ModalImage key={currentProject.name + '_image_' + idx}>
                            <img src={image.img} alt='' />
                            <div>✨{image.text}✨</div>
                        </ModalImage>
                    )) : currentProject.videos.map((video, idx) => (
                        <ModalImage key={currentProject.name + '_video_' + idx}>
                            <video src={video.vd} autoPlay loop muted playsInline alt='' />
                            <div>✨{video.text}✨</div>
                        </ModalImage>
                    ))}
                </ModalImageContainer>
                <ModalSubTitle>
                    사용 스택
                </ModalSubTitle>
                <hr />
                <ModalStackContainer>
                    {currentProject.usedSkills.map((skill, idx) => <li style={{backgroundColor: colors[idx % colors.length]}} key={skill}>{skill.toUpperCase()}</li>)}
                </ModalStackContainer>
                <ModalSubTitle>
                    관련 링크
                </ModalSubTitle>
                <hr />
                <ModalLinkContainer>
                    {currentProject.links.deploy ? <a target="_blank" href={currentProject.links.deploy}>프로젝트 배포 링크</a> : null}
                    {currentProject.links.github ? <a target="_blank" href={currentProject.links.github}>Github Repository</a> : null}
                    {currentProject.links.other ? (
                        Object.keys( currentProject.links.other )
                            .map(key => <a key={key} target="_blank" href={currentProject.links.other[key]}>{key}</a>)
                    ) : null}
                </ModalLinkContainer>
                <ModalSubTitle>
                    작업 내용
                </ModalSubTitle>
                <hr />
                <ModalWorkList>
                    {Object.keys(currentProject.myWork).map((list) => (
                    <li className='title-ul' key={list} >
                        {list}
                        <ul>
                            {currentProject.myWork[list].map((work, idx) => <li key={currentProject.name + '_work_' + idx}>{work}</li>)}
                        </ul>
                    </li>
                    ))}
                </ModalWorkList>
            </Modal>
        <ModalButton onClick={(e) => {
            e.stopPropagation()
            ModalContainerRef.current.scrollTo({top:0})
            setModalProject(modalProject === projects.length-1 ? 0 : modalProject + 1)
        }}>{'>'}</ModalButton>
        </ModalContainer>
        </>
    )

}

export default ProjectModal