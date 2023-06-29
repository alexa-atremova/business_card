import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import {
  faInstagram,
  faFacebook,
  faTwitter,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { Link, NavLink, useLocation } from "react-router-dom";
import { theme } from "../../../res/themes";
import { useEffect, useRef } from "react";
import { Link as ScrollLink } from "react-scroll";
import scrollToTop from "../../../helpers/scrollToTop";
import { NavHashLink } from "react-router-hash-link";

const SMobileMenu = styled.nav`
  position: fixed;
  top: 70px;
  left: 0;
  bottom: 0;
  width: 330px;
  background-color: ${theme.colors.highlighted};

  color: ${theme.colors.light_background};
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  transition: transform 0.3s ease-in-out;
  z-index: 1000;

  @media (max-width: 1359px) {
    font-size: 20px;
    background-color: #e9e2c292;
    backdrop-filter: blur(10px);

    width: 100%;
  }
`;

const CloseButton = styled.button`
  display: none;
  position: absolute;
  top: 80px;
  right: 10px;
  background-color: transparent;
  border: none;
  color: ${theme.colors.light_background};
  font-size: 40px;
  cursor: pointer;
  @media (max-width: 1359px) {
    display: flex;
  }
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
    justify-content: center;
    align-items: center;
    height: 100%;
    max-height: 700px;

    .soc {
      margin-top: 30px;
      display: flex;
      flex-direction: row;
      justify-self: center;
      align-self: center;

      gap: 20px;

      a {
        color: ${theme.colors.light_background};
        font-size: 35px;
        text-decoration: none;
        &:hover {
          color: ${theme.colors.line};
        }
      }
    }
    .links {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      align-items: center;

      li {
        padding: 20px;
        a {
          font-size: 18px;
          font-family: "Poppins", sans-serif;
          color: ${theme.colors.light_background};
          text-decoration: none;
          border-bottom: 2px solid ${theme.colors.line};

          :hover {
            color: ${theme.colors.line};

            border-bottom: 0;
          }
        }
      }
      .cll {
        margin-top: 20px;
        a {
          font-size: 16px;
          border-bottom: 2px solid ${theme.colors.line};
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
          padding: 15px;
          a {
            font-size: 18px;
            font-family: "Poppins", sans-serif;

            text-decoration: none;
          }
        }
        .cll {
          a {
            font-size: 16px;
          }
        }
      }
    }
  }
`;

const MobileMenu = ({
  lang,
  open,
  setOpen,
  mobileMenuRef,
  handleMenuIconClick,
}) => {
  // const location = useLocation();
  const contactsRef = useRef(null);
  const path = useLocation();

  function handler() {
    setOpen(false);
    scrollToTop();
  }

  // useEffect(() => {
  //   if (location.hash === "#contacts" && contactsRef.current) {
  //     contactsRef.current.scrollIntoView({ behavior: "smooth" });
  //   }
  // }, [location]);

  return (
    <>
      <SMobileMenu open={open} ref={mobileMenuRef}>
        <CloseButton>
          <FontAwesomeIcon icon={faTimes} onClick={handleMenuIconClick} />
        </CloseButton>

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
                    onClick={() => handler()}
                  >
                    Welcome to
                  </Link>
                ) : (
                  <NavLink className={"link"} to="/" onClick={() => handler()}>
                    Welcome to
                  </NavLink>
                )}
              </li>
              <li>
                {path.pathname === "/" ? (
                  <Link to="/pricing"> Pricing</Link>
                ) : (
                  <NavLink
                    className={"link"}
                    to="/pricing"
                    onClick={() => handler()}
                  >
                    Pricing
                  </NavLink>
                )}
              </li>
              <li>
                {path.pathname === "/" ? (
                  <Link to="/assistance"> Confidential Assistance </Link>
                ) : (
                  <NavLink
                    className={"link"}
                    to="/assistance"
                    onClick={() => handler()}
                  >
                    Confidential Assistance
                  </NavLink>
                )}
              </li>
              <li>
                {path.pathname === "/" ? (
                  <Link to="/credentials"> Credentials </Link>
                ) : (
                  <NavLink
                    className={"link"}
                    to="/credentials"
                    onClick={() => handler()}
                  >
                    Credentials
                  </NavLink>
                )}
              </li>
              <li>
                {path.pathname === "/" ? (
                  <Link to="/testimonials"> Testimonials </Link>
                ) : (
                  <NavLink
                    className={"link"}
                    to="/testimonials"
                    onClick={() => handler()}
                  >
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
                    ref={contactsRef}
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
      </SMobileMenu>
    </>
  );
};

export default MobileMenu;
