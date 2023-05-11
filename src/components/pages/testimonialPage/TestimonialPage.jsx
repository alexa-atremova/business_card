import React from "react";
import Testimonials from "../../Testimonials/Testimonials";
import Header from "../../Header/Heder";

function TestimonialPage({ handleLanguageChange, lang }) {
  return (
    <>
      <Header handleLanguageChange={handleLanguageChange} lang={lang} />
      <Testimonials lang={lang} />
    </>
  );
}

export default TestimonialPage;
