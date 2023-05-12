import React from "react";
import Story from "./../../components/Story/Story";
import Header from "./../../components/Header/Heder";
import Footer from "./../../components/Footer/Footer";

function StoryPage({ handleLanguageChange, lang }) {
  return (
    <>
      <Header handleLanguageChange={handleLanguageChange} lang={lang} />
      <Story lang={lang} />
      <Footer />
    </>
  );
}

export default StoryPage;
