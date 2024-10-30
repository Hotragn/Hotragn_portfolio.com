// import React from 'react'
// import styled, { keyframes, ThemeProvider } from 'styled-components'
// import {DarkTheme} from './Themes';


// import LogoComponent from '../subComponents/LogoComponent';
// import SocialIcons from '../subComponents/SocialIcons';
// import PowerButton from '../subComponents/PowerButton';
// import ParticleComponent from '../subComponents/ParticleComponent';
// import BigTitle from '../subComponents/BigTitlte'
// import astronaut from '../assets/Images/spaceman.png'

// const Box = styled.div`
// background-color: ${props => props.theme.body};
// width: 100vw;
// height:100vh;
// position: relative;
// overflow: hidden;
// `
// const float = keyframes`
// 0% { transform: translateY(-10px) }
// 50% { transform: translateY(15px) translateX(15px) }
// 100% { transform: translateY(-10px) }

// `
// const Spaceman = styled.div`
// position: absolute;
// top: 10%;
// right: 5%;
// width: 20vw;
// animation: ${float} 4s ease infinite;
// img{
//     width: 100%;
//     height: auto;
// }
// `
// const Main =  styled.div`
//   border: 2px solid ${(props) => props.theme.text};
//   color: ${(props) => props.theme.text};
//   padding: 2rem;
//   width: 50vw;
//   height: 60vh;
//   z-index: 3;
//   line-height: 1.5;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-size: calc(0.6rem + 1vw);
//  backdrop-filter: blur(4px);
  
//   position: absolute;
//   left: calc(5rem + 5vw);
//   top: 10rem;
//   font-family: 'Times New Roman', monospace;
//   font-style: italic;
// `




// const AboutPage = () => {
//     return (
//         <ThemeProvider theme={DarkTheme}>
// <Box>

// <LogoComponent theme='dark'/>
// <SocialIcons theme='dark'/>
// <PowerButton />
// <ParticleComponent theme='dark' />

//         <Spaceman>
//             <img src={astronaut} alt="spaceman" />
//         </Spaceman>    
//         <Main>
//         I'm currently pursuing my MSIS in Northeastern university located in Boston. I tend to observe and analyse.
// <br /> <br/>
// I'm interested in the whole fullstack and Data science Like trying new things and building great projects. I'm an independent traveller. I love to travel and explore.
// <br/> <br/>
// Let's be Open to the innovations that are being Nascent. Connect with me @social links.
//         </Main>

//         <BigTitle text="ABOUT!!!" top="10%" left="5%" />


//         </Box>

//         </ThemeProvider>
        
//     )
// }

// export default AboutPage


import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import { DarkTheme } from './Themes'
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons'
import PowerButton from '../subComponents/PowerButton'
import ParticleComponent from '../subComponents/ParticleComponent'
import BigTitle from '../subComponents/BigTitlte'
import astronaut from '../assets/Images/spaceman.png'

const Box = styled.div`
  background-color: ${props => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`

const float = keyframes`
  0% { transform: translateY(-10px) rotate(0deg) }
  50% { transform: translateY(15px) translateX(15px) rotate(5deg) }
  100% { transform: translateY(-10px) rotate(0deg) }
`

const Spaceman = styled.div`
  position: absolute;
  top: 10%;
  right: 5%;
  width: 20vw;
  animation: ${float} 4s ease infinite;
  img {
    width: 100%;
    height: auto;
    filter: drop-shadow(0 0 15px rgba(0,0,0,0.3));
  }
`

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 55vw;
  height: 70vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  backdrop-filter: blur(4px);
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: 'Calibre', sans-serif;
  border-radius: 0px 50px 0px 50px;
  box-shadow: 0 0 20px rgba(0,0,0,0.2);
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.text};
    border-radius: 10px;
  }
`

const Section = styled.section`
  margin-bottom: 2rem;
`

const Title = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  border-bottom: 2px solid ${props => props.theme.text};
  padding-bottom: 0.5rem;
`

const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
`

const SkillCard = styled.div`
  background: rgba(255,255,255,0.1);
  padding: 1rem;
  border-radius: 10px;
  backdrop-filter: blur(5px);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`

const ProjectCard = styled.div`
  background: rgba(255,255,255,0.05);
  padding: 1rem;
  border-radius: 10px;
  margin-bottom: 1rem;
`

const AboutPage = () => {
    return (
        <ThemeProvider theme={DarkTheme}>
            <Box>
                <LogoComponent theme='dark'/>
                <SocialIcons theme='dark'/>
                <PowerButton />
                <ParticleComponent theme='dark' />

                <Spaceman>
                    <img src={astronaut} alt="spaceman" />
                </Spaceman>    

                <Main>
                    <Section>
                        <Title>Professional Overview</Title>
                        <p>
                            A curious and analytical graduate student pursuing a Master's in Information 
                            Systems at Northeastern University in Boston, combining technical rigor with 
                            creative problem-solving in full-stack development and data science.
                        </p>
                    </Section>

                    <Section>
                        <Title>Core Competencies</Title>
                        <SkillGrid>
                            <SkillCard>Full-Stack Development</SkillCard>
                            <SkillCard>Data Science & ML</SkillCard>
                            <SkillCard>Cloud Computing</SkillCard>
                            <SkillCard>System Architecture</SkillCard>
                        </SkillGrid>
                    </Section>

                    <Section>
                        <Title>Notable Projects</Title>
                        <ProjectCard>
                            <h3>BERT-based RAG System</h3>
                            <p>Developed a hybrid open-text retrieval system achieving 90% faster retrieval rates</p>
                        </ProjectCard>
                        <ProjectCard>
                            <h3>Forensic Analysis System</h3>
                            <p>Created multi-modal analysis using deep learning techniques</p>
                        </ProjectCard>
                        <ProjectCard>
                            <h3>Route Optimization</h3>
                            <p>Implemented vehicle route optimization reducing planning time by 80%</p>
                        </ProjectCard>
                    </Section>

                    <Section>
                        <Title>Research & Publications</Title>
                        <p>Published works in data augmentation strategies for low-resource language models 
                           and information security risk management. Contributed to the development of an 
                           Intelligent Content Aggregator system.</p>
                    </Section>
                </Main>

                <BigTitle text="ABOUT" top="10%" left="5%" />
            </Box>
        </ThemeProvider>
    )
}

export default AboutPage
