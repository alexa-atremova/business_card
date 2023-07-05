import React from "react";

import FeedbackForm from "../../components/FeedbackForm/FeedbackForm";
import Header from "../../components/Header/Heder";
import Footer from "../../components/Footer/Footer";
import Start, { Title } from "../../components/Start/Start";
import Lines from "../../components/Lines/Lines";
import Links from "../../components/Links/Links";
import { SPage } from "../main/MainPage";
import img from "../../assets/contact_img.jpg";

export default function Contacts({ handleLanguageChange, lang }) {
  return (
    <SPage>
      <Header handleLanguageChange={handleLanguageChange} lang={lang} />
      <div className="h">
        <Lines />
      </div>
      <Title>Contact Me</Title>
      <img className="contact_img" src={img} alt="" />
      <FeedbackForm />
      <Lines />
      <Links />
      <Footer />
    </SPage>
  );
}
