import React from "react";
import styled from "styled-components";
import logo from "./../../assets/logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTelegram,
  faTwitter,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

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
`;
const Logo = styled.img`
  width: 120px;
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
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Wrapper>
        <Logo src={logo} />
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
      </Wrapper>
    </HeaderContainer>
  );
};

export default Header;
