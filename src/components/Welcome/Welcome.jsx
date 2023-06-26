import React from "react";
import img from "./../../assets/img.jpg";
import img2 from "./../../assets/photo2.jpg";
import styled, { keyframes } from "styled-components";
import { theme } from "../../res/themes";

const WelcomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 20px;
  margin-top: 150px;
  border-top: 1px solid ${theme.colors.highlighted};
  padding-top: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid ${theme.colors.highlighted};

  @media (max-width: 1359px) {
    margin-top: 120px;
  }
  @media (max-width: 539px) {
    gap: 0px;
  }
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
  max-width: 1000px;

  gap: 40px;
  @media (max-width: 1359px) {
    align-items: flex-start;
    max-width: 700px;
    gap: 20px;
  }
  @media (max-width: 767px) {
    flex-direction: column;
    max-width: 500px;
  }
  @media (max-width: 539px) {
    flex-direction: column;
    max-width: 320px;
  }
`;

const Paragraph = styled.p`
  width: 100%;
  max-width: 1200px;
  margin: 0;
  font-size: 20px;
  line-height: 35px;
  color: ${theme.colors.text_color};
  /* text-transform: uppercase; */
  font-family: "Noto Serif";
  text-align: justify;

  /* text-align: left; */
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
    margin-top: 20px;
    line-height: 30px;

    max-width: 320px;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  max-width: 300px;

  @media (max-width: 1359px) {
    margin-top: 80px;
    max-width: 240px;
  }
  @media (max-width: 767px) {
    display: flex;
    align-self: center;
    justify-self: center;
    margin-top: 40px;
    max-width: 220px;
  }
  @media (max-width: 539px) {
    margin-top: 20px;
    max-width: 300px;
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 300px;
  height: auto;
  border-radius: 8px;
  border: 2px solid ${theme.colors.highlighted};
`;
const Title1 = styled.h1`
  width: 100%;
  font-size: 25px;
  color: ${theme.colors.text_color};
  margin: 0;
  text-align: center;
  @media (max-width: 1359px) {
    max-width: 700px;
    font-size: 20px;
  }
  @media (max-width: 767px) {
    max-width: 500px;
    font-size: 16px;
    line-height: 20px;
  }
  @media (max-width: 539px) {
    margin-top: 20px;
    line-height: 25px;
    max-width: 320px;
  }
`;

const Welcome = ({ lang }) => {
  return (
    <WelcomeContainer>
      <Title1>POWER OF CONVERSATION </Title1>
      <Paragraph>
        <i>
          "I engage in conversations that have the power to change people's
          lives. Through the simple act of talking, I have been called a healer,
          a messenger from God, a miracle maker, a magician, and a savior, among
          other titles. While I don't feel the need to label myself in any
          particular way, for the sake of simplicity in explaining my role to
          others, I refer to myself as a Confidant.”
        </i>
      </Paragraph>
      <Wrapper>
        <ImageContainer>
          {" "}
          <Image src={img} />
        </ImageContainer>

        <Paragraph>
          I am Avgust Platina, known as “Avgust Confidant” for my ability to
          provide a safe space for people to open up and share their deepest
          thoughts and emotions.
          <br />
          <br /> I’m old fashioned. I believe in the power of personal
          connection, loyalty, respect, trust and genuine understanding.
          <br />
          <br /> I created the 'Confidant Service' to give legal recognition to
          my work, as demanded by the present-day world.
        </Paragraph>
      </Wrapper>
      <Paragraph>
        In this world many of us carry a hidden burden, a weight silently
        carried within ourselves. Now, picture a simple act of reaching out—a
        heartfelt conversation that holds the power to uplift, heal, and
        transform.
      </Paragraph>
      <Wrapper>
        <Paragraph>
          In our fast-paced lives, it's easy to overlook the immense value of
          genuine human connection. Yet, in the depths of our being, we crave
          that connection—a safe space to pour out our thoughts, emotions, and
          experiences.
          <br />
          <br /> Sometimes, all we need is a listening ear, someone who will
          patiently hear our words, igniting a spark of hope within us. Through
          conversation, we create a bridge—a bridge that spans the gaps between
          our hearts and minds, forging a connection that eases our loneliness
          and lifts our spirits. In the presence of another, we find solace, as
          if the weight of our burdens is shared and lessened.
        </Paragraph>
        <ImageContainer>
          {" "}
          <Image src={img2} />
        </ImageContainer>
      </Wrapper>
      <Paragraph>
        When we open ourselves up to honest conversation, we invite
        understanding into our lives. In that sacred space, we recognize that we
        are not alone in our struggles.
        <br /> Remember, you are never alone. There are always those who are
        willing to listen, to hold your story with care, and to remind you of
        your worth.
      </Paragraph>
      <Title1>
        <i>
          "Are there any specific ways I can support you during this challenging
          time?"
        </i>
      </Title1>
    </WelcomeContainer>
  );
};

export default Welcome;
