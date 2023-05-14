import React from "react";

import FeedbackForm from "./../../components/FeedbackForm/FeedbackForm";
import Header from "./../../components/Header/Heder";
import Footer from "./../../components/Footer/Footer";

export default function Contacts({ handleLanguageChange, lang }) {
  return (
    <>
      <Header handleLanguageChange={handleLanguageChange} lang={lang} />
      <FeedbackForm />
      <Footer />
    </>
  );
}
