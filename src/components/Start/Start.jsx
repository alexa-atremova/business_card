import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import { theme } from "../../res/themes";
import Links from "../Links/Links";
import { useLocation } from "react-router";
import { Element } from "react-scroll";

const StartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 0px;
  width: 100%;

  height: fit-content;
  @media (max-width: 1359px) {
  }
  @media (max-width: 539px) {
    height: fit-content;
  }
  .bttn {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 40px;

    h1 {
      text-align: center;
      font-family: "Poppins", sans-serif;
      color: ${theme.colors.text_color};
      font-weight: 300;
      font-size: 16px;
      line-height: 1.7;
    }
    @media (max-width: 539px) {
      margin-top: 20px;
      margin-bottom: 20px;
      h1 {
        max-width: 320px;
        font-size: 14px;
        line-height: 1.7;
      }
    }
  }
`;

const Title = styled.h2`
  font-family: "Poppins", sans-serif;
  font-size: 32px;
  font-weight: 500;
  border-bottom: 1px solid ${theme.colors.highlighted};
  color: ${theme.colors.text_color};
  margin: 0;
  text-transform: uppercase;
  @media (max-width: 1359px) {
    font-size: 30px;
  }
  @media (max-width: 767px) {
    font-size: 26px;
  }
`;

const BlocksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  max-width: 900px;
  margin-top: 10px;
  gap: 20px;

  @media (max-width: 767px) {
    max-width: 530px;
  }
  @media (max-width: 539px) {
    margin-top: 20px;
    max-width: 320px;
  }
`;

const Block1 = styled.div`
  width: 100%;
  max-width: 1200px;
  height: fit-content;

  font-family: "Noto Serif", Times, serif;
  /* background-color: ${theme.colors.light_background}; */
  /* border: 1px solid ${theme.colors.highlighted}; */

  border-radius: 8px;
  margin-right: 16px;
  @media (max-width: 1359px) {
    max-width: 700px;
  }
  @media (max-width: 767px) {
    max-width: 500px;
  }
  @media (max-width: 539px) {
    width: 320px;
  }
`;
const BlockText = styled.p`
  font-size: 25px;
  line-height: 1.5;
  color: ${theme.colors.text_color};
  text-align: justify;
  a {
    font-weight: 600;
    color: ${theme.colors.highlighted};
  }
  @media (max-width: 539px) {
    font-size: 18px;
    line-height: 30px;
  }
`;
export const DisclaimerButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 250px;
  height: 50px;
  font-family: "Poppins", sans-serif;
  font-size: 24px;
  background-color: ${theme.colors.light_background};
  color: ${theme.colors.highlighted};
  border-radius: 8px;
  /* box-shadow: 0px 2px 9px ${theme.colors.highlighted}; */
  border: 1px solid ${theme.colors.highlighted};
`;

const Start = ({ lang }) => {
  const location = useLocation();
  const contactsRef = useRef(null);

  useEffect(() => {
    if (location.hash === "#contacts" && contactsRef.current) {
      contactsRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
        offset: 100,
      });
    }
  }, [location]);

  return (
    <StartContainer id="contact" ref={contactsRef}>
      <Links />

      <Title>{lang === "ru" ? "КАК НАЧАТЬ" : "HOW TO START"}</Title>

      <BlocksContainer>
        <Block1>
          <BlockText>
            I offer initial consultation to ensure that we are a good match.
            During this consultation, we will discuss your needs and goals.
          </BlockText>
        </Block1>
      </BlocksContainer>
    </StartContainer>
  );
};

export default Start;
