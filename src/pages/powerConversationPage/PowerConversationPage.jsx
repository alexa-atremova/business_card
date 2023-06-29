import React from "react";
import Header from "../../components/Header/Heder";
import Footer from "../../components/Footer/Footer";
import ContactsButton from "../../components/ContactsButton/ContactsButton";
import Welcome from "../../components/Welcome/Welcome";
import { SPage } from "../main/MainPage";
import Lines from "../../components/Lines/Lines";
import Links from "../../components/Links/Links";

function PowerConversationPage({ handleLanguageChange, lang }) {
  return (
    <SPage>
      <Header handleLanguageChange={handleLanguageChange} lang={lang} />
      <ContactsButton />
      <Welcome lang={lang} />
      <Lines />
      <Links />
      <Footer />
    </SPage>
  );
}

export default PowerConversationPage;
