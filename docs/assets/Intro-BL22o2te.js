import{j as r}from"./vendor-react-BmTAz-yb.js";import{h as a,u as e}from"./vendor-styled-components-etjvLBh8.js";import{u as i}from"./index-BZSF6gKr.js";import"./vendor-tslib-B7u9K5VY.js";import"./vendor-@emotion-BWzHn38B.js";import"./vendor-stylis-DinRj2j6.js";import"./vendor-react-dom-DIoqIW_m.js";import"./vendor-scheduler-CzFDRTuY.js";const n=a`
    0% {
        transform: translateY(-50px);
    }
    100% {
        opacity: 1;
    }
`,o=t=>t?"rgb(172, 174, 222)":"white",s=e.section`
    font-family: "Gowun Batang";
    font-size: max(3.5vw, 4vh);
    text-align: center;
    color: ${t=>t.$darkMode?"rgb(226, 227, 255)":"rgb(172, 174, 222)"};
    text-shadow:
        -1px -1px 0 ${t=>o(t.$darkMode)},
        1px -1px 0 ${t=>o(t.$darkMode)},
        -1px 1px 0 ${t=>o(t.$darkMode)},
        1px 1px 0 ${t=>o(t.$darkMode)},
        0 0 10px white;
    position: absolute;
    width: 100vw;
    top: 40vh;
    left: 1vw;
    opacity: 0;
    animation: ${n} 2.5s 1s 1 forwards;
`;function u(){const{darkMode:t}=i();return r.jsxs(s,{$darkMode:t,children:["안녕하세요 :)",r.jsx("br",{})," 프론트엔드 개발자",r.jsx("br",{})," 김아윤 입니다"]})}export{u as default};
