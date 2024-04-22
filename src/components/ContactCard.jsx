import { useEffect, useRef, useState } from "react";
import styled, { keyframes, css } from "styled-components";
import paperPattern from "../assets/images/display/paperPattern.png"
import bear from "../assets/images/display/bear-transparent.png"
import { useMousePosition } from "../context/MousePositonContext";

const CardHoverAnimation = keyframes`
    30%{
        transform: scale(1.05);
        filter: drop-shadow(0.5vw 0.5vw 4vw rgba(172, 174, 222, 0.8));

    }
    60% {
        transform: scale(1);
    }
`

const Card = styled.section.attrs(props => (
    props.$center.y === 0 || props.$isHovering ? {
        style: {
            transform: `rotateX(0deg) rotateY(0deg)`,
            filter: `drop-shadow(0 0 4vw rgba(172, 174, 222, 0.5))`,
            boxShadow: `0 0 0.3vw 0.3vw rgba(172, 174, 222)`,
            transition: `transform 0.3s, filter 0.3s, box-shadow 0.3s`,
        }
    } : {
        style: {
            transform: `rotateX(${(props.$mousePosition.y + props.$viewScrollTop - props.$center.y) / 20}deg) rotateY(${(props.$mousePosition.x - props.$center.x) / 20}deg)`,
            borderRight: `${(props.$mousePosition.x - props.$center.x) / 1200}vw solid rgba(100,100,100,0.5)`,
            borderLeft: `${(props.$center.x - props.$mousePosition.x) / 1200}vw solid rgba(100,100,100,0.5)`,
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
    position: relative;
    width: 44vw;
    height: 28vw;
    padding: 3vw;
    background-color: #ece7e2;
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: end;
    gap: 1vw;
    filter: drop-shadow(0.5vw 0.5vw 2vw rgba(172, 174, 222, 0.5));


    &::before {
        position: absolute;
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

    &:hover {
        transform: rotateX(0deg) rotateY(0deg);
        animation: ${CardHoverAnimation} 1.5s infinite;
    }
    @media (max-width: 768px) {
        width: 330px;
        height: 220px;
        padding: 23px;

        &::before {
            bottom: 125px;
            border-bottom: 6px groove #8899c5;
        }
    }
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
    const CardRef = useRef(null)

    useEffect(() => {
        if (CardRef.current) {
            const rect = CardRef.current.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            setCenter({ x: centerX, y: centerY });
        }
    }, [CardRef]);
    

    return(
        <Card ref={CardRef}
            $mousePosition={mousePosition}
            $viewScrollTop={ViewRef.current ? ViewRef.current.scrollTop : 0}
            $center={center}
            $isHovering={isHovering}
            onMouseEnter={()=> setIsHovering(true)}
            onMouseLeave={()=> setIsHovering(false)}
        >
            <CardImg>
                <img src={bear} />
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
        </Card>
    )
}

export default ContactCard