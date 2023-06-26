import React from "react";
import photo from "./../../assets/gpt.jpeg";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { theme } from "../../res/themes";

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: justify;

  width: 100%;
  height: 100%;
  margin-top: 100px;
  @media (max-width: 1359px) {
    margin-top: 50px;
  }
  @media (max-width: 767px) {
    margin-top: 20px;
  }
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  max-width: 1200px;
  @media (max-width: 1359px) {
    flex-direction: column-reverse;
    max-width: 700px;
  }
  @media (max-width: 767px) {
    max-width: 510px;
  }
  @media (max-width: 539px) {
  }
`;
const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 480px;
  font-family: "Poppins", sans-serif;
  color: ${theme.colors.text_color};
  gap: 20px;

  @media (max-width: 1359px) {
    max-width: 700px;
  }
  @media (max-width: 767px) {
    max-width: 500px;
  }
  @media (max-width: 539px) {
    max-width: 320px;
  }
`;

const Paragraph = styled.p`
  border-right: 6px solid ${theme.colors.highlighted};
  padding-right: 16px;
  font-size: 20px;
  line-height: 1.6;

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
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
  max-width: 660px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.2);

  @media (max-width: 1359px) {
    margin-top: 20px;
    max-width: 600px;
  }
  @media (max-width: 767px) {
    max-width: 500px;
  }
  @media (max-width: 539px) {
    margin-top: 20px;
    max-width: 320px;
  }
`;

const Ask = ({ lang }) => {
  return (
    <MainContainer>
      <Wrapper>
        <ImageContainer>
          <Image src={photo} />
        </ImageContainer>
        <TextContainer>
          {lang === "ru" ? (
            <Paragraph>
              Вопрос был задан ChatGPT с целью гарантии того, что
              предоставленные ответ и мнение, будут основаны на доказательствах
              из базы данных и влияние человеческого фактора и связанных с этим
              ошибок будет исключено ЧатGPT - модель искусственного интеллекта,
              разработанная OpenAI, основанная на архитектуре GPT-3.5. Она
              обучена на основе обзора различных источников и данных, и способна
              делать объективные выводы. Модель искусственного интеллекта не
              выражает личных мнений или убеждений, а основывается исключительно
              на фактических данных и исследованиях.
            </Paragraph>
          ) : (
            <Paragraph>
              "The question was posed to ChatGPT to ensure that the answer and
              opinion provided would be devoid of personal human error and
              grounded in evidence from the database." ChatGPT, an Artificial
              Intelligence language model trained by OpenAI, based on the
              GPT-3.5 architecture, which reviewed various sources and data
              points, and can conclude objective results. AI language model, do
              not express personal opinions or beliefs. It’s statements are
              based solely on factual data and research
            </Paragraph>
          )}
        </TextContainer>
      </Wrapper>
    </MainContainer>
  );
};

export default Ask;
