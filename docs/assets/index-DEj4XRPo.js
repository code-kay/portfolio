import{r as A,j as e}from"./vendor-react-BmTAz-yb.js";import{c as z}from"./vendor-react-dom-DIoqIW_m.js";import{u as i,h as c,a as G,d as H}from"./vendor-styled-components-etjvLBh8.js";import"./vendor-scheduler-CzFDRTuY.js";import"./vendor-tslib-B7u9K5VY.js";import"./vendor-@emotion-BWzHn38B.js";import"./vendor-stylis-DinRj2j6.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))d(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&d(l)}).observe(document,{childList:!0,subtree:!0});function o(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function d(a){if(a.ep)return;a.ep=!0;const n=o(a);fetch(a.href,n)}})();const Y=A.createContext();function F({children:t}){const[r,o]=A.useState(!1);function d(){o(!r)}return e.jsx(Y.Provider,{value:{darkMode:r,toggleDarkMode:d},children:t})}function m(){return A.useContext(Y)}const L="data:image/webp;base64,UklGRgoDAABXRUJQVlA4WAoAAAAQAAAAGwAAGwAAQUxQSGEBAAABmTJE9D8gxbZt1XLWfhWd8V2YPHr2rJiTBpSNZvYMX4YZJIPkRBY2INWAuku8X+9WEyImYAKIYTttBowa9d5T3wEIofMdaC+33CY7/dfXB6HzEei42WE4aRSg0AzDugCHHXbcGEGhQWt1wzKP7DKmgDDLPQ/sMaUQNGDUchVY5pJ9JEGzgw3m+KSQIAA/rFGFEy4JqQgBT+1Ut96Qz1BgGoB3sFkV1vlGoSiE6DukbpW/QioAqG+FTapW+gsAihBw3BU9NUtMQqMAFMCIM26qQQCNAhKEZ165pKcCDakhod131T1LVSBCUAASRm1xyH5LdRsoAJBwzltr7bXSXDNESwEAUkyLKa888E/PUkAAWCAQRUNCu0ChACZNihCAeQA0FDFAkAoFEGoE2oGABkCCJChCCgQCEYGZJRWIAgFAiHYXQAUgQEADEQ10FqJQFAE1FApEJ0CIAkAICEAVgAChIwBWUDggggEAAPAIAJ0BKhwAHAA+hTaXR6UjIiEwDACgEIlkABPXP1A80v+q9HPN883ewJ/Hv53/quAw/WNrzXpmNEmK4Kg5OY5V+QiYoQkmulSmlpxt2cAAAP77K6tYJej+zxKI30o4X4N8Q6XwkyHJ5eudlRxqcmjrnSNwJvhW/o8Et+RjJr39WksWx//8EF+QdlrF+5frucvth933MJ/yV/In+Yyg6ikP6n9p0zb2tETygenM/UmxLe1EbMAmgNtp5tSI9yT2Jx/yzYWuWg+9Xu2pL3jfZrjfiMkiBsbYv/oh+L/U4zQFCPtxksX5fPqsm0P0FN5GrPbjajzn4qCFTuEwKm3tBYKvIEVZ9VT759R5vJTAlb5Wxi0+Z9Jql3nuyXGT+9YUmGm2vz2Vv5mVR1zvNMFvNxJcDk2qPjt2//TPg9P/J8Ct0a2U6LODdF0ugdTEvYaW+bCHYd/l0XBZ24uXNTxvPw6sekWl+x7j/jKJrm6fveyplKPXD7Xg5muznqLYU9KbhAAA",N="data:image/webp;base64,UklGRhYDAABXRUJQVlA4WAoAAAAQAAAAGwAAGwAAQUxQSGEBAAABmTJE9D8gxbZt1XLWfhWd8V2YPHr2rJiTBpSNZvYMX4YZJIPkRBY2INWAuku8X+9WEyImYAKIYTttBowa9d5T3wEIofMdaC+33CY7/dfXB6HzEei42WE4aRSg0AzDugCHHXbcGEGhQWt1wzKP7DKmgDDLPQ/sMaUQNGDUchVY5pJ9JEGzgw3m+KSQIAA/rFGFEy4JqQgBT+1Ut96Qz1BgGoB3sFkV1vlGoSiE6DukbpW/QioAqG+FTapW+gsAihBw3BU9NUtMQqMAFMCIM26qQQCNAhKEZ165pKcCDakhod131T1LVSBCUAASRm1xyH5LdRsoAJBwzltr7bXSXDNESwEAUkyLKa888E/PUkAAWCAQRUNCu0ChACZNihCAeQA0FDFAkAoFEGoE2oGABkCCJChCCgQCEYGZJRWIAgFAiHYXQAUgQEADEQ10FqJQFAE1FApEJ0CIAkAICEAVgAChIwBWUDggjgEAALAIAJ0BKhwAHAA+hTKVR6UjIiE3+qgAoBCJZgC7B23Dzb+c1nK+cfYD/jv9A/13AQfrc10geJTzTRiZ3LaDMfgknt+QFjLikgsFPw93gAD+/BMYKY4Sn9/9JTSe9OqiUnQ5dTEg6qVmJW3OEfU46di1a8QZNYhvs/DBfzcLRXmW9K/X3lwPfUlf/U7D/cH2pqUkjvCvHUsP2//KF630OumuZkuJ1H2K/3fDm7vgOnnn3r5+wdw0+Qn0jQa1y8IyvXUYzrCROv5dLJxP0p3vW7w6aecxjyu3rwKtn+E/OULM/6oJEEgdWWoDBX7a4uvH2Buq3ui/oKQHgpLrfL2rHCeFmdbRkS6hyRG/ncZdv5RVvbWTnMfMbL7SjB/V+MnvLfP+9ZHssawkaur+sd5Nb5nmoVdvlnZYiD86dP/Ns2xSd+PxJF/4E/6LcxuVihGf2xGaQkdPoDq2iJv/CMluAGViZfSha9vig5O4s/H+PiH/VhpT6I5wrfOG7Av9cJxbe6vg1120P0QMe4dqnYAA",O="data:image/webp;base64,UklGRgQDAABXRUJQVlA4WAoAAAAQAAAAGwAAGwAAQUxQSGEBAAABmTJE9D8gxbZt1XLWfhWd8V2YPHr2rJiTBpSNZvYMX4YZJIPkRBY2INWAuku8X+9WEyImYAKIYTttBowa9d5T3wEIofMdaC+33CY7/dfXB6HzEei42WE4aRSg0AzDugCHHXbcGEGhQWt1wzKP7DKmgDDLPQ/sMaUQNGDUchVY5pJ9JEGzgw3m+KSQIAA/rFGFEy4JqQgBT+1Ut96Qz1BgGoB3sFkV1vlGoSiE6DukbpW/QioAqG+FTapW+gsAihBw3BU9NUtMQqMAFMCIM26qQQCNAhKEZ165pKcCDakhod131T1LVSBCUAASRm1xyH5LdRsoAJBwzltr7bXSXDNESwEAUkyLKa888E/PUkAAWCAQRUNCu0ChACZNihCAeQA0FDFAkAoFEGoE2oGABkCCJChCCgQCEYGZJRWIAgFAiHYXQAUgQEADEQ10FqJQFAE1FApEJ0CIAkAICEAVgAChIwBWUDggfAEAADAJAJ0BKhwAHAA+gTSVR6UjIiE3+qgAoBAJQBad7cbFbqdF/sfTKzhvNPsCfxb+d/7PgD/2Aa6QPE8aDxqbZ/RLMsO0hrKjdVgzeXJpDg1r6QAA/vx5zHs2z2niUhXvOJ8FjL0wfu5p14Exf4qQP7PpisLm8mjL6porKnmLvtzhHAHetM4UxpMd+8Pk0rOsSl/ggGuxCXtnNCo5r8L371o21X6PCdfrzWf2cemCgBVVXOSugjruZ5HqOr68xX90o2oXdPR77LhOUMQyb092f4FjZY0fPfd/vKr9TDEh/4jB1BbbOmndwtzXWZ7Z/DxO9AYeHTAySaCMfmw+C3+5pdqUvhp0SFaYdIIf1eLv5/+3U0KKkn9r6Tjmv/ORQ/AUDTfrfv80TEHJdk6J+6HfHH7CVeA8LM9o3jfMF/oAcOAqNUa2s5N0ep4539P3TKnr9KvN0wlDsmSGF7W8dGIfkeZfrkrsGeb4QFH1cUPoWNTUY3nVX59szo6JQAAA",K="data:image/webp;base64,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",Z="data:image/webp;base64,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",q="data:image/webp;base64,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",V=i.canvas`
    position: fixed;
    top: 0;
    left: 0;
`;function $(){const{darkMode:t}=m(),r=A.useRef(null);return A.useEffect(()=>{const o=r.current,d=o.getContext("2d");class a{constructor(){this.img=p[Math.floor(Math.random()*p.length)],this.x=Math.random()*o.width,this.y=Math.random()*o.height*2-o.height,this.w=Math.max(o.width/40,o.height/40)+Math.random()*10,this.h=Math.max(o.width/60,o.height/60)+Math.random()*10,this.opacity=.5,this.xSpeed=Math.random()*.5,this.ySpeed=.5+Math.random()*.3,this.flip=Math.random(),this.flipSpeed=Math.random()*.03}draw(){!t&&(this.y>o.height||this.x>o.width)?(this.x=-this.img.width,this.y=Math.random()*o.height*2-o.height):t&&(this.y<-this.h||this.x>o.width)&&(this.x=-this.img.width,this.y=Math.random()*o.height*2+o.height),d.globalAlpha=this.opacity,d.shadowBlur=30,d.shadowColor=t?"red":"pink",d.drawImage(this.img,this.x,this.y,this.w*(.66+Math.abs(Math.cos(this.flip))/3),t?this.h*1.4*(.8+Math.abs(Math.sin(this.flip))/2):this.h*(.8+Math.abs(Math.sin(this.flip))/2))}animate(){t?(this.x+=this.xSpeed/3,this.y-=this.ySpeed/5):(this.x+=this.xSpeed,this.y+=this.ySpeed),this.draw(),this.flip+=t?this.flipSpeed*.1:this.flipSpeed}}const n=t?90:30,l=[],p=(t?[K,Z,q]:[L,N,O]).map(h=>{const f=new Image;return f.src=h,f});Promise.all(p.map(h=>new Promise(f=>h.onload=f))).then(()=>{for(let h=0;h<n;h++)l.push(new a);x()});function x(){d.clearRect(0,0,o.width,o.height),l.forEach(h=>{h.animate()}),requestAnimationFrame(x)}function g(){const h=o.width,f=o.height;o.width=window.innerWidth,o.height=window.innerHeight,l.forEach(b=>{b.x=b.x/h*o.width,b.y=b.y/f*o.height,b.w=Math.max(o.width/40,o.height/40)+Math.random()*10,b.h=Math.max(o.width/60,o.height/60)+Math.random()*10})}return g(),window.addEventListener("resize",g),()=>window.removeEventListener("resize",g)},[t]),e.jsx(V,{ref:r})}const _=c`
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
`,tt=c`
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
`,et=c`
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
`,ot=i.div`
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
        animation: ${_} 15s linear infinite;
    }
    & div:nth-child(2) {
        top: 0;
        left: 0;
        animation: ${tt} 15s linear infinite;
    }
    & div:nth-child(3) {
        top: 50%;
        left: 10%;
        animation: ${et} 15s linear infinite;    
    }
`,it=i.div`
    background-color: ${t=>t.$darkMode?"rgba(0, 0, 0, 0.45)":"rgba(255, 255, 255, 0.45)"};
    backdrop-filter: blur(200px);
    -webkit-backdrop-filter: blur(200px);
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    transition: background-color 1s;
`,Q=i.div`
    background-color: ${t=>t.color||"transparent"};
    height: ${t=>t.height||0};
    width: ${t=>t.width||0};
    border-radius: 100%;
    position: absolute;
    transition: background-color 1s;
`;function nt(){const{darkMode:t}=m();return e.jsxs(ot,{id:"background",$darkMode:t,"aria-hidden":!0,children:[e.jsx(Q,{color:t?"rgb(103, 8, 74)":"skyblue",width:"80vw",height:"70vw"}),e.jsx(Q,{color:t?"rgb(12, 52, 103)":"pink",width:"50vw",height:"50vh"}),e.jsx(Q,{color:t?"rgb(4, 80, 65)":"rgba(255, 255, 166, 0.8)",width:"50vh",height:"50vh"}),e.jsx(it,{$darkMode:t}),e.jsx($,{})]})}const rt=i.div`
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
`,k=c`
    33%{
        opacity: 0;
    }
    66%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
