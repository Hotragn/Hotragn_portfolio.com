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
//     <Design width={40} height={40} /> UnderGraduate Student
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



import React from 'react';
import styled, { ThemeProvider, keyframes } from 'styled-components';
import { lightTheme } from './Themes';
import { Design, Develope } from './AllSvgs';
import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Box = styled.div`
  background-color: ${props => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  overflow: hidden;
`;

const Main = styled.div`
  border: 2px solid ${props => props.theme.text};
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: auto;
  min-height: 60vh;
  z-index: 3;
  line-height: 1.5;
  cursor: pointer;
  border-radius: 20px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  backdrop-filter: blur(5px);
  animation: ${fadeIn} 0.5s ease forwards;
  transition: all 0.3s ease;

  font-family: 'Ubuntu Mono', monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.2);
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid ${props => props.theme.text};

  ${Main}:hover & {
    border-bottom-color: ${props => props.theme.body};
    & > * {
      fill: ${props => props.theme.body};
    }
  }

  & > *:first-child {
    margin-right: 1rem;
  }
`;

const Description = styled.div`
  color: ${props => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;

  ${Main}:hover & {
    color: ${props => props.theme.body};
  }
`;

const SkillsList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 1rem;
`;

const SkillItem = styled.div`
  background: ${props => `${props.theme.text}15`};
  padding: 0.5rem 1rem;
  border-radius: 15px;
  text-align: center;
  transition: all 0.3s ease;

  ${Main}:hover & {
    background: ${props => `${props.theme.body}15`};
    color: ${props => props.theme.body};
  }

  &:hover {
    transform: scale(1.05);
  }
`;

const MySkillsPage = () => {
    const technicalSkills = [
        "Python", "Java", "SQL", "TypeScript",
        "React.js", "Machine Learning", "Deep Learning",
        "Computer Vision", "NLP", "PowerBI"
    ];

    return (
        <ThemeProvider theme={lightTheme}>
            <Box>
                <LogoComponent theme='light'/>
                <SocialIcons theme='light'/>
                <PowerButton />
                <ParticleComponent theme='light' />
                
                <Main>
                    <Title>
                        <Design width={40} height={40} /> 
                        UnderGraduate Student
                    </Title>
                    <Description>
                        I love to embrace my journey with every learning opportunity, 
                        growing from all experiences in life and implementations of knowledge.
                    </Description>
                    <Description>
                        <strong>Core Competencies</strong>
                        <SkillsList>
                            <SkillItem>Artificial Intelligence</SkillItem>
                            <SkillItem>Problem Solving</SkillItem>
                            <SkillItem>Data Analysis</SkillItem>
                            <SkillItem>Research</SkillItem>
                        </SkillsList>
                    </Description>
                </Main>

                <Main>
                    <Title>
                        <Develope width={40} height={40} /> 
                        Technical Skills
                    </Title>
                    <Description>
                        I believe in smart efforts & efficient solutions rather than time-consuming approaches.
                    </Description>
                    <Description>
                        <strong>Technologies</strong>
                        <SkillsList>
                            {technicalSkills.map((skill, index) => (
                                <SkillItem key={index}>{skill}</SkillItem>
                            ))}
                        </SkillsList>
                    </Description>
                </Main>

                <BigTitle text="SKILLS" top="80%" right="30%" />
            </Box>
        </ThemeProvider>
    );
};

export default MySkillsPage;
