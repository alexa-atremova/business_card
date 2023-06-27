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
  margin-top: 50px;
  margin-bottom: 50px;
  width: 80%;
  height: 50px;
  max-width: 1200px;
  /* transform: scaleY(-1); */
  border-top: 1px solid ${theme.colors.highlighted};
  .curl {
    width: 100%;

    height: 50px;
    margin-top: 20px;
    margin-bottom: 20px;
    border-top: 1px solid ${theme.colors.highlighted};
    border-width: 1px;
    border-radius: 200px / 80px;
  }
`;
function MainPage({ handleLanguageChange, lang }) {
  const [scrolled, setScrolled] = useState(false);
  return (
    <SMainPage>
      <Header handleLanguageChange={handleLanguageChange} lang={lang} />
      <ContactsButton scrolled={scrolled} />
      <Main lang={lang} />
      {/* <Welcome /> */}
      <Border style={{ transform: "scaleY(-1)" }}>
        {/* <div className="curl"></div> */}
      </Border>
      <Story />
      <Border></Border>
      <Start />
      <FeedbackForm />
      <Disclaimer lang={lang} />
      <Footer lang={lang} />
    </SMainPage>
  );
}

export default MainPage;