`,W=i.div`
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
        animation: ${k} 3s 0s linear infinite;
    }
    & span:nth-child(2){
        background: radial-gradient(${t=>t.$darkMode?"rgb(179, 83, 150), rgb(132, 94, 211) 40%, rgba(91, 145, 212), transparent 70%":"rgb(210, 236, 255), rgb(255, 250, 221) 40%, rgba(255, 214, 221), transparent 70%"});
        opacity: 1;
        animation: ${k} 3s 1s linear infinite;
    }
    & span:nth-child(3){
        background: radial-gradient(${t=>t.$darkMode?"rgba(91, 145, 212), rgb(179, 83, 150) 40%, rgb(132, 94, 211), transparent 70%":"rgba(255, 214, 221), rgb(210, 236, 255) 40%, rgb(255, 250, 221), transparent 70%"});
        opacity: 1;
        animation: ${k} 3s 2s linear infinite;
    }


    @media (max-width: 768px) {
        width: 14px;
        height: 14px;
        top: 1px;
        left: ${t=>t.$darkMode?11:2}px;
    }
`;function at(){const{darkMode:t,toggleDarkMode:r}=m();return e.jsx(rt,{$darkMode:t,onClick:()=>r(!t),children:e.jsxs(W,{$darkMode:t,children:[e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{})]})})}const st=i(({titleType:t="h1",children:r,...o})=>e.jsx(t,{...o,children:r}))`
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
`;function w({titleType:t,content:r}){return e.jsx(st,{titleType:t,content:r,children:e.jsx("div",{children:r})})}const At=i.nav`
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
`,dt=i.button`
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
`,lt=c`
    20% {
        transform: translateY(min(-8px, -1vw));
    }

    40% {
        transform: translateY(0);
    }
