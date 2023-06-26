import React from "react";
import Header from "../../components/Header/Heder";
import Footer from "../../components/Footer/Footer";
import ContactsButton from "../../components/ContactsButton/ContactsButton";
import Bespoke_Assistance from "../../components/Bespoke_Assistance/Bespoke_Assistance";

function Bespoke_AssistancePage({ handleLanguageChange, lang }) {
  return (
    <>
      <Header handleLanguageChange={handleLanguageChange} lang={lang} />
      <ContactsButton />
      <Bespoke_Assistance lang={lang} />
      <Footer />
    </>
  );
}

export default Bespoke_AssistancePage;
