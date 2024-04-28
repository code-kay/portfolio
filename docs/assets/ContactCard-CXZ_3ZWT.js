import{r,j as t}from"./vendor-react-lu3PSz0c.js";import{u as o,h as v,a as p}from"./vendor-styled-components-Bb50GF_z.js";import{a as j}from"./index-DMmuxgkr.js";import{e as k}from"./vendor-@emailjs-BvPdHJoH.js";import"./vendor-tslib-B7u9K5VY.js";import"./vendor-@emotion-BWzHn38B.js";import"./vendor-stylis-DinRj2j6.js";import"./vendor-react-dom-C3z3V3Xp.js";import"./vendor-scheduler-CzFDRTuY.js";const C="/portfolio/assets/paperPattern-CEOUZ3bX.webp",E="/portfolio/assets/bear-transparent-4w3szYkN.webp",S=o.form`
    width: 100%;
    height: 100%;
    background: white;
    padding: 5%;
    font-size: max(1.8vw, 1rem);
    display: grid;
    grid-template-rows: auto auto 1fr;
    border-radius: 10px;

    @media (max-width: 768px) {
        font-size: 1rem;
    }

    div {
        width: 100%;
    }
    div:last-child {
        height: 100%;
    }
    label {
        display: inline-block;
        width: 24%;
        margin-bottom: 6px;
    }
    #mail_content {
        display: block;
    }
    input {
        font-size: max(1.8vw, 1rem);
        display: inline-block;
        width: 64%;
        border: none;
        border-bottom: 1px solid gray;
        &:focus {
            outline: none;
            border-bottom: 1px solid rgb(172, 174, 222);
        }
    }
    textarea {
        width: 100%;
        height: 80%;
        padding: 8px;
        font-size: max(1.6vw, 0.8rem);

        &:focus {
            outline: none;
            border: 1px solid rgb(172, 174, 222);
        }
    }
    button {
        position: absolute;
        right: 8px;
        bottom: 8px;
        font-size: max(24px, 2.6vw);
        width: 10vw;
        height: 4vw;
        background: rgb(172, 174, 222);
        border-radius: 8px;
        color: white;
        text-shadow: none;

        @media (max-width: 768px) {
            width: 72px;
            height: 32px;
        }

        &:hover {
            color: rgb(172, 174, 222);
            background: white;
            border: 1px solid rgb(172, 174, 222);
        }
    }
`,z=o.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(255,255,255,0.8);
    display: grid;
    place-items: center;
    font-size: max(2.6vw, 1.5rem);;
`,P=({setIsEmailOn:e,setIsFliping:m,CardRef:x})=>{const s=r.useRef(),[w,d]=r.useState(!1),[u,n]=r.useState(""),a=i=>{console.log("clicked!!"),i.preventDefault(),k.sendForm("service_036akej","template_jby77ul",s.current,"kFRnuBfVho9R2W_Cr").then(c=>{n("감사합니다! 확인 후 답장 드리겠습니다 :)"),setTimeout(()=>{e(!1)},3e3)}).catch(c=>n("메일 발송에 실패했어요! :(")).finally(()=>setTimeout(()=>d(!1),3e3))},l=i=>{s.current&&!s.current.contains(i.target)&&!x.current.contains(i.target)&&(e(!1),m(!0),setTimeout(()=>m(!1),1e3))};return r.useEffect(()=>(document.addEventListener("click",l),()=>{document.removeEventListener("click",l)}),[]),t.jsxs(S,{ref:s,onSubmit:a,children:[t.jsxs("div",{children:[t.jsx("label",{children:"보내시는 분"}),t.jsx("input",{type:"text",name:"sender"})]}),t.jsxs("div",{children:[t.jsx("label",{children:"이메일 주소"}),t.jsx("input",{type:"email",name:"email"})]}),t.jsxs("div",{children:[t.jsx("label",{id:"mail_content",children:"메일 내용"}),t.jsx("textarea",{name:"message"})]}),t.jsx("button",{type:"submit",onClick:()=>{d(!0),n("보내는 중...")},children:"보내기"}),w?t.jsx(z,{children:u}):null]})},T=v`
    30%{
        transform: scale(1.05);
        filter: drop-shadow(0.5vw 0.5vw 4vw rgba(172, 174, 222, 0.8));

    }
    60% {
        transform: scale(1);
    }
