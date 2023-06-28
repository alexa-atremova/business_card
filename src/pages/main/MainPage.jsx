import React, { useState } from "react";
import styled from "styled-components";

import Footer from "./../../components/Footer/Footer";
import Header from "./../../components/Header/Heder";
import Main from "./../../components/Main/Main";
import Start from "./../../components/Start/Start";
import ContactsButton from "../../components/ContactsButton/ContactsButton";
import { theme } from "../../res/themes";
import Disclaimer from "../../components/Disclaimer/Disclaimer";
import Story from "../../components/Story/Story";
import FeedbackForm from "../../components/FeedbackForm/FeedbackForm";

const SMainPage = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  user-select: none;
  background-color: ${theme.colors.dark_background};
`;
const Border = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 50px;
  max-width: 1200px;
  width: 80%;
  height: 20px;
  /* 
  /* transform: scaleY(-1); */
  /* border-top: 1px solid ${theme.colors.highlighted};
  border-bottom: 1px solid ${theme.colors.highlighted};
  */
  .border {
    height: 5px;
    margin-top: 10px;
    width: 50%;
    border-top: 1px solid ${theme.colors.highlighted};
  }
  .line {
    width: 100%;
    margin-top: 10px;
    height: 5px;
    border-top: 2px solid ${theme.colors.highlighted};
  }
`;
function MainPage({ handleLanguageChange, lang }) {
  const [scrolled, setScrolled] = useState(false);
  return (
    <SMainPage>
      <Header handleLanguageChange={handleLanguageChange} lang={lang} />

      <Main lang={lang} />
      <Border>
        <div className="border" />
        <div className="line" />
        <div className="border" />
      </Border>
      <Story />
      <Border>
        <div className="border" />
        <div className="line" />
        <div className="border" />
      </Border>
      <Start />
      <FeedbackForm />
      <Disclaimer lang={lang} />
      <Footer lang={lang} />
    </SMainPage>
  );
}

export default MainPage;
