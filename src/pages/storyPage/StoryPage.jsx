import React from "react";
import Story from "../../components/Story/Story";
import Header from "../../components/Header/Heder";
import Footer from "../../components/Footer/Footer";
import ContactsButton from "../../components/ContactsButton/ContactsButton";
import Phrase from "../../components/Phrase/Phrase";

function StoryPage({ handleLanguageChange, lang }) {
  return (
    <>
      <Header handleLanguageChange={handleLanguageChange} lang={lang} />
      <ContactsButton />
      <Story lang={lang} />

      <Footer />
    </>
  );
}

export default StoryPage;
