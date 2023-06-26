import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./../../components/Header/Heder";
import Footer from "./../../components/Footer/Footer";
import ContactsButton from "../../components/ContactsButton/ContactsButton";
import { theme } from "../../res/themes";

const SPrivacyPolicy = styled.div`
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
`;

const Title2 = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: ${theme.colors.text_color};
  text-align: start;
  margin: 0;
  @media (max-width: 1359px) {
    font-size: 26px;
  }
  @media (max-width: 767px) {
    font-size: 18px;
    line-height: 30px;
  }
`;

const Title = styled.h2`
  font-family: "Poppins", sans-serif;
  margin-bottom: 50px;
  font-size: 42px;
  font-weight: bold;
  border-bottom: 2px solid ${theme.colors.highlighted};

  color: ${theme.colors.text_color};
  text-transform: uppercase;
  @media (max-width: 1359px) {
    font-size: 34px;
  }
  @media (max-width: 767px) {
    margin: 0;
    margin-top: 40px;
    font-size: 26px;
  }
`;

const Paragraph = styled.p`
  height: 100%;
  width: 100%;
  color: ${theme.colors.text_color};
  font-size: 26px;
  font-weight: 400;
  line-height: 1.7;
  margin-bottom: 20px;
  .w {
    display: inline-block;
    p {
      margin-left: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      .circle {
        margin-left: 5px;
        margin-bottom: 15px;
        display: inline-block;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: transparent;
        border: 1px solid white;
        color: white;
        text-align: center;

        font-weight: 500;
        line-height: 12px;
        font-size: 10px;
      }

      .circle::before {
        content: "G";
      }
    }
  }
  @media (max-width: 1359px) {
    font-size: 24px;
  }
  @media (max-width: 767px) {
    font-size: 22px;
  }
  @media (max-width: 539px) {
    font-size: 16px;
    line-height: 30px;
  }
  a {
    user-select: all;
    text-decoration: none;
    color: ${theme.colors.highlighted};
  }
`;
function PrivacyPolicy({ handleLanguageChange, lang }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header handleLanguageChange={handleLanguageChange} lang={lang} />
      <ContactsButton />
      <SPrivacyPolicy id="privacy">
        <Wrapper>
          <Title>Privacy Policy</Title>
          <Paragraph>
            At Confidant Service, we highly value and prioritize the privacy and
            confidentiality of our clients. This Privacy Policy outlines how we
            collect, use, and protect the personal information you provide when
            using our website and engaging with our services. We have
            implemented strict security protocols to safeguard your information
            and ensure your peace of mind.
          </Paragraph>
          <Paragraph>
            <Title2> 1. Collection of Personal Information</Title2>
            We may collect personal information when you interact with our
            website or contact us through our "Contact Me" form. The types of
            personal information we may collect include but are not limited to:
            <br />
            <br />
            • Name: We may collect your name to address you properly and
            personalize our communication.
            <br />
            <br /> • Contact Information: We may collect your email address
            and/or phone number to respond to your inquiries and provide you
            with the necessary assistance. <br />
            <br />• Additional Information: If you choose to provide it, we may
            collect additional information related to your specific needs and
            preferences, enabling us to tailor our services to your
            requirements.
          </Paragraph>
          <Paragraph>
            <Title2> 2. Use of Personal Information</Title2>
            We use the personal information you provide solely for the purpose
            of delivering our services and ensuring the best possible
            experience. The information collected may be used for the following
            purposes:
            <br />
            <br /> • Communication: We may use your contact information to
            respond to your inquiries, provide information about our services,
            and maintain ongoing communication regarding your personalized
            assistance.
            <br />
            <br /> • Personalization: The information you provide allows us to
            personalize our services to meet your unique needs and aspirations.
            By understanding your story, dreams, and challenges, we can tailor
            our approach to resonate with your deepest desires. <br />
            <br />• Internal Record Keeping: We may use the information
            collected for internal administrative purposes, including
            maintaining accurate records of our interactions with clients.
          </Paragraph>
          <Paragraph>
            <Title2> 3. Confidentiality and Data Security</Title2>
            Confidentiality and trust are of utmost importance to us. We
            maintain strict confidentiality standards and take extensive
            measures to ensure the security of your personal information. We
            have implemented technical and organizational safeguards to protect
            against unauthorized access, loss, or misuse of your data. Your
            personal information will only be accessible to authorized personnel
            who require it for the provision of our services.
          </Paragraph>
          <Paragraph>
            <Title2> 4. Third-Party Disclosure</Title2>
            We do not sell, trade, or transfer your personal information to
            outside parties. Your information remains strictly confidential and
            is solely used for the purposes stated in this Privacy Policy. We
            may disclose your personal information only if required by law or to
            protect our rights, safety, or property.
          </Paragraph>
          <Paragraph>
            <Title2> 5. Consent and Opt-out</Title2>
            By using our website and providing your personal information, you
            consent to the collection and use of that information as outlined in
            this Privacy Policy. If you wish to withdraw your consent or opt-out
            of receiving further communications from us, please contact us using
            the information provided below.
          </Paragraph>
          <Paragraph>
            <Title2> 6. Updates to the Privacy Policy</Title2>
            We may update this Privacy Policy from time to time to reflect
            changes in our practices or legal requirements. We encourage you to
            review this page periodically for any updates. Your continued use of
            our website and services after any changes to the Privacy Policy
            signifies your acceptance of those changes.
          </Paragraph>
          <Paragraph>
            <Title2> 7. Contact Us</Title2>
            If you have any questions, concerns, or requests regarding our
            Privacy Policy or the handling of your personal information, please
            feel free to contact us using the following information:
            <br />
            Confidant Service <br />
            Veenkade 6 <br />
            2513 EE’s-Gravenhage <br />
            Netherlands
            <br />
            <a>info@confidantservice.com </a> <br />
            We are dedicated to ensuring the utmost protection and privacy of
            your personal information and providing you with a safe and
            confidential experience.
          </Paragraph>
        </Wrapper>
      </SPrivacyPolicy>
      <Footer />
    </>
  );
}

export default PrivacyPolicy;
