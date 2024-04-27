import portfolio1 from '../videos/projects/portfolio1.webm'
import portfolio2 from '../videos/projects/portfolio2.webm'
import portfolio3 from '../videos/projects/portfolio3.webm'
import portfolio4 from '../videos/projects/portfolio4.webm'

import seolgi1 from '../images/projects/100seolgi1.webp'
import seolgi2 from '../images/projects/100seolgi2.webp'
import seolgi3 from '../images/projects/100seolgi3.webp'
import seolgi4 from '../images/projects/100seolgi4.webp'

import storyhub1 from '../images/projects/storyhub1.webp'
import storyhub2 from '../images/projects/storyhub2.webp'
import storyhub3 from '../images/projects/storyhub3.webp'
import storyhub4 from '../images/projects/storyhub4.webp'

import ShapeOfVoice1 from '../images/projects/ShapeOfVoice1.gif'
import ShapeOfVoice2 from '../images/projects/ShapeOfVoice2.gif'
import ShapeOfVoice3 from '../images/projects/ShapeOfVoice3.gif'
import ShapeOfVoice4 from '../images/projects/ShapeOfVoice4.gif'

import math1 from '../images/projects/math1.webp'
import math2 from '../images/projects/math2.webp'

import lotto1 from '../images/projects/lotto1.webp'

// projects template
// {
//     name: '',
//     explanation: { 
//         text: '',
//         duration: '',
//         type: [],
//     },
//     images: [],
//     usedSkills: [],
//     links:{
//         deploy:'',
//         github:'',
//         other:{},
//     },
//     myWork:[],
// }


