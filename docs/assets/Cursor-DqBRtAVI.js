import{r as s,j as t}from"./vendor-react-lu3PSz0c.js";import{h as d,u as i}from"./vendor-styled-components-Bb50GF_z.js";import{a as u,u as p,b as x}from"./index-CwhfgWiD.js";import"./vendor-tslib-B7u9K5VY.js";import"./vendor-@emotion-BWzHn38B.js";import"./vendor-stylis-DinRj2j6.js";import"./vendor-react-dom-C3z3V3Xp.js";import"./vendor-scheduler-CzFDRTuY.js";const c=d`
    50% {
        transform: scale(2);
    }
    100% {
        transform: scale(1);
    }
`,h=i.div.attrs(e=>({style:{transform:`translate(${e.$mousePosition.x-13}px, ${e.$mousePosition.y-13}px) scale(1)`}}))`
    position: fixed;
    top:0;
    z-index: 1000;
    width: 26px;
    height: 26px;
    pointer-events: none;

    @media (max-width: 768px) {
        display: none;
    }
`,l=i(x)`
    animation: ${c} 2s infinite;
    left: 0;
`;function M(){const[e,r]=s.useState(window.innerWidth>768),a=u(),{darkMode:o}=p();s.useEffect(()=>{const n=()=>{r(window.innerWidth>768)};return window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}},[]);const m=s.useMemo(()=>t.jsxs(l,{$darkMode:o,children:[t.jsx("span",{}),t.jsx("span",{}),t.jsx("span",{})]}),[o]);return t.jsx(t.Fragment,{children:e&&t.jsx(h,{id:"cursor",$mousePosition:a,children:m})})}export{M as default};
