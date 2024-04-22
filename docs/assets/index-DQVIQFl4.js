const __vite__fileDeps=["assets/BackgroundLargeDeco-BEGaKVd9.js","assets/vendor-react-BmTAz-yb.js","assets/vendor-styled-components-etjvLBh8.js","assets/vendor-tslib-B7u9K5VY.js","assets/vendor-@emotion-BWzHn38B.js","assets/vendor-stylis-DinRj2j6.js","assets/vendor-react-dom-DIoqIW_m.js","assets/vendor-scheduler-CzFDRTuY.js","assets/Intro-C036TrGW.js","assets/Profile-DvqTyWgq.js","assets/SkillSet-D1F-jod8.js","assets/Cursor-DX8_hWqx.js","assets/ProjectCard-CuyQAOyN.js","assets/ContactCard-C6-bzukp.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{r as s,j as e}from"./vendor-react-BmTAz-yb.js";import{c as P}from"./vendor-react-dom-DIoqIW_m.js";import{u as l,h as w,d as Q}from"./vendor-styled-components-etjvLBh8.js";import"./vendor-scheduler-CzFDRTuY.js";import"./vendor-tslib-B7u9K5VY.js";import"./vendor-@emotion-BWzHn38B.js";import"./vendor-stylis-DinRj2j6.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const A of r.addedNodes)A.tagName==="LINK"&&A.rel==="modulepreload"&&a(A)}).observe(document,{childList:!0,subtree:!0});function o(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(i){if(i.ep)return;i.ep=!0;const r=o(i);fetch(i.href,r)}})();const Y="modulepreload",j=function(t){return"/portfolio/"+t},B={},u=function(n,o,a){let i=Promise.resolve();if(o&&o.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),A=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));i=Promise.all(o.map(h=>{if(h=j(h),h in B)return;B[h]=!0;const c=h.endsWith(".css"),p=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${p}`))return;const d=document.createElement("link");if(d.rel=c?"stylesheet":Y,c||(d.as="script",d.crossOrigin=""),d.href=h,A&&d.setAttribute("nonce",A),document.head.appendChild(d),c)return new Promise((g,m)=>{d.addEventListener("load",g),d.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${h}`)))})}))}return i.then(()=>n()).catch(r=>{const A=new Event("vite:preloadError",{cancelable:!0});if(A.payload=r,window.dispatchEvent(A),!A.defaultPrevented)throw r})},M=s.createContext();function R({children:t}){const[n,o]=s.useState(!1);function a(){o(!n)}return e.jsx(M.Provider,{value:{darkMode:n,toggleDarkMode:a},children:t})}function x(){return s.useContext(M)}const D=(t,n,o=[])=>{const[a,i]=s.useState({}),[r,A]=s.useState(0);return s.useEffect(()=>{if(!t.current)return;const h=()=>{const c=o.length,p={HeaderBottom:n.current.getBoundingClientRect().bottom};for(let d=0;d<c;d++){const{top:g,bottom:m}=o[d].current.getBoundingClientRect();p[`ref${d}Top`]=g,p[`ref${d}Bottom`]=m}i(p);for(let d=0;d<c;d++)if(p.HeaderBottom<p[`ref${d}Bottom`]){A(d);break}};return t.current.addEventListener("scroll",h),()=>{t.current.removeEventListener("scroll",h)}},[t,...o]),{scrollPoints:a,currentPart:r}},J="data:image/webp;base64,UklGRgoDAABXRUJQVlA4WAoAAAAQAAAAGwAAGwAAQUxQSGEBAAABmTJE9D8gxbZt1XLWfhWd8V2YPHr2rJiTBpSNZvYMX4YZJIPkRBY2INWAuku8X+9WEyImYAKIYTttBowa9d5T3wEIofMdaC+33CY7/dfXB6HzEei42WE4aRSg0AzDugCHHXbcGEGhQWt1wzKP7DKmgDDLPQ/sMaUQNGDUchVY5pJ9JEGzgw3m+KSQIAA/rFGFEy4JqQgBT+1Ut96Qz1BgGoB3sFkV1vlGoSiE6DukbpW/QioAqG+FTapW+gsAihBw3BU9NUtMQqMAFMCIM26qQQCNAhKEZ165pKcCDakhod131T1LVSBCUAASRm1xyH5LdRsoAJBwzltr7bXSXDNESwEAUkyLKa888E/PUkAAWCAQRUNCu0ChACZNihCAeQA0FDFAkAoFEGoE2oGABkCCJChCCgQCEYGZJRWIAgFAiHYXQAUgQEADEQ10FqJQFAE1FApEJ0CIAkAICEAVgAChIwBWUDggggEAAPAIAJ0BKhwAHAA+hTaXR6UjIiEwDACgEIlkABPXP1A80v+q9HPN883ewJ/Hv53/quAw/WNrzXpmNEmK4Kg5OY5V+QiYoQkmulSmlpxt2cAAAP77K6tYJej+zxKI30o4X4N8Q6XwkyHJ5eudlRxqcmjrnSNwJvhW/o8Et+RjJr39WksWx//8EF+QdlrF+5frucvth933MJ/yV/In+Yyg6ikP6n9p0zb2tETygenM/UmxLe1EbMAmgNtp5tSI9yT2Jx/yzYWuWg+9Xu2pL3jfZrjfiMkiBsbYv/oh+L/U4zQFCPtxksX5fPqsm0P0FN5GrPbjajzn4qCFTuEwKm3tBYKvIEVZ9VT759R5vJTAlb5Wxi0+Z9Jql3nuyXGT+9YUmGm2vz2Vv5mVR1zvNMFvNxJcDk2qPjt2//TPg9P/J8Ct0a2U6LODdF0ugdTEvYaW+bCHYd/l0XBZ24uXNTxvPw6sekWl+x7j/jKJrm6fveyplKPXD7Xg5muznqLYU9KbhAAA",S="data:image/webp;base64,UklGRhYDAABXRUJQVlA4WAoAAAAQAAAAGwAAGwAAQUxQSGEBAAABmTJE9D8gxbZt1XLWfhWd8V2YPHr2rJiTBpSNZvYMX4YZJIPkRBY2INWAuku8X+9WEyImYAKIYTttBowa9d5T3wEIofMdaC+33CY7/dfXB6HzEei42WE4aRSg0AzDugCHHXbcGEGhQWt1wzKP7DKmgDDLPQ/sMaUQNGDUchVY5pJ9JEGzgw3m+KSQIAA/rFGFEy4JqQgBT+1Ut96Qz1BgGoB3sFkV1vlGoSiE6DukbpW/QioAqG+FTapW+gsAihBw3BU9NUtMQqMAFMCIM26qQQCNAhKEZ165pKcCDakhod131T1LVSBCUAASRm1xyH5LdRsoAJBwzltr7bXSXDNESwEAUkyLKa888E/PUkAAWCAQRUNCu0ChACZNihCAeQA0FDFAkAoFEGoE2oGABkCCJChCCgQCEYGZJRWIAgFAiHYXQAUgQEADEQ10FqJQFAE1FApEJ0CIAkAICEAVgAChIwBWUDggjgEAALAIAJ0BKhwAHAA+hTKVR6UjIiE3+qgAoBCJZgC7B23Dzb+c1nK+cfYD/jv9A/13AQfrc10geJTzTRiZ3LaDMfgknt+QFjLikgsFPw93gAD+/BMYKY4Sn9/9JTSe9OqiUnQ5dTEg6qVmJW3OEfU46di1a8QZNYhvs/DBfzcLRXmW9K/X3lwPfUlf/U7D/cH2pqUkjvCvHUsP2//KF630OumuZkuJ1H2K/3fDm7vgOnnn3r5+wdw0+Qn0jQa1y8IyvXUYzrCROv5dLJxP0p3vW7w6aecxjyu3rwKtn+E/OULM/6oJEEgdWWoDBX7a4uvH2Buq3ui/oKQHgpLrfL2rHCeFmdbRkS6hyRG/ncZdv5RVvbWTnMfMbL7SjB/V+MnvLfP+9ZHssawkaur+sd5Nb5nmoVdvlnZYiD86dP/Ns2xSd+PxJF/4E/6LcxuVihGf2xGaQkdPoDq2iJv/CMluAGViZfSha9vig5O4s/H+PiH/VhpT6I5wrfOG7Av9cJxbe6vg1120P0QMe4dqnYAA",X="data:image/webp;base64,UklGRgQDAABXRUJQVlA4WAoAAAAQAAAAGwAAGwAAQUxQSGEBAAABmTJE9D8gxbZt1XLWfhWd8V2YPHr2rJiTBpSNZvYMX4YZJIPkRBY2INWAuku8X+9WEyImYAKIYTttBowa9d5T3wEIofMdaC+33CY7/dfXB6HzEei42WE4aRSg0AzDugCHHXbcGEGhQWt1wzKP7DKmgDDLPQ/sMaUQNGDUchVY5pJ9JEGzgw3m+KSQIAA/rFGFEy4JqQgBT+1Ut96Qz1BgGoB3sFkV1vlGoSiE6DukbpW/QioAqG+FTapW+gsAihBw3BU9NUtMQqMAFMCIM26qQQCNAhKEZ165pKcCDakhod131T1LVSBCUAASRm1xyH5LdRsoAJBwzltr7bXSXDNESwEAUkyLKa888E/PUkAAWCAQRUNCu0ChACZNihCAeQA0FDFAkAoFEGoE2oGABkCCJChCCgQCEYGZJRWIAgFAiHYXQAUgQEADEQ10FqJQFAE1FApEJ0CIAkAICEAVgAChIwBWUDggfAEAADAJAJ0BKhwAHAA+gTSVR6UjIiE3+qgAoBAJQBad7cbFbqdF/sfTKzhvNPsCfxb+d/7PgD/2Aa6QPE8aDxqbZ/RLMsO0hrKjdVgzeXJpDg1r6QAA/vx5zHs2z2niUhXvOJ8FjL0wfu5p14Exf4qQP7PpisLm8mjL6porKnmLvtzhHAHetM4UxpMd+8Pk0rOsSl/ggGuxCXtnNCo5r8L371o21X6PCdfrzWf2cemCgBVVXOSugjruZ5HqOr68xX90o2oXdPR77LhOUMQyb092f4FjZY0fPfd/vKr9TDEh/4jB1BbbOmndwtzXWZ7Z/DxO9AYeHTAySaCMfmw+C3+5pdqUvhp0SFaYdIIf1eLv5/+3U0KKkn9r6Tjmv/ORQ/AUDTfrfv80TEHJdk6J+6HfHH7CVeA8LM9o3jfMF/oAcOAqNUa2s5N0ep4539P3TKnr9KvN0wlDsmSGF7W8dGIfkeZfrkrsGeb4QFH1cUPoWNTUY3nVX59szo6JQAAA",y="data:image/webp;base64,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",W="data:image/webp;base64,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",z="data:image/webp;base64,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",G=l.canvas`
    position: fixed;
    top: 0;
    left: 0;
`;function L(){const{darkMode:t}=x(),n=s.useRef(null);return s.useEffect(()=>{const o=n.current,a=o.getContext("2d");class i{constructor(){this.img=c[Math.floor(Math.random()*c.length)],this.x=Math.random()*o.width,this.y=Math.random()*o.height*2-o.height,this.w=Math.max(o.width/40,o.height/40)+Math.random()*10,this.h=Math.max(o.width/60,o.height/60)+Math.random()*10,this.opacity=.5,this.xSpeed=Math.random()*.5,this.ySpeed=.5+Math.random()*.3,this.flip=Math.random(),this.flipSpeed=Math.random()*.03}draw(){!t&&(this.y>o.height||this.x>o.width)?(this.x=-this.img.width,this.y=Math.random()*o.height*2-o.height):t&&(this.y<-this.h||this.x>o.width)&&(this.x=-this.img.width,this.y=Math.random()*o.height*2+o.height),a.globalAlpha=this.opacity,a.shadowBlur=30,a.shadowColor=t?"red":"pink",a.drawImage(this.img,this.x,this.y,this.w*(.66+Math.abs(Math.cos(this.flip))/3),t?this.h*1.4*(.8+Math.abs(Math.sin(this.flip))/2):this.h*(.8+Math.abs(Math.sin(this.flip))/2))}animate(){t?(this.x+=this.xSpeed/3,this.y-=this.ySpeed/5):(this.x+=this.xSpeed,this.y+=this.ySpeed),this.draw(),this.flip+=t?this.flipSpeed*.1:this.flipSpeed}}const r=t?90:30,A=[],c=(t?[y,W,z]:[J,S,X]).map(g=>{const m=new Image;return m.src=g,m});Promise.all(c.map(g=>new Promise(m=>g.onload=m))).then(()=>{for(let g=0;g<r;g++)A.push(new i);p()});function p(){a.clearRect(0,0,o.width,o.height),A.forEach(g=>{g.animate()}),requestAnimationFrame(p)}function d(){const g=o.width,m=o.height;o.width=window.innerWidth,o.height=window.innerHeight,A.forEach(f=>{f.x=f.x/g*o.width,f.y=f.y/m*o.height,f.w=Math.max(o.width/40,o.height/40)+Math.random()*10,f.h=Math.max(o.width/60,o.height/60)+Math.random()*10})}return d(),window.addEventListener("resize",d),()=>window.removeEventListener("resize",d)},[t]),e.jsx(G,{ref:n})}const T=w`
    33%{
        top: -20%;
        left: -10%;
        transform: scale(0.8);
    }
    66%{
        top: 60%;
        left: 20%;
        transform: scale(0.7);
    }
    100%{
        top: 0%;
        left: 50%;
    }
`,U=w`
    33%{
        top: 70%;
        left: 20%;
        transform: scale(0.7);
    }
    66%{
        top: 0%;
        left: 60%;
        transform: scale(1.4);
    }
    100%{
        top: 0;
        left: 0;
    }
`,O=w`
    33%{
        top: 20%;
        left: 70%;
        transform: scale(1.2);
    }
    66%{
        top: 0%;
        left: -10%;
        transform: scale(1.4);
    }
    100%{
        top: 50%;
        left: 10%;
    }
`,F=l.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    overflow: hidden;
    z-index: -1;
    ${t=>t.$darkMode?"background-color: black;":""}
    transition: background-color 2s;

    & div:nth-child(1) {
        top: 0%;
        left: 50%;
        animation: ${T} 15s linear infinite;
    }
    & div:nth-child(2) {
        top: 0;
        left: 0;
        animation: ${U} 15s linear infinite;
    }
    & div:nth-child(3) {
        top: 50%;
        left: 10%;
        animation: ${O} 15s linear infinite;    
    }
