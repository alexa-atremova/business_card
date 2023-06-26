import React from "react";

import FeedbackForm from "./../../components/FeedbackForm/FeedbackForm";
import Header from "./../../components/Header/Heder";
import Footer from "./../../components/Footer/Footer";
import Start from "../../components/Start/Start";

export default function Contacts({ handleLanguageChange, lang }) {
  return (
    <>
      <Header handleLanguageChange={handleLanguageChange} lang={lang} />
      <Start lang={lang} handleLanguageChange={handleLanguageChange} />
      <FeedbackForm />
      <Footer />
    </>
  );
}
