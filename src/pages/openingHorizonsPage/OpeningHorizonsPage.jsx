import React from "react";
import GPT from "./../../components/GPT/GPT";
import Header from "./../../components/Header/Heder";
import Footer from "./../../components/Footer/Footer";

function OpeningHorizonsPage({ handleLanguageChange, lang }) {
  return (
    <>
      <Header handleLanguageChange={handleLanguageChange} lang={lang} />
      <GPT lang={lang} />
      <Footer />
    </>
  );
}

export default OpeningHorizonsPage;