`,H=l.div`
    background-color: ${t=>t.$darkMode?"rgba(0, 0, 0, 0.45)":"rgba(255, 255, 255, 0.45)"};
    backdrop-filter: blur(200px);
    -webkit-backdrop-filter: blur(200px);
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    transition: background-color 1s;
`,v=l.div`
    background-color: ${t=>t.color||"transparent"};
    height: ${t=>t.height||0};
    width: ${t=>t.width||0};
    border-radius: 100%;
    position: absolute;
    transition: background-color 1s;
`;function N(){const{darkMode:t}=x();return e.jsxs(F,{id:"background",$darkMode:t,"aria-hidden":!0,children:[e.jsx(v,{color:t?"rgb(103, 8, 74)":"skyblue",width:"80vw",height:"70vw"}),e.jsx(v,{color:t?"rgb(12, 52, 103)":"pink",width:"50vw",height:"50vh"}),e.jsx(v,{color:t?"rgb(4, 80, 65)":"rgba(255, 255, 166, 0.8)",width:"50vh",height:"50vh"}),e.jsx(H,{$darkMode:t}),e.jsx(L,{})]})}const q=l.div`
    display: inline-block;
    width: 50px;
    height: 32px;
    border: 1px solid rgba(172, 174, 222, 1);
    border-radius: 32px;
    background: ${t=>t.$darkMode?"rgba(34, 34, 34, 0.15)":"rgba(255,255,255,0.3)"};
    position: relative;
    justify-self: end;

    @media (max-width: 768px) {
        width: 28px;
        height: 18px;
        border-radius: 18px;
        margin-right: 8px;
    }
