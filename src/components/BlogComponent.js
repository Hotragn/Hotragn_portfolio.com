// import { motion } from "framer-motion";
// import React from "react";
// // import { NavLink } from 'react-router-dom'
// import styled from "styled-components";

// const Box = styled(motion.a)`
//   width: calc(10rem + 15vw);
//   text-decoration: none;
//   height: 20rem;
//   padding: 1rem;
//   color: ${(props) => props.theme.text};
//   border: 2px solid ${(props) => props.theme.text};
//   backdrop-filter: blur(2px);
//   box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
//   cursor: pointer;

//   display: flex;
//   flex-direction: column;
//   z-index: 5;

//   &:hover {
//     color: ${(props) => props.theme.body};
//     background-color: ${(props) => props.theme.text};
//     transition: all 0.3s ease;
//   }
// `;

// const Image = styled.div`
//   background-image: ${(props) => `url(${props.img})`};
//   width: 100%;
//   height: 60%;
//   background-size: cover;
//   border: 1px solid transparent;
//   background-position: center center;

//   ${Box}:hover & {
//     border: 1px solid ${(props) => props.theme.body};
//   }
// `;
// const Title = styled.h3`
//   color: inherit;
//   padding: 0.5rem 0;
//   padding-top: 1rem;
//   font-family: "Karla", sans-serif;
//   font-weight: 700;
//   border-bottom: 1px solid ${(props) => props.theme.text};

//   ${Box}:hover & {
//     border-bottom: 1px solid ${(props) => props.theme.body};
//   }
// `;
// const HashTags = styled.div`
//   padding: 0.5rem 0;
// `;
// const Tag = styled.span`
//   padding-right: 0.5rem;
// `;
// const Date = styled.span`
//   padding: 0.5rem 0;
// `;

// const Container = styled(motion.div)``;

// // Framer motion configuration
// const Item = {
//   hidden: {
//     scale: 0,
//   },
//   show: {
//     scale: 1,
//     transition: {
//       type: "spring",
//       duration: 0.5,
//     },
//   },
// };

// const BlogComponent = (props) => {
//   const { name, tags, date, imgSrc, link } = props.blog;
//   return (
//     <Container variants={Item}>
//       <Box target="_blank" href={`${link}`}>
//         <Image img={imgSrc} />
//         <Title>{name}</Title>
//         <HashTags>
//           {tags.map((t, id) => {
//             return <Tag key={id}>#{t}</Tag>;
//           })}
//         </HashTags>
//         <Date>{date}</Date>
//       </Box>
//     </Container>
//   );
// };

// export default BlogComponent;




import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";

const StyledCard = styled(motion.div)`
  width: calc(10rem + 15vw);
  position: relative;
  background: ${props => props.theme.body};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
`;

const ContentWrapper = styled(motion.div)`
  padding: 1.5rem;
  background: ${props => props.theme.body};
`;

const ImageWrapper = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      transparent 0%,
      rgba(0, 0, 0, 0.3) 100%
    );
  }
`;

const Image = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Title = styled(motion.h3)`
  font-size: 1.5rem;
  margin: 0.5rem 0;
  color: ${props => props.theme.text};
  font-weight: 600;
`;

const TagsContainer = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 0.5rem 0;
`;

const Tag = styled(motion.span)`
  padding: 0.3rem 0.8rem;
  background: ${props => props.theme.text}15;
  border-radius: 20px;
  font-size: 0.9rem;
  color: ${props => props.theme.text};
  cursor: pointer;
  
  &:hover {
    background: ${props => props.theme.text}30;
  }
`;

const Date = styled.span`
  font-size: 0.9rem;
  color: ${props => props.theme.text}80;
`;

const ReadMore = styled(motion.button)`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background: ${props => props.theme.text};
  color: ${props => props.theme.body};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 500;
  
  &:hover {
    opacity: 0.9;
  }
`;

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
  hover: {
    y: -5,
    transition: {
      duration: 0.2,
      ease: "easeInOut"
    }
  }
};

const imageVariants = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3
    }
  }
};

const BlogComponent = ({ blog }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { name, tags, date, imgSrc, link } = blog;

  const handleClick = (e) => {
    e.preventDefault();
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <StyledCard
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <ImageWrapper>
        <Image
          src={imgSrc}
          alt={name}
          variants={imageVariants}
          whileHover="hover"
          loading="lazy"
        />
      </ImageWrapper>

      <ContentWrapper>
        <AnimatePresence>
          <Title
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {name}
          </Title>
          
          <TagsContainer>
            {tags.map((tag, index) => (
              <Tag
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                #{tag}
              </Tag>
            ))}
          </TagsContainer>

          <Date>{date}</Date>

          {isHovered && (
            <ReadMore
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Read More
            </ReadMore>
          )}
        </AnimatePresence>
      </ContentWrapper>
    </StyledCard>
  );
};

export default BlogComponent;
