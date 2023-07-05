import React from "react";
import Header from "../../components/Header/Heder";
import Footer from "../../components/Footer/Footer";
import ContactsButton from "../../components/ContactsButton/ContactsButton";
import Credentials from "../../components/Credentials/Credentials";
import Testimonials from "../../components/Testimonials/Testimonials";
import Lines from "../../components/Lines/Lines";
import Links from "../../components/Links/Links";
import { SPage } from "../main/MainPage";
import Phrase from "../../components/Phrase/Phrase";

function TestimonialsPage({ handleLanguageChange, lang }) {
  return (
    <SPage>
      <Header handleLanguageChange={handleLanguageChange} lang={lang} />
      <ContactsButton />

      <Testimonials lang={lang} />
      <Lines />
      <Links />
      <Phrase />
      <Footer />
    </SPage>
  );
}

export default TestimonialsPage;