`,b=w`
    33%{
        opacity: 0;
    }
    66%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
`,K=l.div`
    width: 26px;
    height: 26px;
    border-radius: 100%;
    position: absolute;
    left: ${t=>t.$darkMode?20:2}px;
    top: 2px;
    overflow: hidden;
    transition: 0.5s;

    & span {
        display: inline-block;
        width: 100%;
        height: 100%;
        position: absolute;
    }
    
    & span:nth-child(1){
        background: radial-gradient(${t=>t.$darkMode?"rgb(132, 94, 211), rgba(91, 145, 212) 40%, rgb(179, 83, 150), transparent 70%":"rgb(255, 250, 221), rgba(255, 214, 221) 40%, rgb(210, 236, 255), transparent 70%"});
        opacity: 1;
        animation: ${b} 3s 0s linear infinite;
    }
    & span:nth-child(2){
        background: radial-gradient(${t=>t.$darkMode?"rgb(179, 83, 150), rgb(132, 94, 211) 40%, rgba(91, 145, 212), transparent 70%":"rgb(210, 236, 255), rgb(255, 250, 221) 40%, rgba(255, 214, 221), transparent 70%"});
        opacity: 1;
        animation: ${b} 3s 1s linear infinite;
    }
    & span:nth-child(3){
        background: radial-gradient(${t=>t.$darkMode?"rgba(91, 145, 212), rgb(179, 83, 150) 40%, rgb(132, 94, 211), transparent 70%":"rgba(255, 214, 221), rgb(210, 236, 255) 40%, rgb(255, 250, 221), transparent 70%"});
        opacity: 1;
        animation: ${b} 3s 2s linear infinite;
    }


    @media (max-width: 768px) {
        width: 14px;
        height: 14px;
        top: 1px;
        left: ${t=>t.$darkMode?11:2}px;
    }
