import React, { useEffect } from "react";
import styled from "styled-components";
import { theme } from "../../res/themes";

const PricingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 150px;
  margin-bottom: 100px;
  width: 100%;
  height: fit-content;
`;

export const MainTitle = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Poppins", sans-serif;
  font-size: 32px;
  font-weight: bold;

  color: ${theme.colors.text_color};
  margin: 0;
  margin-bottom: 20px;
  text-transform: uppercase;
  @media (max-width: 1359px) {
    font-size: 25px;
  }
  @media (max-width: 767px) {
    font-size: 20px;
  }
`;

export const Description = styled.p`
  font-family: "Noto Serif";
  max-width: 1200px;
  font-size: 20px;
  line-height: 30px;

  text-align: justify;
  margin-bottom: 40px;
  color: ${theme.colors.text_color};
  b {
    font-weight: bold;
  }
  p {
    color: ${theme.colors.highlighted};
  }
  @media (max-width: 767px) {
    max-width: 530px;
  }
  @media (max-width: 539px) {
    max-width: 320px;
    font-size: 16px;

    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

const BlocksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;

  margin-bottom: 50px;
  gap: 20px;
  max-width: 1200px;

  @media (max-width: 1359px) {
    max-width: 700px;
  }
  @media (max-width: 767px) {
    max-width: 500px;
  }
  @media (max-width: 539px) {
    max-width: 320px;
  }
`;

const Block = styled.div`
  width: 100%;
  height: fit-content;
  font-family: "Noto Serif";
  background-color: ${theme.colors.light_background};
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
  border-radius: 8px;

  color: ${theme.colors.text_color};
  padding: 16px;
  @media (max-width: 1359px) {
  }
  @media (max-width: 767px) {
  }
  @media (max-width: 539px) {
  }
`;

const BlockTitle = styled.h3`
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  margin: 0;
  margin-bottom: 20px;

  color: ${theme.colors.text_color};
  @media (max-width: 1359px) {
  }
  @media (max-width: 539px) {
    font-size: 18px;
  }
`;

const BlockText = styled.p`
  font-size: 14px;
  line-height: 1.5;
  color: ${theme.colors.text_color};
  @media (max-width: 539px) {
    font-size: 14px;
    line-height: 20px;
    margin: 0;
  }
`;

const Pricing = ({ lang }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <PricingContainer>
      <MainTitle> Pricing</MainTitle>

      <BlocksContainer>
        <Block>
          <BlockTitle> Classic Care and Transparent Pricing </BlockTitle>
          Individual sessions (60 minutes): €350 <br /> <br /> I understand and
          deeply appreciate the uniqueness and individuality of each of my
          clients. <br /> <br /> To me, you are not just another client, but
          someone truly special. <br /> <br /> My aim is to provide exceptional
          assistance and support that caters specifically to your needs and
          aspirations. <br /> <br /> I don't believe in employing marketing
          strategies or offering prepaid services. Instead, I focus on
          delivering genuine help and guidance to my clients whenever they need
          it, as long as I am available. <br /> <br /> Your well-being and
          personal growth are my top priorities.
        </Block>
        <Block>
          <BlockTitle> Initial Consultation </BlockTitle>
          To begin our journey together, I offer a comprehensive initial
          consultation that typically lasts between 90 to 120 minutes.
          <br /> <br /> During this in-depth session, we will engage in a
          profound discussion about your goals, challenges, and any other
          pertinent information that will guide our collaboration. The cost of
          this exclusive consultation is €500.
        </Block>
        <Block>
          <BlockTitle> Ongoing Support</BlockTitle>
          For ongoing support, I provide individual sessions that last 60
          minutes. These sessions can be scheduled on a weekly or bi-weekly
          basis, depending on your preferences and requirements. <br /> <br />
          Each session is dedicated to addressing specific issues or goals that
          you wish to work on, ensuring a personalized and impactful experience.{" "}
          <br />
          The rate for individual sessions is €350 per hour.
        </Block>
        <Description>
          <MainTitle> IMPORTANT </MainTitle>
          It is important to emphasize that while I have established a standard
          rate, I strongly believe in flexibility and tailoring our arrangement
          to meet your specific needs and expectations.
          <br /> <br />I understand that the impact of our time together can be
          profound and have a lasting effect on your life.
          <br /> <br />
          Whether it's a phone call, video call, or an in-person meeting, the
          medium is inconsequential as long as I can provide the valuable
          assistance you need. Sometimes, even a brief one-minute phone call can
          change everything in life.
          <br /> <br />
          It is crucial to acknowledge that formalities and preset rules and
          formulas are great when it comes to activities like car driving.
          However, in our private lives and life in general, things unfold
          naturally, and we react according to the situation.
          <br /> <br />
          While I strive to keep my rates affordable, I recognize that each
          client's circumstances are unique. Therefore, I am open to discussing
          alternative arrangements and options based on your individual
          situation.
          <br /> <br />
          If you are genuinely interested in working together, I highly
          recommend beginning with an initial consultation.
          <br /> <br />
          This initial step allows us to establish a strong foundation and
          determine if we are a good fit for each other.
          <br /> <br />
          From there, we can collaboratively explore the best approach and
          frequency for our sessions, ensuring that you receive the support and
          guidance you need.
          <br /> <br />
          As my client, you hold a special place in my practice, and I am
          genuinely committed to making a positive and lasting impact on your
          life.
        </Description>
      </BlocksContainer>
    </PricingContainer>
  );
};

export default Pricing;