`,O=v`
    30% {
        opacity: 0;
    }
    100% {
        opacity: 100;
    }
`,F=o.section.attrs(e=>e.$center.y===0||e.$isHovering||e.$isFliping?{style:{transform:"rotateX(0deg) rotateY(0deg)",filter:"drop-shadow(0 0 4vw rgba(172, 174, 222, 0.5))",transition:"transform 0.3s, filter 0.3s, box-shadow 0.3s",border:"none"}}:{style:{transform:`rotateX(${(e.$mousePosition.y+e.$viewScrollTop-e.$center.y)/20}deg) rotateY(${(e.$mousePosition.x-e.$center.x)/20}deg)`,borderLeft:`${(e.$mousePosition.x-e.$center.x)/1200}vw solid rgba(100,100,100,0.5)`,borderRight:`${(e.$center.x-e.$mousePosition.x)/1200}vw solid rgba(100,100,100,0.5)`,borderTop:`${(e.$mousePosition.y+e.$viewScrollTop-e.$center.y)/1e3}vw solid white`,borderBottom:`${(e.$center.y-e.$viewScrollTop-e.$mousePosition.y)/1e3}vw solid rgba(100,100,100,0.7)`}})`
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
        ${e=>e.$isEmailOn?"":p`animation: ${T} 1.5s infinite;`}
        ${e=>e.$isEmailOn?"":p`
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
            animation: ${O} 1s 1 forwards;
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
`,R=o.div`
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
    transform: ${e=>e.$isEmailOn?"rotateY(-180deg);":"rotateY(0deg);"};
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
`,Y=o.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 10px;
    transform: ${e=>e.$isEmailOn?"rotateY(0deg);":"rotateY(180deg);"};
    transition: transform 1s;
    filter: drop-shadow(0.5vw 0.5vw 2vw rgba(172, 174, 222, 0.5));
`,f=o.section`
`,K=o.h1`
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
`,b=o.h2`
    font-size: 2.2vw;
    @media (max-width: 768px) {
        font-size: 17px;
    }
`,g=o.p`
    font-size: 1.6vw;
    margin-top: -0.5vw;
    @media (max-width: 768px) {
        font-size: 12.5px;
    }
`,B=o.div`
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
`,H=o.div`
position: absolute;
border-radius: 10px;
background-image: url('${C}');
width: 100%;
height: 100%;
top: 0;
left: 0;
mix-blend-mode: multiply;
filter: opacity(0.8) brightness(1.1);
`;function U({ViewRef:e}){const m=j(),[x,s]=r.useState({x:0,y:0}),[w,d]=r.useState(!1),[u,n]=r.useState(!1),[a,l]=r.useState(!1),i=r.useRef(null);return r.useEffect(()=>{const c=()=>{if(i.current){const h=i.current.getBoundingClientRect(),$=h.left+h.width/2,y=e.current.scrollTop+h.top+h.height/2;s({x:$,y})}};return c(),window.addEventListener("resize",c),()=>window.removeEventListener("resize",c)},[i]),t.jsxs(F,{ref:i,$mousePosition:m,$viewScrollTop:e.current?e.current.scrollTop:0,$center:x,$isHovering:w,$isEmailOn:a,$isFliping:u,onMouseEnter:()=>d(!0),onMouseLeave:()=>d(!1),onClick:()=>{l(!0),n(!0),setTimeout(()=>n(!1),1e3)},children:[t.jsxs(R,{$isEmailOn:a,children:[t.jsx(B,{children:t.jsx("img",{src:E,alt:"profile image"})}),t.jsxs(f,{children:[t.jsx(K,{children:"Ahyoon Kim"}),t.jsx(g,{children:"Front-End Developer"})]}),t.jsxs(f,{children:[t.jsx(b,{children:"E-mail"}),t.jsx(g,{children:"kay8563@gmail.com"})]}),t.jsxs(f,{children:[t.jsx(b,{children:"Github"}),t.jsx(g,{children:"https://github.com/code-kay"})]}),t.jsx(H,{})]}),t.jsx(Y,{$isEmailOn:a,children:t.jsx(P,{setIsEmailOn:l,isEmailOn:a,CardRef:i,setIsFliping:n})})]})}export{U as default};
