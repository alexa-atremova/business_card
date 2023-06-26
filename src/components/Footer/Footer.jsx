import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { theme } from "../../res/themes";

const FooterContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.highlighted};
  width: 100%;
  min-height: 440px;
  color: ${theme.colors.light_background};

  /* box-shadow: 0px 0px 5px ${theme.colors.highlighted};
  border-top: 7px solid ${theme.colors.line}; */
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding: 0 100px;
  text-align: center;
  h1 {
    display: inline-block;

    font-size: 14px;
    font-weight: 500;
    .w {
      display: inline-block;
      p {
        margin-left: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        .circle {
          display: inline-block;

          margin-left: 2px;
          margin-bottom: 15px;

          font-family: "Noto Serif";
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: transparent;
          border: 1px solid ${theme.colors.light_background};
          color: ${theme.colors.light_background};
          text-align: center;

          font-weight: 700;
          line-height: 10px;
          font-size: 8px;
        }

        .circle::before {
          content: "G";
        }
      }
    }
    a {
      user-select: all;
      text-decoration: none;
      color: ${theme.colors.line};
      margin-left: 10px;
    }
  }
  @media (max-width: 539px) {
    padding: 0 20px;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const SocialIcon = styled.a`
  margin-left: 20px;
  color: ${theme.colors.light_background};
  font-size: 30px;
  text-decoration: none;
  &:hover {
    color: ${theme.colors.line};
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Wrapper>
        <SocialIcons>
          <SocialIcon href="https://instagram.com/confidantservice?igshid=YmMyMTA2M2Y=">
            <FontAwesomeIcon icon={faInstagram} />
          </SocialIcon>
          <SocialIcon href="https://www.facebook.com/profile.php?id=100092432314300">
            <FontAwesomeIcon icon={faFacebook} />
          </SocialIcon>
          <SocialIcon href="https://twitter.com/confidantpro?s=11">
            <FontAwesomeIcon icon={faTwitter} />
          </SocialIcon>
          <SocialIcon href="http://www.tiktok.com/@confidantservice">
            <FontAwesomeIcon icon={faTiktok} />
          </SocialIcon>
        </SocialIcons>
        <h1>
          Created by:{" "}
          <a href="https://www.linkedin.com/in/alexandra-artemova-2884a3204/">
            Alexandra Artemova
          </a>
        </h1>{" "}
        <h1>
          Email: <a> info@confidantservice.com</a>{" "}
        </h1>
        <h1>Confidant Service KVK Number: 90095693</h1>
        <h1>Registered Address: Veenkade 6 2513 EE’s-Gravenhage</h1>
        <h1>Mailing address: Confidant Service Veenkade 6</h1>
        <h1>2513 EE’s-Gravenhage</h1>
        <h1>Netherlands </h1>
        <h1>
          <Link to="/privacy">Privacy Policy</Link>
        </h1>
        <h1>&copy; Avgust Platina</h1>
      </Wrapper>
    </FooterContainer>
  );
};

export default Footer;