export const projects = [
    {
        name: '포트폴리오',
        explanation: { 
            text: '개인 포트폴리오 사이트',
            duration: '2024.04',
            type: ['개인 프로젝트', '진행중'],
        },
        videos: [
            {
                vd: portfolio1,
                text: '다크 모드 전환'
            },
            {
                vd: portfolio2,
                text: '프로젝트 정보 모달'
            },
            {
                vd: portfolio3,
                text: '연락처 인터랙션'
            },
            {
                vd: portfolio4,
                text: 'Nav 스크롤 이동'
            },
        ],
        usedSkills: ['React', 'React Context API', 'Styled-Components', 'Canvas API', 'Github Pages'],
        links:{
            deploy:'https://code-kay.github.io/portfolio/',
            github:'https://github.com/code-kay/portfolio',
            other: { 'Figma 프로토타입' : `https://www.figma.com/file/6pPq7XbY8IATUqY9SVFKEE/Ahyoon's-Portfolio?type=design&node-id=0%3A1&mode=design&t=9jwyDwtjh9hNt4Yy-1`}
        },
        myWork:{
            '프로젝트 기획': [
                'Figma를 활용하여 사이트 디자인 및 프토토타입 제작'
            ],
            '기능 개발' : [
                'Keyframes, Canvas API를 사용해 보는 재미를 주는 화면',
                'Context API를 활용하여 다크 모드와 마우스 위치를 전역 상태로 관리',
                'Media Query를 이용한 반응형 구현',
                'LightHouse를 활용한 최적화 작업 및 웹 표준, 웹 접근성 확보'
            ],
            'Problem Case 1' : [
                'Safari에서 filter 속성이 적용되지 않는 현상 발견, -webkit-filter 속성 추가하여 해결',
                'Windows Chrome 환경에서는 backdrop-filter가 작동하지 않는 현상 발견',
                'filter 속성을 사용하여 비슷한 효과를 얻을 수 있도록 Background 컴포넌트 개선'
            ]
            ,
            'Problem Case 2' : [
                '개발 환경인 Mac, Iphone에서는 끊김 없이 부드럽게 이용 가능했으나 Windows에서는 끊김 발생',
                '사용중인 이미지 파일을 Webp로 변환, Vite 설정을 통한 코드 스플릿, React lazy & Suspense를 적용하여 최적화 시도를 했으나 Windows에서는 개선되지 않음',
                '마우스 커서의 위치를 Position의 top, left 속성을 사용하여 조정했는데, transform: translate()의 성능이 더 좋다는 내용을 접하고 코드 수정',
                'Windows에서도 성능 개선됨 확인'
            ]
        },
    },
    {
        name: '연산게임',
        explanation: { 
            text: '간단한 사칙 연산 문제를 풀 수 있는 웹 게임 사이트',
            duration: '2024.03.12 ~ (미완)',
            type: ['개인 프로젝트', '진행중'],
        },
        images: [
            {
                img: math1,
                text: '게임 선택 및 플레이'
            },
            {
                img: math2,
                text: '게임 완료 및 다시 시작'
            },
        ],
        usedSkills: ['React', 'Styled-Components', 'Netlify'],
        links:{
            deploy:'https://math-game-by-code-kay.netlify.app/',
            github:'https://github.com/code-kay/Simple-Math-Game',
        },
        myWork:{
            '기능 개발': [
                'PC, Mobile 환경 모두 이용 가능',
                'Netlify를 사용하여 배포',
                '디자인 및 기능 개선 예정',
            ]
        },
    },
    {
        name: '백설기',
        explanation: { 
            text: '100일 습관 만들기 해빗 트래커 웹 사이트',
            duration: '2023.09 ~',
            type: ['팀 프로젝트 (3인)', '진행중'],
        },
        images: [
            {
                img: seolgi1,
                text: '로그인 & 설기 정보 표시'
            },
            {
                img: seolgi2,
                text: '설기 작성/삭제 & 토스트'
            },
            {
                img: seolgi3,
                text: '현재 월 변경 & 진척도'
            },
            {
                img: seolgi4,
                text: '마이 페이지 - 통계 표시'
            },
        ],
        usedSkills: ['TypeScript', 'Next.js', 'React-Query', 'React-Toastify', 'Tailwind CSS', 'Cypress'],
        links:{
            deploy:'https://100seolgi.click/',
            github:'https://github.com/fe-codecrafters/baekseolgi',
        },
        myWork:{
            '프론트엔드' : [
                '애니메이션 효과 제작 및 적용',
                '웹 / 모바일 반응형 적용',
                'Calendar, Monthly / Objective Progress Bar, Loading Indicator, Chart, Header 외 컴포넌트 제작',
                '캘린더 페이지, 마이 페이지 제작',
                'Cypress E2E 테스트 작성'
            ]
        }
    },
    {
        name: 'StoryHub',
        explanation: { 
            text: 'GitHub처럼 협업을 통해 작품을 집필할 수 있는 웹 사이트',
            duration: '2021.02 ~ 2021.03 (4주)',
            type: ['코드스테이츠 파이널 프로젝트', '팀 프로젝트 (4인)', '완료'],
        },
        images: [
            {
                img: storyhub1,
                text: '커버 페이지 - 서비스 설명'
            },
            {
                img: storyhub2,
                text: '스토리 작성 - 글 & 정보'
            },
            {
                img: storyhub3,
                text: '스토리 협업 - 커밋 & 머지'
            },
            {
                img: storyhub4,
                text: '마이페이지 - 내 정보 관리'
            },
        ],
        usedSkills: ['React', 'Redux', 'Redux-Persist', 'Styled-Component', 'Axios', 'mySQL'],
        links:{
            deploy:'',
            github:'http://github.com/codestates/story-hub-client',
            other:{'결과물 노션 문서': 'http://bit.ly/story-hub'},
        },
        myWork:{
            '프로젝트 기획': [
                '아이디어 및 서비스 구상',
                '프로토타입, 와이어프레임 작성',
            ],
            '프론트엔드': [
                '초기 페이지의 디자인, 렌더링',
                '끊김 없는 사용자 경험을 위한 모달 페이지 작성',
                '로그인 & 회원가입 모달창의 기능 구현, 디자인, 렌더링',
                '좌측/상단/우측 네비게이터 바의 렌더링 및 리덕스 스토어를 이용한 기능 구현',
                '마이페이지 렌더링 및 상세 정보 모달창 제작',
                '마이페이지의 상세 정보 모달창에서 각 페이지로 이동하는 기능 구현',
                '버튼 디자인 및 애니메이션 작성',
                'PC환경에서의 반응형 웹 디자인 구현',
                'Styled-Component를 이용한 웹사이트 전체의 디자인과 렌더링',
            ],
            '백엔드': [
                '필요한 API 구상',
                '원하는 결과값을 얻기 위한 mySQL 쿼리문 수정'
            ]
        }
    },
    {
        name: '목소리의 형태',
        explanation: { 
            text: '목소리를 시각화하고 공유할 수 있는 웹 사이트',
            duration: '2021.02 (2주)',
            type: ['코드스테이츠 파이널 프로젝트', '팀 프로젝트 (4인)', '완료'],
        },
        images: [
            {
                img: ShapeOfVoice1,
                text: '로그인 - 임시 로그인 가능'
            },
            {
                img: ShapeOfVoice2,
                text: '시각화 - 음성 입력 → 시각화'
            },
            {
                img: ShapeOfVoice3,
                text: '게시판 - 좋아요 가능'
            },
            {
                img: ShapeOfVoice4,
                text: '마이 페이지 - 작성글 관리'
            },
        ],
        usedSkills: ['Node.js', 'Express.js', 'Sequelize', 'AWS(S3, EC2, RDS)', 'CSS'],
        links:{
            deploy:'',
            github:'http://github.com/codestates/ShapeOfVoice-client',
            other:{
                '프로젝트 기획서': 'http://github.com/codestates/ShapeOfVoice-client/wiki'
            },
        },
        myWork: {
            '프로젝트 기획': [
                '프로토타입, 와이어프레임, 플로우차트 작성',
            ],
            '프론트엔드': [
                'CSS 파일 작성을 통한 웹사이트 전체의 CSS 작업',
            ],
            '백엔드': [
                'Node.js를 이용한 서버 초기 세팅',
                'Sequelize를 이용한 데이터베이스 구축',
                'Schema, API 작성',
                'Router, Model 작성 : board, voice_board',
                'Controller 작성 : user(PUT), board(GET, POST, DELETE), voide(POST), voice_board(POST)',
                'AWS (S3, EC2, RDS) 를 이용한 초기 배포'
            ]
        }
    },
    {
        name: '로 또 대 박',
        explanation: { 
            text: '로또 번호를 랜덤으로 추천해주는 웹 사이트',
            duration: '2020.10',
            type: ['개인 프로젝트', '완료'],
        },
        images: [
            {
                img: lotto1,
                text: '로또 번호 추첨 기능'
            }
        ],
        usedSkills: ['HTML', 'JavaScript', 'Canvas API'],
        links:{
            deploy:'https://code-kay.github.io/lotto/',
            github:'https://github.com/code-kay/lotto',
        },
        myWork:{
            '기능 개발': [
                    '직접 그린 이미지와 Canvas를 활용한 첫 프로젝트',
                    'Math.random 함수로 번호 추첨 구현',
                    'setInterval 함수로 애니메이션 구현'
            ]
        },
    },
]