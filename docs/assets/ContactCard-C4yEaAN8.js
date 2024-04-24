import{r as n,j as t}from"./vendor-react-BmTAz-yb.js";import{h as g,u as o}from"./vendor-styled-components-etjvLBh8.js";import{a as u}from"./index-T77MaPGX.js";import"./vendor-tslib-B7u9K5VY.js";import"./vendor-@emotion-BWzHn38B.js";import"./vendor-stylis-DinRj2j6.js";import"./vendor-react-dom-DIoqIW_m.js";import"./vendor-scheduler-CzFDRTuY.js";const b="/portfolio/assets/paperPattern-CEOUZ3bX.webp",p="/portfolio/assets/bear-transparent-4w3szYkN.webp",$=g`
    30%{
        transform: scale(1.05);
        filter: drop-shadow(0.5vw 0.5vw 4vw rgba(172, 174, 222, 0.8));

    }
    60% {
        transform: scale(1);
    }
`,y=o.section.attrs(e=>e.$center.y===0||e.$isHovering?{style:{transform:"rotateX(0deg) rotateY(0deg)",filter:"drop-shadow(0 0 4vw rgba(172, 174, 222, 0.5))",boxShadow:"0 0 0.3vw 0.3vw rgba(172, 174, 222)",transition:"transform 0.3s, filter 0.3s, box-shadow 0.3s"}}:{style:{transform:`rotateX(${(e.$mousePosition.y+e.$viewScrollTop-e.$center.y)/20}deg) rotateY(${(e.$mousePosition.x-e.$center.x)/20}deg)`,borderLeft:`${(e.$mousePosition.x-e.$center.x)/1200}vw solid rgba(100,100,100,0.5)`,borderRight:`${(e.$center.x-e.$mousePosition.x)/1200}vw solid rgba(100,100,100,0.5)`,borderTop:`${(e.$mousePosition.y+e.$viewScrollTop-e.$center.y)/1e3}vw solid white`,borderBottom:`${(e.$center.y-e.$viewScrollTop-e.$mousePosition.y)/1e3}vw solid rgba(100,100,100,0.7)`}})`
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
        animation: ${$} 1.5s infinite;
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
`,a=o.section`
`,j=o.h1`
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
`,l=o.h2`
    font-size: 2.2vw;
    @media (max-width: 768px) {
        font-size: 17px;
    }
`,d=o.p`
    font-size: 1.6vw;
    margin-top: -0.5vw;
    @media (max-width: 768px) {
        font-size: 12.5px;
    }
`,C=o.div`
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
`,P=o.div`
position: absolute;
background-image: url('${b}');
width: 100%;
height: 100%;
top: 0;
left: 0;
mix-blend-mode: multiply;
filter: opacity(0.8) brightness(1.1);
`;function N({ViewRef:e}){const w=u(),[m,h]=n.useState({x:0,y:0}),[v,c]=n.useState(!1),r=n.useRef(null);return n.useEffect(()=>{const s=()=>{if(r.current){const i=r.current.getBoundingClientRect(),f=i.left+i.width/2,x=e.current.scrollTop+i.top+i.height/2;h({x:f,y:x})}};return s(),window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)},[r]),t.jsxs(y,{ref:r,$mousePosition:w,$viewScrollTop:e.current?e.current.scrollTop:0,$center:m,$isHovering:v,onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1),children:[t.jsx(C,{children:t.jsx("img",{src:p,alt:"profile image"})}),t.jsxs(a,{children:[t.jsx(j,{children:"Ahyoon Kim"}),t.jsx(d,{children:"Front-End Developer"})]}),t.jsxs(a,{children:[t.jsx(l,{children:"E-mail"}),t.jsx(d,{children:"kay8563@gmail.com"})]}),t.jsxs(a,{children:[t.jsx(l,{children:"Github"}),t.jsx(d,{children:"https://github.com/code-kay"})]}),t.jsx(P,{})]})}export{N as default};
