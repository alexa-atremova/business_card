import React from "react";
import Header from "../../components/Header/Heder";
import Footer from "../../components/Footer/Footer";
import ContactsButton from "../../components/ContactsButton/ContactsButton";
import Assistance from "../../components/Assistance/Assistance";

function AssistancePage({ handleLanguageChange, lang }) {
  return (
    <>
      <Header handleLanguageChange={handleLanguageChange} lang={lang} />
      <ContactsButton />
      <Assistance lang={lang} />
      <Footer />
    </>
  );
}

export default AssistancePage;
