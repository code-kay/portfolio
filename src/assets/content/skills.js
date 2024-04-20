import Asana from '../images/skills/Asana.png'
import AWS from '../images/skills/AWS.png'
import Axios from '../images/skills/Axios.png'
import CSS from '../images/skills/CSS.png'
import Cypress from '../images/skills/Cypress.png'
import Express from '../images/skills/Express.js.png'
import Figma from '../images/skills/Figma.png'
import Github from '../images/skills/Github.png'
import HTML from '../images/skills/HTML.png'
import Jira from '../images/skills/Jira.png'
import JS from '../images/skills/JS.png'
import Next from '../images/skills/Next.js.png'
import Node from '../images/skills/Node.js.png'
import React from '../images/skills/React.png'
import Redux from '../images/skills/Redux.png'
import Slack from '../images/skills/Slack.png'
import Storybook from '../images/skills/Storybook.png'
import StyledComponents from '../images/skills/Styled Components.png'
import TailwindCSS from '../images/skills/Tailwind CSS.png'
import TS from '../images/skills/TS.png'

export const skills = {
    JS: {
        img: JS,
        type: 'LANGUAGE',
        name: 'JavaScript',
        proficiency: 100,
        explanation: '가장 익숙한 언어로, 알고리즘 문제를 풀거나 DOM 조작을 할 수 있습니다.'
    },
    HTML: {
        img: HTML,
        type: 'LANGUAGE',
        name: 'HTML',
        proficiency: 100,
        explanation: '시맨틱 요소를 사용하여 웹 표준과 웹 접근성을 고려한 웹 페이지의 구조를 작성할 수 있습니다.'
    },
    CSS: {
        img: CSS,
        type: 'LANGUAGE',
        name: 'CSS',
        proficiency: 100,
        explanation: 'CSS를 조작하여 화면의 세세한 디자인 작업을 하는 것을 좋아합니다. 또한 Keyframes를 활용한 애니메이션 작업에 익숙합니다.'
    },
    TS: {
        img: TS,
        type: 'LANGUAGE',
        name: 'Type Script',
        proficiency: 50,
        explanation: 'TypeScript의 필요성과 사용 방법을 이해하고 있으며, 레퍼런스를 참고하여 코드를 작성할 수 있습니다.'
    },
    React: {
        img: React,
        type: 'FRONT-END',
        name: 'React',
        proficiency: 90,
        explanation: '가장 익숙한 프론트엔드 라이브러리입니다. 함수형 컴포넌트와 React 기본 제공 Hooks 및 Custom Hook을 활용하여 SPA를 만들 수 있습니다.'
    },
    Redux: {
        img: Redux,
        type: 'FRONT-END',
        name: 'Redux',
        proficiency: 90,
        explanation: '가장 많이 사용해본 상태 관리 라이브러리입니다. Redux의 Flux 패턴을 이해하고 있고, Redux-Thunk를 사용하여 비동기 작업을 처리할 수 있습니다.'
    },
    Next: {
        img: Next,
        type: 'FRONT-END',
        name: 'Next.js',
        proficiency: 50,
        explanation: '토이 프로젝트로 서버 컴포넌트를 사용하여 간단한 SSR 애플리케이션을 만들어본 경험이 있습니다.'
    },
    StyledComponents: {
        img: StyledComponents,
        type: 'FRONT-END',
        name: 'Styled Components',
        proficiency: 90,
        explanation: '가장 익숙한 CSS-in-JS 라이브러리입니다. Styled-Component를 만들어 CSS 파일 없이 프로젝트를 구성할 수 있습니다.'
    },
    TailwindCSS: {
        img: TailwindCSS,
        type: 'FRONT-END',
        name: 'Tailwind CSS',
        proficiency: 70,
        explanation: 'Tailwind CSS를 사용하여 반응형 웹 애플리케이션을 만들 수 있습니다.'
    },
    Storybook: {
        img: Storybook,
        type: 'FRONT-END',
        name: 'Storybook',
        proficiency: 60,
        explanation: 'Storybook을 사용하여 컴포넌트를 문서화하고 배포해본 경험이 있습니다.'
    },
    Cypress: {
        img: Cypress,
        type: 'FRONT-END',
        name: 'Cypress',
        proficiency: 40,
        explanation: 'Cypress를 사용하여 간단한 E2E 테스트를 작성하고 활용해본 경험이 있습니다.'
    },
    Node: {
        img: Node,
        type: 'BACK-END',
        name: 'Node.js',
        proficiency: 80,
        explanation: 'Node.js를 활용하여 간단한 HTTP 서버를 만들 수 있습니다.'
    },
    Express: {
        img: Express,
        type: 'BACK-END',
        name: 'Express.js',
        proficiency: 80,
        explanation: 'Express로 HTTPS REST API 서버를 만들고 배포해본 경험이 있습니다.'
    },
    Axios: {
        img: Axios,
        type: 'BACK-END',
        name: 'Axios',
        proficiency: 90,
        explanation: 'Axios를 사용하여 HTTP 요청과 응답을 다룰 수 있습니다.'
    },
    AWS: {
        img: AWS,
        type: 'BACK-END',
        name: 'Amazon Web Service',
        proficiency: 50,
        explanation: 'AWS의 S3, EC2와 Route 53, RDS를 사용하여 각각 React 클라이언트, Express.js 서버, MySQL 데이터베이스를 배포한 경험이 있습니다.'
    },
    Github: {
        img: Github,
        type: 'OTHERS',
        name: 'Github',
        proficiency: 80,
        explanation: 'Github로 프로젝트를 관리하고 branch와 PR을 통한 코드 리뷰 및 협업을 할 수 있습니다.'
    },
    Figma: {
        img: Figma,
        type: 'OTHERS',
        name: 'Figma',
        proficiency: 90,
        explanation: 'Figma를 사용해서 동적인 프로토타입을 만들 수 있습니다.'
    },
    Slack: {
        img: Slack,
        type: 'OTHERS',
        name: 'Slack',
        proficiency: 90,
        explanation: '업무용으로 가장 많이 사용했던 메신저입니다.'
    },
    Asana: {
        img: Asana,
        type: 'OTHERS',
        name: 'Asana',
        proficiency: 70,
        explanation: '타 부서와의 협업시 일정 관리용으로 종종 서비스입니다.'
    },
    Jira: {
        img: Jira,
        type: 'OTHERS',
        name: 'Jira',
        proficiency: 60,
        explanation: '사내 프로젝트를 관리할 때 사용해본 경험이 있습니다.'
    },
}
