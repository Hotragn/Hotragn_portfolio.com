// import React from 'react'
// import styled, { ThemeProvider } from 'styled-components'
// import {lightTheme} from './Themes';
// import { Design, Develope} from './AllSvgs';


// import LogoComponent from '../subComponents/LogoComponent';
// import SocialIcons from '../subComponents/SocialIcons';
// import PowerButton from '../subComponents/PowerButton';
// import ParticleComponent from '../subComponents/ParticleComponent';
// import BigTitle from '../subComponents/BigTitlte'

// const Box = styled.div`
// background-color: ${props => props.theme.body};
// width: 100vw;
// height:100vh;
// position: relative;
// display: flex;
// justify-content: space-evenly;
// align-items: center;


// `

// const Main = styled.div`
// border: 2px solid ${props => props.theme.text};
// color: ${props => props.theme.text};
// background-color: ${props => props.theme.body};
// padding: 2rem;
// width: 30vw;
// height: 60vh;
// z-index:3;
// line-height: 1.5;
// cursor: pointer;

// font-family: 'Ubuntu Mono',monospace;
// display: flex;
// flex-direction: column;
// justify-content: space-between;

// &:hover{
//     color: ${props => props.theme.body};
//     background-color: ${props => props.theme.text};
// }
// `

// const Title = styled.h2`
// display: flex;
// justify-content: center;
// align-items: center;
// font-size: calc(1em + 1vw);

// ${Main}:hover &{
//     &>*{
//         fill:${props => props.theme.body};
//     }
// }

// &>*:first-child{
// margin-right: 1rem;
// }
// `

// const Description = styled.div`
// color: ${props => props.theme.text};
// font-size: calc(0.6em + 1vw);
// padding: 0.5rem 0;


// ${Main}:hover &{
   
//         color:${props => props.theme.body};
    
// }

// strong{
//     margin-bottom: 1rem;
//     text-transform: uppercase;
// }
// ul,p{
//     margin-left: 2rem;
// }
// `

// const MySkillsPage = () => {
//     return (
//         <ThemeProvider theme={lightTheme}>
// <Box>

// <LogoComponent theme='light'/>
// <SocialIcons theme='light'/>
// <PowerButton />
// <ParticleComponent theme='light' />
//             <Main>
// <Title>
//     <Design width={40} height={40} /> MSIS Graduate Student
// </Title>
// <Description>
// I love to embrace my journey with every learning i can do from all the experiences i had starting from life till my implementations of the knowledge learnt.
// </Description>
// <Description>
// <strong>I like to handle and manage the work</strong>
// <ul>
//     <li>
//         Artificial Intelligence
//     </li>
//     <li>
//         Problem Solving 
//     </li>
// </ul>
// </Description>


//             </Main>
//             <Main>
// <Title>
//     <Develope width={40} height={40} /> AI 
// </Title>
// <Description>
// I believe in the smart efforts & efficient solution rather than the time we waste.
// </Description>
// <Description>
// <strong>Skills</strong>
// <p>
// Python, Java, SQL, Natural Language Processing PowerBI, TypeScript, Software Project Management, Machine learning, Deep learning, React.JS, Computer Vision, Html, Css, Kotlin, Js.
// </p>
// </Description>


//             </Main>

//             <BigTitle text="SKILLS" top="80%" right="30%" />

//         </Box>

//         </ThemeProvider>
        
//     )
// }

// export default MySkillsPage


import React, { useState } from 'react';
import styled, { ThemeProvider, keyframes } from 'styled-components';
import { lightTheme } from './Themes';
import { Design, Develope } from './AllSvgs';
import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


// Enhanced Rubik's Cube Animation
const rotate = keyframes`
  0% { transform: rotateX(0) rotateY(0) rotateZ(0); }
  100% { transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg); }
`;

const Box = styled.div`
  background-color: ${props => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Main = styled.div`
  border: 2px solid ${props => props.theme.text};
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  cursor: pointer;
  border-radius: 25px;
  font-family: 'Ubuntu Mono', monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
    transform: translateY(-5px);
  }
`;

// Skills Section Components
const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
  width: 100%;
`;

const SkillCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  height: 100px;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.2);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: ${props => props.color};
  }
`;

const SkillIcon = styled.div`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: ${props => props.color};
`;

const SkillName = styled.h4`
  margin: 0;
  font-size: 0.9rem;
  text-align: center;
  color: inherit;