`;function Z(){const{darkMode:t,toggleDarkMode:n}=x();return e.jsx(q,{$darkMode:t,onClick:()=>n(!t),children:e.jsxs(K,{$darkMode:t,children:[e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{})]})})}const V=l(({titleType:t="h1",children:n,...o})=>e.jsx(t,{...o,children:n}))`
    font-size: ${t=>t.titleType==="h3"?"36px":"48px"};
    ${t=>t.titleType==="h1"?"":"border-bottom: 3px double rgb(172, 174, 222);"}
    width: ${t=>t.titleType==="h2"?"80vw":"auto"};
    font-weight: 100;
    letter-spacing: 8px;
    text-align: center;
    height: calc(1em + 4px);
    position: relative;

    @media (max-width: 768px) {
        font-size: ${t=>t.titleType==="h3"?"24px":t.titleType==="h2"?"30px":"32px"};
        letter-spacing: 7px;
        justify-self: center;
    }

    & div {
        text-align: start;
        padding-left: 8px;
        padding-right: 4px;

        &:nth-child(1)::after {
            content: '${t=>t.content||""}';
            position: absolute;
            left: 12px;
            display: inline-block;

            @media (max-width: 768px) {
                left: 11px;
            }
        }
    }
`;function I({titleType:t,content:n}){return e.jsx(V,{titleType:t,content:n,children:e.jsx("div",{children:n})})}const $=Object.freeze(Object.defineProperty({__proto__:null,default:I},Symbol.toStringTag,{value:"Module"})),_=l.nav`
    display: flex;
    gap: 24px;
    justify-self: end;
    align-self: end;
    margin-bottom: -11px;

    @media (max-width: 768px) {
        grid-column: 1 / 4;
        grid-row: 2 / 3;
        justify-self: center;
        margin-bottom: 0px;
        margin: 0 200px;
    }
