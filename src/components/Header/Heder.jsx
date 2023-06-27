import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import logo from "./../../assets/logo.png";
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
import { theme } from "../../res/themes";

const HeaderContainer = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-top: 7px solid white;
  /* background-color: ${theme.colors.highlighted}; */
  /* background-color: #2e3d25; */
  background-color: ${theme.colors.highlighted};
  color: ${theme.colors.dark_background};
  padding: 15px;
  width: 100%;
  height: 100px;
  position: fixed;

  box-shadow: 0px 1px 0px ${theme.colors.highlighted};
  border-bottom: 7px solid ${theme.colors.line};
  z-index: 100000;
  ::before {
    content: "";
    position: absolute;
    bottom: -10px;
    height: 1px;
    width: 100%;
    background-color: ${theme.colors.light_background};
  }

  ::before {
    box-shadow: 0px 1px 0px ${theme.colors.light_background};
    border-bottom: 1px solid ${theme.colors.highlighted};
  }
  .line {
    position: absolute;
    bottom: -27px;
    width: 100%;
    height: 15px;
    background-color: black;
    border-bottom: 1px solid ${theme.colors.highlighted};
  }
  @media (max-width: 1359px) {
  }

  @media (max-width: 768px) {
    padding: 0;
  }
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  padding: 0 50px;
  @media (max-width: 1359px) {
    max-width: 700px;
    padding: 0 50px;
  }
  @media (max-width: 767px) {
    max-width: 500px;
    padding: 0;
  }
  @media (max-width: 539px) {
    max-width: 320px;
    padding: 0;
  }
`;
const Nav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 900px;
  width: 100%;
  padding: 0 50px;
  margin-top: 20px;
  gap: 20px;
  h1 {
    margin: 0;
    margin-bottom: 5px;
    font-weight: 700;
    font-size: 50px;
    line-height: 35px;
    font-family: "Noto Serif";
    /* font-style: italic; */
  }
  @media (max-width: 1359px) {
    max-width: 700px;
    padding: 0 50px;
  }
  @media (max-width: 767px) {
    max-width: 500px;
    padding: 0;
  }
  @media (max-width: 539px) {
    max-width: 320px;
    padding: 0;
  }
`;
const NavLinks = styled.ul`
  width: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .wrap {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;

    .links {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      text-align: center;
      align-items: center;
      gap: 40px;
      li {
        a {
          font-size: 16px;
          font-family: "Poppins", sans-serif;
          color: ${theme.colors.light_background};
          text-decoration: none;

          :hover {
            color: ${theme.colors.line};

            border-bottom: 0;
          }
        }
      }
    }
  }
  @media (max-width: 539px) {
    .wrap {
      max-height: 500px;

      .soc {
        gap: 20px;

        a {
          font-size: 30px;
        }
      }
      .links {
        li {
          a {
            font-size: 18px;
            font-family: "Poppins", sans-serif;

            text-decoration: none;
          }
        }
      }
    }
  }
`;
const Logo = styled.img`
  width: 80px;

  @media (max-width: 768px) {
    width: 60px;
  }
`;

const SocialIcons = styled.div`
  display: flex;
`;

const SocialIcon = styled.a`
  margin-left: 20px;
  color: ${theme.colors.light_background};
  font-size: 30px;
  text-decoration: none;
  &:hover {
    color: ${theme.colors.line};
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
  .langButton {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 2px 5px;
    margin-left: 5px;
    gap: 5px;

    width: 55px;
    height: 40px;
    background: ${theme.colors.light_background};
    border: 1px solid #cfcfcf;
    border-radius: 10px;

    font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-size: 15px;
    line-height: 24px;

    color: ${theme.colors.text_color};
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
`;

const MenuIcon = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: ${theme.colors.light_background};
  &:hover {
    color: ${theme.colors.line};
  }

  @media (max-width: 767px) {
    display: flex;
    font-size: 26px;
  }
`;

const Header = ({ handleLanguageChange, lang }) => {
  const [open, setOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  const handleMenuIconClick = () => {
    setOpen(!open);
  };

  // const handleOverlayClick = (e) => {
  //   if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
  //     setOpen(false);
  //   }
  // };

  // useEffect(() => {
  //   document.addEventListener("mousedown", handleOverlayClick);
  //   return () => {
  //     document.removeEventListener("mousedown", handleOverlayClick);
  //   };
  // }, []);
  return (
    <>
      <HeaderContainer>
        <div className="line" />
        <Wrapper>
          <Link to="/">
            <Logo src={logo} />
          </Link>
          <Nav ref={mobileMenuRef}>
            <h1>Confidant Service</h1>
            <NavLinks>
              <MenuIcon onClick={handleMenuIconClick}>
                <FontAwesomeIcon icon={faBars} />
              </MenuIcon>
              <div className="wrap">
                <div className="links">
                  <li>
                    <Link to="/">Welcome To</Link>
                  </li>
                  <li>
                    <Link to="/pricing"> Pricing</Link>
                  </li>
                  <li>
                    <Link to="/assistance"> Confidential Assistance </Link>
                  </li>
                  <li>
                    <Link to="/credentials"> Credentials </Link>
                  </li>{" "}
                  <li>
                    <Link to="/testimonials"> Testimonials </Link>
                  </li>
                  <li>
                    <Link to="/contacts">Contact Me </Link>
                  </li>
                </div>
              </div>
            </NavLinks>
          </Nav>

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
            {/* <ButtonsContainer>
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
            </ButtonsContainer> */}
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
