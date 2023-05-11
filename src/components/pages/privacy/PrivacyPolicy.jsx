import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../../Header/Heder";
import Footer from "../../Footer/Footer";

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

  text-align: start;
  margin: 0;
  @media (max-width: 1359px) {
    font-size: 26px;
  }
  @media (max-width: 767px) {
    font-size: 20px;
    line-height: 20px;
  }
`;

const Title = styled.h2`
  font-family: "Poppins", sans-serif;
  margin-bottom: 50px;
  font-size: 42px;
  font-weight: bold;
  border-bottom: 6px solid #ff6600;
  color: #363636;

  text-transform: uppercase;
  @media (max-width: 1359px) {
    font-size: 34px;
  }
  @media (max-width: 767px) {
    font-size: 26px;
  }
`;

const Paragraph = styled.p`
  height: 100%;
  width: 100%;

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
function PrivacyPolicy({ handleLanguageChange, lang }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header handleLanguageChange={handleLanguageChange} lang={lang} />
      <SPrivacyPolicy id="privacy">
        <Wrapper>
          <Title>Privacy Policy</Title>
          <Paragraph>
            <Title2> Privacy Statement:</Title2>
            At Confidant Service , we take the privacy of our users seriously.
            We collect and use personal data only for the purpose of providing
            our services and improving our website. We do not share personal
            data with third parties unless required by law or necessary for the
            provision of our services. We take appropriate measures to protect
            personal data from unauthorized access, disclosure, or misuse. For
            more information on how we collect, use, and protect personal data,
            please read our full Privacy Policy.
          </Paragraph>
          <Paragraph>
            <Title2> Disclaimer:</Title2>
            The information provided on this website is for general
            informational purposes only. We make no representations or
            warranties of any kind, express or implied, about the completeness,
            accuracy, reliability, suitability, or availability with respect to
            the website or the information, products, services, or related
            graphics contained on the website for any purpose. Any reliance you
            place on such information is therefore strictly at your own risk.
          </Paragraph>
          <Paragraph>
            <Title2> Privacy Policy for Confidant Service:</Title2>
            At Confidant Service we take the privacy of our users seriously.
            This Privacy Policy explains how we collect, use, and protect
            personal data. By using our website, you consent to the collection
            and use of your personal data as described in this policy. <br />
            <br /> 1. Collection of Personal Data : We collect personal data
            when you use our website, including your name, email address, phone
            number, and other information you provide voluntarily. We also
            collect data automatically when you visit our website, such as your
            IP address and browsing history. <br />
            <br />
            2. Use of Personal Data: We use personal data to provide and improve
            our services, respond to your inquiries, and communicate with you
            about our products and services. We may also use personal data for
            marketing purposes, but you can opt-out of these communications at
            any time.
            <br />
            <br /> 3. Sharing of Personal Data: We do not share personal data
            with third parties unless required by law or necessary for the
            provision of our services. We may use third-party service providers
            to assist with our operations, but these providers are required to
            protect personal data in accordance with this policy.
            <br />
            <br /> 4. Protection of Personal Data: We take appropriate measures
            to protect personal data from unauthorized access, disclosure, or
            misuse. We use industry-standard security measures to safeguard
            personal data, but no method of transmission over the internet or
            electronic storage is 100% secure.
            <br />
            <br /> 5. Cookies and Similar Technologies: We use cookies and
            similar technologies to improve your experience on our website,
            analyze website usage, and personalize content and advertising. You
            can control the use of cookies through your web browser settings.{" "}
            <br />
            <br />
            6. Your Rights : You have the right to access, correct, and delete
            your personal data. You can also object to the processing of your
            personal data or restrict its use. To exercise these rights, please
            contact us using the information below.
            <br />
            <br /> 7. Changes to this Privacy Policy: We may update this Privacy
            Policy from time to time to reflect changes in our practices or
            legal requirements. We will notify you of any material changes to
            this policy by posting a notice on our website or by other means.
            <br />
            <br /> 8. Contact Us: If you have any questions or concerns about
            this Privacy Policy or our practices regarding personal data,
            <br /> please contact us at : <a>info@confidantservice.com.</a>
            <br />
            <br /> Effective Date: May 3, 2023.
          </Paragraph>
        </Wrapper>
      </SPrivacyPolicy>
      <Footer />
    </>
  );
}

export default PrivacyPolicy;