`,tt=l.button`
    font-size: 20px;
    font-weight: 200;
    padding: 12px 10px;
    border-bottom: 4px solid transparent;
    ${t=>t.$isSelected?"border-bottom: 4px solid rgb(172, 174, 222);":""}
    transition: color 0.3s, border-bottom-color 0.3s, border-bottom-width 0.3s;
    user-select: none;

    &:hover {
        ${t=>t.$isSelected?"":"color: rgba(172, 174, 222, 0.5);"}
        transition: color 0.3s, border-bottom-color 0.3s, border-bottom-width 0.3s;
    }

    @media (max-width: 768px) {
        font-size: 14px;
        padding: 4px 10px;
        cursor: pointer;
    }
`,et=w`
    20% {
        transform: translateY(min(-8px, -1vw));
    }

    40% {
        transform: translateY(0);
    }
`,ot=l.button`
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: max(48px, 5vw);
    height: max(48px, 5vw);
    right: 2.5vw;
    bottom: 2.5vw;
    animation: ${et} 4s infinite;
    filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.8));

    & div {
        color: white;
        position: absolute;
        transition: transform .5s;
    }

    & div:nth-child(1) {
        width: 100%;
        height: 100%;
        border-radius: 100%;
        background-color: rgb(172, 174, 222);
    }

    & div:nth-child(2) {
        top: 0;
        border-left: max(24px, 2.5vw) solid transparent;
        border-right: max(24px, 2.5vw) solid transparent;
        border-bottom: max(24px, 2.5vw) solid rgb(172, 174, 222);
        &::after {
            content:'';
            position: absolute;
            transform: translateX(min(-14px, -1.5vw));
            top: max(22px, 2.4vw);
            background-color: rgb(172, 174, 222);
            width: max(28px, 3vw);
            height: max(24px, 2.5vw);
        }
        transform: scale(0);
    }

    & div:last-child {
        position: absolute;
        text-align: center;
        font-weight: 600;
    }

    &:hover {
        & div:nth-child(1) {
            transform: scale(0);
        }
        & div:nth-child(2) {
            transform: scale(1);
        }

    }
