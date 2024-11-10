// import React, { useEffect, useRef } from "react";
// import styled, { ThemeProvider } from "styled-components";
// import { DarkTheme } from "./Themes";
// import { motion } from "framer-motion";

// import LogoComponent from "../subComponents/LogoComponent";
// import SocialIcons from "../subComponents/SocialIcons";
// import PowerButton from "../subComponents/PowerButton";

// import { Work } from "../data/WorkData";
// import Card from "../subComponents/Card";
// import { YinYang } from "./AllSvgs";
// import BigTitlte from "../subComponents/BigTitlte";

// const Box = styled.div`
//   background-color: ${(props) => props.theme.body};

//   height: 400vh;
//   position: relative;
//   display: flex;
//   align-items: center;
// `;

// const Main = styled(motion.ul)`
//   position: fixed;
//   top: 12rem;
//   left: calc(10rem + 15vw);
//   height: 40vh;
//   display: flex;

//   color: white;
// `;
// const Rotate = styled.span`
//   display: block;
//   position: fixed;
//   right: 1rem;
//   bottom: 1rem;
//   width: 80px;
//   height: 80px;
//   z-index: 1;
// `;

// // Framer-motion Configuration
// const container = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,

//     transition: {
//       staggerChildren: 0.5,
//       duration: 0.5,
//     },
//   },
// };

// const WorkPage = () => {
//   const ref = useRef(null);
//   const yinyang = useRef(null);

//   useEffect(() => {
//     let element = ref.current;

//     const rotate = () => {
//       element.style.transform = `translateX(${-window.pageYOffset}px)`;

//       return (yinyang.current.style.transform =
//         "rotate(" + -window.pageYOffset + "deg)");
//     };

//     window.addEventListener("scroll", rotate);
//     return () => {
//       window.removeEventListener("scroll", rotate);
//     };
//   }, []);

//   return (
//     <ThemeProvider theme={DarkTheme}>
//       <Box>
//         <LogoComponent theme="dark" />
//         <SocialIcons theme="dark" />
//         <PowerButton />

//         <Main ref={ref} variants={container} initial="hidden" animate="show">
//           {Work.map((d) => (
//             <Card key={d.id} data={d} />
//           ))}
//         </Main>
//         <Rotate ref={yinyang}>
//           <YinYang width={80} height={80} fill={DarkTheme.text} />
//         </Rotate>

//         <BigTitlte text="WORK" top="10%" right="20%" />
//       </Box>
//     </ThemeProvider>
//   );
// };

// export default WorkPage;


import React, { useEffect, useRef, useState } from "react";
import styled, { ThemeProvider, keyframes } from "styled-components";
import { DarkTheme } from "./Themes";
import { motion } from "framer-motion";
import { Chessboard } from 'react-chessboard';
import Chess from 'chess.js';

import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import { Work } from "../data/WorkData";
import Card from "../subComponents/Card";
import { YinYang } from "./AllSvgs";
import BigTitlte from "../subComponents/BigTitlte";

const gradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const Box = styled.div`
  background: linear-gradient(
    315deg,
    ${props => props.theme.body} 0%,
    #1a1a1a 74%
  );
  background-size: 200% 200%;
  animation: ${gradient} 15s ease infinite;
  height: 400vh;
  position: relative;
  display: flex;
  align-items: center;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0) 70%);
    pointer-events: none;
  }
`;

const Main = styled(motion.ul)`
  position: fixed;
  top: 12rem;
  left: calc(10rem + 15vw);
  height: 40vh;
  display: flex;
  color: white;
  gap: 2rem;
  perspective: 1000px;
`;

const ChessboardContainer = styled.div`
  position: fixed;
  top: 50%;
  right: 2rem;
  transform: translateY(-50%);
  width: 200px;
  height: 200px;
  opacity: 0.8;
  transition: opacity 0.3s ease;
  
  &:hover {
    opacity: 1;
  }
`;

const Rotate = styled.span`
  display: block;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: 80px;
  height: 80px;
  z-index: 1;
  filter: drop-shadow(0 0 10px rgba(255,255,255,0.2));
  transition: all 0.3s ease;
  
  &:hover {
    filter: drop-shadow(0 0 15px rgba(255,255,255,0.4));
    transform: scale(1.1);
  }
`;

const ProgressBar = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 3px;
  background: linear-gradient(90deg, #fff, ${props => props.theme.text});
  width: ${props => props.progress}%;
  transition: width 0.3s ease;
`;

const WorkIndicator = styled.div`
  position: fixed;
  left: 2rem;
  top: 50%;
  transform: translateY(-50%);
  writing-mode: vertical-rl;
  text-orientation: mixed;
  font-size: 1.2rem;
  color: ${props => props.theme.text};
  opacity: 0.8;
  letter-spacing: 2px;
`;

// Framer-motion Configuration
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

const WorkPage = () => {
  const ref = useRef(null);
  const yinyang = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [game] = useState(new Chess());
  const [currentMove, setCurrentMove] = useState(0);

  // Predefined chess moves that correspond to scroll progress
  const chessMoves = [
    'e4', 'e5', 'Nf3', 'Nc6', 'Bc4', 'Nf6', 'Ng5', 'd6'
  ];

  useEffect(() => {
    let element = ref.current;

    const handleScroll = () => {
      // Rotate logic
      element.style.transform = `translateX(${-window.pageYOffset}px)`;
      yinyang.current.style.transform = `rotate(${-window.pageYOffset}deg)`;

      // Calculate scroll progress
      const scrollPercentage = (window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      setScrollProgress(scrollPercentage);

      // Update chess moves based on scroll progress
      const moveIndex = Math.floor((scrollPercentage / 100) * chessMoves.length);
      if (moveIndex !== currentMove && moveIndex < chessMoves.length) {
        setCurrentMove(moveIndex);
        const gameCopy = { ...game };
        try {
          gameCopy.move(chessMoves[moveIndex]);
        } catch (error) {
          console.error('Invalid move:', error);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [game, currentMove]);

  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <ProgressBar progress={scrollProgress} />
        <WorkIndicator>SCROLL TO EXPLORE</WorkIndicator>
        
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />

        <Main ref={ref} variants={container} initial="hidden" animate="show">
          {Work.map((d) => (
            <Card key={d.id} data={d} />
          ))}
        </Main>

        <ChessboardContainer>
          <Chessboard 
            position={game.fen()}
            boardWidth={200}
            animationDuration={800}
            boardStyle={{
              borderRadius: '8px',
              boxShadow: '0 0 20px rgba(255,255,255,0.1)'
            }}
          />
        </ChessboardContainer>

        <Rotate ref={yinyang}>
          <YinYang width={80} height={80} fill={DarkTheme.text} />
        </Rotate>

        <BigTitlte text="WORK" top="10%" right="20%" />
      </Box>
    </ThemeProvider>
  );
};

export default WorkPage;
