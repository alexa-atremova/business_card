import React, { useState } from "react";
import styled from "styled-components";

import Footer from "./../../components/Footer/Footer";
import Header from "./../../components/Header/Heder";
import Main from "./../../components/Main/Main";
import Services from "./../../components/Services/Services";
import Start from "./../../components/Start/Start";
import FAQ from "./../../components/FAQ/FAQ";
import Ask from "./../../components/Ask/Ask";
import ContactsButton from "../../components/ContactsButton/ContactsButton";

const SMainPage = styled.div`
  overflow: hidden;
  user-select: none;
`;
function MainPage({ handleLanguageChange, lang }) {
  const [scrolled, setScrolled] = useState(false);
  return (
    <SMainPage>
      <Header handleLanguageChange={handleLanguageChange} lang={lang} />
      <ContactsButton scrolled={scrolled} />
      <Main lang={lang} />
      <Ask lang={lang} />
      <Services lang={lang} />
      <FAQ lang={lang} />
      <Start lang={lang} />
      <Footer lang={lang} />
    </SMainPage>
  );
}

export default MainPage;