`;

const SkillLevel = styled.div`
  width: 100%;
  height: 3px;
  background: rgba(255, 255, 255, 0.1);
  margin-top: 0.5rem;
  border-radius: 2px;
  overflow: hidden;

  &::after {
    content: '';
    display: block;
    width: ${props => props.level}%;
    height: 100%;
    background: ${props => props.color};
    transition: width 0.3s ease;
  }
`;

// Rubik's Cube Components
const RubiksCube = styled.div`
  position: absolute;
  top: -50px;
  right: -50px;
  width: 60px;
  height: 60px;
  perspective: 1000px;
  display: ${props => props.show ? 'block' : 'none'};
`;

const Cube = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  animation: ${rotate} 2s linear infinite;
  transform: ${props => `rotateY(${props.rotateY}deg)`};
  transition: transform 0.5s ease;
`;

const CubeFace = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  border: 2px solid ${props => props.theme.text};
  background: ${props => props.color};
  display: grid;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
  gap: 2px;

  &.front  { transform: translateZ(30px); }
  &.back   { transform: rotateY(180deg) translateZ(30px); }
  &.right  { transform: rotateY(90deg) translateZ(30px); }
  &.left   { transform: rotateY(-90deg) translateZ(30px); }
  &.top    { transform: rotateX(90deg) translateZ(30px); }
  &.bottom { transform: rotateX(-90deg) translateZ(30px); }
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);

  ${Main}:hover &{
    &>*{
      fill:${props => props.theme.body};
    }
  }

  &>*:first-child{
    margin-right: 1rem;
  }
`;

const Description = styled.div`
  color: ${props => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;

  ${Main}:hover &{
    color:${props => props.theme.body};
  }

  strong{
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  ul,p{
    margin-left: 2rem;
  }
`;

// Skills data
const skillsData = [
  { name: 'Python', color: '#3776AB', level: 90, icon: '👨🏻‍💻' },
  { name: 'Deep Learning & Computer Vision', color: '#FF6B6B', level: 85, icon: '🧠👁️' },
  { name: 'Machine Learning & NLP', color: '#9966FF', level: 75, icon: '💬 🤖' },
  { name: 'React.js', color: '#61DAFB', level: 85, icon: '⚛️' },
  { name: 'TypeScript', color: '#3178C6', level: 75, icon: '📘' },
  { name: 'Java', color: '#007396', level: 80, icon: '☕' }
];

const MySkillsPage = () => {
  const [showCube, setShowCube] = useState(false);
  const [cubeColor, setCubeColor] = useState('#FF0000');
  const [rotateY, setRotateY] = useState(0);

  const handleSkillHover = (color) => {
    setCubeColor(color);
    setRotateY(prev => prev + 90);
  };

  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <LogoComponent theme='light'/>
        <SocialIcons theme='light'/>
        <PowerButton />
        <ParticleComponent theme='light' />
        
        <Main>
          <Title>
            <Design width={40} height={40} /> MSIS Graduate Student
          </Title>
          <Description>
            I love to embrace my journey with every learning I can do from all the experiences I had starting from life till my implementations of the knowledge learnt.
          </Description>
          <Description>
            <strong>I like to handle and manage the work</strong>
            <ul>
              <li>Artificial Intelligence</li>
              <li>Problem Solving</li>
            </ul>
          </Description>
        </Main>

        <Main onMouseEnter={() => setShowCube(true)} onMouseLeave={() => setShowCube(false)}>
          <RubiksCube show={showCube}>
            <Cube rotateY={rotateY}>
              <CubeFace className="front" color={cubeColor}/>
              <CubeFace className="back" color="#FFA500"/>
              <CubeFace className="right" color="#00FF00"/>
              <CubeFace className="left" color="#0000FF"/>
              <CubeFace className="top" color="#FFFFFF"/>
              <CubeFace className="bottom" color="#FFFF00"/>
            </Cube>
          </RubiksCube>
          <Title>
            <Develope width={40} height={40} /> AI
          </Title>
          <Description>
            I believe in smart efforts & efficient solutions rather than time waste.
          </Description>
          <Description>
            <strong>Skills</strong>
            <SkillsGrid>
              {skillsData.map((skill, index) => (
                <SkillCard 
                  key={index}
                  color={skill.color}
                  onMouseEnter={() => handleSkillHover(skill.color)}
                >
                  <SkillIcon color={skill.color}>{skill.icon}</SkillIcon>
                  <SkillName>{skill.name}</SkillName>
                  <SkillLevel level={skill.level} color={skill.color} />
                </SkillCard>
              ))}
            </SkillsGrid>
          </Description>
        </Main>

        <BigTitle text="SKILLS" top="80%" right="30%" />
      </Box>
    </ThemeProvider>
  );
};

export default MySkillsPage;
