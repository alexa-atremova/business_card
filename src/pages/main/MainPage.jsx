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
  overflow: hidden;
  user-select: none;
  background-color: ${theme.colors.dark_background};
`;
function MainPage({ handleLanguageChange, lang }) {
  const [scrolled, setScrolled] = useState(false);
  return (
    <SMainPage>
      <Header handleLanguageChange={handleLanguageChange} lang={lang} />
      <ContactsButton scrolled={scrolled} />
      <Main lang={lang} />
      {/* <Welcome /> */}
      <Story />
      <Start />
      <FeedbackForm />
      <Disclaimer lang={lang} />
      <Footer lang={lang} />
    </SMainPage>
  );
}

export default MainPage;
