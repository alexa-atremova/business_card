import React, { useState } from "react";
import video from "./../../assets/video1.mp4";
import img from "./../../assets/img.jpg";
import posterImage from "./../../assets/posterImg1.jpg";
import styled, { keyframes } from "styled-components";
import { theme } from "../../res/themes";

const StoryContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  height: fit-content;

  margin-top: 100px;
  margin-bottom: 50px;

  @media (max-width: 1359px) {
    margin-top: 100px;
    height: fit-content;
  }
  @media (max-width: 767px) {
    margin-top: 100px;
    height: fit-content;
  }
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;

  max-width: 1200px;
  gap: 20px;

  @media (max-width: 1359px) {
    border-right: 0;
    padding-right: 0;
    flex-direction: column;
    max-width: 740px;
  }
  @media (max-width: 767px) {
    max-width: 510px;
    gap: 0px;
  }
  @media (max-width: 539px) {
    max-width: 320px;
  }
`;

const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;

  gap: 60px;

  @media (max-width: 1359px) {
    flex-direction: column-reverse;
    max-width: 700px;
  }
  @media (max-width: 767px) {
    max-width: 500px;
  }
  @media (max-width: 539px) {
    gap: 20px;
    max-width: 320px;
  }
  .wrap {
    display: flex;
    align-items: end;
    justify-content: end;
    @media (max-width: 1359px) {
      justify-content: center;
      align-items: center;
      margin-bottom: 30px;
    }
  }
`;
const TitleWrapp = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  flex-direction: column;
  width: 100%;

  gap: 10px;
  @media (max-width: 1359px) {
    justify-content: center;
    align-items: center;
    max-width: 700px;
  }
`;
const Title1 = styled.h1`
  color: ${theme.colors.text_color};
  font-size: 34px;
  line-height: 30px;
  font-weight: bold;
  margin: 0;
  @media (max-width: 1359px) {
    font-size: 26px;
  }
  @media (max-width: 767px) {
    font-size: 20px;
    line-height: 30px;
    text-align: center;
  }
`;

const Paragraph1 = styled.div`
  display: flex;
  flex-direction: column;
  color: ${theme.colors.text_color};
  font-family: "Noto Serif";
  text-align: left;
  font-style: italic;
  font-size: 25px;
  line-height: 2;
  margin: 0;
  p {
    margin: 0;
    align-self: flex-end;
    margin-top: -20px;
    margin-right: 30px;
    @media (max-width: 539px) {
      margin-top: 10px;
      margin-right: 0px;
    }
  }
  @media (max-width: 1359px) {
    font-size: 18px;
  }
  @media (max-width: 767px) {
    font-size: 16px;
    line-height: 30px;
  }
  @media (max-width: 539px) {
    text-align: justify;
  }
`;
const Paragraph = styled.p`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  width: 100%;

  font-family: "Noto Serif", sans-serif;
  color: ${theme.colors.text_color};
  font-size: 20px;
  text-align: justify;
  line-height: 2;
  margin: 0;
  @media (max-width: 1359px) {
    justify-content: center;
    align-items: center;
    font-size: 18px;
  }
  @media (max-width: 767px) {
    font-size: 16px;
    line-height: 30px;
  }
  @media (max-width: 539px) {
    line-height: 30px;
  }
`;
const VideoContainer = styled.div`
  width: 100%;
  max-width: 400px;

  @media (max-width: 1359px) {
    max-width: 400px;
  }
  @media (max-width: 767px) {
    max-width: 280px;
  }
  @media (max-width: 539px) {
    margin-top: 20px;
    margin-bottom: 30px;
    max-width: 250px;
  }
  video {
    width: 100%;
    max-width: 400px;
    border-radius: 10px;
  }
`;
export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 30px;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  background-color: ${theme.colors.light_background};
  color: ${theme.colors.highlighted};
  border-radius: 8px;
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.2);
`;

const Story = ({ lang }) => {
  return (
    <StoryContainer>
      <Wrapper>
        <TitleWrapp>
          <Title1>EXPERIENCE TRUE TRANSFORMATION</Title1>
          <Paragraph1>
            "Therapy is simply a word; it does not encompass the entire process
            nor describe it adequately. On the other hand, transformative change
            is a process—one that cannot be bought or sold at an hourly rate. It
            can only be experienced, and that experience is all that is truly
            needed." <p>Avgust Platina</p>
          </Paragraph1>
        </TitleWrapp>
        <TextContainer>
          <Paragraph>
            Unlike conventional therapies, my focus extends beyond mere words. I
            facilitate a transformative process that goes beyond superficial
            change, empowering you to embrace profound transformation from
            within. By delving into the language of meanings and connecting with
            your inner truth, you will experience a profound shift in your
            mindset, relationships, and overall well-being.
            <br /> I specialize in Personal Consultation, granting you exclusive
            access to one-on-one sessions with me. <br />
            My services are tailored to the unique needs and goals of each
            individual. <br />
            <br />
            To establish genuine connections, together, we will explore the
            depths of communication, filtered through your life experiences and
            personal believes. Through my personalized approach, I help you
            transcend the limitations of traditional therapy and tap into the
            language of true meaning.
          </Paragraph>
          <VideoContainer>
            <video src={video} controls poster={posterImage} />
          </VideoContainer>
        </TextContainer>
      </Wrapper>
    </StoryContainer>
  );
};

export default Story;
