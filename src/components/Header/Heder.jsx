import React, { useState } from "react";
import styled from "styled-components";
import logo from "./../../assets/logo.jpg";
import ru from "./../../assets/ru.png";
import eng from "./../../assets/eng.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTelegram,
  faTwitter,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  color: #000;
  padding: 16px;

  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1300px;
  width: 100%;
  padding: 0 100px;
  @media (max-width: 1359px) {
    max-width: 900px;
    padding: 0 50px;
  }
  @media (max-width: 767px) {
    padding: 0 10px;
  }
  @media (max-width: 539px) {
    padding: 0;
  }
`;
const Logo = styled.img`
  width: 120px;
  @media (max-width: 539px) {
    width: 90px;
  }
`;

const SocialIcons = styled.div`
  display: flex;
`;

const SocialIcon = styled.a`
  margin-left: 20px;
  color: #000;
  font-size: 30px;
  text-decoration: none;
  &:hover {
    color: #ff6600;
  }
  @media (max-width: 539px) {
    font-size: 20px;
    margin-left: 10px;
  }
`;
const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 5px;
  .langButton,
  .disableLang {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 2px 5px;
    margin-left: 10px;
    gap: 5px;

    width: 84px;
    height: 45px;
    background: #ffffff;
    border: 1px solid #cfcfcf;
    border-radius: 10px;

    font-family: "Avante Int";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;

    color: #1b1b1b;
    @media (max-width: 1365px) {
      width: 67px;
      height: 36px;
      font-size: 16px;
      line-height: 20px;
    }
    @media (max-width: 1365px) {
      width: 59px;
      height: 31.5px;
      font-size: 14px;
      line-height: 17px;
      margin-left: 0px;
    }
  }
  .langImg {
    width: 25px;
    height: 25px;
    @media (max-width: 1365px) {
      width: 20px;
      height: 20px;
    }
    @media (max-width: 1365px) {
      width: 17px;
      height: 17px;
    }
  }
  .disableLang {
    color: #787878;
    .langImg {
      opacity: 0.5;
      filter: grayscale(1);
    }
  }
`;

const Header = ({ onLanguageChange, lang }) => {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <HeaderContainer>
      <Wrapper>
        <Logo src={logo} />
        <SocialIcons>
          <SocialIcon href="https://www.instagram.com">
            <FontAwesomeIcon icon={faInstagram} />
          </SocialIcon>
          <SocialIcon href="https://www.facebook.com">
            <FontAwesomeIcon icon={faFacebook} />
          </SocialIcon>

          <SocialIcon href="https://www.telegram.org">
            <FontAwesomeIcon icon={faTwitter} />
          </SocialIcon>
          <SocialIcon href="https://www.telegram.org">
            <FontAwesomeIcon icon={faTiktok} />
          </SocialIcon>
        </SocialIcons>
        <ButtonsContainer>
          <button
            className={lang === "en" ? "langButton" : "disableLang"}
            onClick={() => onLanguageChange("en")}
          >
            <img className={"langImg"} src={eng} />
            En
          </button>
          <button
            className={lang === "ru" ? "langButton" : "disableLang"}
            onClick={() => onLanguageChange("ru")}
          >
            <img className="langImg" src={ru} />
            Ru
          </button>
        </ButtonsContainer>
      </Wrapper>
    </HeaderContainer>
  );
};

export default Header;
