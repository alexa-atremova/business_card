import React from "react";
import photo from "./../../assets/photo.jpg";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

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
  text-align: justify;
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
  @media (max-width: 767px) {
    max-width: 510px;
  }
  @media (max-width: 539px) {
    flex-direction: column;
  }
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 680px;
  font-family: "Poppins", sans-serif;
  color: #363636;
  gap: 20px;
  /* animation: ${fadeIn} 1s ease-in; */
  @media (max-width: 1359px) {
    max-width: 420px;
  }
  @media (max-width: 767px) {
    max-width: 300px;
  }
  @media (max-width: 539px) {
    display: flex;
    align-items: center;
    justify-content: center;
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
  @media (max-width: 767px) {
    font-size: 20px;
    line-height: 20px;
  }
`;

const Title2 = styled.h2`
  font-size: 42px;
  font-weight: bold;
  margin: 0;
  @media (max-width: 1359px) {
    font-size: 34px;
  }
  @media (max-width: 767px) {
    font-size: 26px;
  }
`;

const Paragraph = styled.p`
  font-size: 20px;
  line-height: 1.5;
  margin: 0;
  @media (max-width: 1359px) {
    font-size: 18px;
  }
  @media (max-width: 767px) {
    font-size: 14px;
    line-height: 1.4;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  max-width: 400px;
  /* animation: ${fadeIn} 1s ease-in; */
  @media (max-width: 1359px) {
    max-width: 250px;
  }
  @media (max-width: 767px) {
    max-width: 180px;
  }
  @media (max-width: 539px) {
    margin-top: 20px;
    max-width: 200px;
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.2);
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 30px;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  background-color: #363636;
  color: #ff6600;
  border-radius: 8px;
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.2);
`;
const Main = ({ lang }) => {
  const scrollToStart = () => {
    const startElement = document.getElementById("start");
    if (startElement) {
      startElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <MainContainer>
      <Wrapper>
        <TextContainer>
          <TitleWrapp>
            <Title1>
              {lang === "ru" ? "Добро пожаловать в" : "Welcome to"}
            </Title1>
            <Title2>CONFIDANT SERVICE</Title2>
          </TitleWrapp>
          <Paragraph>
            {lang === "ru"
              ? "Мое имя Август Платина, люди называют меня Конфидант, что означает по сути близкий человек. Это для меня очень много значит. Это так благодаря моей способности создавать безопасную среду для людей, где они могут раскрыться и поделиться своими самыми глубокими мыслями и эмоциями. Мое стремление помочь людям в прохождении сложных ситуаций и поиске решений для их проблем привело меня к тому, что мое имя стало синонимом того что я делаю.Мой жизненный путь сформировал меня в того, кто я есть сегодня. Для меня это большая честь, делиться своим уникальным пониманием жизни, видением и опытом с теми, кто нуждается в моей поддержке."
              : "I am Avgust Platina, known as 'Confidant' for my ability to provide a safe space for people to open up and share their deepest thoughts and emotions. With my passion for helping others navigate difficult situations and find solutions to their challenges, my name has become synonymous with my services. My life experience has shaped me into the person I am today, and I am honored to share my unique perspective with those in need of support."}
          </Paragraph>
          <Paragraph>
            {lang === "ru"
              ? "Я верю, что каждый человек, с кем я встречаюсь, приносит в мою жизнь свой уникальный дар, и я хочу чтобы общение со мной обогатило людей тем ценным опытом который поможет им преодолеть любые трудности."
              : "I believe that each person I meet brings a gift of their presence into my life, just as I hope to provide valuable experiences for them."}
          </Paragraph>
          <Button onClick={scrollToStart}>
            {lang === "ru" ? "Как начать" : "How to start"}
          </Button>
        </TextContainer>
        <ImageContainer>
          <Image src={photo} alt="Photograph" />
        </ImageContainer>
      </Wrapper>
    </MainContainer>
  );
};

export default Main;
