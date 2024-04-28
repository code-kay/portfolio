import { useEffect, useRef, useState } from "react";
import styled, { keyframes, css } from "styled-components";
import paperPattern from "../assets/images/display/paperPattern.webp"
import bear from "../assets/images/display/bear-transparent.webp"
import { useMousePosition } from "../context/MousePositonContext";
import { EmailForm } from "./EmailForm";

const CardHoverAnimation = keyframes`
    30%{
        transform: scale(1.05);
        filter: drop-shadow(0.5vw 0.5vw 4vw rgba(172, 174, 222, 0.8));

    }
    60% {
        transform: scale(1);
    }
`

const CardHoverBefore = keyframes`
    30% {
        opacity: 0;
    }
    100% {
        opacity: 100;
    }
`

const Card = styled.section.attrs(props => (
    props.$center.y === 0 || props.$isHovering || props.$isFliping ? {
        style: {
            transform: `rotateX(0deg) rotateY(0deg)`,
            filter: `drop-shadow(0 0 4vw rgba(172, 174, 222, 0.5))`,
            transition: `transform 0.3s, filter 0.3s, box-shadow 0.3s`,
            border: `none`
        }
    } : {
        style: {
            transform: `rotateX(${(props.$mousePosition.y + props.$viewScrollTop - props.$center.y) / 20}deg) rotateY(${(props.$mousePosition.x - props.$center.x) / 20}deg)`,
            borderLeft: `${(props.$mousePosition.x - props.$center.x) / 1200}vw solid rgba(100,100,100,0.5)`,
            borderRight: `${(props.$center.x - props.$mousePosition.x) / 1200}vw solid rgba(100,100,100,0.5)`,
            borderTop: `${(props.$mousePosition.y + props.$viewScrollTop - props.$center.y) / 1000}vw solid white`,
            borderBottom: `${(props.$center.y - props.$viewScrollTop - props.$mousePosition.y) / 1000}vw solid rgba(100,100,100,0.7)`
        }
    }
))`
    @font-face {
        font-family: 'KNPSKkomi-Regular00';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/KNPSKkomi-Regular00.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
    width: 44vw;
    height: 28vw;
    border-radius: 10px;
    perspective: 1000px;
    filter: drop-shadow(0 0 2vw rgba(172, 174, 222, 0.5));

    & * {
        font-family: 'KNPSKkomi-Regular00';
        color: #3e507f;
        text-align: end;
        text-shadow:
            -0.12vw -0.12vw 0 white,  
            0.12vw -0.12vw 0 white,
            -0.12vw  0.12vw 0 white,
            0.12vw  0.12vw 0 white;
    }
    
    & form * {
        text-align: start;
    }

    button {
        text-align: center;
    }

    &:hover {
        transform: rotateX(0deg) rotateY(0deg);
        ${props => props.$isEmailOn ? '' : css`animation: ${CardHoverAnimation} 1.5s infinite;`}
        ${props => props.$isEmailOn ? '' : css`
        &::after {
            font-family: "Gowun Batang";
            content: '클릭해서 메일 보내기!';
            opacity: 0;
            position: absolute;
            left: -12px;
            bottom: 12px;
            padding: 8px 12px;
            background: rgb(172, 174, 222);
            box-shadow: 2px 2px 8px rgba(172, 174, 222);
            color: white;
            border-radius: 4px;
            border: 1px solid white;
            animation: ${CardHoverBefore} 1s 1 forwards;
        }
        `}
        
    }
    @media (max-width: 768px) {
        width: 330px;
        height: 220px;

        &::before {
            bottom: 125px;
            border-bottom: 6px groove #8899c5;
        }
    }
`

const CardFront = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    padding: 3vw;
    background-color: #ece7e2;
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    justify-content: end;
    gap: 1vw;
    backface-visibility: hidden;
    transform: ${props => props.$isEmailOn ? 'rotateY(-180deg);' : 'rotateY(0deg);'};
    transition: transform 1s;
    filter: drop-shadow(0.5vw 0.5vw 2vw rgba(172, 174, 222, 0.5));

    &::before {
        position: absolute;
        border-radius: 10px 10px 0 0;
        content: '';
        width: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 58%;
        background-color: #3e507f;
        border-bottom: 1vw groove #8899c5;
        z-index: -1;
    }
    
    @media (max-width: 768px) {
        padding: 23px;
    }
