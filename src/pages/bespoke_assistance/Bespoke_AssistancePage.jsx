import React from "react";
import Header from "../../components/Header/Heder";
import Footer from "../../components/Footer/Footer";
import ContactsButton from "../../components/ContactsButton/ContactsButton";
import Bespoke_Assistance from "../../components/Bespoke_Assistance/Bespoke_Assistance";
import { SPage } from "../main/MainPage";
import Lines from "../../components/Lines/Lines";
import Links from "../../components/Links/Links";
import Phrase from "../../components/Phrase/Phrase";

function Bespoke_AssistancePage({ handleLanguageChange, lang }) {
  return (
    <SPage>
      <Header handleLanguageChange={handleLanguageChange} lang={lang} />
      <ContactsButton />
      <Bespoke_Assistance lang={lang} />
      <Lines />
      <Links />
      <Phrase />
      <Footer />
    </SPage>
  );
}

export default Bespoke_AssistancePage;
