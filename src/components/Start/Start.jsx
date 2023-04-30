import React from "react";
import styled from "styled-components";

const StartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  width: 100%;
  min-height: 850px;
  @media (max-width: 1359px) {
    margin-top: 50px;
  }
  @media (max-width: 539px) {
    margin-top: 80px;
    min-height: 900px;
  }
`;

const Title = styled.h2`
  font-family: "Poppins";
  font-size: 42px;
  font-weight: bold;
  border-bottom: 6px solid #ff6600;
  color: #363636;
  margin: 0;
  text-transform: uppercase;
  @media (max-width: 1359px) {
    font-size: 34px;
  }
  @media (max-width: 767px) {
    font-size: 26px;
  }
`;

const Description = styled.p`
  font-family: "Poppins";
  max-width: 500px;
  font-size: 16px;
  line-height: 1.7;
  text-align: center;
  margin-bottom: 40px;
  color: #363636;
  b {
    font-weight: bold;
  }
  p,
  a {
    color: #ff6600;
  }

  @media (max-width: 767px) {
    max-width: 430px;
  }
  @media (max-width: 539px) {
    max-width: 320px;
    font-size: 14px;
    line-height: 20px;

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
  max-width: 600px;
  gap: 20px;

  @media (max-width: 767px) {
    max-width: 530px;
  }
  @media (max-width: 539px) {
    margin-top: 20px;
    max-width: 320px;
  }
`;

const Block = styled.div`
  width: 500px;
  height: fit-content;
  font-family: "Poppins";
  background-color: white;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  margin-right: 16px;
  padding: 16px;

  @media (max-width: 767px) {
    width: 400px;
  }
  @media (max-width: 539px) {
    width: 320px;
  }
`;

const BlockText = styled.p`
  font-size: 14px;
  line-height: 1.5;
  @media (max-width: 539px) {
    font-size: 14px;
    line-height: 20px;
    margin: 0;
  }
`;

const Start = () => {
  return (
    <StartContainer>
      <Title>HOW TO START</Title>
      <Description>
        If you're ready to <a> start making changes</a> in your life, the{" "}
        <b> process is simple and easy.</b>
      </Description>
      <BlocksContainer>
        <Block>
          <BlockText>
            As CONFIDANT I understand that finding the right person to cooperate
            with is a personal decision, which is why I offer an{" "}
            <b>initial consultation to ensure that we are a good match.</b>{" "}
            During this consultation, which is charged at a rate of 100€ for one
            hour, we will discuss your needs and goals in depth.
          </BlockText>
        </Block>

        <Block>
          <BlockText>
            If you choose to continue working with me after the consultation,
            this fee will be applied towards your overall service costs. I offer
            personalized services tailored to your unique needs and goals, and I
            am committed to supporting you every step of the way.
            <b>
              {" "}
              Your satisfaction with my services is the ultimate measure of my
              success. I believe that my earnings should be based on the value
              of my services and the positive impact they have on people's lives
            </b>
            , given that each session is unique and personalized.
          </BlockText>
        </Block>
        <Block>
          <BlockText>
            If you're interested in group services, during the consultation, we
            can discuss the specific needs of your group and tailor a plan to
            suit your goals.
          </BlockText>
        </Block>
      </BlocksContainer>
    </StartContainer>
  );
};

export default Start;
