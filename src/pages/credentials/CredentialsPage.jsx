import React from "react";
import Header from "../../components/Header/Heder";
import Footer from "../../components/Footer/Footer";
import ContactsButton from "../../components/ContactsButton/ContactsButton";
import Credentials from "../../components/Credentials/Credentials";

function CredentialsPage({ handleLanguageChange, lang }) {
  return (
    <>
      <Header handleLanguageChange={handleLanguageChange} lang={lang} />
      <ContactsButton />
      <Credentials lang={lang} />
      <Footer />
    </>
  );
}

export default CredentialsPage;
