import React from "react";
import Header from "../../components/Header/Heder";
import Footer from "../../components/Footer/Footer";
import ContactsButton from "../../components/ContactsButton/ContactsButton";
import Credentials from "../../components/Credentials/Credentials";
import Testimonials from "../../components/Testimonials/Testimonials";

function TestimonialsPage({ handleLanguageChange, lang }) {
  return (
    <>
      <Header handleLanguageChange={handleLanguageChange} lang={lang} />
      <ContactsButton />
      <Testimonials lang={lang} />
      <Footer />
    </>
  );
}

export default TestimonialsPage;
