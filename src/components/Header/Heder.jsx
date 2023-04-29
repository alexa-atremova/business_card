import React from "react";
import styled from "styled-components";
import logo from "./../../assets/logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

const HeaderContainer = styled.header`
  display: flex;
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
  width: 100%;
  padding: 0 100px;
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
            <FontAwesomeIcon icon={faTelegram} />
          </SocialIcon>
        </SocialIcons>
      </Wrapper>
    </HeaderContainer>
  );
};

export default Header;