`,pt=i.button`
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: max(48px, 5vw);
    height: max(48px, 5vw);
    right: 2.5vw;
    bottom: 2.5vw;
    animation: ${lt} 4s infinite;
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
`;function ct({currentPart:t,scrollPoints:r,ViewRef:o,refs:d}){const a=["Information","Project","Contact"],[n,l]=A.useState(0);return A.useEffect(()=>{l(t)},[t]),e.jsxs(At,{children:[a.map((s,p)=>e.jsx(dt,{$isSelected:n===p,onClick:()=>{l(p),o.current.scrollBy({top:r[`ref${p}Top`]-120})},children:s.toUpperCase()},"NavButton_"+s)),e.jsxs(pt,{onClick:()=>o.current.scrollTo({top:0}),children:[e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{children:"TOP"})]})]})}const gt=i.header`
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
`,ht=i.div`
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
`,xt=A.forwardRef(({currentPart:t,scrollPoints:r,ViewRef:o,refs:d},a)=>{const{darkMode:n}=m();return e.jsxs(e.Fragment,{children:[e.jsx(ht,{$darkMode:n}),e.jsxs(gt,{ref:a,children:[e.jsx(at,{}),e.jsx(w,{titleType:"h1",content:"AHYOON"}),e.jsx(ct,{currentPart:t,scrollPoints:r,ViewRef:o,refs:d})]})]})}),mt="/portfolio/assets/flower1-BJe8LhGM.webp",ft="/portfolio/assets/flower2-B7wrPT_z.webp",bt="/portfolio/assets/lantern1-m4O0ibSW.webp",wt="/portfolio/assets/lantern2-BEJr9aXo.webp",ut=i.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    user-select: none;
`,vt=c`
    0% {
        transform: translateY(-50px);
    }
    100% {
        opacity: 1;
    }
`,Ct=c`
    50% {
        transform: translateY(16px);
    }

    100% {
        transform: translateY(0px);
    }
`,j=i.img`
    animation: ${vt} 2s 1 forwards, ${Ct} 5s infinite;
    position: absolute;
    opacity: 0;
    transition: width 3s;
    filter: drop-shadow(0px 0px ${t=>t.$darkMode?"8vh rgba(255,0,0,0.3)":"4vh rgba(172, 174, 222, 0.5)"});
    
    ${t=>t.$darkMode?`&:nth-child(1) {
            width: max(40vw, 40vh);
            left: min(-4vw, -4vh);
        }

        &:nth-child(2) {
            width: max(22vw, 30vh);
            right: min(8vw, 8vh);
            bottom: max(2vw, 2vh);
            animation-delay: 0.2s, 1s;
            
        }`:`&:nth-child(1) {
            width: max(85vw, 85vh);
            left: min(-35vw, -35vh);
            bottom: min(-15vw, -15vh);
        }

        &:nth-child(2) {
            width: max(42vw, 50vh);
            right: min(-10vw, -15vh);
            top: -4vw;
            animation-delay: 0.2s, 1s;
            
        }`}
`;function Qt(){const{darkMode:t}=m();return e.jsxs(ut,{id:"flower",children:[e.jsx(j,{$darkMode:t,src:t?bt:mt,alt:""}),e.jsx(j,{$darkMode:t,src:t?wt:ft,alt:""})]})}const kt=c`
    0% {
        transform: translateY(-50px);
    }
    100% {
        opacity: 1;
    }
`,u=t=>t?"rgb(172, 174, 222)":"white",Bt=i.section`
    font-family: "Gowun Batang";
    font-size: max(3.5vw, 4vh);
    text-align: center;
    color: ${t=>t.$darkMode?"rgb(226, 227, 255)":"rgb(172, 174, 222)"};
    text-shadow:
        -1px -1px 0 ${t=>u(t.$darkMode)},
        1px -1px 0 ${t=>u(t.$darkMode)},
        -1px 1px 0 ${t=>u(t.$darkMode)},
        1px 1px 0 ${t=>u(t.$darkMode)},
        0 0 10px white;
    position: absolute;
    width: 100vw;
    top: 40vh;
    left: 1vw;
    opacity: 0;
    animation: ${kt} 2.5s 1s 1 forwards;
`;function yt(){const{darkMode:t}=m();return e.jsxs(Bt,{$darkMode:t,children:["안녕하세요 :)",e.jsx("br",{})," 프론트엔드 개발자",e.jsx("br",{})," 김아윤 입니다"]})}const Et="/portfolio/assets/bear-DdVGL-DK.webp",St=i.img`
    border-radius: 100%;
    box-shadow: 0 0 16px ${t=>t.$darkMode?"rgba(255,255,255,0.3)":"rgba(0,0,0,0.3)"};
    width: 240px;
    height: 240px;

    @media (max-width: 768px) {
        width: 180px;
        height: 180px;
    }
`,Pt=i.p`
    font-family: "Gowun Batang";
    ${t=>t.$darkMode?"color: rgb(226, 227, 255);":""}
    text-align: center;
    margin-top: -20px;

    & * {
        font-family: inherit;
        color: inherit;
    }

    @media (max-width: 768px) {
        margin-top: -12px;
    }
`,B=i.span`
    &:nth-child(1) {
        font-size: 24px;
    }
    &:nth-child(2) {
        font-size: 20px;
    }
    &:nth-child(3) {
        font-size: 30px;
    }

    @media (max-width: 768px) {
        &:nth-child(1) {
            font-size: 15px;
        }
        &:nth-child(2) {
            font-size: 14px;

            &::before {
                content: '';
                display: block;
            }
        }
        &:nth-child(3) {
            font-size: 16px;
        }
    }
`,y=i.span`
    display: inline-block;
    height: 38px;
    padding: 0 6px;
    margin: 0 4px;
    border-bottom: 24px solid ${t=>t.$markerColor||"transparent"};

    &:hover {
        filter: brightness(1.1) saturate(200%);
        text-shadow: 0 0 16px rgb(172, 174, 222);
    }

    @media (max-width: 768px) {
        height: 22px;
        padding: 0 4px;
        margin: 0 2px;
        border-bottom: 14px solid ${t=>t.$markerColor||"transparent"};
    }
`;function Mt(){const{darkMode:t}=m();return e.jsxs(e.Fragment,{children:[e.jsx(St,{src:Et,$darkMode:t,alt:"profile image"}),e.jsxs(Pt,{$darkMode:t,children:[e.jsxs(B,{children:[e.jsx(y,{$markerColor:"rgba(245, 255, 184, 0.45)",children:"사용하기 편한"}),",",e.jsx(y,{$markerColor:"rgba(205, 255, 210, 0.45)",children:"보기에 좋은"}),",",e.jsx(y,{$markerColor:"rgba(254, 203, 236, 0.45)",children:"재미를 줄 수 있는"})]}),e.jsx(B,{children:"화면을 만들고 싶은"}),e.jsxs(B,{children:[e.jsx("br",{}),"프론트엔드 개발자 ",e.jsx("strong",{children:"김아윤"})," 입니다."]})]})]})}const jt="data:image/webp;base64,UklGRsgFAABXRUJQVlA4WAoAAAAQAAAAbQAAbQAAQUxQSBIDAAABkEBbeyFJf2rUnjW617Zt27Zt27Zt27Zt27bdXf2vJpU/kzVOREwA/Gs/IGREpzOMlX0T7Km6rjp57/GD8xuH5A+nqc7Z6ayOQetXxqXRVOZT6gwavdIptLos/d6i8XeLYqvKsdaLQi8mVJPvfC8KPulSUisdhS8OUFAKD4r3tFDQeqS8HlE5qZFUb6uc8TR43KQY7SbRkzSKiY7EnlqKKUCFAxVTjWy6YuqRzVVMJbJJislO1kMx4ancFRUDx4kexVFNd6LtTDXRXpN4KoJyR5MctKjHeZ/gXUFQcKm34vprKoLWblELTKBk3+7vxSwPBEX7Vrkl4OlAG6g7xqz3BjxbcviByv0zznnM8Wpd+ZCger/I5UetPXjqyKYpDRLZ4Zel1ZmsUMUK+ROE8SVjjtg5ylYuns5pCj6+MRuvuq0jIuo3FpQMzSjMWUYff4tfvtzXM5EWLFiiibeR+0wblzBTtR1u5H27KJdJPlOzp2j4TEEmJvYWHY2+Gu+SzT4NRb5s5iMi+y0U6N2ZSK6wK1Ds+16aIa3IExR7OoVM5oUo2t3cUI77KPq8S6KqujB8ncqA6xCKX+AvTfQzSHjIl8t3sJdAzy1NbyStypXgJVJuskriPE9zmIcNRFJPOknK6zSYnCPUZRocy6Rgk5C4LUcaneioQwrbbqoFHPWR+FVkKSKdpzrKMYQK00oR6ybVDY5pZPmliH2L6lZQbDpZISkiX6Y6GRSMJMskheUI1QqOFlTvo0sB86l6cuSgOh9SjppUmTjC3ySarskR6ybNVcbhM4UoP8jJJtO0A95MbpJjISSBGA8oLlm4TFMpPpQGWVlLAncJ4E90nWCzTRqwHBTmHQcGtWpvhF3JARLH2+UVNCXACAQ0eiHoTj4mEyTZ4hGhT7SCcUvjx0KuFtRA7uhTXxh73NYEIgNKnTDm2ZGGgezW0ms/8L2emoaBWBa3yx0+76FWYSE4OnJNuax/TT/dP6EfiGeuFrteB3FvSSWXBsHUL0K62j2HDulaNVlIBsTm6KU7DB3dv1nuaDb4n21WUDggkAIAAHAQAJ0BKm4AbgA+kUSaSL+kIqErHwlD8BIJQbYAuDLlYpagj1d+Qt7nAbYDzAfrX+t3vG+j7ycutS9AD9gPTL/bn4Mv3F9Ld9M0wKAD2NuPmhscJUtgNKVmyNGyv8z7Fhp3Wh/+6hETPBGtXUfvyxfNNoK4h0vFqfZbD/49WMXZvnImDlR2T6TNBjoQAP77/VAe/6WX/x40WonyG61/7OMog0XzL0y7Y7TiHY4VTdLVRgXUZ1T2cHPqQyOe/fvQZE/1/Q/Kk7Hf/+9l4+1K6DyMjI6zrVBV/nsARJJKEBRpgwCLFpWQKBXc3gm9+akefL9xtS1ucSFSEtqyIgXQ/IYdhW1IvP068f8n5T6RTl/agwGod4XW/zyEKyL15a/WY+SEgqX49aB//tNpmx9wn3e/geVZK3cEmtDD8ULAg3v+hi8HPXb5taf77Zze6UhVvNkqpECGvgCYKgBynEo+UMOn0bWbzfN84+g0g+zVLf3VbKRj29fvvtVJbNDTM0efJLyd/JKLEvOZodUPfgduPZe9E19SKfwliFJHOk2zCqdf04GWg+3YKi9Ygdtkvrd8CSk2Zq0WpOdzTqZW2tT77RBDnXSeC/2bG+LjT3bW4iYfql3l/+XzkcFZuT88kq3rMvFqRlfh3IBsLPg2bN+7LxovSGbqe9t6B29vXgUj77zbE9gBQZnTy64z28aQW4YfDG2771dPUXDGwyp//95aFYox0FyIP0vuBDtDw6TxdOcwnAS3bOV9F7IGDE6m9AqBTaYdWF38RMvBkkzf/RxCOeUfxwdaT/P6AzsqQGBfaCaYCTiAnXIoCkT88bC8eR4/pfHsplLlzc+f/59v372xP90BGYF5GQNIea13ruwAAAAA",Xt="data:image/webp;base64,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",It="data:image/webp;base64,UklGRlYEAABXRUJQVlA4WAoAAAAQAAAAbQAAbQAAQUxQSP8CAAABoAVJtmnb6nWubT/btm3btm3b1jX229e2bdte1zb3WfUx5pwn9or3x4iYAP3v/79T1jrtvBPKF6kgSlmZRtlsNnuiVLdJy5YtWz7uqN60ZcuWLd8omclkMm+4KrwzCyA36p5yvujqtivZNaPFWWl6DNtG0vcAuw427wLsPqI0QH/Hw9vxTz/PVas/7txvFVNTdp6DI6VSwwFGSDpph3lMAdV7E5y8bw5YQmCH1NyBu4GkQ1YD3KsSwwGyUUDx1hT1FUmtAHIrtxjOSknBKE+uoqTnzPqyTwAs2VcBz2M31r/lkscGOzYcqto7gXVXlq75UQL8npLzEg8PSIraA7RcBiS3KqBqbJacKPuwobkuAMhIUgd2jX0xJX0B3i4EJpeTtP8ivD8o5GGA3UfL/ZXZVNsxqbqkE+44IFI6T0iA6VEXgFsk6RLPjBJBbU19easuB7il2l6ALQO+v+1IpbYFwMM63wwuLkmtHXuPV9Agc61Pbc07amFsMvr6KB31dgGrS0vjgT3nmNMc4wvCxpkTA743X6nqdA8UfpqO7wFeknQ9QHtJxYc7dj8QNthcGvCneU+q/NVGD9yWhrrrgR2HSdJcYM8J0mu4Vx4U1Mr85Cu72NwsSWWv+3zg8sQsScPrAO1knwRorMM3ADmAvsVDXjdrDvS8ALBz/xIH3vbTdZJKX7ASoFb+yi0ACs92FN8MbD5iPMBrswFeCTlsJ8DEKo5T1ple0bSd0E+2gzkyf/cADCtw6COASQCDSp1t1h0WoPqGmbfXqnLEe+sB9pyhrgCfl5IOWg7sqJy/0eYSuSttx72utvQWwKQqAVXGmeCXpXMTgB0T5mAzyvsJCTAl8qiT5y5JxScAfBegg+YU4SdJ+t141++bv+YA98t/wV5HJ9mz9gA7LgvQPt1Cck/JFq8fsO0S5b3qgjiOJ5QKKNErjuN4YW1HVD+O47hflTiO41ZGxW4eUejYXX9/eS/uscts+6m2/ooPu+bRj++5vJKCS5940UUHR/rf/3+nBQBWUDggMAEAAFAKAJ0BKm4AbgA+kUCcTCWjIqIitAnwsBIJZw3EdnmSrxAD0AOkrIhQW0C4SC2LhNlssgWe02IYejbhs1YSpnDp0x7CGrSsmHO4Y81qp1kJpmMFijRXBkIFiAAA/vucwAfP3TE7bLLHNDH2RShfsf5mkKFQmf2EWN37dqwyo5UlpDd6/Q9LUP3YFD+wEwAkfTzvzPGDa//koUlTY/hqAQW4a2llc13G9pAYcm88fwXN8R5rQ9jNhfH/BvyYj/uv/IoHCr/Laxz8Pb+LdY6DoAzinCa8mmaW2V8f20ItBpcFXTMCS1wFfZLBzDLMKGY/HmoS268mkY+j4ZkXFOOspAXHdAiZlCNx529wz3egP2sjx0JbRund8SInu0PpTdPdcvXrsp/I7/+gR+MD3AAAAAA=",Tt="data:image/webp;base64,UklGRsYFAABXRUJQVlA4WAoAAAAQAAAAbQAAbQAAQUxQSNMBAAABkERb27Et969su36Osm3btke2bdu2bduNm9m2vpV9nbtZqxURE2D/MdrjsIvDdaZ+cnGqTncfuuvU96G+TiEfCuqE+5BFJ6kPiXRCPngQCNaxOx7cMOEzHpxW2ubBbqXlHqxVmubBVKUeHnRXauZBI6UaHlRWKupBEaXMHoQrhX3gBWIp2V3eDZM+yzuttY23W2s5b63WNN5UrR687lrNeI20avAqaxXjFdHKzAvXCvtI+xhLy57Rnpv4DdoNtfO0s2qbaRvVptGmqvWgdVdrTmukVpNWWa0YrYhaFlq4WqyPrI+x1OwZ67nJ32Dd0DvPOqu3mbVRbz5rtt541li9vqyees1YDfRKsorqZWGF68X6SPoYS8+ek54b8AbpBuEC6RxhM2kjYT5pNmE8aSyhL6knoTmpAaEUqSQhOykPIfwj52MkIcVzzvNkhFg3ODdCCXaBc86QWzgbGfM5sxkTOGMZfTk9GbUwgXoMy9l39yO9B3s75QqGmFmiktMvBXTeXx5bKJHhY5quuKVwdVnz9MHmZJwigw4H/sSrg0PyxDdnE9eae+v3XFnQJNScztrm8Jufe3mgY0bzPV7ZKWc/fvPxxJjyofZXjGy2ZVGbtPbPTwBWUDggzAMAADAYAJ0BKm4AbgA+kT6bSSWjIqEr0ctYsBIJZgDTIit+k6px0jjveUoVbnfm7xy/6b2GeYB+lvSW8wv6y/sb7wH+h/Y73If5H1AP6H/pfSK9jP0Hv2A9Mr2UP3S9KpPb2DJcJC1G/csKFmCE2PJlgX/B551RtWiTIDrjdGX5k8XjRhAhe5ox8BLyk46aLbaAFuqxlv+y47gvBNNiTiirejfCobevvxHQ/Atb1ilEQCXbxFZpCAHOe7BgTs33evDlXwtjv3Q3120BJAAA/vucwAIL6N4MQV/dILz7VaRj1t6cG+7X7A+435qrEh5Dn1GZNs8TIupMjqCVTeCvgKGGicc+yJp51k+xfLCG63JXaySn93uAj4rn50dPEK50SUpHfiQVvy0Q0gtVD1nqQ64nxvvJg5RFBJpTZxXvtLX1eWJ/4X1OD1Yt6N9zwCs7107LSf+gY2DQI8qS0FUip1WfH+EVxx06h3oCPvefA/APSqLBOUbipm/KV3hgOHgeG9hdfZXmpe+cymCPBtcHuYZh1ps/ltnoX/7R6qakTcsHPQCviOMU0Iv/vI1Ss9PX5vDPCNcsDfH6JlUnkOWU++wCImq7nx1j+ZHsDgJYkkM//MB/TBRiPFQcspk99qvrDlaILYRaze39fcqGZCzssAOux8nVL0oDmz/n8xRcV7jnhy/X4RncirhqpA61vuJi+EZXsLRh6Yo+aindblMWy1UdOABeC2HbFd4oxygDLOt7h9hkQ1FvwpVKxCjcj+YG89FWX8Bc1BQscbr5Kc4tzNpgnWsUuPXcyBpE7PA1/ZTbmfvgI32dQmtFOgWZwP0eDja2cLnAFO8o3O2oaPadAsi3bc/+Pqf8VJsZ/W3i/kDXyoQHFIVLeYbKWyQalI4roDQpTMrIWSArJAQl0/WlO//4xfHOXhch3tOdBAdAFPHbv82muLtAV2P/RHBwemfOFNS8kfq+vj7Y0usi0SGz31qDKCh10ZVcJF/4smK6ZQ2XiLDVoQyyo7HjdBoPKD2eI+hSAPbnTyT57G2OR48B5vxFz+5FRiQGx4DzK13pcH4Hj8pvWXxbUHxm6ia0aR8YV+7GDuZe91AYte4K07el3aQ6yan9yfCAP3zNSOgA1ukwdV1l57+CJyrIL736+D/M03Prsd0H2Ag7N2h0HVGKR+K7P4/+SfgIYexyDLDD3AQ1evsQoJXOf85S9DkSMiPaQKRpcHPkGjFkkAAyegomM5mCeiIO4/F2ws1t197u9bocuETZb0D4hf0Dhjo+o5fzb4GRqlv78sRPHy6KzwAAAA==",Rt="data:image/webp;base64,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",Dt="data:image/webp;base64,UklGRuYCAABXRUJQVlA4WAoAAAAQAAAAbQAAbQAAQUxQSCcAAAABFyAQSFLZH3KNiAgHMwHIuPUQSR95ltQ/R0T/JwAb8vpE3Nez2JcAVlA4IJgCAACwEQCdASpuAG4APpFGnEslo6Kho1M7GLASCWkACB0IASpsZN46/qb2DPJu9eP7Jeyf+uRQ/FCjs/FCiZ1WIYwP+bwW1TCgqAya5Z0ESiKUCGbClih3Zrq+NGpMAY4TnL0ieb2bGTs4C/WXS8qumAlB569h5j+OCKQNH276F5jxfJN1cz1bHvnM/LOP9eyj8QJQAc9SECAA/vucwBj/9RDn0oeulVKRXIrw8fe3lBTEW1wCKGNt1IhG3x0Q6DC9PdF1NdgvBbQziJX4n4KFRhXLnzeINeCWJoE9UpydmJeBARVliuc21WwvuoHw5OWzfAEe6QX9gEVJ4x3/v6ZrlNc9aSxahOQx1Do3GdLHnLu96BKzpsMQ1+IJNy9zMN/1Z1ntJhDXaJzM52K8FJjUYkmYKkcd0Bx0yPjSd361W/RCiqNl1V9URuze1X/5KC6u7OGsAGIhTZ00DygoJDwwwd/cI6/4AxDY/0zv8o/ZjpQwS4FnFOcwfH1B4bimvshccv+ru5RcxalwZtsNrJiUvn0hELrHjjGRymoh6YnVc8n9QL8Q7OLpynqKR46gLXAjIupOdVPL3BbxGZ+9VGLrd/U/eUY+zPqLZDzASbE0aU2ZWtrPnXMi/8b6/OfNS8EH9xQLLW4X0T/D/JmQmp3EYewGMif0onz+l+xSsjXyVAFZW1VEbJGPAuImOTpdRHtoT7iHZkgLQEtpODb7XM2ij2GDF0ofjnaI1BWpKhc3/uqwIaIYA+1s8ySJImNgnODUMbjj7/ztj8ewVN9T78MgdRVBdnFWu/Eyzq8PYU0c0EhOw9+zstYiyU3EhhV2cv+k96ASKYEQSyxmMJwSAC2pFbor8tTodXimD2+85ia1qJlCX1v5LgAAAAAA",Yt="data:image/webp;base64,UklGRtAEAABXRUJQVlA4WAoAAAAQAAAAbQAAbQAAQUxQSHACAAABkAXZtmlXK7Ztm1/Ptm3btm3btm3btm3jxslZ8V37rH0+UxUREwAFAwf33/3w1WuBzy7vbeYtj/KXUZVbI+Vgu1lBlWaMMZSA/2tU8Wl7dm7PUdVHjZkZXESVT2fWE1VflpX1J/VdYNUZGZbidJTDXEaW3zhcYlQIOX6x5VOeRZoPnyos0J9PERb/nfj4JHG4DXwN7nLYzQhmcWjHKYTBV1NOsE19fYC1W5LaXljyghaKun5GAffuqvpbCvjX+aKetzEgQ//NKkmf6QCSjJn3QFjyg1HuINGqs1/q9GjTMM+pZ78mJL6YVs0CpGk36hvq7wQ5Lbrexjx/LvKXRJtPSJlL4VuYb90QQwkYzEXaHJ11qO9OB34zkG4oEp6x5jYY6aqkUeB8ZqEpdJZvkLYKrwNINw6J3xhyCkT6wLdU2JTTJAHtkHwXp5MCdtJ9suJj8kbACzoM5+OVJkAnoCyfABSYJKAyH/cEAToBpfgYvxbwUkAYH9gjYC7dfQNGgwU0pNsIjF0T6DxukJXhBEvonNpQXQHWzu/pDK7TJETzghp0EPKDZBRw700HJf8STAb+DdPIIO6tXtNAhqEnyMB3Rf6eVAFJVtyiEAHELE/KTTnfBiTqM/LoVxoAk6K1u/drXcoZJFprj4J650O+cZeRUl4d01FL+iqoJdWQWlJ+P7RlEWqKa4a2DEVtOaotRi+1xTVZWwJQoKOMvFMEWMnI9COdDqR8nO6ynMbSDZZTuEIWJSfYSbUGJB2v0GQEygp60fQBec+hmAsyn6hXxmiQe9OP+XtbF2RvPfx+Xg+H2YIGmpTuNX35ipndSlhAwatWUDggOgIAABAQAJ0BKm4AbgA+kUSbSDskoqEtvbkjYBIJYgDVectfHlL+J3uYhR/tPOb/btEB5gP15/Y73mf7B+oHYAdIB6AHlk/uB8D37lfsl7QANhqLySr4GsO9kEYU9jF2/n8s2C5MfrXQ2mE6n70IJTBSSi+pylHjs9st1Owi2T7nYMDHbVdTg6OHxspgAP77nMATv2qjAABUf6joGBE3lHEvJo0usMJLRoSI/+i1HQ3/DnsC9y+DrXTJfdh3EfnLTW82g9o6bY5Kfab6ZTfPzu1e/qaBTQQmYP9Ifs2s9pcwAGbQG1tW33ETvxV2H/Skx2FNhUdTs9mDw4wBfKvUXZbRFfgCcIAqt3I/ATcw+XOozMZPGMQmW04U3yXHbF/pg1yLOkT4s9GD1Sj/g8EOFhO7GEc/B8tH/HusPfBgTCH3pSIfKE+PxO9ldS9yLYYOCakHvDA7f6in/WUizcPj4bgPMXFKnYxAac2jkeH4Ah+D/EaZL69jG5Le7GIoMrJS2DCt1nAyuCsT5P6IXzMT5O2W8uJTPwAvwOgafsapjbSH46g5V2EzfS8ajNiITilydyG1yjiev/Nj9az5/NRPlq32/4ogo8gRwh+P+WXLYRzkzQInZq/3pLm0c5msi8EOV8UW/1qXPwqpI6HY8c3v5rXy2dCBa/8fBpfmh2j4OTg+RwJNA+a9dognjqXYJrH5TcMaX++9NAgOcX8qyw6WMKbWEYMDp/IASCuctMB/5Nhrf90SiYEbJsAAAAAAAA==",Wt="data:image/webp;base64,UklGRrIDAABXRUJQVlA4WAoAAAAQAAAAdQAAdgAAQUxQSEUDAAABkEZtkyE7tbq2bce2bdu2bdu2bdt2chHbtvZyKlhNde3mX05ETAD+R/mnnQsXbrr2QxDt3S2TJ484IERhAACFR9tDqeSkO0Nj1QAAipsCHAT9ETM+kfq8roQC9PYXoLcBAGFTpvwkkrZ5c14wtJAAVQwCgEyHMvSlvX2QcP7UkYMHDhw+cebKrRdfDTifV6UCg30/08tlDEDFa1+ur2ibKZOrAoy2j4oqN/nS91ft1WCs9RVy6WHGgcZLCXIqXN3BhHvIffUzgZCrLaS3njwsJvfKg4eF5N548rCC3Fc/HraRk8JZ0Jwjh2VZCPhKbwgLpZD+ABby03sRwoLdcmoptYBH76cW0WTgshSt+05swH5S9YHPPBmE7mgYsT5NqCdw2p5QDlY808lorVmB02SOA6+jySxmpiaZccwEWjgDmFFotUR6MAPPnhHpzM3Nm0Q6cXPtGpEu3MTHE+nJza1bRAZx8/IlkXHMaFJTiSxgJgqp7mOmgYXznJkJZCR3Xs6RwVKs+Eh0hrJSDekmWHGyilBabkZ8tYRwCSOdkXK6Jxvqu6RwCxstkXZaSSZcnltE+CSCBZstSH6NhoOREj0cqxSveQoKmDFFMKWyLQq6YoWTQHazZ6eJgpiYXxRFlhMo9I9pkUK4TfqJpO9OH79TqzUI8cu8TORCxz5H2mvVAODu3vGTQYgZZ/qFh6upeHjU3v0TqV8MBp0hFw1DxPT0pLGVI1VyuZfsvvfDBxTQXOH9rDpAvdEY3Z93DPMzmX2vVU8kFPdFAR3gfswkiAnuJlPNQrG/5tYBvndN8qMcmN7/jVj4KlOmvyD3d1NsAzn7C4bx8a5/QcXPxkm5ZLF9JBjiGh1QX5KMuQTyNpBEwxo6oHnzz0aMl8n1k3CJTjoAKrwwKC1MJqcPwmFzPRCw+J0u6fXp+iCz4zvxPjrqAbAv2HHYgKZNs7qC7PZvLTWcYwBhuzcMfCkggM0rBjDei571Cw5whxU5zXMW8EI2aupnPCBu317JhpLyCReI+On8umlDe/cbPnzSglUz5VI8YsTwC3LBAzN1x0zd/KdKNFNXzNRFM3WWqXOynWTqlGzHmNot20Gmxsr2gZ8ft1K027xlQ8oAVlA4IEYAAABwBgCdASp2AHcAPpFIoUylpCMiIIgAsBIJaW7hdJAAT22IvEFRz2xF4gqOe2IvEFRz2xF4gqOe2IvEE2AA/v9ST2KAAAAA",Ut="data:image/webp;base64,UklGRpwFAABXRUJQVlA4WAoAAAAQAAAAbQAAbQAAQUxQSP4BAAABkATbtmk7+9u2/X9s27Zt27Zt2zZ6tm3bTr5xXyva86WXSkXEBMh/xdqWLI8u56LN56EJHZ9Fm+tp1scQbQ77WW/ctFmtZd230yYzWKcs1A1n7RT13ViL9DVjjdZXKQPVSV++BFQtfVneokroC36EyqbP8xoqUJ/9CVK6kz7ZQXprAVhJuinA6aQDhOGkjYQuBmgWoUEqaAChXAKoHSH3F1AtQvh7UAmCx3OOkYtgfZMTH0aQk5wXvog9nKseiNWcI06I2ZxdNoghnMUWiA6ccYJsyOnPKMtpw8hjUIzajMhESkoJht8bysfcDM/blOcxDJeTlDuBDPv9lPNuDKuVlEPWDJlG2SLQYZTFlM6UiZRGlEGU8ukMow0l3zdGajVK3FvGt2KUkAeMj5kp7lcZb/wptscYD+0pFtsZFy0osoxxULBTGVs5QxmLOZ0NxARO3RREH06ZeERrTu7PiJqckLeIYhyXZ4T0rBzLq4SvwRw5TnjqDdpFuOIOWkk45ASaTthsA+pPmGsBChx+/I2u+LPjowVtGVB3xf10Jc83NA20F76lV9HBx9P+lHFuZFl/OzGfQe03P0z8XQnPdvSKEfPrWmrGjfhfMr7fWVDLV8y1bZZ22x+m/ijj9f6uWezEvFu4Fxp3IcFkSrs4rbS3lfwVHbN0bJvbw1L+GQ9WUDggeAMAANAVAJ0BKm4AbgA+kTyXR6WjoiEyVkkgsBIJZg3IBb5oifVewMuN0T8rvaGsH904aU0Palji/p/sH/MPsAfp70lvMB+tf7ee7t/Vf9V/VfcB/i/UA/wHUSehL+oHph+yt5SJNKnoVBzfilf/mfezAPzsKl7i7+bUjgNd6+mQGB7Nk8Vt4g0hoo9F4uRcAxwwyhFUP9TrrRucjAivDRWAv/+kwkTR8SzMoi7NGeg/++xsk988+3qpgAD+/K0QHb+VY3LhEjDMpjXhC8E2LesSWqBRysPhk29SBHuTCkOxWqYIQYVgegE1SW8E17/WAMhcYbcngS54T0HhWWBSf0Ew2j9NiLk9wQ0AQkuF5NpWMPkUqIivYuBhWQxyxkKeskJj94MLn83P2Jc3TNGsfx2OdXip/aJlq0VZl4b5BzcvRWQ6GDho+8DWTM1/+Fqzn0Qr1mhxBruSCB9E7Q/4dpBYdAbn3CnCYAnjvV4Jx7mOILsSyLUP0WSXOw6zf/DcFDME0CfKVxu60qLM/3d03z7WIQoY+WI7rS6pMWRFDDnvRoDX/Hb0w39Lbc+B7AcNp8H+EACytnDoIwHgaQ+cA2YqRVD4esDXRSlzOWuh6D7dsFkPR+q9OFJOWWkINB+fhaAdW/k+eIzK/TwHGj5yrUd9moy7dBQfuxRGU5lVh4IdrX1YgDCEaUPFT1UQMYxtXTxfcRCw4pN6Q/zpukhYX2aWq8/BQ4WYJYJ7eJuL3KzwyB+UnD1wYYjNIT5EZhqjL2b4VFK4ApnqdVJCifnTZR5rhG/APoGwunVOavQ6IWQHrzSVPL+jtW3vRUEJ2CS/9xnt7se4HPvC6MAHIZN30grqVB2QI1zZqChssH3TWHdBHgXnJWzheSTb8VFT26Esvgo19REro9G79hKUVQTTkC+Rk1h/PBCgCKGs/paVsmHbQQBrLuK/Zwvmol3SRdAhFz1RTuVoaq2e+duD4YpEpa0UoPioGg893cWc1S78keo+eLrbgroYiP6DLCat6M5Mbezo8y8bMaOlWlxsoGBZH2KgOCWsB0YFzUig0380XVabsJ+IHSDzAEVL2fj0I7RVgrGzoLwkAhq5MqqGiBj2Ry9HW+XeG1P/yvEK74evYkcAD1PZ//q7PuWmsfDFkcDKER+WjXeC1arHPKwmwRi8f+ncScZZyUgX2Z8AAA==",Jt="data:image/webp;base64,UklGRloEAABXRUJQVlA4WAoAAAAQAAAAbQAAbQAAQUxQSL0BAAABkEPbtqk9+7ftP7Zt20ln265s22xt27Zt27b93h77dBkZETEB+M/u3P0Ia/kKafyVcVOIjooUX1voSMUxVofnTYqJOjDCmFzGYIcx6T7aggHGeC61BYG7bIHvdFuARldsQWLX06YAKDhi3bFrN35pwh+fUZF2CGHHCCH5vzJeSaojFcXXkTp8H1Es04EZFKuE1Cc5LiPkBccmGRjBMVhH6H2K6jpQ8yND5Ecd6MmAbUIwgKGsErQnwDYlyL3fvUJPlcC75la30EkKgLiW83aevPjLx45gqJg/nuwMevCFTyIcmM451LnKFvv6K+GzfM4h+aTnXN5XGb6ucAEI6rjtDRFWUtz1dAOAZ7rCaWj6UNxzi7oYyRgZHpc4estAZY5GOjx2U2TRgVSPGHwe60D99wQYJwT1PxMkfBSC4g/dwyQlSDH7s2sJV5QA2Ra/dQkVP0sBAsqNXnfw+Mmf7ziChl+0/HF7Z1D9uS3IetIWBHa5aQrgUWHpTUt+jsme0RS9zY2pbUwOYwLf2oL1xlQzxvumLWhljMdmW5D8ii3I8NwWpLlsC+JnfjEFKLHLFiB7n8PvLQHglywL/jkPAFZQOCB2AgAA0BMAnQEqbgBuAD6RQJtIpaQsIS5UaXmAEgliANXxwP8B+AGxTeW2bvrN0nvkTwAPYf4o3Sd/iHoA/Ub9kPdY/w36Z9gB/dv9J6uvqL+gB/AP6h6V/7XfBh+7fpCvswO735t19kR2JCER+Ym02rZZCBzIWLD2wrdQIt5iTXAZLbvPGsrEGXB67rrZKXHh/A9pET7mm4Y6kA5h9Ct2TWxppCPy/OXz1igA/vucwAc/hYd//7K5dV3/j09Qn/i1Mob6ffWOC06CHYbf6jehfrswIX2CX+mM1dTOjMrFLNAqgXH0fkZiESTKdT/NWG+2ms2+l4sOmg3kQDhkrLG7lV2iOsXPKpy4+1vX0pK3PChmS6+xjdLnsVZF7OeJs6Gb+eA2ugFV4wvxRpzCfL3bW3G30OL92f3mxQa2JYgnkliAssBCD4gVe1X7WVc+KpgCXRMmY2bQG+nxzwjBuShQoUWI4Zu5A8aarSb10Li+fcG6jW6E/b1w+O5NrkrNexxueGYEXf5PVKqmGvzg2E9f30LjzCI/9FQ8lZGEeWhDUfB01QVc1NTptcuent00ewEOalHAeIgY9YmBxZCFjzrYAW/pdIaf4NqRRsHjaAjXovHAWqrnhbv8SbJLXunm85WU08W8jCFU9zxqDJ54cAw/Xm+pLvkbXVGV4z2+7nCuR9+2HZoksuhL+u0f/7Dq+gSzFUlURChflZCfj1W41wRaDw4W7Cq7zLsivp37krY3vH/UsuVxgPLUPqYtREHgBDp7b7lLuSwYBbKT/oF1n/+u8jj4y1lzz/Uude2l3RsQ9w+NWoY1K6F3yfAbNBq0KI5ZnGnL5K0AQAAA",zt="data:image/webp;base64,UklGRtoDAABXRUJQVlA4IM4DAACwFgCdASpuAG4APpFCnUmlo6MhK9VYyLASCWIA1i3vflfWjZf73+QHNLcaeEeT6PT2pcqvvV9T3idfRL3APMP+un7K+830gH65daN6AH6wem37K/7c/tJ7Weagdk8iV2A1gXAxfnh26RRMO3nNvObecxaPM588M0qoDl4OfFSCVHml4L5hwufQXV5Q1QuTmCENAtpUsYyw4Jc5NbWNxwh8nO5Pr0jdnQy0xCBsVugGYj4TmTYuDPZ+0lCdu+AAAP70bQffaf3dz7u55zd21sekIOmbQ4GS5F4QAAAI7ItVOOvICXnPXi59d5h9ruS9PzmJ2mw8oPiP/5p5vJ7/8wDgefzoFol+7yM7cRPU3LTUYkauSL1xqKbhvnvDyB0IkaMMNi6Js509+sS1LX0pliMQA7Wi9wVKUpBCJ2xNWowjxvAiFjQO0YM/mY/OxV6GKPplRer02XLtWmkyV4Gp2M/G93Lm+BeByiup/anQD2QZUG2tIgwzSTufRIwJbZ1aXRba9ExIEjb9Gv/cp8IqEyw/eSGpXFamYBPQDpyAcBaOJqurNYDqj6CapbMFFazfnVQ+m8fq52BXahs8I3Xta3K3xePk4pn7iKzsaAih2HYfr+MyRakFff/yWi2OxQiCCmAfEGyJYePp7rIIfvu5PEm5eNE6/rwBy8FmUvV4hSK4WGjZ56PL/l+13y5uy8K76fkMstvJaKduktzyq1PTot+6juFudFBNsEXXYt/30hMwpxvM/i4avs3M5At2RUd1S8t6fWu/j7wsLHTT7XBUrEo+H9xjVzDICvMGZmeP4qB6ZypyQsjFAn1eLN5TzepgqVS9Qidh72FnjxzQ2Y26rzo7AQgZQUFjTRjjAjZi8gVoRNCdLRHdT9WGHi3sPU6/EDJMrEaVVtyd6xLPz9+IM9AXobJ1TOQLMPjD2niGpD9ISc9nkW2aHMSuWyx0m6EaFT1dXbqOf9zgB5dhLn0bTNEQGI38esYC9g5A78nVs90q6aHFb58bXqcHGoXCXbyNm2omXhrlcpWAiJzJ/2otB202oF8RWwzw54o7wWmSW1H9TfsBUFb7iPMTyJxayomEg8iULHMGAkoVlgyVv99sT1nuIu4BR4dCabwBTIH1FUK8u45yV9JOtlr4IQOh6jqL80UqTL5AOVMa0oG1KzMA9Apn95MmgIfyI+6dYlHVkGWnklQTitQPHoru8GX1AleMTpfRfP1q9wYzN/v5AIvhYGDH6aK2+pKcUqc+40hiyvQ/2bvCo2Tdu3P+EuvOgQbUV3tRiAdBu59cSeB94piAAA==",Gt="data:image/webp;base64,UklGRioDAABXRUJQVlA4WAoAAAAQAAAAbwAAbwAAQUxQSMMCAAABkATbtulaK/m2bdu2bdu2batp2+jZtm3j2UayG2ff3JOqfVpfETEB9J/WLp+vX8NM8rYUgFQrxIjcNnvmzGVPvDIOaqZvQiT0gJr+uzfaMameChGRm0EdlxdaMCkeCoNFXmgqS7hV9kf6GjHJ70uDhona6kuVbJ22urKE5bJCpqe6ajPJ7smDFpGaasmFVZpqCpblk54asoR6hmZRWqpzd4QIyck4nQzWaqnGJL0lS+ZhXKYvXrgtS46YAgxaRWuoIVJuupSUwS4NdUTKS4lLuIxvzVCAKKgmg9ZRsgXnYAoR0bXkjGOvrjtCBHFFiMi1gEEWPxMUIyIKbcKgtUvPbVmKK/QwJePYq+eOLCUYWsEg23cdyYQpxSU0YNDOpeOuLGU4upWFcRyXK5Ara0FrkirI4iNdeavExgw6u+zdE4qeZWNSHBOunAe0KpmCQgF2kt+XpbQn7q4MergthssSkN0e+adnUhy3CMsqURmP6AiD3H4c7ZWorGfUg8EgN0d9BCpn41MuJuUJi4+pgeQPZClvgw4xyOfD0U4ghTAV7FAPBuMsXK2Q4qEQ/lxFWz9yMKlOcvQhrTSVbNEJBqUDONophl82prI9V38GYy2iWwhT1R59Ks44L3D0/KMs1TTQmeQKyvlw5Jalhg73KAbzLKS0qKODvhZlHDdFaqiFzqdQUChaohZ63GMZzBYlphgzRA+FFWGSXpOELmQHklV7rokuplFQMUESby91KJhljvhOTLK7xiDf0goqJxqDzmdUMM0ctJzJetscsfUU1I43BgXmULDcHHQypZLunjlomoKGEeaIrqlggTnoR2Ylwxtz0EknAFSNNAdNVrDaIKG1lbRPzUEf0wNAoyhz0B4nAGwySPxUJf0Tc1BwdQBolGAOepUFALYahHY4AGT4SJ+MEdcXADr6kDnDqgFXyaj3FtLvlQBWUDggQAAAALAFAJ0BKnAAcAA+kUihTKWkIyIgqACwEglpbuFz4ABja6m9xF5YBrqb3EXlgGupvcReWAaeAAD+/zVpVwAAAAA=",Ht="data:image/webp;base64,UklGRmgEAABXRUJQVlA4IFwEAADQFwCdASpuAG4APpFAm0ilpCKhK9jp0LASCWQA1XmqPl/y3m5WduNRwq8PqA/Ne8H8wvnVelr/hb8BvPfkgZptZYxgZ4BuAQ/uS/+eMAe499CxlKtEIdUFLzRXbP+VwLZN/lHQgYB5e65n0edM31iosI9r/8xgXHrKabFpFIy3f34JB0wiGWapkMNPbB8msGRxmCL8qPKpN4r76rnebVoOMi80Rbg3rf2zqvKXGQGNlNvS2/ajLtc/X4AZrF5f5fDdJMyrDeGAAJv/yfnw09tm6//9Ew/6Jh/0TD3CgzBqlbNjgBT5e6Ka1mhZ1Z4mUoPjLmQLtX0SbO0d5XACd4PXGoj+5/IFhdPd8SmVi2z3IHtyYX8noNP2sxnjTCyz5UVjfi4ItX9EE3R8zCbpCeIw9xSmwQJDcgQNKcwpEpO+Z5GudTj4qUMhqHm3RdJ+I60fVwVLdOFhrTxtiyx8ugcY5KwIe9g6ijnFRu0/y+dyRurHotifIGI5/X9xCMjjJ0zPnf5Qj/Yg3/JIWXNL6L/4YMmktkztDYAnf6fQvXfapyLstY9EXIwy+SPnOuHTMTfKrOekQMZ92Zh2hLhvM1UxQbWjr4fytSJljcZAzFRSdmRyOUiwTFbYmf5u+wL5JnKxXD3ho2Nt5txXBiZIikSG+oczmRBQXt3VteILeOn9MjuIr9UGv1UoFPSMe2WHYCmFWbDkrg10V3TpHLq+JgfPVKOK+F8kJ0QFdbT5DPsK3X5LJyfzV2EuJBLDu78DehWHjOQXiT3LQ06l9cixOWT1fXC0XES1mnfoc8Si8zkl7QZc8dqLg/tfdG1a4u79LazWRm/7VUqINE7YDGVbeInS40Xg4FtpWDOsoUt+Zlbfnn+dASdczBE2V4GILY8pWJZJyTjglo79veDSFWhhzEKcXs4qiG8arINEEymBadtDgjik4SjQOtQaYnQoGA4TACEstke5iyTcM1+4PzY/icV4Q2X1tirIeR6iXGnuuWn9MSg3sdbaDJhStMymPyWIfuQvB99lpWS0mzGigU9XE02SlJfUulbRlvBk2mi/RmAr8dXpxIo+3G80gCA/XtAn1eB7L2BYGIR+hf+GZleRhf/XUnAq8kTS1n0kHfpVihbYQlB5q23eUeDZ6DtPlHUj0B+y++RM1ew4Yj7y2DZSHxn2iMDcv+E0pytg1Bz46iRYLC/Liy9lpXxnSE+pn5fvP+rXzvHfTLzt3H7DcpetaA7nGtt9qX4IatuNGedcvrZtQJIiGnB/MRECmbWGqXzEYQ0Incv2J0JRh+wLKEJDHjWCsLeMYbR4XLKv2O6NuDl/hV+3lKF8iSMIJ3gwPHxFu5F+/7IJVXu0Wstmh/aw/P02mAE3P2CHSU88c9MHagzGytEPG9n9dQlJAhuibO0d33pzH0LzophzonhYGj/5sl0y7ACxqU3AiSy86zBeKXprm9jMwLmMij3ohPc6K1C8+T0Da6XyVKN6AAAAAAA=",Ft="data:image/webp;base64,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",Lt="data:image/webp;base64,UklGRkgFAABXRUJQVlA4IDwFAAAQGQCdASpuAG4APpFCm0ilpCKhKTgLaLASCWQA0EPd8u78j3GAD0Z7dTzAebv6M/855x3W4bzvkMvjPsmx488VF2yOnHrhdVO3HvvDhGty5Wej1ylDXIZWbv/yG9y3+sdbsfL8PAjwSr+aQktT7shePEE4yOxpDHs685TukdlIv4GmMzH6HWHwjeSiqPCXNRMhYW7Cge+cVLmcCmjos5Vshh3VbYz1iXbeFNdjFd5RrYc2a8YqM1bk0hLgpoLGNa1YJVzsiHWBdWORx4Ya357mAAD+645f/5kz/6uf+6DwP/tT1u6X5LgyYEfyi0zuV2JdOWwO7qeEt8OB12FE917Wr8GZkC0Cmt2NmilReybq1OBqX4IfKBeFnIsPh9pypFNAsBuScu6uqJyus6TvnMY3xr/PvRDT+Op6g6bqY8u+RL8UO0+k9eC84AWRkomn+CyaEd6qc1i+KAmHDgnTMy56Z+c2NDtyCFTc7kNuqzuDLAN61BdfX/4H1DPpxJwyhQRZWS4L+Go9Bz84ZYNM8jAM2jciL/kpDMyDEMkQNREWeC4oBG4C9mSh9SdgI8wTK9PwiAHu2loNA17VSjNox37Q0OsONtl7LPqJyTV1QQ7EQ9T5qrtl4v/MdQ19zcjEr6JdwJ/gX6D7agd/b3Zk5Rw9Nl/PFtyM2oyTmjMqUA0dIELsX5RtCa9+Ks70HI8rYlWCqJRUc2nLpv+ZX0jPzuYYpLrbQ+ez9nosuST3vVbpapx04w9AT0T14WS7+WKVwVfuiNFvKT7rMe85zfnnVhFR98TipGX+P+XMMxB7Eu1Uz7tu0/3INTXECustTdj8zLcVy6goreNHwDxRbbJAV3yuSCsdYXxhmsv/wNyGNgNwX75c/M8Vsage2gUzrmFpSyCgcZdbIjE4Wvo4iFQGNIDezKX+l0gC0VcIS1Z5oZ3nwg8CWtWa4miK+7AMpcqmtDqMwrQrN6Z0ExFdfhkRouiB3S4HOdZDps14IzZgPPzI9Uifz9a3hZdb2c6nwqpPqu/Wju+fT4P6jvrm2dsuItJiBvvs8G4cgiE+R11dckRFxenlWYkV+OepWnpopUTc9N0vdiNYrNs3YLUyjatbMLIaJUgJnH80SiZEGbxRq1O7NUn/5UtK3D3yardhLAtIybNNoVJ7PPgrHuadF8D4kZKCSXnTlwj/K1n9aTP0zWPtxL38nXF/nbdNUuesngL3ChfSbSplR83XNmFOTfBOIFRHe0doJCQOj+j01g15IXR4DRNeJUok2UTwUTW3cyHDLOAs2rqmvUGEjFcUBjo0nD/+MTTvIfrY9PuyLv1SmfKs9y+58BmHDBMyiDppJQj3nYJgjuKdO/7MXdT+y5cX3pIod9qKM+YaZLIjJUuNWvD3eZUcVADgh9hjKPwZn4P8oD8C0bRfUJwKIXBW90Y3/sGYJHf2vf1Fhee9rtNzwxn5BdWIxjd9qe7OPGYujBwC2bzwBSk+5xoBEh1P2+YVoZvFubaSuZAd5PjdytgJkgZpeotp1GCZ888zNZ5Mx3Fc/N+d9y3igmlJ6v00rgoS68lEDculGBuv1nXZ9y260dHR9KEq1gFXX75Q+y4xlcg4tp4kucMKafv38LiIrCv+oIOfEcuWG5pIRu+exKJqQQcx+b7Df7QXOoBmYDM49eQjle0TPfF2tG4ozsEXY2z+c0/fN1LklRfCCDNW8ReRLcTGBcy+d2rrv8UdKcn9iJ5bxamKrzJnaWT0KmbREFQTlTepff+nYFRNi3KCGj0E/v/s4t850RdBgAADRAAAAA==",Nt="data:image/webp;base64,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",Ot="data:image/webp;base64,UklGRlIEAABXRUJQVlA4WAoAAAAQAAAAbQAAbQAAQUxQSFIBAAABGTJpG9p39W94JiL6n6s8UwBwa1tS5NRiU1XvdPfIUwZMttJQErLAUwTMrizKQy5bnIBMZmau5d0TMQGM3EZS5MHF0/ATIKhPEwRFM7xIECGC0shTcpxA2TZn3r+CnFgQeB6SNMNxggzwBHwVmvRZseDvpEiakuPFIp7nIcFAMccDvxAmDHjyR3qMa6A9SgC/HmJ3TvyNXsuSAKfQj1cCbQAvj5i5EOPlEresiHQGFLJXzoHi8UdXmLnBzD1mbjFzh1tW0JxjN6qUamuGaw+Y/YjZsHLnFrOMmTt3CtntR1e4LS3LJNPBrcK22Csml5aFbStX2LbgFbdjoWuPQHnkjPkIM1uYGXaA15njoW7jmggaIQSl/aYd5/5w9hkE3oUExSKWQZCFiJQhCBJChCBBELIyvtOih4D/GRIyXkmEWMgQhKwsyUIWMowds1aBOiwBAFZQOCDaAgAAEBMAnQEqbgBuAD6RQp1JpaOjISaU23iwEgliANW2ILUTlKeKzFbq//E/djvBm4A/ZD1lekA/xvm5ew76AHlh/rH8Fn7oftj7OzRBWgoFjcC6s2bde3ClNcLdnDKp3Dl3BtpRmhx6/jGoEWSIwl+YG4NNA95rUvXtL2F+Yksn0uiDBKNC6d7Kg5CcRTD6Ym0R5/abXLLUZ05X99keJRMtvQAA/vtAABq/we+AAChZmVjevYzt3AAhq/5F+Ev5O6m/5SdwNDrdSvUOGcHOPncYy+VDdRtOMZfKAL14t7+m1WfnFPtoBH/1MLx247b43k784TlfsL9dZ4v7LCbxQyibjWjgKsMCFKDUB3/6LSqlQQWDEUYmEWWIF5CXRn/+7HZ8k7lVhH+LDcanYPPdjcjzvDW0m3nuC1yJZ4NwD9wllGP1XTRb/fqOc8X+Or7sppeMgnPKm3Mv1/wOkvN0jaf861YKAYYh9ZrJNzmSQV50usKR8i4nZVAm3hKF/eVaviJ5Cu2DET2/957k3+bTL9lYDOjSB4IFMd7xNVcWBvEB1QQIt4Aw2JK0F8922AzVTfJ3ZK3m6AIGM+ePfjCWC7wM4gj/YCL/33YB/xO6BkiSBUteaM96r9Edu78vK3e8kgjo55GfF/nJviN9r5ldbjrC43lj/BmNIobW+RhyqnIeetvhAHW3T/VKl2nejONrEORnip/55AySnpsjxDBwXC2RenOUy6FI0ACTMc4AG3FHEjKeTlTSDT8RlRYQVU0otqEVGMVtbowgrEsHdKp23uUKv/LKQMhlwl87CMLzLIyYbM/kkO8gFMzG5PB0g22EZM1DQYQGuWsemnUQ1gx/pi53D/6Yceguf68wTrLe9vfZjrUhYbuoYXEo9DHLGC1S97WyLBHpi//KugchuOT6cfb0iwrI40H12fWBGe0mQ1EH3+4J+9WpqkfPM2NOLV3f+1c+M8DLz9EAAAAAAA==",Kt="data:image/webp;base64,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",Zt="data:image/webp;base64,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",qt="data:image/webp;base64,UklGRgwEAABXRUJQVlA4WAoAAAAQAAAAbQAAbQAAQUxQSJQAAAABcFtbe9N8e+ioVKdD7zghaQfHLaiYw3TOUVQ5U/GVPkTEBKBT28G7HO/iEfoKA8XRlKOfbmXPPCopXuYdVlySNHMA8lLSjASwLYkeoRImRvslVSfkEjy5vAsuk/8n//9/LN5cHgGX0ObiacMkUTgy2QLixOMsAaxjFvEMbevMIVqjW26S8TNHgYHKCx/FiL0DW6MTVlA4IFIDAADQFACdASpuAG4APpFCnkmlo6MhKdM5qLASCWQA1T2nfgHYcXY8JyDHGMF57tzB48v7N7Hvy1/ivVQ/UDrK+YDzkvQh6AHSD+gB0qX7i4SJNYb7MsBgZU+F5a7Qjqm7Qjqm7Qjnji8FJdF+7z7wkX1uIJskgMBPf1MNx5yWU0BjhWm0cncN2DxDNUj4/JgS8slZDk061YHxMChY5tKJam2BGrdDiWwyp8lN/FomnQAAAP7scN+TLc70O0/Wn5Dqp/MWakln9v+E6/wnWx3wGStjoHCQibG9gR8redhhfkxQAAAM3op1H/m6Qvii9ZU4JCULGvPMgPFQsNBJjXv2azUqTRt5A1+zJXsZMBl4QJ5mpzrKr2Kb93ZXUFaL52V7QgMqsOnOp6NHZ/qPE9staR/eNuQMeFvGUq2eUvo2eRFcy5RzNJpL/63KifulVHWHk+zLfIhjL+IRb/Ij2d+8PXMky7kwFeU2ovT9MqLKyvQ9nWmoEAHpdV9zXaj0qF1QWJvCOYf29gYMwoHkOdJWunS4v1sUj6b6XJToDThqfTA0XpHhgB9q5rRVsNX4LNxB7v1LzslheyaFqYzv7IQ++oL4a56BTrH5VdmOEL4pOURGhi9s9+W7m02KBLAVPkUJtPO1d8+wUuUQgVoInLUgnp9aRapRY1qPOjVa7NPgG1WHZ5jM+Z3hFVNDvFoImHLPgqzWCjpiHTER5Dg6XZVBwdgsh7hkpC5gYZqFT2hEYZNr0aoWlBl7XJdDaCFLr/XZmWfq2b5vOykahe9GgPU/ot3hHx2YUC/zmt9Pp/XtNTphs4hoxFXj82B7ykEV0KzOpL+OMITKG8aKOaBNJ9Cl2T/q6dkfnql/ha6A9ccPUP5uBilHKojUvDXUaHUvsrdezR3hzUbg9mvDbxSqdIg7am5T4Pjcx2Ga2gVHlUkPxDnIv512VN/5xVHBrZKyVt/x2TgdwZFZc15fALHnXwSwobgTn0QqpCdd3EpmroFbUPxY4x/qTPKDat3Ez9FJ10i/K++u5JtZ9FEvfprxmsvmJrUVEEHWE0JMAHxLBcQnDPwHDK0fOtHGlp6i5OC2q0+NHJePTDzlURXNxC2hmdJyKiXplNezmvXEGW7mnSyPGOfGATAA",v={JS:{img:zt,type:"LANGUAGE",name:"JavaScript",proficiency:100,explanation:"가장 익숙한 언어로, 알고리즘 문제를 풀거나 DOM 조작을 할 수 있습니다."},HTML:{img:Ut,type:"LANGUAGE",name:"HTML",proficiency:100,explanation:"시맨틱 요소를 사용하여 웹 표준과 웹 접근성을 고려한 웹 페이지의 구조를 작성할 수 있습니다."},CSS:{img:Tt,type:"LANGUAGE",name:"CSS",proficiency:100,explanation:"CSS를 조작하여 화면의 세세한 디자인 작업을 하는 것을 좋아합니다. 또한 Keyframes를 활용한 애니메이션 작업에 익숙합니다."},TS:{img:qt,type:"LANGUAGE",name:"Type Script",proficiency:50,explanation:"TypeScript의 필요성과 사용 방법을 이해하고 있으며, 레퍼런스를 참고하여 코드를 작성할 수 있습니다."},React:{img:Ft,type:"FRONT-END",name:"React",proficiency:90,explanation:"가장 익숙한 프론트엔드 라이브러리입니다. 함수형 컴포넌트와 React 기본 제공 Hooks 및 Custom Hook을 활용하여 SPA를 만들 수 있습니다."},Redux:{img:Lt,type:"FRONT-END",name:"Redux",proficiency:90,explanation:"가장 많이 사용해본 상태 관리 라이브러리입니다. Redux의 Flux 패턴을 이해하고 있고, Redux-Thunk를 사용하여 비동기 작업을 처리할 수 있습니다."},Next:{img:Gt,type:"FRONT-END",name:"Next.js",proficiency:50,explanation:"토이 프로젝트로 서버 컴포넌트를 사용하여 간단한 SSR 애플리케이션을 만들어본 경험이 있습니다."},StyledComponents:{img:Kt,type:"FRONT-END",name:"Styled Components",proficiency:90,explanation:"가장 익숙한 CSS-in-JS 라이브러리입니다. Styled-Component를 만들어 CSS 파일 없이 프로젝트를 구성할 수 있습니다."},TailwindCSS:{img:Zt,type:"FRONT-END",name:"Tailwind CSS",proficiency:70,explanation:"Tailwind CSS를 사용하여 반응형 웹 애플리케이션을 만들 수 있습니다."},Storybook:{img:Ot,type:"FRONT-END",name:"Storybook",proficiency:60,explanation:"Storybook을 사용하여 컴포넌트를 문서화하고 배포해본 경험이 있습니다."},Cypress:{img:Rt,type:"FRONT-END",name:"Cypress",proficiency:40,explanation:"Cypress를 사용하여 간단한 E2E 테스트를 작성하고 활용해본 경험이 있습니다."},Node:{img:Ht,type:"BACK-END",name:"Node.js",proficiency:80,explanation:"Node.js를 활용하여 간단한 HTTP 서버를 만들 수 있습니다."},Express:{img:Dt,type:"BACK-END",name:"Express.js",proficiency:80,explanation:"Express로 HTTPS REST API 서버를 만들고 배포해본 경험이 있습니다."},Axios:{img:It,type:"BACK-END",name:"Axios",proficiency:90,explanation:"Axios를 사용하여 HTTP 요청과 응답을 다룰 수 있습니다."},AWS:{img:Xt,type:"BACK-END",name:"Amazon Web Service",proficiency:50,explanation:"AWS의 S3, EC2와 Route 53, RDS를 사용하여 각각 React 클라이언트, Express.js 서버, MySQL 데이터베이스를 배포한 경험이 있습니다."},Github:{img:Wt,type:"OTHERS",name:"Github",proficiency:80,explanation:"Github로 프로젝트를 관리하고 branch와 PR을 통한 코드 리뷰 및 협업을 할 수 있습니다."},Figma:{img:Yt,type:"OTHERS",name:"Figma",proficiency:90,explanation:"Figma를 사용해서 동적인 프로토타입을 만들 수 있습니다."},Slack:{img:Nt,type:"OTHERS",name:"Slack",proficiency:90,explanation:"업무용으로 가장 많이 사용했던 메신저입니다."},Asana:{img:jt,type:"OTHERS",name:"Asana",proficiency:70,explanation:"타 부서와의 협업시 일정 관리용으로 종종 서비스입니다."},Jira:{img:Jt,type:"OTHERS",name:"Jira",proficiency:60,explanation:"사내 프로젝트를 관리할 때 사용해본 경험이 있습니다."}},Vt=c`
    100% {
        opacity: 1;
    }
`,$t=i.div`
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
    animation: ${Vt} .5s .2s forwards;

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
`,_t=i.div`
    font-size: 18px;
    @media (max-width: 768px) {
        font-size: 12px;
    }
`,te=i.div`
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
        width: ${t=>100-t.$proficiency}%;
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
`,ee=i.div`
    font-family: "Gowun Batang";
    font-size: 14px;

    @media (max-width: 768px) {
        font-size: 10px;
    }
`;function oe({skillInfo:t}){return e.jsxs($t,{children:[e.jsx(_t,{children:t.name}),e.jsxs(te,{$proficiency:t.proficiency,children:[e.jsx("div",{}),e.jsx("div",{})]}),e.jsx(ee,{children:t.explanation})]})}const ie=i.ul`
    list-style: none;
    display: flex;
    gap: 48px;
    font-size: 20px;

    @media (max-width: 768px) {
        font-size: 14px;
        gap: 8px;
    }
`,ne=i.li`
    font-weight: 300;
    padding: 0 10px;
    border-bottom: 3px solid transparent;
    ${t=>t.$isSelected?"border-bottom: 3px solid rgb(172, 174, 222);":""}
    transition: text-shadow 0.3s, border-bottom-color 0.3s;
    user-select: none;

    &:hover {
        ${t=>t.$isSelected?"":"text-shadow: 0 0 8px rgb(172, 174, 222);"}
        transition: text-shadow 0.3s, border-bottom-color 0.3s;
    }

    @media (max-width: 768px) {
        cursor: pointer;
        padding: 0 6px;
    }
`,re=i.ul`
    position: relative;
    z-index: 5;
    width: 84vw;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 24px;
`,ae=c`
    0% {
        transform: translateX(-10px);
    }

    100% {
        transform: translateX(0px);
        opacity: 1;
    }
`,se=c`
    30% {
        transform: scale(0.9);
        border: 3px solid transparent;
    }

    100% {
        transform: scale(1.1);
        opacity: 1;
        border: 3px solid rgb(172, 174, 222);
        box-shadow: 0 0 20px rgb(172, 174, 222);
    }
`,Ae=c`
    50% {
        box-shadow: 0 0 10px rgb(172, 174, 222);
    }

    100% {
        box-shadow: 0 0 20px rgb(172, 174, 222);
    }
`,de=i.li`
    list-style: none;
    width: 100px;
    height: 100px;
    background-color: white;
    background-image: url(${t=>t.$img||""});
    background-size: cover;
    background-position: center;
    border-radius: 100%;
    box-shadow: 0 0 12px rgb(172, 174, 222);
    ${t=>t.$renderAnimation?G`opacity: 0; animation: ${ae} 0.5s forwards;`:""}
    

    @media (max-width: 768px) {
        width: 60px;
        height: 60px;
    }

    &:hover {
        animation: ${se} .5s forwards, ${Ae} 1s infinite;
    }
`;function le(){const t=["LANGUAGE","FRONT-END","BACK-END","OTHERS"],[r,o]=A.useState(0),[d,a]=A.useState(""),[n,l]=A.useState(!0);return A.useEffect(()=>(setTimeout(()=>l(!1),500),()=>l(!0)),[r]),e.jsxs(e.Fragment,{children:[e.jsx(ie,{children:t.map((s,p)=>e.jsx(ne,{$isSelected:r===p,onClick:()=>o(p),children:s},"TabButton_"+s))}),e.jsx(re,{children:Object.keys(v).filter(s=>v[s].type===t[r]).map(s=>e.jsx(de,{$img:v[s].img,$renderAnimation:n,onMouseEnter:()=>a(s),onMouseLeave:()=>a(""),children:d===s?e.jsx(oe,{skillInfo:v[s]}):null},"SkillButton_"+s))})]})}const pe=i.div`
    display: grid;
    place-items: center;
    gap: 24px;

    @media (max-width: 768px) {
        gap: 16px;
    }
`;function ce(){return e.jsxs(pe,{children:[e.jsx(w,{titleType:"h3",content:"SKILL SET"}),e.jsx(le,{})]})}const U=A.createContext(),ge=({children:t})=>{const[r,o]=A.useState({x:0,y:0});return A.useEffect(()=>{const d=a=>o({x:a.clientX,y:a.clientY});return window.addEventListener("mousemove",d),()=>window.removeEventListener("mousemove",d)},[]),e.jsx(U.Provider,{value:r,children:t})},J=()=>A.useContext(U),he=c`
    50% {
        transform: scale(2) translate(-30%, -30%);
    }
    100% {
        transform: scale(1) translate(-50%, -50%);
    }
`,xe=i.div.attrs(t=>({style:{left:`${t.$mousePosition.x}px`,top:`${t.$mousePosition.y}px`}}))`
    position: fixed;
    z-index: 1000;
    width: 26px;
    height: 26px;
    transform: translate(-50%, -50%);
    pointer-events: none;
    animation: ${he} 2s infinite;

    @media (max-width: 768px) {
        display: none;
    }
`;function me(){const[t,r]=A.useState(window.innerWidth>768),o=J(),{darkMode:d}=m();A.useEffect(()=>{const n=()=>{r(window.innerWidth>768)};return window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}},[]);const a=A.useMemo(()=>e.jsxs(W,{$darkMode:d,children:[e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{})]}),[d]);return e.jsx(e.Fragment,{children:t&&e.jsx(xe,{$mousePosition:o,children:a})})}const fe="/portfolio/assets/paper-Cx6WTlLC.webp",be="/portfolio/assets/100seolgi1-Bzt-4vRK.webp",we="/portfolio/assets/100seolgi2-VU6gorOw.webp",ue="/portfolio/assets/100seolgi3-Grmp2fmB.webp",ve="/portfolio/assets/100seolgi4-Cb9sjyQa.webp",Ce="/portfolio/assets/storyhub1-B22C5dgC.webp",Qe="/portfolio/assets/storyhub2-DkP3o6-u.webp",ke="/portfolio/assets/storyhub3-D7ly1MjP.webp",Be="/portfolio/assets/storyhub4-CzaEBd-d.webp",ye="/portfolio/assets/ShapeOfVoice1-BCwR8wc-.gif",Ee="/portfolio/assets/ShapeOfVoice2-wHfFbl4M.gif",Se="/portfolio/assets/ShapeOfVoice3-BOT86Whs.gif",Pe="/portfolio/assets/ShapeOfVoice4-BMnt5vaJ.gif",Me="/portfolio/assets/math1-CG_u39uI.webp",je="/portfolio/assets/math2-CAUT56kD.webp",Xe="/portfolio/assets/lotto1-C43djire.webp",C=[{name:"백설기",explanation:"100일 습관 만들기 해빗 트래커 웹 사이트",images:[{img:be,text:"로그인 & 설기 정보 표시"},{img:we,text:"설기 작성/삭제 & 토스트"},{img:ue,text:"현재 월 변경 & 진척도"},{img:ve,text:"마이 페이지 - 통계 표시"}],usedSkills:["TypeScript","Next.js","React-Query","React-Toastify","Tailwind CSS","Cypress"],links:{deploy:"https://100seolgi.click/",github:"https://github.com/fe-codecrafters/baekseolgi"},myWork:{프론트엔드:["애니메이션 효과 제작 및 적용","웹 / 모바일 반응형 적용","Calendar, Monthly / Objective Progress Bar, Loading Indicator, Chart, Header 외 컴포넌트 제작","캘린더 페이지, 마이 페이지 제작","Cypress E2E 테스트 작성"]}},{name:"StoryHub",explanation:"GitHub처럼 협업을 통해 작품을 집필할 수 있는 웹 사이트",images:[{img:Ce,text:"커버 페이지 - 서비스 설명"},{img:Qe,text:"스토리 작성 - 글 & 정보"},{img:ke,text:"스토리 협업 - 커밋 & 머지"},{img:Be,text:"마이페이지 - 내 정보 관리"}],usedSkills:["React","Redux","Redux-Persist","Styled-Component","Axios","mySQL"],links:{deploy:"",github:"http://github.com/codestates/story-hub-client",other:{"결과물 노션 문서":"http://bit.ly/story-hub"}},myWork:{"프로젝트 기획":["아이디어 및 서비스 구상","프로토타입, 와이어프레임 작성"],프론트엔드:["초기 페이지의 디자인, 렌더링","끊김 없는 사용자 경험을 위한 모달 페이지 작성","로그인 & 회원가입 모달창의 기능 구현, 디자인, 렌더링","좌측/상단/우측 네비게이터 바의 렌더링 및 리덕스 스토어를 이용한 기능 구현","마이페이지 렌더링 및 상세 정보 모달창 제작","마이페이지의 상세 정보 모달창에서 각 페이지로 이동하는 기능 구현","버튼 디자인 및 애니메이션 작성","PC환경에서의 반응형 웹 디자인 구현","Styled-Component를 이용한 웹사이트 전체의 디자인과 렌더링"],백엔드:["필요한 API 구상","원하는 결과값을 얻기 위한 mySQL 쿼리문 수정"]}},{name:"목소리의 형태",explanation:"목소리를 시각화하고 공유할 수 있는 웹 사이트",images:[{img:ye,text:"로그인 - 임시 로그인 가능"},{img:Ee,text:"시각화 - 음성 입력 → 시각화"},{img:Se,text:"게시판 - 좋아요 가능"},{img:Pe,text:"마이 페이지 - 작성글 관리"}],usedSkills:["Node.js","Express.js","Sequelize","AWS(S3, EC2, RDS)","CSS"],links:{deploy:"",github:"http://github.com/codestates/ShapeOfVoice-client",other:{"프로젝트 기획서":"http://github.com/codestates/ShapeOfVoice-client/wiki"}},myWork:{"프로젝트 기획":["프로토타입, 와이어프레임, 플로우차트 작성"],프론트엔드:["CSS 파일 작성을 통한 웹사이트 전체의 CSS 작업"],백엔드:["Node.js를 이용한 서버 초기 세팅","Sequelize를 이용한 데이터베이스 구축","Schema, API 작성","Router, Model 작성 : board, voice_board","Controller 작성 : user(PUT), board(GET, POST, DELETE), voide(POST), voice_board(POST)","AWS (S3, EC2, RDS) 를 이용한 초기 배포"]}},{name:"연산게임",explanation:"간단한 사칙 연산 문제를 풀 수 있는 웹 게임 사이트",images:[{img:Me,text:"게임 선택 및 플레이"},{img:je,text:"게임 완료 및 다시 시작"}],usedSkills:["React","Styled-Components","Netlify"],links:{deploy:"https://math-game-by-code-kay.netlify.app/",github:"https://github.com/code-kay/Simple-Math-Game"},myWork:{"기능 개발":["PC, Mobile 환경 모두 이용 가능","Netlify를 사용하여 배포","디자인 및 기능 개선 예정"]}},{name:"로 또 대 박",explanation:"로또 번호를 랜덤으로 추천해주는 웹 사이트",images:[{img:Xe,text:"로또 번호 추첨 기능"}],usedSkills:["HTML","JavaScript","Canvas API"],links:{deploy:"https://code-kay.github.io/lotto/",github:"https://github.com/code-kay/lotto"},myWork:{"기능 개발":["직접 그린 이미지와 Canvas를 활용한 첫 프로젝트","Math.random 함수로 번호 추첨 구현","setInterval 함수로 애니메이션 구현"]}}],X=["#ed9c9c","#f9dc6c","#9de89e","skyblue","#87a8eb","#ca87eb","pink"],Ie=c`
    0% {
        transform: translateY(100%)
    }

    100% {
        top: 0;
    }
`,Te=c`
    0% {
        top: 0;
    }

    100% {
        transform: translateY(100%)
    }
`,Re=i.div`
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
    animation: ${t=>t.$isClosing?Te:Ie} 1s 1 forwards;

    & * {
        font-family: "Gowun Batang";
        color: black;

        @media (max-width: 768px) {
            font-size: 14px;
        }
    }
`,De=c`
    30% {
        transform: translateX(-1vw) scale(1.3);
    }
    60% {
        transform: translateX(0);
    }
`,Ye=c`
    30% {
        transform: translateX(1vw) scale(1.3);
    }
    60% {
        transform: translateX(0);
    }
`,I=i.button`
    position: sticky;
    color: rgb(226, 227, 255);
    font-size: 2.5rem;
    font-weight: 900;
    text-shadow: 0 0 8px rgb(172, 174, 222);
    z-index: 11;
    top: 50vh;
    padding: 0 3vw;

    &:nth-of-type(1) {
        animation: ${De} 3s infinite;
    }
    &:nth-of-type(2) {
        animation: ${Ye} 3s infinite;
    }

`,We=i.article`
    margin: 10vh 0;
    width: 80vw;
    padding: max(4vw, 24px);
    background-image: url("${fe}");
    background-size: cover;
`,Ue=i.h1`
    font-size: 2.3rem;
    letter-spacing: 2px;
`,E=i.h2`
    font-size: 1.4rem;
    margin-top: 2rem;
`,Je=i.p`
`,ze=i.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 12px;
`,Ge=i.div`
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

    @media (max-width: 768px) {
        width: 100%;
    }
