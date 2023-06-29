import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../../components/Header/Heder";
import Footer from "../../components/Footer/Footer";
import ContactsButton from "../../components/ContactsButton/ContactsButton";
import { theme } from "../../res/themes";
import thank from "../../assets/thank.jpg";
import Lines from "../../components/Lines/Lines";
import Links from "../../components/Links/Links";
import { SPage } from "../main/MainPage";

const SThank = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: justify;
  width: 100%;
  height: fit-content;
  margin-top: 150px;
  margin-bottom: 100px;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  margin-top: 50px;
  @media (max-width: 1359px) {
    max-width: 700px;
  }
  @media (max-width: 767px) {
    max-width: 510px;
  }
  @media (max-width: 539px) {
    flex-direction: column;
    max-width: 320px;
  }
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 50px;
  font-size: 42px;
  font-weight: bold;
  border-bottom: 2px solid ${theme.colors.highlighted};

  color: ${theme.colors.text_color};
  text-transform: uppercase;
  @media (max-width: 1359px) {
    font-size: 34px;
  }
  @media (max-width: 767px) {
    font-size: 26px;
  }
`;
const ImageWrap = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  max-width: 700px;
  @media (max-width: 1359px) {
    max-width: 500px;
    font-size: 34px;
  }
  @media (max-width: 767px) {
    max-width: 320px;
    font-size: 26px;
  }
`;

const Image = styled.img`
  width: 100%;
  border-radius: 10px;

  @media (max-width: 1359px) {
    font-size: 34px;
  }
  @media (max-width: 767px) {
    font-size: 26px;
  }
`;

const Paragraph = styled.p`
  height: 100%;
  width: 100%;
  font-family: "Noto Serif";
  font-style: italic;
  color: ${theme.colors.text_color};
  font-size: 35px;
  font-weight: 400;
  line-height: 1.7;
  margin-bottom: 20px;
  @media (max-width: 1359px) {
    font-size: 24px;
  }
  @media (max-width: 767px) {
    font-size: 22px;
  }
  @media (max-width: 539px) {
    font-size: 18px;
  }
  a {
    user-select: all;
    text-decoration: none;
    color: ${theme.colors.highlighted};
    margin-left: 10px;
  }
`;
const Paragraph1 = styled.p`
  width: 100%;
  font-family: "Noto Serif";
  color: ${theme.colors.text_color};
  font-size: 26px;
  font-weight: 400;
  line-height: 1.7;
  margin-bottom: 20px;
  @media (max-width: 1359px) {
    font-size: 24px;
  }
  @media (max-width: 767px) {
    font-size: 22px;
  }
  @media (max-width: 539px) {
    font-size: 18px;
  }
  a {
    user-select: all;
    text-decoration: none;
    color: ${theme.colors.highlighted};
    margin-left: 10px;
  }
`;
function Thank({ handleLanguageChange, lang }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <SPage>
      <Header handleLanguageChange={handleLanguageChange} lang={lang} />
      <ContactsButton />
      <SThank id="privacy">
        <Wrapper>
          <Title>Gratitude</Title>
          <ImageWrap>
            <Image src={thank} alt="" />
          </ImageWrap>
          <Paragraph>
            "When eating fruit remember the one who planted the tree…"
          </Paragraph>
          <Paragraph1>
            "My work is a testament to the enduring influence of my father's
            extraordinary talents and visionary legacy, the unwavering love and
            lessons of empathy and understanding of my grandmother, and the
            profound character, wisdom, and loyalty imparted by my mother, who
            continues to bless my journey with her presence. <br />
            <br /> I extend special thanks to my beloved wife, whose presence
            fills my life with love and purpose, inspiring me with her timeless
            knowledge, wisdom, and unwavering support. It is through her that I
            am blessed with the opportunity to be a devoted husband and father.
            I am eternally grateful to my daughter, as she serves as a source of
            light and warmth, providing the strength and motivation needed to
            persevere through life's challenges. She is my deepest love and a
            source of immense pride."
          </Paragraph1>
        </Wrapper>
      </SThank>
      <Lines />
      <Links />
      <Footer />
    </SPage>
  );
}

export default Thank;
