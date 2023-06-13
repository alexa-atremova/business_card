import React from "react";
import GPT from "./../../components/GPT/GPT";
import Header from "./../../components/Header/Heder";
import Footer from "./../../components/Footer/Footer";
import ContactsButton from "../../components/ContactsButton/ContactsButton";

function OpeningHorizonsPage({ handleLanguageChange, lang }) {
  return (
    <>
      <Header handleLanguageChange={handleLanguageChange} lang={lang} />
      <ContactsButton />
      <GPT lang={lang} />
      <Footer />
    </>
  );
}

export default OpeningHorizonsPage;