`,He=i.ul`
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
`,Fe=i.div`
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


`,Le=i.ul`
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
`;function Ne({modalProject:t,setModalProject:r,setIsModalOn:o}){const[d,a]=A.useState(!1),n=C[t],l=A.useRef(null);return e.jsx(e.Fragment,{children:e.jsxs(Re,{ref:l,$isClosing:d,onClick:()=>{l.current.scrollTo({top:0}),a(!0),setTimeout(()=>o(!1),1e3)},children:[e.jsx(I,{onClick:s=>{s.stopPropagation(),l.current.scrollTo({top:0}),r(t?t-1:C.length-1)},children:"<"}),e.jsxs(We,{onClick:s=>s.stopPropagation(),children:[e.jsx(Ue,{children:n.name}),e.jsx("hr",{}),e.jsx(Je,{children:n.explanation}),e.jsx(ze,{children:n.images.map((s,p)=>e.jsxs(Ge,{children:[e.jsx("img",{src:s.img,alt:""}),e.jsxs("div",{children:["✨",s.text,"✨"]})]},n.name+"_image_"+p))}),e.jsx(E,{children:"사용 스택"}),e.jsx("hr",{}),e.jsx(He,{children:n.usedSkills.map((s,p)=>e.jsx("li",{style:{backgroundColor:X[p%X.length]},children:s.toUpperCase()},s))}),e.jsx(E,{children:"관련 링크"}),e.jsx("hr",{}),e.jsxs(Fe,{children:[n.links.deploy?e.jsx("a",{target:"_blank",href:n.links.deploy,children:"프로젝트 배포 링크"}):null,n.links.github?e.jsx("a",{target:"_blank",href:n.links.github,children:"Github Repository"}):null,n.links.other?Object.keys(n.links.other).map(s=>e.jsx("a",{target:"_blank",href:n.links.other[s],children:s},s)):null]}),e.jsx(E,{children:"작업 목록"}),e.jsx("hr",{}),e.jsx(Le,{children:Object.keys(n.myWork).map(s=>e.jsxs("li",{className:"title-ul",children:[s,e.jsx("ul",{children:n.myWork[s].map((p,x)=>e.jsx("li",{children:p},n.name+"_work_"+x))})]},s))})]}),e.jsx(I,{onClick:s=>{s.stopPropagation(),l.current.scrollTo({top:0}),r(t===C.length-1?0:t+1)},children:">"})]})})}const Oe=i.div`
    width: 90vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 8vw;
    
    @media (max-width: 768px) {
        gap: max(6vw, 24px);
    }
