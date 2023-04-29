import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

const FooterContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #363636;
  width: 100%;
  min-height: 300px;
  color: #fff;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding: 0 100px;
  h1 {
    display: flex;

    font-size: 14px;
    font-weight: 200;
    a {
      text-decoration: none;
      color: orange;
      margin-left: 10px;
    }
  }
`;

const SocialIcons = styled.div`
  display: flex;
  margin-bottom: 40px;
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
        <h1>
          Created by:{" "}
          <a href="https://www.linkedin.com/in/alexandra-artemova-2884a3204/">
            Alexandra Artemova
          </a>
        </h1>
        <h1>&copy; Avgust Platina</h1>
      </Wrapper>
    </FooterContainer>
  );
};

export default Footer;
