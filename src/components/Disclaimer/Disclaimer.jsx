import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { theme } from "../../res/themes";

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

  width: 100%;

  height: fit-content;
  @media (max-width: 1359px) {
    margin-top: 50px;
  }
  @media (max-width: 539px) {
    margin-top: 50px;
    height: fit-content;
  }
  .bttn {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-bottom: 40px;
    h1 {
      text-align: center;
      font-family: "Poppins", sans-serif;
      color: ${theme.colors.text_color};
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

export const DisclaimerButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 250px;
  height: 50px;
  font-family: "Poppins", sans-serif;
  font-size: 24px;
  background-color: ${theme.colors.light_background};
  color: ${theme.colors.highlighted};
  border-radius: 8px;
  /* box-shadow: 0px 2px 9px ${theme.colors.highlighted}; */
  border: 1px solid ${theme.colors.highlighted};
`;

const DisclaimerText = styled.div`
  display: ${(props) => (props.show ? "block" : "none")};
  opacity: ${(props) => (props.show ? 1 : 0)};
  max-width: 650px;
  margin-bottom: 50px;
  font-family: "Poppins", sans-serif;
  color: ${theme.colors.text_color};
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
    text-align: justify;
    font-size: 16px;
    line-height: 1.6;
    h1 {
      font-size: 22px;
    }
  }
`;
const Disclaimer = ({ lang }) => {
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  const toggleDisclaimer = () => {
    setShowDisclaimer(!showDisclaimer);
  };
  return (
    <StartContainer id="start">
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
          ? "Мои услуги предназначены для дополнения такого лечения и оказания дополнительной поддержки людям, которые стремятся улучшить свое личное развитие и благополучие."
          : "My services are designed to complement such treatment and provide additional support to individuals who are seeking to improve their well-being and personal development."}{" "}
        <br />{" "}
        <b>
          {lang === "ru"
            ? "Имейте в виду, что любые советы или рекомендации, которые я даю, не предназначены для замены профессиональной медицинской консультации или лечения. "
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
          ? "Вы также признаете и соглашаетесь с тем, что несете единоличную ответственность за свое благополучие и что Вы не будете возлагать на меня ответственность за любые решения или действия, которые Вы можете предпринять на основе информации или рекомендаций, предоставленных во время наших сеансов."
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

export default Disclaimer;
