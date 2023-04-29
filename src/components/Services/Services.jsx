import React from "react";
import styled from "styled-components";

const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 150px;
  width: 100%;
  min-height: 1000px;
  @media (max-width: 1359px) {
    margin-top: 50px;
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
`;

const Description = styled.p`
  font-family: "Poppins";
  max-width: 600px;
  font-size: 16px;
  line-height: 1.7;
  text-align: center;
  margin-bottom: 40px;
  color: #363636;
  b {
    font-weight: bold;
  }
  p {
    color: #ff6600;
  }
`;

const BlocksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1100px;
  gap: 20px;
  @media (max-width: 1359px) {
    max-width: 900px;
  }
`;

const Block = styled.div`
  width: 250px;
  height: 260px;
  font-family: "Poppins";
  background-color: white;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  margin-right: 16px;
  padding: 16px;
  @media (max-width: 1359px) {
    width: 250px;
    height: 260px;
  }
`;

const BlockTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
  margin: 0;
  @media (max-width: 1359px) {
    margin: 0;
  }
`;

const BlockText = styled.p`
  font-size: 14px;
  line-height: 1.5;
`;

const Services = () => {
  return (
    <ServicesContainer>
      <Title>Services</Title>
      <Description>
        <b>
          {" "}
          I offer a range of services that are tailored to your unique needs.
        </b>
        Whether you are dealing with difficult decisions, facing a challenging
        situation, or simply feeling overwhelmed,<b> I am here to help.</b>
      </Description>
      <BlocksContainer>
        <Block>
          <BlockTitle>Listening and providing empathy</BlockTitle>
          <BlockText>
            I understand that sometimes what you need most is someone to listen
            and understand. My compassionate and non-judgmental approach ensures
            that you have a safe space to share your deepest thoughts and
            emotions.
          </BlockText>
        </Block>
        <Block>
          <BlockTitle>Offering guidance and advice</BlockTitle>
          <BlockText>
            I believe in empowering my clients to take control of their lives
            and make positive changes. With my guidance and advice, I can help
            you identify and overcome obstacles to reach your goals and live a
            fulfilling life.
          </BlockText>
        </Block>
        <Block>
          <BlockTitle>
            Helping clients navigate difficult situations and decisions
          </BlockTitle>
          <BlockText>
            Whether you're facing a life transition or dealing with a
            challenging situation, I am here to support you. I can help you
            navigate difficult decisions and provide you with the tools and
            resources you need to move forward.
          </BlockText>
        </Block>
        <Block>
          <BlockTitle>
            Providing resources and referrals for additional support
          </BlockTitle>
          <BlockText>
            I understand that sometimes additional support may be needed beyond
            my services. I can provide you with the necessary resources and
            referrals to help you get the support you need.
          </BlockText>
        </Block>
        <Block>
          <BlockTitle>
            Specialising in relationship advice and career counseling
          </BlockTitle>
          <BlockText>
            I specialize in providing relationship advice and career counseling.
            My experience and expertise can help you improve your relationships
            and find the career path that is right for you.
          </BlockText>
        </Block>
        <Block>
          <BlockTitle>
            Providing personalised consulting services for businesses and
            organizations
          </BlockTitle>
          <BlockText>
            by offering fresh perspectives and innovative solutions.
          </BlockText>
        </Block>
        <Description>
          At <b>CONFIDANT SERVICE</b> I am committed to helping you.{" "}
          <p> I am here to support</p> you every step of the way.
        </Description>
      </BlocksContainer>
    </ServicesContainer>
  );
};

export default Services;
