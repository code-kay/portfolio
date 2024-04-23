import{j as o}from"./vendor-react-BmTAz-yb.js";import{u as i,h as a}from"./vendor-styled-components-etjvLBh8.js";import{u as n}from"./index-BVplRrYc.js";import"./vendor-tslib-B7u9K5VY.js";import"./vendor-@emotion-BWzHn38B.js";import"./vendor-stylis-DinRj2j6.js";import"./vendor-react-dom-DIoqIW_m.js";import"./vendor-scheduler-CzFDRTuY.js";const s="/portfolio/assets/flower1-BJe8LhGM.webp",e="/portfolio/assets/flower2-B7wrPT_z.webp",h="/portfolio/assets/lantern1-m4O0ibSW.webp",m="/portfolio/assets/lantern2-BEJr9aXo.webp",l=i.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    user-select: none;
`,d=a`
    0% {
        transform: translateY(-50px);
    }
    100% {
        opacity: 1;
    }
`,p=a`
    50% {
        transform: translateY(16px);
    }

    100% {
        transform: translateY(0px);
    }
`,r=i.img`
    animation: ${d} 2s 1 forwards, ${p} 5s infinite;
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
`;function $(){const{darkMode:t}=n();return o.jsxs(l,{id:"flower",children:[o.jsx(r,{$darkMode:t,src:t?h:s,alt:""}),o.jsx(r,{$darkMode:t,src:t?m:e,alt:""})]})}export{$ as default};
