import React, { useState } from "react";
import styled from "styled-components";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Heder";
import Main from "./components/Main/Main";
import Services from "./components/Services/Services";
import Testimonials from "./components/Testimonials/Testimonials";
import Story from "./components/Story/Story";
import Start from "./components/Start/Start";

const SApp = styled.div`
  overflow: hidden;
  user-select: none;
`;
function App() {
  const [lang, setLang] = useState("en");

  function handleLanguageChange(lang) {
    setLang(lang);
  }
  return (
    <SApp>
      <Header onLanguageChange={handleLanguageChange} lang={lang} />
      <Main lang={lang} />
      <Services lang={lang} />
      <FAQ lang={lang} />
      <Story />
      <Testimonials lang={lang} />
      <Start lang={lang} />
      <Footer lang={lang} />
    </SApp>
  );
}

export default App;
