import React from "react";
import Story from "../../Story/Story";
import Header from "../../Header/Heder";

function StoryPage({ handleLanguageChange, lang }) {
  return (
    <>
      <Header handleLanguageChange={handleLanguageChange} lang={lang} />
      <Story lang={lang} />
    </>
  );
}

export default StoryPage;
