import styled from "styled-components";
import { useTheme } from "../context/ThemeContext"
import profileImg from "../assets/images/display/bear.jpeg"

const ProfileImg = styled.img`
    border-radius: 100%;
    box-shadow: 0 0 16px ${props => props.$darkMode ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.3)'};
    width: 240px;
    height: 240px;

    @media (max-width: 768px) {
        width: 180px;
        height: 180px;
    }
`

const ProfileContent = styled.p`
    font-family: "Gowun Batang";
    ${props => props.$darkMode ? 'color: rgb(226, 227, 255);' : ''}
    text-align: center;
    margin-top: -20px;

    & * {
        font-family: inherit;
        color: inherit;
    }

    @media (max-width: 768px) {
        margin-top: -12px;
    }
`

const ContentSpan = styled.span`
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
`

const Marker = styled.span`
    display: inline-block;
    height: 38px;
    padding: 0 6px;
    margin: 0 4px;
    border-bottom: 24px solid ${props=> props.$markerColor || 'transparent'};

    &:hover {
        filter: brightness(1.1) saturate(200%);
        text-shadow: 0 0 16px rgb(172, 174, 222);
    }

    @media (max-width: 768px) {
        height: 22px;
        padding: 0 4px;
        margin: 0 2px;
        border-bottom: 14px solid ${props=> props.$markerColor || 'transparent'};
    }
`

function Profile () {
    const { darkMode } = useTheme();

    return (
        <>
            <ProfileImg src={profileImg} $darkMode={darkMode} alt='profile image' />
            <ProfileContent $darkMode={darkMode} >
                <ContentSpan>
                    <Marker $markerColor={'rgba(245, 255, 184, 0.45)'}>사용하기 편한</Marker>,
                    <Marker $markerColor={'rgba(205, 255, 210, 0.45)'}>보기에 좋은</Marker>,
                    <Marker $markerColor={'rgba(254, 203, 236, 0.45)'}>재미를 줄 수 있는</Marker>
                </ContentSpan>
                <ContentSpan>화면을 만들고 싶은</ContentSpan>
                <ContentSpan><br/>프론트엔드 개발자 <strong>김아윤</strong> 입니다.</ContentSpan>
            </ProfileContent>
        </>
    )
}

export default Profile