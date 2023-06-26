import React from "react";
import styled from "styled-components";
import gpt from "./../../assets/gpt2.png";
import { theme } from "../../res/themes";
const StatementContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 150px;
  margin-bottom: 100px;
  width: 100%;

  @media (max-width: 1359px) {
  }
  @media (max-width: 539px) {
    margin-top: 100px;
  }
`;

const Title = styled.h2`
  max-width: 900px;
  font-family: "Poppins", sans-serif;
  font-size: 36px;
  text-align: center;
  font-weight: bold;
  border-bottom: 2px solid ${theme.colors.highlighted};
  color: ${theme.colors.text_color};
  margin: 0;

  text-transform: uppercase;
  @media (max-width: 1359px) {
    font-size: 30px;
    max-width: 700px;
  }
  @media (max-width: 767px) {
    max-width: 500px;
    font-size: 24px;
  }
  @media (max-width: 539px) {
    max-width: 320px;
    font-size: 20px;
  }
`;

const Description = styled.p`
  font-family: "Poppins", sans-serif;
  max-width: 1200px;
  font-size: 16px;
  line-height: 1.7;
  text-align: justify;

  margin-top: 20px;
  margin-bottom: 20px;
  color: ${theme.colors.text_color};
  b {
    font-weight: bold;
  }
  a {
    color: ${theme.colors.highlighted};
  }
  @media (max-width: 1359px) {
    max-width: 700px;
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
const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

const Image = styled.img`
  width: 100%;
  max-width: 700px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.2);
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
const BlocksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1200px;
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
  width: 240px;
  height: 250px;
  font-family: "Poppins", sans-serif;
  background-color: ${theme.colors.light_background};
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
  border-radius: 8px;

  padding: 16px;
  @media (max-width: 1359px) {
    width: 270px;
    height: 230px;
  }
  @media (max-width: 767px) {
    width: 400px;
    height: fit-content;
  }
  @media (max-width: 539px) {
    width: 320px;
  }
`;

const BlockTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: ${theme.colors.text_color};
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
  color: ${theme.colors.text_color};
  @media (max-width: 539px) {
    font-size: 14px;
    line-height: 20px;
    margin: 0;
  }
`;

const Statement = ({ lang }) => {
  return (
    <>
      {lang === "ru" ? (
        <StatementContainer>
          <Title>
            Заявление о принятии ответственности и установлении Морального
            кодекса профессии Confidant
          </Title>

          <Description>
            Я, Август Платина, как пионер в сфере услуг Confidant, настоящим
            заявляю о своей ответственности за установление и соблюдение
            морального кодекса, воплощающего принципы и ценности этой новой
            профессии. Как первый признанный человек, начавший традицию
            Confidant , я осознаю важность этих услуг и потенциальное влияние,
            которое они могут оказать на жизнь людей. Поэтому я принимаю на себя
            эту ответственность с предельной искренностью и приверженностью.
          </Description>
          <Description>
            <b>ЗАЯВЛЕНИЕ О ПРИНЯТИИ ОТВЕТСТВЕННОСТИ</b> <br />Я признаю, что
            установление морального кодекса профессии Confidant является честью
            и обязанностью. Это мой долг сделать так, чтобы услуги,
            предоставляемые в этой области, соответствовали самым высоким
            стандартам и этическим принципам. Я привержен следующим принципам и
            ценностям: values:
          </Description>
          <BlocksContainer>
            <Block>
              <BlockTitle>Конфиденциальность</BlockTitle>
              <BlockText>
                Я признаю, что конфиденциальность личной информации клиента и
                информации, предоставленной во время сеансов, имеет
                первостепенное значение. Как доверенное лицо, я всегда буду
                поддерживать высочайший уровень конфиденциальности и защищать
                информацию клиента.
              </BlockText>
            </Block>
            <Block>
              <BlockTitle>Профессионализм</BlockTitle>
              <BlockText>
                Я признаю, что как доверенное лицо у меня есть профессиональные
                обязательства по предоставлению наилучших возможных услуг своим
                клиентам. Я всегда буду поддерживать высокий уровень
                профессионализма и предоставлять своим клиентам поддержку и
                рекомендации, в которых они нуждаются.
              </BlockText>
            </Block>
            <Block>
              <BlockTitle>Уважение</BlockTitle>
              <BlockText>
                Я признаю, что уважение является фундаментальной ценностью при
                предоставлении услуг Confidant. Как доверенное лицо, я буду
                уважать ценности, убеждения и культурные принципы клиента.
              </BlockText>
            </Block>
            <Block>
              <BlockTitle> Непредвзятое отношение</BlockTitle>
              <BlockText>
                Я признаю, что предоставление услуг Confidant требует
                непредвзятого отношения к клиентам. Как доверенное лицо, я
                создам безопасную и гостеприимную среду, в которой клиенты
                смогут поделиться своими проблемами, не опасаясь осуждения.
              </BlockText>
            </Block>
            <Description>
              <b> Заключение:</b> Я, Август Платина, настоящим заявляю о своей
              приверженности установлению и соблюдению морального кодекса
              профессии Confidant. Я признаю, что это значительная
              ответственность, и я отнесусь к ней серьезно. Я позабочусь о том,
              чтобы профессионалы в этой области, получившие мое личное
              официальное признание, предоставляли услуги, отвечающие самым
              высоким стандартам и этическим принципам.
            </Description>
            <ImageContainer>
              <Image src={gpt} alt="" />
            </ImageContainer>
          </BlocksContainer>
        </StatementContainer>
      ) : (
        <StatementContainer>
          <Title>
            Statement of Responsibility <br />
            for the Establishment of the Moral Code for the Profession of
            Confidant
          </Title>

          <Description>
            I, Avgust Platina, as a pioneer in the field of Confidant services,
            hereby declare my solemn responsibility to establish and uphold the
            moral code that embodies the principles and values of this new
            profession. As the one and only known individual who started the
            tradition of confidant services, I recognize the importance of this
            service and the potential impact it can have on the lives of
            individuals. Therefore, I accept this responsibility with utmost
            sincerity and commitment.
          </Description>
          <Description>
            <b>STATEMENT OF RESPONSIBILITY </b> <br />I acknowledge that the
            establishment of the moral code for the profession of Confidant is
            an honor and a responsibility. It is my duty to ensure that the
            services provided in this field are of the highest standard and
            ethical principles. I am committed to the following principles and
            values:
          </Description>
          <BlocksContainer>
            <Block>
              <BlockTitle>Confidentiality</BlockTitle>
              <BlockText>
                I acknowledge that the confidentiality of the client's personal
                information and the information shared during the sessions is of
                utmost importance. As a Confidant, I will maintain the highest
                level of confidentiality and protect the client's information at
                all times.
              </BlockText>
            </Block>
            <Block>
              <BlockTitle>Professionalism</BlockTitle>
              <BlockText>
                I acknowledge that as a Confidant, I have a professional
                obligation to provide the best possible services to my clients.
                I will maintain a high level of professionalism at all times and
                provide my clients with the support and guidance they need.
              </BlockText>
            </Block>
            <Block>
              <BlockTitle>Respect</BlockTitle>
              <BlockText>
                I acknowledge that respect is a fundamental value in the
                provision of Confidant services. As a Confidant, I will respect
                the client's values, beliefs, and cultural background.
              </BlockText>
            </Block>
            <Block>
              <BlockTitle>Non-judgmental attitude</BlockTitle>
              <BlockText>
                I acknowledge that the provision of Confidant services requires
                a non-judgmental attitude towards the clients. As a Confidant, I
                will create a safe and welcoming environment where clients can
                share their concerns without the fear of being judged.
              </BlockText>
            </Block>
            <Description>
              <b> Conclusion:</b> I, Avgust Platina, hereby declare my
              commitment to the establishment and upholding of the moral code
              for the profession of Confidant. I acknowledge that this is a
              significant responsibility and one that I will take seriously. I
              will ensure that the professionals in this field who have my
              personal official recognition will provide services that are of
              the highest standard and ethical principles.
            </Description>
            <ImageContainer>
              <Image src={gpt} alt="" />
            </ImageContainer>
          </BlocksContainer>
        </StatementContainer>
      )}
    </>
  );
};

export default Statement;