`;function it({currentPart:t,scrollPoints:n,ViewRef:o,refs:a}){const i=["Information","Project","Contact"],[r,A]=s.useState(0);return s.useEffect(()=>{A(t)},[t]),e.jsxs(_,{children:[i.map((h,c)=>e.jsx(tt,{$isSelected:r===c,onClick:()=>{A(c),o.current.scrollBy({top:n[`ref${c}Top`]-120})},children:h.toUpperCase()},"NavButton_"+h)),e.jsxs(ot,{onClick:()=>o.current.scrollTo({top:0}),children:[e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{children:"TOP"})]})]})}const rt=l.header`
    position: fixed;
    width: 100vw;
    height: 88px;
    background: linear-gradient(transparent, rgba(255, 255, 255, 0.2));
    border-bottom: 1px solid rgba(172, 174, 222, 1);
    display: grid;
    grid-template-columns: auto auto 1fr;
    justify-content: start;
    padding: 24px;
    place-items: center;
    gap: 18px;
    z-index: 10;

    @media (max-width: 768px) {
        padding: 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding-bottom: 0;
        gap: 0;
        align-items: end;
    }
`,nt=l.div`
    width: 100vw;
    height:200px;
    position: fixed;
    top: 0;
    z-index: 9;
    backdrop-filter: blur(100px);
    -webkit-backdrop-filter: blur(100px);
    background-color: ${t=>t.$darkMode?"rgba(0,0,0,0.8)":"rgba(255,255,255,0.1)"};
    mask-image: linear-gradient(rgba(0,0,0,1), rgba(0,0,0,0));
    pointer-events: none;
`,st=s.forwardRef(({currentPart:t,scrollPoints:n,ViewRef:o,refs:a},i)=>{const{darkMode:r}=x();return e.jsxs(e.Fragment,{children:[e.jsx(nt,{$darkMode:r}),e.jsxs(rt,{ref:i,children:[e.jsx(Z,{}),e.jsx(I,{titleType:"h1",content:"AHYOON"}),e.jsx(it,{currentPart:t,scrollPoints:n,ViewRef:o,refs:a})]})]})}),at=l.footer`
    position: relative;
    height: 36vw;
    overflow: hidden;
    filter: drop-shadow(0 0 12vw ${t=>t.$darkMode?"rgba(220,80,60, 0.4)":"rgb(220, 180, 210)"});
`,dt=l.div`
    height: 100%;
    position: relative;
    bottom: 0;
`,At=l.div`
    position: absolute;
    left: -20vw;
    background: ${t=>t.$darkMode?"black":"#b9badb"};
    width: 30vw;
    height: 30vw;
    border: 5vw solid ${t=>t.$darkMode?"black":"#b9badb"};
    border-radius: 2vw;
    transform: rotate(45deg) skew(-30deg, -30deg);
    transition: background-color 1s, border-color 1s, box-shadow 1s;

    &:nth-child(2) {
        left: 10vw;
        top: 5vw;
        width: 20vw;
        height: 20vw;
    }

    &:nth-child(3) {
        left: 35vw;
        width: 10vw;
        height: 10vw;
        top: 10vw;
        transform: rotate(45deg) skew(-15deg, -15deg);
    }

    &:nth-child(4) {
        left: 52vw;
        transform: rotate(45deg) skew(-20deg, -20deg);
    }
    &:nth-child(5) {
        left: 64vw;
        width: 30vw;
        height: 30vw;
        transform: rotate(45deg) skew(-27deg, -27deg);
    }
    &:nth-child(6) {
        left: 87vw;
        top: -5vw;
        width: 40vw;
        height: 40vw;
        transform: rotate(45deg) skew(-20deg, -20deg);
    }
    &:nth-child(7) {
        transform: none;
        width: 160vw;
        top: 15vw;
        left: -30vw;
        border-radius: 0;
        border: none;
    }
    &:last-child {
        transform: none;
        width: 130vw;
        top: 15vw;
        left: -30vw;
        border-radius: 0;
        border: none;
        box-shadow: inset 0vw -20vw 20vw ${t=>t.$darkMode?"#28365a":"#ece7e2"};
        filter: blur(6vw);
    }
