import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../Header/Heder";
import Footer from "../Footer/Footer";
import img1 from "../../assets/img_1.jpg";
import img2 from "../../assets/img_2.jpg";
import ContactsButton from "../ContactsButton/ContactsButton";
import { theme } from "../../res/themes";

const SCredentials = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: justify;
  width: 100%;
  height: fit-content;
  margin-top: 100px;
  margin-bottom: 100px;
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
  .wrap1 {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    img {
      border-radius: 10px;
      width: 100%;
    }
  }
  .wrap2,
  .wrap3 {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    img {
      margin-top: 30px;

      margin-left: 20px;
      max-width: 400px;
      border-radius: 10px;
    }
  }
  .wrap3 {
    img {
      width: 100%;
      max-width: 400px;
      float: left;
      margin-right: 20px;
    }
  }
  @media (max-width: 1359px) {
    .wrap2,
    .wrap3 {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      img {
        margin-top: 0px;

        margin-left: 0px;
        width: 100%;
      }
    }
    .wrap3 {
      img {
        float: left;
        margin-right: 20px;
      }
    }
  }
`;

const Title = styled.h2`
  font-family: "Poppins", sans-serif;

  font-size: 42px;
  font-weight: bold;
  text-align: center;
  border-bottom: 2px solid ${theme.colors.highlighted};
  color: ${theme.colors.text_color};

  text-transform: uppercase;
  @media (max-width: 1359px) {
    font-size: 34px;
  }
  @media (max-width: 767px) {
    font-size: 24px;
  }
`;

const Paragraph = styled.p`
  height: 100%;
  width: 100%;
  flex: 1;
  font-family: "Noto Serif";
  color: ${theme.colors.text_color};
  font-size: 26px;
  font-weight: 400;
  line-height: 1.7;
  margin-bottom: 20px;

  @media (max-width: 1359px) {
    font-size: 24px;
  }
  @media (max-width: 767px) {
    font-size: 22px;
  }
  @media (max-width: 539px) {
    font-size: 18px;
  }
  a {
    user-select: all;
    text-decoration: none;
    color: orange;
    margin-left: 10px;
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
      <SCredentials id="calling">
        <Wrapper>
          <Title>Credentials</Title>

          <Paragraph>
            In my area of expertise, I firmly believe that personal experience
            is the only way to truly acquire real skills and abilities. It comes
            at a high price, but there is simply no other way around it. I have
            paid for every ounce of knowledge and expertise I possess with the
            highest currency possible: my lifetime. Throughout my journey, I
            have accumulated not only knowledge and techniques but also scars in
            my soul and heart, as well as moments of joy. This is the price I
            have paid to excel in my field. I have poured my soul into
            everything I do because that's how you become truly exceptional in
            this line of work. Formal credentials and diplomas may have their
            place in certain professions, but in my realm, they pale in
            comparison to the lessons learned through lived experiences. My
            expertise is rooted in the depths of my personal journey and the
            profound impact I have had on the lives of my clients. Every
            interaction, every challenge, and every success has contributed to
            the wealth of knowledge and understanding I bring to each
            engagement. My commitment to continuous growth and learning ensures
            that I stay at the forefront of my field, providing the highest
            level of assistance to those who entrust me with their private,
            personal, family, and business matters. When you work with me, you
            are receiving the culmination of a lifetime's worth of investment
            and dedication. I have paid the price in order to offer you the
            support and guidance you deserve. Together, we will navigate the
            delicate matters at hand, drawing upon my extensive personal
            experience and unwavering commitment to your well-being. Please
            don't hesitate to reach out for a personalized consultation, where
            we can delve deeper into your specific needs and how my expertise
            can best serve you in achieving your desired outcomes.
          </Paragraph>
        </Wrapper>
        <Wrapper>
          <Title> TESTIMONIALS </Title>

          <Paragraph>
            I have always believed that my work speaks for itself. I do not need
            to prove anything to anyone by disclosing the specifics of my client
            engagements. My focus is on providing exceptional assistance and
            ensuring the well-being of those who entrust me with their private,
            personal, family, and business matters. Confidentiality is the
            golden rule that guides my work. It is the cornerstone of everything
            I do, ensuring that my clients' stories remain protected and
            undisclosed. Your confidentiality is my top priority, and I hold it
            with the utmost respect. In my line of work, personal experiences
            are the true measure of one's abilities and expertise. I rely on the
            knowledge gained from my own journey and the transformative
            experiences I have had. This is what allows me to offer unique and
            valuable assistance to my clients. I hold my clients' trust as my
            most prized possession, and I would never jeopardize it by revealing
            any details about our work together. As a man in the shade, I
            operate discreetly, ensuring that the privacy and confidentiality of
            my clients are upheld. While some may choose to share their
            experiences with others as a way of expressing appreciation, it is
            not a requirement for me. The true and honest opinions shared
            one-on-one hold the greatest value in my heart. Your confidentiality
            and satisfaction are my priorities, and I am committed to providing
            exceptional support and guidance in the most discreet and
            personalized manner possible.
          </Paragraph>
        </Wrapper>
      </SCredentials>
      <Footer />
    </>
  );
}

export default Credentials;
