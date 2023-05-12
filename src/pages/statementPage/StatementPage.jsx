import React from "react";
import Statement from "./../../components/Statement/Statement";
import Header from "./../../components/Header/Heder";
import Footer from "./../../components/Footer/Footer";

function StatementPage({ handleLanguageChange, lang }) {
  return (
    <>
      <Header handleLanguageChange={handleLanguageChange} lang={lang} />
      <Statement lang={lang} />
      <Footer />
    </>
  );
}

export default StatementPage;
