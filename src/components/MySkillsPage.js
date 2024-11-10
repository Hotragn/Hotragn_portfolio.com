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
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme } from './Themes';
import { Design, Develope } from './AllSvgs';
import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte';

const Box = styled.div`
  background-color: ${props => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  position: relative;
  width: 35vw;
  height: 70vh;
  perspective: 1000px;
`;

const Main = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  padding: 2rem;
  background-color: ${props => props.theme.body};
  border: 2px solid ${props => props.theme.text};
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  backface-visibility: hidden;
  transform-style: preserve-3d;
  cursor: pointer;

  &:first-child {
    transform: ${props => props.flipped ? 'rotateY(180deg)' : 'rotateY(0)'};
    z-index: ${props => props.flipped ? 0 : 1};
  }

  &:last-child {
    transform: ${props => props.flipped ? 'rotateY(0)' : 'rotateY(-180deg)'};
    z-index: ${props => props.flipped ? 1 : 0};
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.2);
  }
`;

const Title = styled.h2`
  display: flex;
  align-items: center;
  font-size: calc(1em + 1vw);
  margin-bottom: 2rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid ${props => props.theme.text};

  svg {
    margin-right: 1rem;
    transition: all 0.3s ease;
  }
`;

const Description = styled.div`
  font-size: calc(0.6em + 0.5vw);
  margin: 1rem 0;
  line-height: 1.7;

  strong {
    display: block;
    margin: 1rem 0;
    font-size: 1.1em;
    text-transform: uppercase;
    color: ${props => props.theme.text};
  }
`;

const SkillsList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 1rem;
`;

const Skill = styled.div`
  background: ${props => props.theme.text}15;
  padding: 0.5rem;
  border-radius: 8px;
  text-align: center;
  font-size: 0.9em;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.theme.text}30;
    transform: translateY(-2px);
  }
`;

const MySkillsPage = () => {
    const [isFlipped, setIsFlipped] = React.useState(false);

    const skills = [
        'Python', 'Java', 'SQL', 'NLP', 'PowerBI', 'TypeScript',
        'Machine Learning', 'Deep Learning', 'React.JS',
        'Computer Vision', 'HTML/CSS', 'Kotlin', 'JavaScript',
        'Project Management', 'Problem Solving', 'AI'
    ];

    return (
        <ThemeProvider theme={lightTheme}>
            <Box>
                <LogoComponent theme='light'/>
                <SocialIcons theme='light'/>
                <PowerButton />
                <ParticleComponent theme='light' />
                
                <Container onClick={() => setIsFlipped(!isFlipped)}>
                    <Main flipped={isFlipped}>
                        <Title>
                            <Design width={40} height={40} />
                            UnderGraduate Student
                        </Title>
                        <Description>
                            I love to embrace my journey with every learning opportunity, 
                            from life experiences to practical implementations of knowledge gained.
                        </Description>
                        <Description>
                            <strong>Core Competencies</strong>
                            <SkillsList>
                                {skills.slice(0, 8).map((skill, index) => (
                                    <Skill key={index}>{skill}</Skill>
                                ))}
                            </SkillsList>
                        </Description>
                    </Main>

                    <Main flipped={isFlipped}>
                        <Title>
                            <Develope width={40} height={40} />
                            Artificial Intelligence
                        </Title>
                        <Description>
                            I believe in smart efforts & efficient solutions rather than time-consuming approaches.
                        </Description>
                        <Description>
                            <strong>Technical Expertise</strong>
                            <SkillsList>
                                {skills.slice(8).map((skill, index) => (
                                    <Skill key={index}>{skill}</Skill>
                                ))}
                            </SkillsList>
                        </Description>
                    </Main>
                </Container>

                <BigTitle text="SKILLS" top="80%" right="30%" />
            </Box>
        </ThemeProvider>
    );
};

export default MySkillsPage;
