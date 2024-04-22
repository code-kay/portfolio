import{r as s,j as t}from"./vendor-react-BmTAz-yb.js";import{h as m,u as d}from"./vendor-styled-components-etjvLBh8.js";import{a as u,u as p,b as x}from"./index-DQVIQFl4.js";import"./vendor-tslib-B7u9K5VY.js";import"./vendor-@emotion-BWzHn38B.js";import"./vendor-stylis-DinRj2j6.js";import"./vendor-react-dom-DIoqIW_m.js";import"./vendor-scheduler-CzFDRTuY.js";const c=m`
    50% {
        transform: scale(2) translate(-30%, -30%);
    }
    100% {
        transform: scale(1) translate(-50%, -50%);
    }
`,l=d.div.attrs(e=>({style:{left:`${e.$mousePosition.x}px`,top:`${e.$mousePosition.y}px`}}))`
    position: fixed;
    z-index: 1000;
    width: 26px;
    height: 26px;
    transform: translate(-50%, -50%);
    pointer-events: none;
    animation: ${c} 2s infinite;

    @media (max-width: 768px) {
        display: none;
    }
`;function M(){const[e,i]=s.useState(window.innerWidth>768),r=u(),{darkMode:o}=p();s.useEffect(()=>{const n=()=>{i(window.innerWidth>768)};return window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}},[]);const a=s.useMemo(()=>t.jsxs(x,{$darkMode:o,children:[t.jsx("span",{}),t.jsx("span",{}),t.jsx("span",{})]}),[o]);return t.jsx(t.Fragment,{children:e&&t.jsx(l,{$mousePosition:r,children:a})})}export{M as default};
