import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0;
    max-height: 0;
  }
  100% {
    opacity: 1;
    max-height: 800px; /* Укажите достаточно большое значение, чтобы вместить весь текст */
  }
`;
const fadeOut = keyframes`
  0% {
    opacity: 1;
    max-height: 800px; /* Укажите достаточно большое значение, чтобы вместить весь текст */
  }
  100% {
    opacity: 0;
    max-height: 0;
  }
`;
const StartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  width: 100%;

  height: fit-content;
  @media (max-width: 1359px) {
    margin-top: 50px;
  }
  @media (max-width: 539px) {
    margin-top: 50px;
    height: fit-content;
    min-height: 1100px;
  }
  .bttn {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    margin-bottom: 40px;
    h1 {
      text-align: center;
      font-family: "Poppins", sans-serif;
      font-weight: 300;
      font-size: 16px;
      line-height: 1.7;
    }
    @media (max-width: 539px) {
      margin-top: 20px;
      margin-bottom: 20px;
      h1 {
        max-width: 320px;
        font-size: 14px;
        line-height: 1.7;
      }
    }
  }
`;

const Title = styled.h2`
  font-family: "Poppins", sans-serif;
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
  font-family: "Poppins", sans-serif;

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
  font-family: "Poppins", sans-serif;
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
const DisclaimerButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 250px;
  height: 50px;
  font-family: "Poppins", sans-serif;
  font-size: 24px;
  background-color: #363636;
  color: #ff6600;
  border-radius: 8px;
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.2);
`;

