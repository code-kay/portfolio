import styled,  { createGlobalStyle }  from 'styled-components'
import { useTheme } from "./context/ThemeContext"

import Background from './components/Background'
import Header from './components/Header'
import BackgroundLargeDeco from './components/BackgroundLargeDeco'
import Intro from './components/Intro'
import Title from './components/Title'
import Profile from './components/Profile'
import SkillSet from './components/SkillSet'
import Cursor from './components/Cursor'
import ProjectCard from './components/ProjectCard'
import { useEffect, useRef, useState } from 'react'
import ContactCard from './components/ContactCard'
import Footer from './components/Footer'

const GlobalStyle = createGlobalStyle`
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
`


const View = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  overflow-x: hidden;
  overflow-y: auto;
  scrollbar-width: none;
`

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 160px;
  padding-bottom: 80px;
  
  @media (max-width: 768px) {
    gap: 100px;
  }
`

const PartContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;

  @media (max-width: 768px) {
    gap: 48px;
  }
`

function App() {
  const { darkMode } = useTheme();
  const [ currentPart, setCurrentPart ] = useState(0)
  const [ scrollPoints, setScrollPoints ] = useState({})
  const ViewRef = useRef(null)
  const HeaderRef = useRef(null)
  const InformationRef = useRef(null)
  const ProjectRef = useRef(null)
  const ContactRef = useRef(null)


  useEffect(()=> {
    let handleScroll= () => {}
    if (HeaderRef && InformationRef && ProjectRef) {

      handleScroll = () => {
        const newScrollPoints = { 
          HeaderBottom: HeaderRef.current.getBoundingClientRect().bottom,
          InformationTop: InformationRef.current.getBoundingClientRect().top,
          InformationBottom: InformationRef.current.getBoundingClientRect().bottom,
          ProjectTop: ProjectRef.current.getBoundingClientRect().top,
          ProjectBottom: ProjectRef.current.getBoundingClientRect().bottom,
          ContactTop: ContactRef.current.getBoundingClientRect().top,
          ContactBottom: ContactRef.current.getBoundingClientRect().bottom
        }
        setScrollPoints(newScrollPoints)

        if (newScrollPoints.HeaderBottom < newScrollPoints.InformationBottom) {
          setCurrentPart(0)
        } else if ( newScrollPoints.HeaderBottom < newScrollPoints.ProjectBottom ) {
          setCurrentPart(1)
        } else if ( newScrollPoints.HeaderBottom < newScrollPoints.ContactBottom) {
          setCurrentPart(2)
        }
      }

      ViewRef.current.addEventListener('scroll', handleScroll);
    }

    return () => ViewRef.current.removeEventListener('scroll', handleScroll);
  }, [])

  return (
    <>
      <GlobalStyle $darkMode={darkMode} />
      <View ref={ViewRef} >
        <Header currentPart={currentPart} ref={HeaderRef} scrollPoints={scrollPoints} ViewRef={ViewRef} refs={{InformationRef, ProjectRef, ContactRef}}/>
        <MainContainer>
          <Background />
          <BackgroundLargeDeco aria-hidden={true} />
          <Intro />
          <PartContainer ref={InformationRef} >
            <Title titleType='h2' content='INFORMATION' />
            <Profile />
            <SkillSet />
          </PartContainer>
          <PartContainer ref={ProjectRef} >
            <Title titleType='h2' content='PROJECT' />
            <ProjectCard />
          </PartContainer>
          <PartContainer ref={ContactRef} >
            <Title titleType='h2' content='CONTACT' />
            <ContactCard ViewRef={ViewRef} />            
          </PartContainer>
        </MainContainer>
        <Footer />
        <Cursor />
      </View>
    </>
  )
}

export default App
