import React from "react";
import Statement from "./../../components/Statement/Statement";
import Header from "./../../components/Header/Heder";
import Footer from "./../../components/Footer/Footer";
import ContactsButton from "../../components/ContactsButton/ContactsButton";

function StatementPage({ handleLanguageChange, lang }) {
  return (
    <>
      <Header handleLanguageChange={handleLanguageChange} lang={lang} />
      <ContactsButton />
      <Statement lang={lang} />
      <Footer />
    </>
  );
}

export default StatementPage;