`
const CardBack = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 10px;
    transform: ${props => props.$isEmailOn ? 'rotateY(0deg);' : 'rotateY(180deg);'};
    transition: transform 1s;
    filter: drop-shadow(0.5vw 0.5vw 2vw rgba(172, 174, 222, 0.5));
`



const CardSection = styled.section`
`

const CardName = styled.h1`
    font-size: 3.6vw;
    color: white;
        text-align: end;
        text-shadow:
            -0.12vw -0.12vw 0 #8899c5,  
            0.12vw -0.12vw 0 #8899c5,
            -0.12vw  0.12vw 0 #8899c5,
            0.12vw  0.12vw 0 #8899c5;

    @media (max-width: 768px) {
        font-size: 26px;
    }
`

const CardTitle = styled.h2`
    font-size: 2.2vw;
    @media (max-width: 768px) {
        font-size: 17px;
    }
`

const CardContent = styled.p`
    font-size: 1.6vw;
    margin-top: -0.5vw;
    @media (max-width: 768px) {
        font-size: 12.5px;
    }
`

const CardImg = styled.div`
        position: absolute;
        left: 6%;
        top: 8%;
        width: 18vw;
        height: 18vw;
        background: white;
        border-radius: 100%;
        overflow: hidden;
        border: 1vw solid #3e507f;


    & img {
        width: 16vw;
        object-fit: cover;
    }

    @media (max-width: 768px) {
        width: 140px;
        height: 140px;
        border: 8px solid #3e507f;

        & img {
            width: 124px
        }
    }
`

const PaperPattern = styled.div`
position: absolute;
border-radius: 10px;
background-image: url('${paperPattern}');
width: 100%;
height: 100%;
top: 0;
left: 0;
mix-blend-mode: multiply;
filter: opacity(0.8) brightness(1.1);
`



function ContactCard ({ViewRef}) {
    const mousePosition = useMousePosition()
    const [center, setCenter] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isFliping, setIsFliping] = useState(false)
    const [isEmailOn, setIsEmailOn] = useState(false)
    const CardRef = useRef(null)

    useEffect(() => {
        const setCardCenter = () => {
            if (CardRef.current) {
                const rect = CardRef.current.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = ViewRef.current.scrollTop + rect.top + rect.height / 2;
                setCenter({ x: centerX, y: centerY });
            }
        }
        setCardCenter()
        window.addEventListener('resize', setCardCenter)
        return () => window.removeEventListener('resize', setCardCenter)
    }, [CardRef]);
    

    return(
        <Card ref={CardRef}
            $mousePosition={mousePosition}
            $viewScrollTop={ViewRef.current ? ViewRef.current.scrollTop : 0}
            $center={center}
            $isHovering={isHovering}
            $isEmailOn={isEmailOn}
            $isFliping={isFliping}
            onMouseEnter={()=> setIsHovering(true)}
            onMouseLeave={()=> setIsHovering(false)}
            onClick={() => {
                setIsEmailOn(true)
                setIsFliping(true)
                setTimeout(() => setIsFliping(false), 1000)
            }}
        >
            <CardFront $isEmailOn={isEmailOn}>
                <CardImg>
                    <img src={bear} alt="profile image" />
                </CardImg>
                <CardSection>
                    <CardName>Ahyoon Kim</CardName>
                    <CardContent>Front-End Developer</CardContent>
                </CardSection>
                <CardSection>
                    <CardTitle>E-mail</CardTitle>
                    <CardContent>kay8563@gmail.com</CardContent>
                </CardSection>
                <CardSection>
                    <CardTitle>Github</CardTitle>
                    <CardContent>https://github.com/code-kay</CardContent>
                </CardSection>
                <PaperPattern></PaperPattern>
            </CardFront>
            <CardBack $isEmailOn={isEmailOn}>
                <EmailForm setIsEmailOn={setIsEmailOn} isEmailOn={isEmailOn} CardRef={CardRef} setIsFliping={setIsFliping} />
            </CardBack>
        </Card>
    )
}

export default ContactCard