import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../Header/Heder";
import test from "../../assets/test.jpg";
import img2 from "../../assets/img_2.jpg";
import ContactsButton from "../ContactsButton/ContactsButton";
import { theme } from "../../res/themes";
import { SPage } from "../../pages/main/MainPage";
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
  margin-bottom: 100px;
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
  .wrap2 {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    img {
      padding: 30px;
      max-width: 300px;
      border-radius: 20px;
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
function Testimonials({ handleLanguageChange, lang }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <SPage>
      <Header handleLanguageChange={handleLanguageChange} lang={lang} />
      <ContactsButton />
      <SCredentials>
        <Wrapper>
          <Lines />
          <Title> TESTIMONIALS </Title>
          <div className="wrap2">
            <img src={test} alt="" />
            <Paragraph>
              I have always believed that my work speaks for itself. I do not
              need to prove anything to anyone by disclosing the specifics of my
              client engagements.
              <br />
              <br /> My focus is on providing exceptional assistance and
              ensuring the well-being of those who entrust me with their
              private, personal, family, and business matters. Confidentiality
              is the golden rule that guides my work.
            </Paragraph>
          </div>
          <Paragraph>
            It is the cornerstone of everything I do, ensuring that my clients'
            stories remain protected and undisclosed. Your confidentiality is my
            top priority, and I hold it with the utmost respect.
            <br />
            <br /> In my line of work, personal experiences are the true measure
            of one's abilities and expertise. I rely on the knowledge gained
            from my own journey and the transformative experiences I have had.
            This is what allows me to offer unique and valuable assistance to my
            clients. I hold my clients' trust as my most prized possession, and
            I would never jeopardize it by revealing any details about our work
            together.
            <br />
            <br /> As a man in the shade, I operate discreetly, ensuring that
            the privacy and confidentiality of my clients are upheld. While some
            may choose to share their experiences with others as a way of
            expressing appreciation, it is not a requirement for me.
            <br />
            <br /> The true and honest opinions shared one-on-one hold the
            greatest value in my heart. Your confidentiality and satisfaction
            are my priorities, and I am committed to providing exceptional
            support and guidance in the most discreet and personalized manner
            possible.
          </Paragraph>
        </Wrapper>
      </SCredentials>
    </SPage>
  );
}

export default Testimonials;
