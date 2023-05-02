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
  @media (max-width: 539px) {
    margin-top: 80px;
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
  @media (max-width: 767px) {
    max-width: 530px;
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
  max-width: 1100px;
  gap: 20px;
  @media (max-width: 1359px) {
    max-width: 900px;
  }
  @media (max-width: 767px) {
    max-width: 530px;
  }
  @media (max-width: 539px) {
    max-width: 320px;
  }
`;

const Block = styled.div`
  width: 280px;
  height: 260px;
  font-family: "Poppins", sans-serif;
  background-color: white;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  margin-right: 16px;
  padding: 16px;
  @media (max-width: 1359px) {
    width: 250px;
    height: 260px;
  }
  @media (max-width: 767px) {
    width: 400px;
    height: 150px;
  }
  @media (max-width: 539px) {
    width: 320px;
    height: 175px;
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
  @media (max-width: 539px) {
    font-size: 15px;
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

const Services = ({ lang }) => {
  return (
    <ServicesContainer>
      <Title>{lang === "ru" ? "Услуги" : "Services"}</Title>

      <Description>
        <b>
          {lang === "ru"
            ? "Я предлагаю ряд услуг, которые настроены на  Ваши уникальные потребности. "
            : "I offer a range of services that are tailored to your unique needs."}
        </b>
        {lang === "ru"
          ? "Независимо от того, сталкиваетесь ли Вы с необходимостью принятия  непростых решений, или с ситуацией которая бросает Вам вызов, или просто чувствуете себя перегруженным,"
          : "Whether you are dealing with difficult decisions, facing a challenging situation, or simply feeling overwhelmed,"}
        <b>
          {lang === "ru"
            ? " я здесь, и сделаю все что в моих силах чтобы Вам помочь."
            : " I am here to help."}
        </b>
      </Description>
      <BlocksContainer>
        <Block>
          <BlockTitle>
            {lang === "ru"
              ? "Выслушивание и эмпатия"
              : "Listening and providing empathy"}
          </BlockTitle>
          <BlockText>
            {lang === "ru"
              ? "Я понимаю, что иногда Вам больше всего нужен кто-то, кто послушает и поймет. Мой сочувствующий и непредвзятый подход обеспечит Вам безопасное пространство, чтобы Вы смогли поделиться своими самыми глубокими мыслями и эмоциями."
              : "I understand that sometimes what you need most is someone to listen and understand. My compassionate and non-judgmental approach ensures that you have a safe space to share your deepest thoughts and emotions."}
          </BlockText>
        </Block>
        <Block>
          <BlockTitle>
            {lang === "ru"
              ? "Предоставление руководства и советов"
              : "Offering guidance and advice"}
          </BlockTitle>
          <BlockText>
            {lang === "ru"
              ? "Я здесь, для того чтобы дать своим клиентам возможность контролировать свою жизнь и вносить позитивные изменения. С моим руководством и советами я могу помочь Вам определить и преодолеть препятствия, для того чтобы Вы смогли достичь своих целей и жить полной жизнью."
              : "I believe in empowering my clients to take control of their lives and make positive changes. With my guidance and advice, I can help you identify and overcome obstacles to reach your goals and live a fulfilling life."}
          </BlockText>
        </Block>
        <Block>
          <BlockTitle>
            {lang === "ru"
              ? "Помощь клиентам в навигации трудных ситуаций и принятии решений"
              : "Helping clients navigate difficult situations and decisions"}
          </BlockTitle>
          <BlockText>
            {lang === "ru"
              ? "Независимо от того, сталкиваетесь ли Вы с новой жизненной перспективой или сталкиваетесь с критической ситуацией , я здесь, чтобы поддержать Вас. Я могу помочь Вам пройти ту часть пути, которая требует принятия трудных решений и предоставить вам инструменты и ресурсы, необходимые для продвижения вперед."
              : "Whether you're facing a life transition or dealing with a challenging situation, I am here to support you. I can help you navigate difficult decisions and provide you with the tools and resources you need to move forward."}
          </BlockText>
        </Block>
        <Block>
          <BlockTitle>
            {lang === "ru"
              ? "Предоставление ресурсов и ссылок на дополнительную поддержку"
              : "Providing resources and referrals for additional support"}
          </BlockTitle>
          <BlockText>
            {lang === "ru"
              ? "Я понимаю, что иногда может потребоваться дополнительная поддержка, кроме моих услуг. Я могу предоставить Вам необходимые ресурсы и рекомендации , и помочь Вам получить необходимую поддержку."
              : "I understand that sometimes additional support may be needed beyond my services. I can provide you with the necessary resources and referrals to help you get the support you need."}
          </BlockText>
        </Block>
        <Block>
          <BlockTitle>
            {lang === "ru"
              ? "Консультации по вопросам связанным с личными отношениями и карьерой"
              : "Specialising in relationship advice and career counseling"}
          </BlockTitle>
          <BlockText>
            {lang === "ru"
              ? "Я специализируюсь на предоставлении консультаций по вопросам отношений и карьерного консультирования. Мой опыт и экспертиза могут помочь Вам улучшить ваши личные отношения и найти карьерный путь, который подходит именно Вам."
              : "I specialize in providing relationship advice and career counseling. My experience and expertise can help you improve your relationships and find the career path that is right for you."}
          </BlockText>
        </Block>
        <Block>
          <BlockTitle>
            {lang === "ru"
              ? "Предоставление индивидуальных консультационных услуг для бизнеса и организаций"
              : "Providing personalised consulting services for businesses and organizations"}
          </BlockTitle>
          <BlockText>
            {lang === "ru"
              ? "Качественные изменения деятельности Вашего бизнеса с помощью предложения новых возможностей и инновационных решений это моя специализация."
              : "by offering fresh perspectives and innovative solutions."}
          </BlockText>
        </Block>
        <Description>
          {lang === "ru"
            ? "CONFIDANT SERVICE нацелен на то, чтобы помочь Вам. "
            : "At CONFIDANT SERVICE I am committed to helping you."}{" "}
          <p>
            {lang === "ru"
              ? "И я здесь, для того чтобы поддерживать Вас на каждом шагу."
              : "I am here to support  you every step of the way."}{" "}
          </p>
        </Description>
      </BlocksContainer>
    </ServicesContainer>
  );
};

export default Services;
