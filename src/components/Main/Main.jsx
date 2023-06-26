import React, { useEffect } from "react";
import photo from "./../../assets/photo.png";
import styled, { keyframes } from "styled-components";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { theme } from "../../res/themes";
import { NavLink } from "react-router-dom";
import scrollToTop from "../../helpers/scrollToTop";

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: justify;
  width: 100%;
  height: 100%;

  margin-top: 150px;
  a {
    text-decoration: none;
  }
  @media (max-width: 1359px) {
    margin-top: 150px;
  }
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  gap: 20px;
  @media (max-width: 1359px) {
    align-items: flex-start;
    max-width: 700px;
  }
  @media (max-width: 767px) {
    max-width: 500px;
  }
  @media (max-width: 539px) {
    flex-direction: column;
    max-width: 320px;
  }
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  font-family: "Poppins", sans-serif;
  color: ${theme.colors.text_color};

  .icon {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    .iconimges {
      font-size: 22px;
    }
    h1 {
      font-size: 22px;
      font-weight: 600;

      a {
        font-weight: 500;
        user-select: all;
      }
    }
    @media (max-width: 1359px) {
      .iconimges {
        font-size: 20px;
      }
      h1 {
        font-size: 18px;
      }
    }
    @media (max-width: 767px) {
      .iconimges {
        font-size: 18px;
      }
      h1 {
        font-size: 15px;
      }
    }
  }
  @media (max-width: 1359px) {
    gap: 20px;
  }
  @media (max-width: 767px) {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 500px;
  }
  @media (max-width: 539px) {
    max-width: 320px;
  }
`;
const TitleWrapp = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: left;
  flex-direction: column;
  font-family: "Poppins", sans-serif;
  width: 100%;
  border-left: 2px solid ${theme.colors.highlighted};
  padding-left: 16px;
`;
const Title1 = styled.h1`
  font-size: 34px;

  color: ${theme.colors.highlighted};
  margin: 0;
  @media (max-width: 1359px) {
    font-size: 26px;
  }
  @media (max-width: 767px) {
    font-size: 20px;
    line-height: 20px;
  }
`;

const Title2 = styled.div`
  display: flex;

  flex-direction: row;
  font-size: 42px;
  font-weight: 700;
  margin: 0;
  color: ${theme.colors.highlighted};
  gap: 5px;
  .circle {
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
  @media (max-width: 1359px) {
    font-size: 30px;
    .circle {
      width: 11px;
      height: 11px;
      line-height: 11px;
      font-size: 10px;
    }

    .circle::before {
      content: "G";
    }
  }
  @media (max-width: 767px) {
    font-size: 26px;
    .circle {
      width: 11px;
      height: 11px;
      border-radius: 50%;
      font-weight: 500;
      line-height: 11px;
      font-size: 8px;
    }

    .circle::before {
      content: "G";
    }
  }
  h2 {
    margin: 0;
    font-weight: 700;
    font-size: 30px;
    color: ${theme.colors.highlighted};
    @media (max-width: 1359px) {
      font-size: 18px;
    }
    @media (max-width: 767px) {
      font-size: 14px;
    }
  }
`;
const Title3 = styled.h1`
  font-size: 34px;

  color: ${theme.colors.text_color};
  margin: 0;
  @media (max-width: 1359px) {
    font-size: 26px;
  }
  @media (max-width: 767px) {
    font-size: 16px;
    line-height: 20px;
  }
`;

const ParagraphWrap = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  gap: 50px;
  @media (max-width: 1359px) {
    gap: 35px;
  }
  @media (max-width: 767px) {
    flex-direction: column;
    gap: 0px;
  }
