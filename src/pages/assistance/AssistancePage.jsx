import React from "react";
import Header from "../../components/Header/Heder";
import Footer from "../../components/Footer/Footer";
import ContactsButton from "../../components/ContactsButton/ContactsButton";
import Assistance from "../../components/Assistance/Assistance";
import Lines from "../../components/Lines/Lines";
import Links from "../../components/Links/Links";
import { SPage } from "../main/MainPage";

function AssistancePage({ handleLanguageChange, lang }) {
  return (
    <SPage>
      <Header handleLanguageChange={handleLanguageChange} lang={lang} />
      <ContactsButton />
      <Assistance lang={lang} />
      <Lines />
      <Links />
      <Footer />
    </SPage>
  );
}

export default AssistancePage;
