import { useRef, Suspense, lazy } from 'react'
import styled,  { createGlobalStyle }  from 'styled-components'
import { useTheme } from "./context/ThemeContext"
import useScrollPoints from './hook/useScrollPoints'

import Background from './components/Background'
import Header from './components/Header'
import Footer from './components/Footer'
import cursor from './assets/images/display/cursor.webp'

const BackgroundLargeDeco = lazy(()=> import('./components/BackgroundLargeDeco'))
const Intro = lazy(()=> import('./components/Intro'))
const Title = lazy(()=> import('./components/Title'))
const Profile = lazy(()=> import('./components/Profile'))
const SkillSet = lazy(()=> import('./components/SkillSet'))
const Cursor = lazy(()=> import('./components/Cursor'))
const ProjectCard = lazy(()=> import('./components/ProjectCard'))
const ContactCard = lazy(()=> import('./components/ContactCard'))

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Inter';
    color: rgb(172, 174, 222);
    cursor: url('${cursor}')
      2 0, none;
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
  const ViewRef = useRef(null)
  const HeaderRef = useRef(null)
  const InformationRef = useRef(null)
  const ProjectRef = useRef(null)
  const ContactRef = useRef(null)

  const { scrollPoints, currentPart } = useScrollPoints(ViewRef, HeaderRef, [InformationRef, ProjectRef, ContactRef])

  return (
    <>
      <GlobalStyle $darkMode={darkMode} />
      <View ref={ViewRef} >
        <Background />
        <Header currentPart={currentPart} ref={HeaderRef} scrollPoints={scrollPoints} ViewRef={ViewRef} refs={{InformationRef, ProjectRef, ContactRef}}/>
        <Suspense fallback={<div>Loading...</div>}>
          <MainContainer>
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
              <ContactCard ViewRef={ViewRef}/>            
            </PartContainer>
          </MainContainer>
          <Footer />
          <Cursor />
        </Suspense>
      </View>
    </>
  )
}

export default App
