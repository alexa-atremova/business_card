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

const MobileMenu = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 350px;
  background-color: #333333;
  color: #fff;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  transition: transform 0.3s ease-in-out;
  z-index: 1000;
  @media (max-width: 767px) {
    font-size: 20px;
    background-color: #333333b3;
    backdrop-filter: blur(10px);

    width: 100%;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 40px;
  cursor: pointer;
`;

const NavLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  .wrap {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    max-height: 500px;
    .soc {
      display: flex;
      flex-direction: row;
      justify-self: center;
      align-self: center;
      gap: 20px;
      a {
        color: #fff;
        font-size: 30px;
        text-decoration: none;
        &:hover {
          color: #ff6600;
        }
      }
    }
    .links {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      li {
        padding: 20px;
        a {
          font-size: 20px;
          font-family: "Poppins", sans-serif;
          color: #fff;
          text-decoration: none;
          border-bottom: 2px solid #ff6600;
          :hover {
            color: #ff6600;

            border-bottom: 0;
          }
        }
      }
    }
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
      <MobileMenu open={open} ref={mobileMenuRef}>
        <CloseButton onClick={handleMenuIconClick}>
          <FontAwesomeIcon icon={faTimes} />
        </CloseButton>
        <NavLinks>
          <div className="wrap">
            <div className="links">
              <li>
                <Link to="/">Main Page </Link>
              </li>
              <li>
                <Link to="/story">Story of Creation </Link>
              </li>
              <li>
                <Link to="/horizons"> Opening New Horizons</Link>
              </li>

              <li>
                <Link to="/testimonials">Testimonials</Link>
              </li>
              <li>
                <Link to="/statement"> Statement of Responsibility</Link>
              </li>
              <li>
                <Link to="/privacy">Privacy Policy </Link>
              </li>
            </div>
            <div className="soc">
              <a
                href="https://instagram.com/confidantservice?igshid=YmMyMTA2M2Y="
                target="_blank"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100092432314300"
                target="_blank"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>

              <a href="https://twitter.com/confidantpro?s=11" target="_blank">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="http://www.tiktok.com/@confidantservice" target="_blank">
                <FontAwesomeIcon icon={faTiktok} />
              </a>
            </div>
          </div>
        </NavLinks>
      </MobileMenu>
    </>
  );
};

export default Header;
