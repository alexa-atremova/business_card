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

const FooterContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #363636;
  width: 100%;
  min-height: 440px;
  color: #fff;
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
    display: flex;

    font-size: 14px;
    font-weight: 200;
    a {
      user-select: all;
      text-decoration: none;
      color: orange;
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
  color: #fff;
  font-size: 30px;
  text-decoration: none;
  &:hover {
    color: #ff6600;
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