`;function lt(){const{darkMode:t}=x();return e.jsx(at,{$darkMode:t,children:e.jsx(dt,{children:new Array(8).fill(!0).map((n,o)=>e.jsx(At,{$darkMode:t},"Mountain-"+o))})})}const ht=s.lazy(()=>u(()=>import("./BackgroundLargeDeco-BEGaKVd9.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]))),ct=s.lazy(()=>u(()=>import("./Intro-C036TrGW.js"),__vite__mapDeps([8,1,2,3,4,5,6,7]))),E=s.lazy(()=>u(()=>Promise.resolve().then(()=>$),void 0)),gt=s.lazy(()=>u(()=>import("./Profile-DvqTyWgq.js"),__vite__mapDeps([9,1,2,3,4,5,6,7]))),pt=s.lazy(()=>u(()=>import("./SkillSet-D1F-jod8.js"),__vite__mapDeps([10,1,2,3,4,5,6,7]))),mt=s.lazy(()=>u(()=>import("./Cursor-DX8_hWqx.js"),__vite__mapDeps([11,1,2,3,4,5,6,7]))),ut=s.lazy(()=>u(()=>import("./ProjectCard-CuyQAOyN.js"),__vite__mapDeps([12,1,2,3,4,5]))),ft=s.lazy(()=>u(()=>import("./ContactCard-C6-bzukp.js"),__vite__mapDeps([13,1,2,3,4,5,6,7]))),xt=Q`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Inter';
    color: rgb(172, 174, 222);
    cursor: none;
    scroll-behavior: smooth;

    @media (max-width: 768px) {
      cursor: auto;
    }
  }

  button {
    border: none;
    background: none;
  }
`,wt=l.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  overflow-x: hidden;
  overflow-y: auto;
  scrollbar-width: none;
`,vt=l.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 160px;
  padding-bottom: 80px;
  
  @media (max-width: 768px) {
    gap: 100px;
  }
`,C=l.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;

  @media (max-width: 768px) {
    gap: 48px;
  }
`;function bt(){const{darkMode:t}=x(),n=s.useRef(null),o=s.useRef(null),a=s.useRef(null),i=s.useRef(null),r=s.useRef(null),{scrollPoints:A,currentPart:h}=D(n,o,[a,i,r]);return e.jsxs(e.Fragment,{children:[e.jsx(xt,{$darkMode:t}),e.jsxs(wt,{ref:n,children:[e.jsx(N,{}),e.jsx(st,{currentPart:h,ref:o,scrollPoints:A,ViewRef:n,refs:{InformationRef:a,ProjectRef:i,ContactRef:r}}),e.jsxs(s.Suspense,{fallback:e.jsx("div",{children:"Loading..."}),children:[e.jsxs(vt,{children:[e.jsx(ht,{"aria-hidden":!0}),e.jsx(ct,{}),e.jsxs(C,{ref:a,children:[e.jsx(E,{titleType:"h2",content:"INFORMATION"}),e.jsx(gt,{}),e.jsx(pt,{})]}),e.jsxs(C,{ref:i,children:[e.jsx(E,{titleType:"h2",content:"PROJECT"}),e.jsx(ut,{})]}),e.jsxs(C,{ref:r,children:[e.jsx(E,{titleType:"h2",content:"CONTACT"}),e.jsx(ft,{ViewRef:n})]})]}),e.jsx(lt,{}),e.jsx(mt,{})]})]})]})}const k=s.createContext(),Et=({children:t})=>{const[n,o]=s.useState({x:0,y:0});return s.useEffect(()=>{const a=i=>o({x:i.clientX,y:i.clientY});return window.addEventListener("mousemove",a),()=>window.removeEventListener("mousemove",a)},[]),e.jsx(k.Provider,{value:n,children:t})},Yt=()=>s.useContext(k);P.createRoot(document.getElementById("root")).render(e.jsx(R,{children:e.jsx(Et,{children:e.jsx(bt,{})})}));export{I as T,Yt as a,K as b,x as u};