const DisclaimerText = styled.div`
  display: ${(props) => (props.show ? "block" : "none")};
  opacity: ${(props) => (props.show ? 1 : 0)};
  max-width: 650px;
  margin-bottom: 50px;
  font-family: "Poppins", sans-serif;

  text-align: justify;
  font-size: 16px;
  line-height: 1.7;
  animation: ${(props) => (props.show ? fadeIn : fadeOut)} 0.5s ease;
  transition: opacity 0.5s ease;
  @media (max-width: 767px) {
    max-width: 500px;
    h1 {
      font-size: 26px;
    }
  }
  @media (max-width: 539px) {
    max-width: 320px;
    font-size: 14px;
    line-height: 1.6;
    h1 {
      font-size: 22px;
    }
  }
`;
const Start = ({ lang }) => {
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  const toggleDisclaimer = () => {
    setShowDisclaimer(!showDisclaimer);
  };
  return (
    <StartContainer id="start">
      <Title>{lang === "ru" ? "КАК НАЧАТЬ" : "HOW TO START"}</Title>
      <Description>
        {lang === "ru" ? "Если вы готовы " : "If you're ready to "}
        <a>
          {lang === "ru" ? "внести изменения" : "start making changes"}
        </a>{" "}
        {lang === "ru"
          ? "в свою жизнь - процесс прост и легок."
          : "in your life, the process is simple and easy."}
      </Description>
      <BlocksContainer>
        <Block>
          <BlockText>
            {lang === "ru"
              ? " Как КОНФИДАНТ я понимаю, что поиск правильного человека для сотрудничества - это личное решение, поэтому я предлагаю "
              : " As CONFIDANT I understand that finding the right person to cooperate with is a personal decision, which is why I offer an "}
            <b>
              {lang === "ru"
                ? "начальную консультацию, чтобы убедиться, что мы подходим друг другу."
                : "initial consultation to ensure that we are a good match."}
            </b>{" "}
            {lang === "ru"
              ? "Во время этой консультации, стоимостью 100€ за один час, мы обсудим ваши потребности и цели в подробностях."
              : "During this consultation, which is charged at a rate of 100€ for one hour, we will discuss your needs and goals in depth."}
          </BlockText>
        </Block>
        <Block>
          <BlockText>
            {lang === "ru"
              ? "Если вы решите продолжить работу со мной после консультации, эта плата будет учтена в общей стоимости моих услуг. Я предлагаю персонализированные услуги, адаптированные под ваши индивидуальные потребности и цели, и я обязуюсь поддерживать вас на каждом шагу."
              : "If you choose to continue working with me after the consultation, this fee will be applied towards your overall service costs. I offer personalized services tailored to your unique needs and goals, and I am committed to supporting you every step of the way."}
            <b>
              {lang === "ru"
                ? " Ваше удовлетворение от моих услуг является высшей мерой моего успеха. Я считаю, что мои заработки должны быть основаны на ценности моих услуг и положительном влиянии, которое они оказывают на жизнь людей"
                : "Your satisfaction with my services is the ultimate measure of my success. I believe that my earnings should be based on the value of my services and the positive impact they have on people's lives."}
            </b>
            {lang === "ru"
              ? ", учитывая, что каждая сессия уникальна и персонализирована."
              : ", given that each session is unique and personalized."}
          </BlockText>
        </Block>
        <Block>
          <BlockText>
            {lang === "ru"
              ? "Если вас интересуют групповые услуги, во время консультации мы можем обсудить конкретные потребности вашей группы и разработать план, соответствующий вашим целям."
              : "If you're interested in group services, during the consultation, we can discuss the specific needs of your group and tailor a plan to suit your goals."}
          </BlockText>
        </Block>
      </BlocksContainer>
      <div className="bttn">
        <h1>
          {lang === "ru"
            ? "Пожалуйста, обязательно прочитайте информацию ниже."
            : "Please be sure to read the information below."}
        </h1>
        <DisclaimerButton onClick={toggleDisclaimer}>
          DISCLAIMER
        </DisclaimerButton>
      </div>
      <DisclaimerText show={showDisclaimer}>
        <h1> DISCLAIMER:</h1>{" "}
        <b>
          {lang === "ru"
            ? "Я не лицензированный терапевт, медицинский работник, врач или тренер."
            : "I am not a licensed therapist, medical professional, doctor, or coach."}
        </b>{" "}
        {lang === "ru"
          ? " Советы и поддержка, которые я предоставляю, основаны исключительно на моем личном жизненном опыте.  Я создал концепцию Confidant, чтобы отделить себя от существующих методов, и направлений.  Я пионер, открывший людям новый способ улучшить свою жизнь и благополучие."
          : "The advice and support I provide are based exclusively on my personal life experience. I created the Confidant concept to separate myself from existing methods and occupations. I am a pioneer who has opened a new way for people to improve their lives and well-being."}
        <br />
        {lang === "ru"
          ? "Важно понимать, что услуги Confidant, которые я предлагаю, не предназначены для замены профессионального медицинского или психологического лечения."
          : "It is important to understand that the Confidant Services I offer are not intended to replace professional medical or psychological treatment."}{" "}
        {lang === "ru"
          ? "Мои услуги предназначены для дополнения такого лечения и оказания дополнительной поддержки людям, которые стремятся улучшить свое психическое здоровье и благополучие."
          : "My services are designed to complement such treatment and provide additional support to individuals who are seeking to improve their mental health and well-being."}{" "}
        <br />{" "}
        <b>
          {lang === "ru"
            ? "Имейте в виду, что любые советы или рекомендации, которые я даю, не предназначены для замены профессиональной медицинской консультации или лечения."
            : "Please be aware that any advice or guidance I provide is not intended as a substitute for professional advice or treatment."}
        </b>
        {lang === "ru"
          ? " Если Вы испытываете тяжелые или стойкие симптомы беспокойства, депрессии или любого другого психического расстройства, обратитесь за профессиональной помощью к лицензированному терапевту или медицинскому работнику."
          : " If you are experiencing severe or persistent symptoms of anxiety, depression, or any other mental health condition, please seek professional help from a licensed therapist or medical professional."}{" "}
        <br />
        <b>
          {lang === "ru"
            ? "Используя мои услуги Confidant, Вы признаете и соглашаетесь с тем, что любые советы или поддержка, которые я предоставляю, основаны исключительно на моем личном жизненном опыте и не предназначены для диагностики или лечения каких-либо медицинских или психических заболеваний."
            : "By using my Confidant Services, you acknowledge and agree that any advice or support I provide is based solely on my personal life experience and is not intended to diagnose or treat any medical or mental health condition."}
        </b>
        {lang === "ru"
          ? "Вы также признаете и соглашаетесь с тем, что несете единоличную ответственность за свое благополучие и что Вы не будете возлагать на меня ответственность за любые решения или действия, которые вы можете предпринять на основе информации или рекомендаций, предоставленных во время наших сеансов."
          : "You also acknowledge and agree that you are solely responsible for your own well-being and that you will not hold me liable for any decisions or actions you may take based on the information or guidance provided during our sessions."}
        <br />
        {lang === "ru"
          ? "Обратите внимание, что термин «Confidant» используется для описания моего уникального подхода к предоставлению консультаций и поддержки.  Это не означает, что я являюсь лицензированным специалистом или имею какую-либо формальную квалификацию в области психологии или консультирования."
          : "Please note that the term 'Confidant' is used to describe my unique approach to providing advice and support. It does not imply that I am a licensed professional or hold any formal qualifications in the field of psychology or counseling."}
        <br />
        {lang === "ru"
          ? "Спасибо за понимание и сотрудничество."
          : "Thank you for your understanding and cooperation."}
      </DisclaimerText>
    </StartContainer>
  );
};

export default Start;
