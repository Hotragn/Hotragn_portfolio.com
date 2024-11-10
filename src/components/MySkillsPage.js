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

// Rubik's Cube Animation
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

  &:hover {
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
  }
`;

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

  div {
    position: absolute;
    width: 60px;
    height: 60px;
    border: 2px solid ${props => props.theme.text};
    display: grid;
    grid-template: repeat(3, 1fr) / repeat(3, 1fr);
    gap: 2px;
    background: rgba(255, 255, 255, 0.1);
  }

  .front  { transform: translateZ(30px); }
  .back   { transform: rotateY(180deg) translateZ(30px); }
  .right  { transform: rotateY(90deg) translateZ(30px); }
  .left   { transform: rotateY(-90deg) translateZ(30px); }
  .top    { transform: rotateX(90deg) translateZ(30px); }
  .bottom { transform: rotateX(-90deg) translateZ(30px); }
`;

const CubeFace = styled.div`
  div {
    background-color: ${props => props.color};
  }
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

const MySkillsPage = () => {
  const [showCube, setShowCube] = useState(false);

  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <LogoComponent theme='light'/>
        <SocialIcons theme='light'/>
        <PowerButton />
        <ParticleComponent theme='light' />
        
        <Main onMouseEnter={() => setShowCube(true)} onMouseLeave={() => setShowCube(false)}>
          <RubiksCube show={showCube}>
            <Cube>
              <CubeFace className="front" color="#FF0000"/>
              <CubeFace className="back" color="#FFA500"/>
              <CubeFace className="right" color="#00FF00"/>
              <CubeFace className="left" color="#0000FF"/>
              <CubeFace className="top" color="#FFFFFF"/>
              <CubeFace className="bottom" color="#FFFF00"/>
            </Cube>
          </RubiksCube>
          <Title>
            <Design width={40} height={40} /> UnderGraduate Student
          </Title>
          <Description>
            I love to embrace my journey with every learning i can do from all the experiences i had starting from life till my implementations of the knowledge learnt.
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
            <Cube>
              <CubeFace className="front" color="#FF0000"/>
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
            I believe in the smart efforts & efficient solution rather than the time we waste.
          </Description>
          <Description>
            <strong>Skills</strong>
            <p>
              Python, Java, SQL, Natural Language Processing PowerBI, TypeScript, Software Project Management, Machine learning, Deep learning, React.JS, Computer Vision, Html, Css, Kotlin, Js.
            </p>
          </Description>
        </Main>

        <BigTitle text="SKILLS" top="80%" right="30%" />
      </Box>
    </ThemeProvider>
  );
};

export default MySkillsPage;

