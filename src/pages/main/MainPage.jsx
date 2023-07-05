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
import Lines from "../../components/Lines/Lines";
import Links from "../../components/Links/Links";

export const SPage = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  user-select: none;
  background-color: ${theme.colors.dark_background};
  width: 100%;
  .h {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 200px;
    width: 100%;
  }
  .contact_img {
    margin-top: 20px;
    margin-bottom: 50px;
    width: 100%;
    max-width: 300px;
    @media (max-width: 767px) {
      max-width: 250px;
    }
  }
`;

function MainPage({ handleLanguageChange, lang }) {
  return (
    <SPage>
      <Header handleLanguageChange={handleLanguageChange} lang={lang} />

      <Main lang={lang} />
      <Lines />
      <Story />
      <Lines />
      <Links />
      <Start />

      <Disclaimer lang={lang} />
      <Footer lang={lang} />
    </SPage>
  );
}

export default MainPage;
