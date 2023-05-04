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
import { Link } from "react-router-dom";

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
  @media (max-width: 1359px) {
    font-size: 25px;
    margin-left: 10px;
  }
  @media (max-width: 767px) {
    font-size: 20px;
    margin-left: 10px;
  }
  @media (max-width: 539px) {
    font-size: 18px;
    margin-left: 10px;
  }
`;
const ButtonsContainer = styled.div`
  margin-left: 20px;
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
    margin-left: 5px;
    gap: 5px;

    width: 55px;
    height: 40px;
    background: #ffffff;
    border: 1px solid #cfcfcf;
    border-radius: 10px;

    font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-size: 15px;
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
    width: 20px;
    height: 20px;
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

const Header = ({ handleLanguageChange, lang }) => {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <HeaderContainer>
      <Wrapper>
        <Link to="/">
          <Logo src={logo} />
        </Link>
        <SocialIcons>
          <SocialIcon
            href="https://instagram.com/confidantservice?igshid=YmMyMTA2M2Y="
            target="_blank"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </SocialIcon>
          <SocialIcon
            href="https://www.facebook.com/profile.php?id=100092432314300"
            target="_blank"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </SocialIcon>

          <SocialIcon
            href="https://twitter.com/confidantpro?s=11"
            target="_blank"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </SocialIcon>
          <SocialIcon
            href="http://www.tiktok.com/@confidantservice"
            target="_blank"
          >
            <FontAwesomeIcon icon={faTiktok} />
          </SocialIcon>
          <ButtonsContainer>
            {lang === "ru" ? (
              <button
                className="langButton"
                onClick={() => handleLanguageChange("en")}
              >
                <img className={"langImg"} src={eng} />
                En
              </button>
            ) : (
              <button
                className="langButton"
                onClick={() => handleLanguageChange("ru")}
              >
                <img className="langImg" src={ru} />
                Ru
              </button>
            )}
          </ButtonsContainer>
        </SocialIcons>
      </Wrapper>
    </HeaderContainer>
  );
};

export default Header;
