import{r as o,j as t}from"./vendor-react-lu3PSz0c.js";import{u as i,h as p,a as f}from"./vendor-styled-components-Bb50GF_z.js";import{a as y}from"./index-BRSGx2X4.js";import{e as j}from"./vendor-@emailjs-BvPdHJoH.js";import"./vendor-tslib-B7u9K5VY.js";import"./vendor-@emotion-BWzHn38B.js";import"./vendor-stylis-DinRj2j6.js";import"./vendor-react-dom-C3z3V3Xp.js";import"./vendor-scheduler-CzFDRTuY.js";const $="/portfolio/assets/paperPattern-CEOUZ3bX.webp",k="/portfolio/assets/bear-transparent-4w3szYkN.webp",C=i.form`
    position: absolute;
    width: 100%;
    height: 100%;
    background: white;
    padding: 5%;
    margin: -3vw;
    font-size: max(1.8vw, 1rem);
    display: grid;
    grid-template-rows: auto auto 1fr;
    border-radius: 10px;

    @media (max-width: 768px) {
        margin: -23px;
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
`,E=i.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(255,255,255,0.8);
    display: grid;
    place-items: center;
    font-size: max(2.6vw, 1.5rem);;
`,S=({setIsEmailOn:e,CardRef:h})=>{const a=o.useRef(),[x,l]=o.useState(!1),[c,s]=o.useState(""),m=n=>{console.log("clicked!!"),n.preventDefault(),j.sendForm("service_036akej","template_jby77ul",a.current,"kFRnuBfVho9R2W_Cr").then(d=>{s("감사합니다! 확인 후 답장 드리겠습니다 :)"),setTimeout(()=>{e(!1)},3e3)}).catch(d=>s("메일 발송에 실패했어요! :(")).finally(()=>setTimeout(()=>l(!1),3e3))},r=n=>{a.current&&!a.current.contains(n.target)&&!h.current.contains(n.target)&&e(!1)};return o.useEffect(()=>(document.addEventListener("click",r),()=>{document.removeEventListener("click",r)}),[]),t.jsxs(C,{ref:a,onSubmit:m,children:[t.jsxs("div",{children:[t.jsx("label",{children:"보내시는 분"}),t.jsx("input",{type:"text",name:"sender"})]}),t.jsxs("div",{children:[t.jsx("label",{children:"이메일 주소"}),t.jsx("input",{type:"email",name:"email"})]}),t.jsxs("div",{children:[t.jsx("label",{id:"mail_content",children:"메일 내용"}),t.jsx("textarea",{name:"message"})]}),t.jsx("button",{type:"submit",onClick:()=>{l(!0),s("보내는 중...")},children:"보내기"}),x?t.jsx(E,{children:c}):null]})},z=p`
    30%{
        transform: scale(1.05);
        filter: drop-shadow(0.5vw 0.5vw 4vw rgba(172, 174, 222, 0.8));

    }
    60% {
        transform: scale(1);
    }
`,P=p`
    30% {
        opacity: 0;
    }
    100% {
        opacity: 100;
    }
`,T=i.section.attrs(e=>e.$center.y===0||e.$isHovering?{style:{transform:"rotateX(0deg) rotateY(0deg)",filter:"drop-shadow(0 0 4vw rgba(172, 174, 222, 0.5))",boxShadow:"0 0 0.3vw 0.3vw rgba(172, 174, 222)",transition:"transform 0.3s, filter 0.3s, box-shadow 0.3s"}}:{style:{transform:`rotateX(${(e.$mousePosition.y+e.$viewScrollTop-e.$center.y)/20}deg) rotateY(${(e.$mousePosition.x-e.$center.x)/20}deg)`,borderLeft:`${(e.$mousePosition.x-e.$center.x)/1200}vw solid rgba(100,100,100,0.5)`,borderRight:`${(e.$center.x-e.$mousePosition.x)/1200}vw solid rgba(100,100,100,0.5)`,borderTop:`${(e.$mousePosition.y+e.$viewScrollTop-e.$center.y)/1e3}vw solid white`,borderBottom:`${(e.$center.y-e.$viewScrollTop-e.$mousePosition.y)/1e3}vw solid rgba(100,100,100,0.7)`}})`
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
    display: flex;
    flex-direction: column;
    justify-content: end;
    gap: 1vw;
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
        ${e=>e.$isEmailOn?"":f`animation: ${z} 1.5s infinite;`}
        ${e=>e.$isEmailOn?"":f`
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
            animation: ${P} 1s 1 forwards;
        }
        `}
        
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
`,w=i.section`
`,R=i.h1`
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
`,g=i.h2`
    font-size: 2.2vw;
    @media (max-width: 768px) {
        font-size: 17px;
    }
`,u=i.p`
    font-size: 1.6vw;
    margin-top: -0.5vw;
    @media (max-width: 768px) {
        font-size: 12.5px;
    }
`,K=i.div`
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
`,H=i.div`
position: absolute;
background-image: url('${$}');
width: 100%;
height: 100%;
top: 0;
left: 0;
mix-blend-mode: multiply;
filter: opacity(0.8) brightness(1.1);
`;function M({ViewRef:e}){const h=y(),[a,x]=o.useState({x:0,y:0}),[l,c]=o.useState(!1),[s,m]=o.useState(!1),r=o.useRef(null);return o.useEffect(()=>{const n=()=>{if(r.current){const d=r.current.getBoundingClientRect(),b=d.left+d.width/2,v=e.current.scrollTop+d.top+d.height/2;x({x:b,y:v})}};return n(),window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[r]),t.jsxs(T,{ref:r,$mousePosition:h,$viewScrollTop:e.current?e.current.scrollTop:0,$center:a,$isHovering:l,$isEmailOn:s,onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1),onClick:()=>m(!0),children:[t.jsx(K,{children:t.jsx("img",{src:k,alt:"profile image"})}),t.jsxs(w,{children:[t.jsx(R,{children:"Ahyoon Kim"}),t.jsx(u,{children:"Front-End Developer"})]}),t.jsxs(w,{children:[t.jsx(g,{children:"E-mail"}),t.jsx(u,{children:"kay8563@gmail.com"})]}),t.jsxs(w,{children:[t.jsx(g,{children:"Github"}),t.jsx(u,{children:"https://github.com/code-kay"})]}),t.jsx(H,{}),s?t.jsx(S,{setIsEmailOn:m,isEmailOn:s,CardRef:r}):null]})}export{M as default};