`;

const Paragraph = styled.p`
  display: flex;
  flex-direction: column;
  margin: 0;
  width: 100%;
  position: relative;
  font-size: 25px;
  line-height: 35px;
  font-family: "Noto Serif";
  font-style: italic;
  p {
    margin: 0;
    align-self: flex-end;

    margin-right: 30px;
  }

  @media (max-width: 1359px) {
    font-size: 20px;
  }
  @media (max-width: 767px) {
    font-size: 16px;
    line-height: 28px;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  align-self: flex-start;
  justify-self: flex-start;
  width: 100%;
  max-width: 350px;
  margin-bottom: 30px;

  @media (max-width: 1359px) {
    margin-bottom: 0px;
    margin-top: 10px;
    max-width: 290px;
  }
  @media (max-width: 767px) {
    display: flex;
    align-self: center;
    justify-self: flex-start;
    margin: 0;
    max-width: 320px;
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 200px;
`;
const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  width: 170px;
  height: 60px;
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  background-color: ${theme.colors.highlighted};

  color: ${theme.colors.light_background};
  border-radius: 8px;
`;
const Main = ({ lang }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const scrollToStart = () => {
    const startElement = document.getElementById("start");
    if (startElement) {
      startElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <MainContainer>
      <Wrapper>
        {lang === "ru" ? (
          <TextContainer>
            <TitleWrapp>
              <Title1>Добро пожаловать в</Title1>
              <Title2>
                CONFIDANT SERVICE <br />
                <h2>
                  ВАШ ШАНС ИЗМЕНИТЬ СВОЮ ЖИЗНЬ
                  <br /> ПОЧУВСТВУЙТЕ НАСТОЯЩИЕ ИЗМЕНЕНИЯ
                </h2>
              </Title2>
            </TitleWrapp>

            <Paragraph>
              Мое имя Август Платина, люди называют меня Конфидант, что означает
              по сути близкий человек. Это для меня очень много значит. Это так
              благодаря моей способности создавать безопасную среду для людей,
              где они могут раскрыться и поделиться своими самыми глубокими
              мыслями и эмоциями. Мое стремление помочь людям в прохождении
              сложных ситуаций и поиске решений для их проблем привело меня к
              тому, что мое имя стало синонимом того что я делаю. Мой жизненный
              путь сформировал меня в того, кто я есть сегодня. Для меня это
              большая честь, делиться своим уникальным пониманием жизни,
              видением и опытом с теми, кто нуждается в моей поддержке.
            </Paragraph>
            <Paragraph>
              Я верю, что каждый человек, с кем я встречаюсь, приносит в мою
              жизнь свой уникальный дар, и я хочу чтобы общение со мной
              обогатило людей тем ценным опытом который поможет им преодолеть
              любые трудности.
            </Paragraph>

            <Button onClick={scrollToStart}>КАК НАЧАТЬ</Button>
            <div className="icon">
              <FontAwesomeIcon icon={faEnvelope} className="iconimges" />
              <h1>
                {" "}
                Email: <a> info@confidantservice.com</a>{" "}
              </h1>
            </div>
          </TextContainer>
        ) : (
          <TextContainer>
            <TitleWrapp>
              <Title1>
                {/* {lang === "ru" ? "Добро пожаловать в" : "Welcome to"} */}
                Welcome to
              </Title1>
              <Title2>
                CONFIDANT SERVICE <br />
                <div className="circle"></div>
              </Title2>
              <Title3>CONVERSATIONS THAT CHANGE LIVES</Title3>
            </TitleWrapp>
            <ParagraphWrap>
              <Paragraph>
                “Dear Avgust , in the realm of wonders, you are a true miracle
                maker. Your presence and actions, have the power to create
                extraordinary transformations in the lives of others. With your
                kindness, compassion, and belief, you inspire miracles to
                unfold, bringing hope and joy to those around you. Your ability
                to see the best in people and nurture their potential is truly
                remarkable. You are a beacon of light, igniting the spark of
                miracles wherever you go.” <br /> <p>Anna K.</p>
              </Paragraph>
              <ImageContainer>
                <Image src={photo} alt="Photograph" />
              </ImageContainer>
            </ParagraphWrap>

            <Paragraph>
              "Within each of us lies the power to be a miracle maker, for our
              words, actions, and presence possess the extraordinary ability to
              ignite hope, transform lives, and unleash the wonders that dwell
              within the human heart."
              <br /> <p>Avgust Platina to Anna K.</p>
            </Paragraph>

            <NavLink
              to={"/contacts"}
              className={"link"}
              onClick={() => scrollToTop()}
            >
              <Button>{lang === "ru" ? "КАК НАЧАТЬ" : "HOW TO START"}</Button>
            </NavLink>
            <div className="icon">
              <FontAwesomeIcon icon={faEnvelope} className="iconimges" />
              <h1>
                {" "}
                Email: <a> info@confidantservice.com</a>{" "}
              </h1>
            </div>
          </TextContainer>
        )}
      </Wrapper>
    </MainContainer>
  );
};

export default Main;
