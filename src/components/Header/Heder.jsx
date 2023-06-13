import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import logo from "./../../assets/logo.jpg";
import ru from "./../../assets/ru.png";
import eng from "./../../assets/eng.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faTelegram,
  faTwitter,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu/MobileMenu";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  color: #363636;
  padding: 16px;
  width: 100%;
  height: 50px;
  position: fixed;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);

  z-index: 10;
  @media (max-width: 539px) {
    padding: 0;
    height: 70px;
  }
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  padding: 0 50px;
  .menu {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 20px;
  }
  @media (max-width: 1359px) {
    max-width: 900px;
    padding: 0 50px;
  }
  @media (max-width: 767px) {
    max-width: 500px;
    padding: 0 10px;
  }
  @media (max-width: 539px) {
    max-width: 320px;
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
    display: none;
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

const MenuIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  color: #000000;

  @media (max-width: 767px) {
    font-size: 26px;
  }
`;

const Header = ({ handleLanguageChange, lang }) => {
  const [open, setOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  const handleMenuIconClick = () => {
    setOpen(!open);
  };

  const handleOverlayClick = (e) => {
    if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOverlayClick);
    return () => {
      document.removeEventListener("mousedown", handleOverlayClick);
    };
  }, []);
  return (
    <>
      <HeaderContainer>
        <Wrapper>
          <div className="menu">
            <MenuIcon>
              <FontAwesomeIcon icon={faBars} onClick={handleMenuIconClick} />
            </MenuIcon>
            <Link to="/">
              <Logo src={logo} />
            </Link>
          </div>
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
                  <img className="langImg" src={ru} />
                  Ru
                </button>
              ) : (
                <button
                  className="langButton"
                  onClick={() => handleLanguageChange("ru")}
                >
                  {" "}
                  <img className={"langImg"} src={eng} />
                  En
                </button>
              )}
            </ButtonsContainer>
          </SocialIcons>
        </Wrapper>
      </HeaderContainer>
      <MobileMenu
        lang={lang}
        open={open}
        handleMenuIconClick={handleMenuIconClick}
        mobileMenuRef={mobileMenuRef}
      />
    </>
  );
};

export default Header;
