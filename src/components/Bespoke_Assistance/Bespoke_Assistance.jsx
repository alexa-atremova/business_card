import React, { useEffect } from "react";
import styled from "styled-components";
import { theme } from "../../res/themes";

const Bespoke_AssistanceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 150px;
  margin-bottom: 100px;
  width: 100%;
  height: fit-content;
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
  margin-bottom: 20px;
  text-transform: uppercase;
  @media (max-width: 1359px) {
    font-size: 25px;
  }
  @media (max-width: 767px) {
    font-size: 20px;
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
    max-width: 530px;
  }
  @media (max-width: 539px) {
    max-width: 320px;
    font-size: 16px;

    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

const BlocksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
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

const Block = styled.div`
  width: 100%;
  height: fit-content;
  font-family: "Noto Serif";
  background-color: ${theme.colors.light_background};
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
  border-radius: 8px;

  color: ${theme.colors.text_color};
  padding: 16px;
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
  text-align: center;
  margin: 0;
  margin-bottom: 20px;

  color: ${theme.colors.text_color};
  @media (max-width: 1359px) {
  }
  @media (max-width: 539px) {
    font-size: 18px;
  }
`;

const BlockText = styled.p`
  font-size: 14px;
  line-height: 1.5;
  color: ${theme.colors.text_color};
  @media (max-width: 539px) {
    font-size: 14px;
    line-height: 20px;
    margin: 0;
  }
`;

const Bespoke_Assistance = ({ lang }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Bespoke_AssistanceContainer>
      <MainTitle> My Sincere Approach</MainTitle>

      <BlocksContainer>
        <Description>
          I don’t sell my services I share time of my life, my lifetime with
          people who are my clients. <br /> <br /> I strongly feel that being a
          CONFIDANT is my mission in life.This is actually what suits me most
          and the best and this is what I was doing all my life. <br />
          <br />
          And I would do it as a gift to someone just for the reason of being
          myself and sometimes I do so, when I see it is needed and appreciated.{" "}
          <br /> <br />
          Rates are just numbers and can be evaluated based on your unique
          experience. It's important to consider the value of my services and
          the impact they have on people’s lives. <br />
          <br />
          To put it into numbers and price it , it is always a very challenging
          task, but today’s reality demands such approach from me in order to
          recover myself and continue to provide best of my assistance to my
          clients to help them create life they want. <br />
          <br />
          And if they are happy having meaningful and fulfilling relationships
          with their close and loved ones and productive and enjoyable
          relationship with the reality, I feel that I honestly earn appropriate
          appreciation. <br /> <br />
          And deserve to have best in life as much as you do.
          <br /> <br />I will refuse to work with the ones who are in search of
          entertainment, or being not sure of the real need for my services and
          changes in their lives, because my time is limited and I prefer to
          spend it with my family and closed ones and the special to me people
          who trusted me to walk through difficult moments in their lives
          holding my hand. I like to be there for them.
        </Description>
      </BlocksContainer>
    </Bespoke_AssistanceContainer>
  );
};

export default Bespoke_Assistance;
