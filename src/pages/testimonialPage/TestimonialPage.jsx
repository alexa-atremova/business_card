import React from "react";
import Testimonials from "./../../components/Testimonials/Testimonials";
import Header from "./../../components/Header/Heder";
import Footer from "./../../components/Footer/Footer";

function TestimonialPage({ handleLanguageChange, lang }) {
  return (
    <>
      <Header handleLanguageChange={handleLanguageChange} lang={lang} />
      <Testimonials lang={lang} />
      <Footer />
    </>
  );
}

export default TestimonialPage;
