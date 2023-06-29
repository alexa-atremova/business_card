import React from "react";
import Header from "../../components/Header/Heder";
import Footer from "../../components/Footer/Footer";
import ContactsButton from "../../components/ContactsButton/ContactsButton";
import Pricing from "../../components/Pricing/Pricing";
import Lines from "../../components/Lines/Lines";
import { SPage } from "../main/MainPage";
import Links from "../../components/Links/Links";

function PricingPage({ handleLanguageChange, lang }) {
  return (
    <SPage>
      <Header handleLanguageChange={handleLanguageChange} lang={lang} />
      <ContactsButton />
      <Pricing lang={lang} />
      <Lines />
      <Links />
      <Footer />
    </SPage>
  );
}

export default PricingPage;
