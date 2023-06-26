import React, { useEffect } from "react";
import styled from "styled-components";
import { theme } from "../../res/themes";

const AssistanceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin-top: 150px;
  margin-bottom: 100px;
  width: 100%;
  height: fit-content;
`;
const BlocksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;

  margin-bottom: 50px;
  gap: 20px;
  max-width: 1200px;

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
export const MainTitle = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Poppins", sans-serif;
  font-size: 32px;
  font-weight: bold;

  color: ${theme.colors.text_color};
  margin: 0;
  text-transform: uppercase;
  @media (max-width: 1359px) {
    font-size: 32px;
  }
  @media (max-width: 767px) {
    font-size: 20px;
  }
`;
export const Title = styled.h2`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  font-weight: bold;
  text-align: center;

  color: ${theme.colors.text_color};
  margin: 0;
  text-transform: uppercase;
  @media (max-width: 1359px) {
    font-size: 18px;
  }
  @media (max-width: 767px) {
    font-size: 16px;
  }
`;
export const Description = styled.p`
  font-family: "Noto Serif";
  max-width: 1200px;
  font-size: 20px;
  line-height: 30px;

  text-align: justify;
  margin-bottom: 40px;
  color: ${theme.colors.text_color};
  b {
    font-weight: bold;
  }
  p {
    color: ${theme.colors.highlighted};
  }
  @media (max-width: 767px) {
    max-width: 500px;
  }
  @media (max-width: 539px) {
    max-width: 320px;
    font-size: 16px;
    line-height: 30px;

    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

const Block = styled.div`
  width: 100%;
  height: fit-content;
  font-family: "Noto Serif";
  background-color: ${theme.colors.light_background};
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
  border-radius: 8px;

  color: ${theme.colors.text_color};
  padding: 16px;
  max-width: 700px;
  @media (max-width: 1359px) {
  }
  @media (max-width: 767px) {
  }
  @media (max-width: 539px) {
  }
`;

const BlockTitle = styled.h3`
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  margin-bottom: 20px;

  color: ${theme.colors.text_color};
  @media (max-width: 1359px) {
  }
  @media (max-width: 539px) {
    font-size: 15px;
  }
`;

const BlockText = styled.p`
  font-size: 25px;
  font-family: "Noto Serif";
  line-height: 1.5;
  color: ${theme.colors.text_color};
  margin: 0;
  @media (max-width: 539px) {
    font-size: 14px;
    line-height: 20px;
    margin: 0;
  }
`;

const Assistance = ({ lang }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <AssistanceContainer>
      <BlocksContainer>
        <MainTitle>Confidential Assistance </MainTitle>
        <Title>
          Assistance in Private, Personal, Family, and Business Matters
        </Title>
        <Description>
          Sometimes, we all need support in managing sensitive personal, family,
          or business matters without involving formal external parties. <br />{" "}
          <br /> In those moments, I offer personalized and confidential
          assistance to help facilitate communication, address delicate matters,
          and find mutually agreeable solutions.
          <br /> <br />
          As a bridge between parties, I create a safe space for open dialogue,
          ensuring that communication remains within the family or business.
          <br />
          <br />
          My approach is rooted in confidentiality and empathy, with a focus on
          preserving relationships and achieving outcomes that benefit everyone
          involved.
          <br />
          <br />
          While I don't provide legal advice, my role centers around providing
          safe, discreet, and mutually beneficial communication rather than
          formal dispute resolution.
          <br />
          <br />
          I am here to lend a helping hand in fostering understanding, restoring
          harmony, and nurturing positive connections.
          <br />
          <br />f you find yourself in need of support, dplease don't hesitate
          to reach out.
        </Description>
        <BlockText>You will receive:</BlockText>
        <Title> PRIVILEGED PERSONAL ASSISTANCE </Title>

        <Block>
          <BlockTitle> Uniquely Personal Experience </BlockTitle>
          Each session is dedicated solely to you and your needs.
        </Block>
        <Block>
          <BlockTitle> Individually Tailored Services </BlockTitle>
          Your journey is unique, and I recognize the importance of tailoring my
          services to meet your specific needs and aspirations. By taking the
          time to truly understand your story, dreams, and challenges, I can
          create a personalized plan that resonates with your deepest desires.
          Together, we will work out a schedule and approach that suits you
          best, allowing for a truly personal experience.
        </Block>
        <Block>
          <BlockTitle> Flexible Arrangements to Suit Your Needs</BlockTitle>
          As a provider of unique services to extraordinary individuals, I
          understand the exceptional circumstances and discerning preferences
          you possess. That's why we will work out flexible arrangements,
          including retainer-based options, to ensure that our working
          relationship aligns seamlessly with your life and my schedule.
          <br />
          <br />
          Whether you feel fits your soul the best: regular assistance or
          personalized sessions, occasional check-ins or tailored services, we
          will find a rhythm that works for you, providing the ongoing support
          you require.
        </Block>
        <Block>
          <BlockTitle> A Safe Haven of Confidentiality and Trust</BlockTitle>
          Confidentiality and trust are paramount in our journey together. I
          provide a safe haven where you can freely express your thoughts and
          emotions without fear of judgment. Your privacy is deeply respected,
          and I adhere to the highest standards of confidentiality to ensure
          that your personal information and sessions remain strictly
          confidential.
        </Block>
      </BlocksContainer>
    </AssistanceContainer>
  );
};

export default Assistance;
