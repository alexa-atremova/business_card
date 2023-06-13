import React from "react";
import Testimonials from "./../../components/Testimonials/Testimonials";
import Header from "./../../components/Header/Heder";
import Footer from "./../../components/Footer/Footer";
import ContactsButton from "../../components/ContactsButton/ContactsButton";

function TestimonialPage({ handleLanguageChange, lang }) {
  return (
    <>
      <Header handleLanguageChange={handleLanguageChange} lang={lang} />
      <ContactsButton />
      <Testimonials lang={lang} />
      <Footer />
    </>
  );
}

export default TestimonialPage;
