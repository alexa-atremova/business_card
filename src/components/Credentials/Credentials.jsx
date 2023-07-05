import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../Header/Heder";
import Footer from "../Footer/Footer";
import cred from "../../assets/cred.jpg";
import img2 from "../../assets/img_2.jpg";
import ContactsButton from "../ContactsButton/ContactsButton";
import { theme } from "../../res/themes";
import Lines from "../Lines/Lines";

const SCredentials = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: justify;
  width: 100%;
  height: fit-content;
  margin-top: 200px;
  max-width: 1200px;
  @media (max-width: 1359px) {
    max-width: 700px;
  }
  @media (max-width: 767px) {
    max-width: 510px;
  }
  @media (max-width: 539px) {
    flex-direction: column;
    max-width: 320px;
  }
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  @media (max-width: 1359px) {
    max-width: 700px;
  }
  @media (max-width: 767px) {
    max-width: 510px;
  }
  @media (max-width: 539px) {
    flex-direction: column;
    max-width: 320px;
  }

  .wrap2 {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    img {
      max-width: 300px;
      border-radius: 10px;
      padding: 30px;
    }
    @media (max-width: 1359px) {
      max-width: 700px;
    }
    @media (max-width: 767px) {
      max-width: 510px;
    }
    @media (max-width: 539px) {
      flex-direction: column;
      max-width: 320px;
    }
  }

  @media (max-width: 1359px) {
    .wrap2 {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      img {
      }
    }
  }
  @media (max-width: 767px) {
    .wrap2 {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      img {
        padding: 20px;
        max-width: 300px;
      }
    }
  }
`;

const Title = styled.h2`
  font-family: "Poppins", sans-serif;

  font-size: 32px;
  font-weight: bold;
  text-align: center;

  color: ${theme.colors.text_color};

  text-transform: uppercase;
  @media (max-width: 1359px) {
    font-size: 25px;
  }
  @media (max-width: 767px) {
    font-size: 20px;
  }
`;

const Paragraph = styled.p`
  height: 100%;
  width: 100%;
  flex: 1;
  font-family: "Noto Serif";
  color: ${theme.colors.text_color};
  font-size: 20px;
  font-weight: 400;
  line-height: 35px;
  margin-bottom: 20px;
  margin: 0;

  @media (max-width: 1359px) {
    font-size: 20px;
    line-height: 35px;
    max-width: 700px;
  }
  @media (max-width: 767px) {
    font-size: 16px;
    line-height: 30px;
    max-width: 500px;
  }
  @media (max-width: 539px) {
    margin-top: 15px;
    line-height: 30px;

    max-width: 320px;
  }
`;
const P = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: "Noto Serif";
  font-style: italic;
  height: 100%;
  width: 100%;
  flex: 1;
  color: ${theme.colors.text_color};
  font-size: 20px;
  font-weight: 400;
  line-height: 1.7;
  margin-bottom: 20px;
  @media (max-width: 1359px) {
    font-size: 20px;
  }
  @media (max-width: 767px) {
    font-size: 18px;
  }
  @media (max-width: 539px) {
    font-size: 16px;
  }
`;
function Credentials({ handleLanguageChange, lang }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header handleLanguageChange={handleLanguageChange} lang={lang} />
      <ContactsButton />

      <SCredentials>
        <Wrapper>
          <Lines />
          <Title>Credentials</Title>
          <Paragraph>
            {" "}
            In my area of expertise, I firmly believe that personal experience
            is the only way to truly acquire real skills and abilities. It comes
            at a high price, but there is simply no other way around it.
          </Paragraph>
          <div className="wrap2">
            <img src={cred} alt="" />
            <Paragraph>
              I have paid for every ounce of knowledge and expertise I possess
              with the highest currency possible: my lifetime. Throughout my
              journey, I have accumulated not only knowledge and techniques but
              also scars in my soul and heart, as well as moments of joy. <br />
              <br /> This is the price I have paid to excel in my field. I have
              poured my soul into everything I do because that's how you become
              truly exceptional in this line of work. Formal credentials and
              diplomas may have their place in certain professions, but in my
              realm, they pale in comparison to the lessons learned through
              lived experiences.
            </Paragraph>
          </div>
          <Paragraph>
            My expertise is rooted in the depths of my personal journey and the
            profound impact I have had on the lives of my clients. Every
            interaction, every challenge, and every success has contributed to
            the wealth of knowledge and understanding I bring to each
            engagement.
            <br />
            <br /> My commitment to continuous growth and learning ensures that
            I stay at the forefront of my field, providing the highest level of
            assistance to those who entrust me with their private, personal,
            family, and business matters. When you work with me, you are
            receiving the culmination of a lifetime's worth of investment and
            dedication. <br />
            <br />I have paid the price in order to offer you the support and
            guidance you deserve. Together, we will navigate the delicate
            matters at hand, drawing upon my extensive personal experience and
            unwavering commitment to your well-being. Please don't hesitate to
            reach out for a personalized consultation, where we can delve deeper
            into your specific needs and how my expertise can best serve you in
            achieving your desired outcomes.
          </Paragraph>
        </Wrapper>
      </SCredentials>
    </>
  );
}

export default Credentials;
