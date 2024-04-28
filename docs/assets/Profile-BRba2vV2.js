import{j as r}from"./vendor-react-lu3PSz0c.js";import{u as t}from"./vendor-styled-components-Bb50GF_z.js";import{u as n}from"./index-CwhfgWiD.js";import"./vendor-tslib-B7u9K5VY.js";import"./vendor-@emotion-BWzHn38B.js";import"./vendor-stylis-DinRj2j6.js";import"./vendor-react-dom-C3z3V3Xp.js";import"./vendor-scheduler-CzFDRTuY.js";const a="/portfolio/assets/bear-DdVGL-DK.webp",s=t.img`
    border-radius: 100%;
    box-shadow: 0 0 16px ${o=>o.$darkMode?"rgba(255,255,255,0.3)":"rgba(0,0,0,0.3)"};
    width: 240px;
    height: 240px;

    @media (max-width: 768px) {
        width: 180px;
        height: 180px;
    }
`,p=t.p`
    font-family: "Gowun Batang";
    ${o=>o.$darkMode?"color: rgb(226, 227, 255);":""}
    text-align: center;
    margin-top: -20px;

    & * {
        font-family: inherit;
        color: inherit;
    }

    @media (max-width: 768px) {
        margin-top: -12px;
    }
`,i=t.span`
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
`,e=t.span`
    display: inline-block;
    height: 38px;
    padding: 0 6px;
    margin: 0 4px;
    border-bottom: 24px solid ${o=>o.$markerColor||"transparent"};

    &:hover {
        filter: brightness(1.1) saturate(200%);
        text-shadow: 0 0 16px rgb(172, 174, 222);
    }

    @media (max-width: 768px) {
        height: 22px;
        padding: 0 4px;
        margin: 0 2px;
        border-bottom: 14px solid ${o=>o.$markerColor||"transparent"};
    }
`;function b(){const{darkMode:o}=n();return r.jsxs(r.Fragment,{children:[r.jsx(s,{src:a,$darkMode:o,alt:"profile image"}),r.jsxs(p,{$darkMode:o,children:[r.jsxs(i,{children:[r.jsx(e,{$markerColor:"rgba(245, 255, 184, 0.45)",children:"사용하기 편한"}),",",r.jsx(e,{$markerColor:"rgba(205, 255, 210, 0.45)",children:"보기에 좋은"}),",",r.jsx(e,{$markerColor:"rgba(254, 203, 236, 0.45)",children:"재미를 줄 수 있는"})]}),r.jsx(i,{children:"화면을 만들고 싶은"}),r.jsxs(i,{children:[r.jsx("br",{}),"프론트엔드 개발자 ",r.jsx("strong",{children:"김아윤"})," 입니다."]})]})]})}export{b as default};
