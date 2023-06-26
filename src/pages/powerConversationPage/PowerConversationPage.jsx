import React from "react";
import Header from "../../components/Header/Heder";
import Footer from "../../components/Footer/Footer";
import ContactsButton from "../../components/ContactsButton/ContactsButton";
import Welcome from "../../components/Welcome/Welcome";

function PowerConversationPage({ handleLanguageChange, lang }) {
  return (
    <>
      <Header handleLanguageChange={handleLanguageChange} lang={lang} />
      <ContactsButton />
      <Welcome lang={lang} />
      <Footer />
    </>
  );
}

export default PowerConversationPage;