`,T=c`
    30% {
        opacity: 0;
    }
    100% {
        opacity: 100;
    }
`,Ke=c`
    50% {
        transform:translateX(4px)
    }
    100% {
        transform:translateX(0)
    }
`,Ze=i.section`
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
            animation: ${T} 1s 1 forwards;
        }

        &::after {
            font-family: "Gowun Batang";
            position: absolute;
            color: white;
            opacity: 1;
            content: ">";
            bottom: 15px;
            right: 0px;
            animation: ${T} 1s 1 forwards, ${Ke} 1s infinite;
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
`,qe=i.h3`
    font-size: 2.2vw;

    @media (max-width: 768px) {
        font-size: 14px;
    }
`,Ve=i.img`
    width: 22vw;
    height: 24vw;
    object-fit: cover;
    background-color: gray;
    border: 1px solid rgb(200,200,200);

    @media (max-width: 768px) {
        width: 140px;
        height: 150px;
    }
`,$e=i.p`
    font-size: min(24px, 1.6vw);
    padding: 1.2vw 1.6vw;
    height: 100%;
    white-space: pre-line;
    
    @media (max-width: 768px) {
        font-size: 12px;
    }
`,R=i.div`
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
`;function _e(){const[t,r]=A.useState(!1),[o,d]=A.useState(-1);return e.jsxs(e.Fragment,{children:[e.jsx(Oe,{children:C.map((a,n)=>e.jsxs(Ze,{onClick:()=>{r(!0),d(n)},children:[e.jsx(R,{}),e.jsx(qe,{children:a.name}),e.jsx(Ve,{src:a.images[0].img,alt:a.name+" 화면 이미지"}),e.jsx($e,{children:a.explanation}),e.jsx(R,{})]},"Card_"+n))}),t?e.jsx(Ne,{modalProject:o,setModalProject:d,setIsModalOn:r}):null]})}const to="/portfolio/assets/paperPattern-CEOUZ3bX.webp",eo="/portfolio/assets/bear-transparent-4w3szYkN.webp",oo=c`
    30%{
        transform: scale(1.05);
        filter: drop-shadow(0.5vw 0.5vw 4vw rgba(172, 174, 222, 0.8));

    }
    60% {
        transform: scale(1);
    }
`,io=i.section.attrs(t=>t.$center.y===0||t.$isHovering?{style:{transform:"rotateX(0deg) rotateY(0deg)",filter:"drop-shadow(0 0 4vw rgba(172, 174, 222, 0.5))",boxShadow:"0 0 0.3vw 0.3vw rgba(172, 174, 222)",transition:"transform 0.3s, filter 0.3s, box-shadow 0.3s"}}:{style:{transform:`rotateX(${(t.$mousePosition.y+t.$viewScrollTop-t.$center.y)/20}deg) rotateY(${(t.$mousePosition.x-t.$center.x)/20}deg)`,borderRight:`${(t.$mousePosition.x-t.$center.x)/1200}vw solid rgba(100,100,100,0.5)`,borderLeft:`${(t.$center.x-t.$mousePosition.x)/1200}vw solid rgba(100,100,100,0.5)`,borderTop:`${(t.$mousePosition.y+t.$viewScrollTop-t.$center.y)/1e3}vw solid white`,borderBottom:`${(t.$center.y-t.$viewScrollTop-t.$mousePosition.y)/1e3}vw solid rgba(100,100,100,0.7)`}})`
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
        animation: ${oo} 1.5s infinite;
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
`,S=i.section`
`,no=i.h1`
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
`,D=i.h2`
    font-size: 2.2vw;
    @media (max-width: 768px) {
        font-size: 17px;
    }
`,P=i.p`
    font-size: 1.6vw;
    margin-top: -0.5vw;
    @media (max-width: 768px) {
        font-size: 12.5px;
    }
`,ro=i.div`
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
`,ao=i.div`
position: absolute;
background-image: url('${to}');
width: 100%;
height: 100%;
top: 0;
left: 0;
mix-blend-mode: multiply;
filter: opacity(0.8) brightness(1.1);
`;function so({ViewRef:t}){const r=J(),[o,d]=A.useState({x:0,y:0}),[a,n]=A.useState(!1),l=A.useRef(null);return A.useEffect(()=>{const s=()=>{if(l.current){const p=l.current.getBoundingClientRect(),x=p.left+p.width/2,g=t.current.scrollTop+p.top+p.height/2;d({x,y:g})}};return window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)},[l]),e.jsxs(io,{ref:l,$mousePosition:r,$viewScrollTop:t.current?t.current.scrollTop:0,$center:o,$isHovering:a,onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),children:[e.jsx(ro,{children:e.jsx("img",{src:eo,alt:"profile image"})}),e.jsxs(S,{children:[e.jsx(no,{children:"Ahyoon Kim"}),e.jsx(P,{children:"Front-End Developer"})]}),e.jsxs(S,{children:[e.jsx(D,{children:"E-mail"}),e.jsx(P,{children:"kay8563@gmail.com"})]}),e.jsxs(S,{children:[e.jsx(D,{children:"Github"}),e.jsx(P,{children:"https://github.com/code-kay"})]}),e.jsx(ao,{})]})}const Ao=i.footer`
    position: relative;
    height: 36vw;
    overflow: hidden;
    filter: drop-shadow(0 0 12vw ${t=>t.$darkMode?"rgba(220,80,60, 0.4)":"rgb(220, 180, 210)"});
`,lo=i.div`
    height: 100%;
    position: relative;
    bottom: 0;
`,po=i.div`
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
`;function co(){const{darkMode:t}=m();return e.jsx(Ao,{$darkMode:t,children:e.jsx(lo,{children:new Array(8).fill(!0).map((r,o)=>e.jsx(po,{$darkMode:t},"Mountain-"+o))})})}const go=(t,r,o=[])=>{const[d,a]=A.useState({}),[n,l]=A.useState(0);return A.useEffect(()=>{if(!t.current)return;const s=()=>{const p=o.length,x={HeaderBottom:r.current.getBoundingClientRect().bottom};for(let g=0;g<p;g++){const{top:h,bottom:f}=o[g].current.getBoundingClientRect();x[`ref${g}Top`]=h,x[`ref${g}Bottom`]=f}a(x);for(let g=0;g<p;g++)if(x.HeaderBottom<x[`ref${g}Bottom`]){l(g);break}};return t.current.addEventListener("scroll",s),()=>{t.current.removeEventListener("scroll",s)}},[t,...o]),{scrollPoints:d,currentPart:n}},ho=H`
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
`,xo=i.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  overflow-x: hidden;
  overflow-y: auto;
  scrollbar-width: none;
`,mo=i.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 160px;
  padding-bottom: 80px;
  
  @media (max-width: 768px) {
    gap: 100px;
  }
`,M=i.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;

  @media (max-width: 768px) {
    gap: 48px;
  }
`;function fo(){const{darkMode:t}=m(),r=A.useRef(null),o=A.useRef(null),d=A.useRef(null),a=A.useRef(null),n=A.useRef(null),{scrollPoints:l,currentPart:s}=go(r,o,[d,a,n]);return e.jsxs(e.Fragment,{children:[e.jsx(ho,{$darkMode:t}),e.jsxs(xo,{ref:r,children:[e.jsx(xt,{currentPart:s,ref:o,scrollPoints:l,ViewRef:r,refs:{InformationRef:d,ProjectRef:a,ContactRef:n}}),e.jsxs(mo,{children:[e.jsx(nt,{}),e.jsx(Qt,{"aria-hidden":!0}),e.jsx(yt,{}),e.jsxs(M,{ref:d,children:[e.jsx(w,{titleType:"h2",content:"INFORMATION"}),e.jsx(Mt,{}),e.jsx(ce,{})]}),e.jsxs(M,{ref:a,children:[e.jsx(w,{titleType:"h2",content:"PROJECT"}),e.jsx(_e,{})]}),e.jsxs(M,{ref:n,children:[e.jsx(w,{titleType:"h2",content:"CONTACT"}),e.jsx(so,{ViewRef:r})]})]}),e.jsx(co,{}),e.jsx(me,{})]})]})}z.createRoot(document.getElementById("root")).render(e.jsx(F,{children:e.jsx(ge,{children:e.jsx(fo,{})})}));
