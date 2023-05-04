import React, { useState } from "react";
import styled from "styled-components";

import Footer from "../../Footer/Footer";
import Header from "../../Header/Heder";
import Main from "../../Main/Main";
import Services from "../../Services/Services";
import Testimonials from "../../Testimonials/Testimonials";
import Story from "../../Story/Story";
import Start from "../../Start/Start";
import FAQ from "../../FAQ/FAQ";

const SMainPage = styled.div`
  overflow: hidden;
  user-select: none;
`;
function MainPage({ handleLanguageChange, lang }) {
  return (
    <SMainPage>
      <Header handleLanguageChange={handleLanguageChange} lang={lang} />
      <Main lang={lang} />
      <Services lang={lang} />
      <FAQ lang={lang} />
      <Story lang={lang} />
      <Testimonials lang={lang} />
      <Start lang={lang} />
      <Footer lang={lang} />
    </SMainPage>
  );
}

export default MainPage;
