import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import {
  faInstagram,
  faFacebook,
  faTelegram,
  faTwitter,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const SMobileMenu = styled.nav`
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
      margin-top: 30px;
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

const MobileMenu = ({ lang, open, mobileMenuRef, handleMenuIconClick }) => {
  return (
    <>
      <SMobileMenu open={open} ref={mobileMenuRef}>
        <CloseButton onClick={handleMenuIconClick}>
          <FontAwesomeIcon icon={faTimes} />
        </CloseButton>
        {lang == "ru" ? (
          <NavLinks>
            <div className="wrap">
              <div className="links">
                <li>
                  <Link to="/">Главная страница</Link>
                </li>
                <li>
                  <Link to="/story">История создания</Link>
                </li>
                <li>
                  <Link to="/horizons"> Открывая новые горизонты</Link>
                </li>

                <li>
                  <Link to="/testimonials">Отзывы</Link>
                </li>
                <li>
                  <Link to="/statement"> Заявление об ответственности</Link>
                </li>
                <li>
                  <Link to="/privacy">Privacy Policy </Link>
                </li>
                <li>
                  <Link to="/contacts">Связаться со мной </Link>
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
                <a
                  href="http://www.tiktok.com/@confidantservice"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faTiktok} />
                </a>
              </div>
            </div>
          </NavLinks>
        ) : (
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
                <li>
                  <Link to="/contacts">Contact Me </Link>
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
                <a
                  href="http://www.tiktok.com/@confidantservice"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faTiktok} />
                </a>
              </div>
            </div>
          </NavLinks>
        )}
      </SMobileMenu>
    </>
  );
};

export default MobileMenu;
