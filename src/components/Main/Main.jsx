import React from "react";
import photo from "./../../assets/photo.jpg";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  min-height: 600px;
  margin-top: 100px;
  @media (max-width: 1359px) {
    margin-top: 30px;
  }
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  @media (max-width: 1359px) {
    max-width: 700px;
  }
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 680px;
  font-family: "Poppins";
  color: #363636;
  gap: 20px;
  /* animation: ${fadeIn} 1s ease-in; */
  @media (max-width: 1359px) {
    max-width: 400px;
  }
`;
const TitleWrapp = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-left: 8px solid #ff6600;
  padding-left: 16px;
  gap: 10px;
`;
const Title1 = styled.h1`
  font-size: 34px;
  font-weight: bold;
  margin: 0;
  @media (max-width: 1359px) {
    font-size: 26px;
  }
`;

const Title2 = styled.h2`
  font-size: 42px;
  font-weight: bold;
  margin: 0;
  @media (max-width: 1359px) {
    font-size: 34px;
  }
`;

const Paragraph = styled.p`
  font-size: 20px;
  line-height: 1.5;
  margin: 0;
  @media (max-width: 1359px) {
    font-size: 16px;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  max-width: 400px;
  /* animation: ${fadeIn} 1s ease-in; */
  @media (max-width: 1359px) {
    max-width: 250px;
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.2);
`;
const Main = () => {
  return (
    <MainContainer>
      <Wrapper>
        <TextContainer>
          <TitleWrapp>
            <Title1>Welcome to</Title1>
            <Title2>CONFIDANT SERVICE</Title2>
          </TitleWrapp>
          <Paragraph>
            I am Avgust Platina, known as 'Confidant' for my ability to provide
            a safe space for people to open up and share their deepest thoughts
            and emotions. With my passion for helping others navigate difficult
            situations and find solutions to their challenges, my name has
            become synonymous with my services. My life experience has shaped me
            into the person I am today, and I am honored to share my unique
            perspective with those in need of support.
          </Paragraph>
          <Paragraph>
            I believe that each person I meet brings a gift of their presence
            into my life, just as I hope to provide valuable experiences for
            them.
          </Paragraph>
        </TextContainer>
        <ImageContainer>
          <Image src={photo} alt="Photograph" />
        </ImageContainer>
      </Wrapper>
    </MainContainer>
  );
};

export default Main;
