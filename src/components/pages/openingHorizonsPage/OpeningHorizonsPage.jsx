import React from "react";
import GPT from "../../GPT/GPT";
import Header from "../../Header/Heder";

function OpeningHorizonsPage({ handleLanguageChange, lang }) {
  return (
    <>
      <Header handleLanguageChange={handleLanguageChange} lang={lang} />
      <GPT lang={lang} />
    </>
  );
}

export default OpeningHorizonsPage;
