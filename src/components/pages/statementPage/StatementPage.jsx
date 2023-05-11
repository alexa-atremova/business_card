import React from "react";
import Statement from "../../Statement/Statement";
import Header from "../../Header/Heder";

function StatementPage({ handleLanguageChange, lang }) {
  return (
    <>
      <Header handleLanguageChange={handleLanguageChange} lang={lang} />
      <Statement lang={lang} />
    </>
  );
}

export default StatementPage;
