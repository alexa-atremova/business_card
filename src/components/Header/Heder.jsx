import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import logo from "./../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import {
  faInstagram,
  faFacebook,
  faTelegram,
  faTwitter,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { Link, useLocation } from "react-router-dom";
import MobileMenu from "./MobileMenu/MobileMenu";
import { theme } from "../../res/themes";
import { Link as ScrollLink } from "react-scroll";
import { NavHashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";

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

  @media (max-width: 767px) {
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
    max-width: 720px;
    padding: 0 10px;
  }
  @media (max-width: 767px) {
    max-width: 500px;
    padding: 0;
  }
  @media (max-width: 539px) {
    max-width: 340px;
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
  .H {
    display: flex;

    flex-direction: row;
    margin: 0;
    margin-bottom: 5px;
    font-weight: 700;
    font-size: 50px;
    line-height: 35px;
    font-family: "Noto Serif";
    /* font-style: italic; */
    .circle {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 9px;
      height: 9px;
      border-radius: 50%;
      background-color: transparent;
      border: 1px solid black;
      color: black;
      text-align: center;

      font-weight: 700;
      line-height: 9px;
      font-size: 7px;
    }

    .circle::before {
      content: "G";
    }
    @media (max-width: 1359px) {
      font-size: 30px;
      .circle {
        width: 8px;
        height: 8px;

        line-height: 8px;
        font-size: 6px;
      }

      .circle::before {
        content: "G";
      }
    }
    @media (max-width: 767px) {
      font-size: 26px;
      .circle {
        width: 8px;
        height: 8px;

        line-height: 8px;
        font-size: 6px;
      }

      .circle::before {
        content: "G";
      }
    }
  }
  @media (max-width: 1359px) {
    max-width: 600px;
    padding: 0 10px;
    h1 {
      font-size: 40px;
    }
  }
  @media (max-width: 767px) {
    max-width: 500px;
    padding: 0;
    margin-top: 0px;
    h1 {
      margin: 0;
      font-size: 30px;
    }
  }
  @media (max-width: 539px) {
    max-width: 320px;
    padding: 0;
    h1 {
      font-size: 25px;
    }
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
  @media (max-width: 1359px) {
    .wrap {
      .links {
        gap: 15px;
        li {
          a {
            font-size: 12px;
            font-family: "Poppins", sans-serif;

            text-decoration: none;
          }
        }
      }
    }
  }
  @media (max-width: 767px) {
    display: none;
  }
`;
const Logo = styled.img`
  width: 80px;
  @media (max-width: 1359px) {
    width: 70px;
  }
  @media (max-width: 767px) {
    width: 60px;
  }
  @media (max-width: 539px) {
    width: 50px;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  @media (max-width: 1359px) {
    width: 90px;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 12px;
  }
  @media (max-width: 767px) {
    display: none;
  }
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
    margin-left: 0px;
    font-size: 25px;
  }
  @media (max-width: 767px) {
    font-size: 20px;
    margin-left: 10px;
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
  }
  @media (max-width: 539px) {
    font-size: 25px;
  }
`;

const Header = ({ handleLanguageChange, lang }) => {
  const path = useLocation();
  const [open, setOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  const handleMenuIconClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <HeaderContainer>
        <div className="line" />
        <Wrapper>
          <Link to="/">
            <Logo src={logo} />
          </Link>
          <Nav ref={mobileMenuRef}>
            <div className="H">
              Confidant Service <div className="circle"></div>
            </div>
            <NavLinks>
              <div className="wrap">
                <div className="links">
                  <li>
                    {path.pathname === "/" ? (
                      <Link
                        className="link"
                        activeClass="active"
                        to="Home_block"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                      >
                        Welcome to
                      </Link>
                    ) : (
                      <NavLink className={"link"} to="/">
                        Welcome to
                      </NavLink>
                    )}
                  </li>
                  <li>
                    {path.pathname === "/pricing" ? (
                      <Link to="/pricing"> Pricing</Link>
                    ) : (
                      <NavLink className={"link"} to="/pricing">
                        Pricing
                      </NavLink>
                    )}
                  </li>
                  <li>
                    {path.pathname === "/" ? (
                      <Link to="/assistance"> Confidential Assistance </Link>
                    ) : (
                      <NavLink className={"link"} to="/assistance">
                        Confidential Assistance
                      </NavLink>
                    )}
                  </li>
                  <li>
                    {path.pathname === "/" ? (
                      <Link to="/credentials"> Credentials </Link>
                    ) : (
                      <NavLink className={"link"} to="/credentials">
                        Credentials
                      </NavLink>
                    )}
                  </li>
                  <li>
                    {path.pathname === "/" ? (
                      <Link to="/testimonials"> Testimonials </Link>
                    ) : (
                      <NavLink className={"link"} to="/testimonials">
                        Testimonials
                      </NavLink>
                    )}
                  </li>
                  <li>
                    {path.pathname === "/" ? (
                      <ScrollLink
                        to="contact"
                        smooth={true}
                        duration={500}
                        onClick={() => setOpen(false)}
                      >
                        Contact Me
                      </ScrollLink>
                    ) : (
                      <NavHashLink
                        className={"link"}
                        to="/#contact"
                        onClick={() => setOpen(false)}
                      >
                        Contact Me
                      </NavHashLink>
                    )}
                  </li>
                </div>
              </div>
            </NavLinks>
          </Nav>
          <MenuIcon onClick={handleMenuIconClick}>
            <FontAwesomeIcon icon={faBars} />
          </MenuIcon>
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
        setOpen={setOpen}
        handleMenuIconClick={handleMenuIconClick}
        mobileMenuRef={mobileMenuRef}
      />
    </>
  );
};

export default Header;
