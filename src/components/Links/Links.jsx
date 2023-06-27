import React, { useEffect } from "react";
import aboutme from "./../../assets/aboutme.jpg";
import power from "./../../assets/power.jpg";
import my_sincere_approach from "./../../assets/my_sincere_approach.jpg";
import thankImg from "./../../assets/thankImg.jpg";
import styled, { keyframes } from "styled-components";
import { theme } from "../../res/themes";
import { NavLink } from "react-router-dom";
import scrollToTop from "../../helpers/scrollToTop";

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  width: 100%;
  max-width: 1200px;

  margin-bottom: 100px;

  gap: 20px;

  @media (max-width: 1359px) {
    max-width: 700px;
  }
  @media (max-width: 767px) {
    max-width: 500px;
    flex-wrap: wrap;
  }
  @media (max-width: 539px) {
    max-width: 320px;
  }
`;
const LinkWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;

  width: 100%;
  gap: 20px;

  p {
    margin: 0;
    bottom: -74px;
    position: absolute;
    width: 150px;
    height: 50px;
    padding: 20px;

    font-size: 20px;
    line-height: 30px;
    font-family: "Noto Serif";
    font-style: italic;
    text-align: center;
    color: ${theme.colors.text_color};

    border-radius: 5px;
    border-top: 1px solid ${theme.colors.highlighted};
    background-color: ${theme.colors.dark_background};
  }
  :hover {
    border-radius: 10px;
    box-shadow: 0 0 10px 10px rgba(243, 238, 223, 0.466);
  }
  @media (max-width: 1359px) {
    p {
      bottom: -30px;
      width: 100px;
      height: 50px;
      padding: 5px;

      font-size: 16px;
      line-height: 25px;
    }
  }
  @media (max-width: 767px) {
    gap: 20px;
  }
  @media (max-width: 539px) {
  }
`;
const LinkImage = styled.img`
  width: 100%;
  width: 250px;
  height: 330px;

  border-radius: 10px;
  @media (max-width: 1359px) {
    width: 150px;
    height: 200px;
  }
  @media (max-width: 767px) {
    width: 200px;
    height: 240px;
  }
  @media (max-width: 539px) {
    width: 150px;
    height: 190px;
  }
`;
const Links = ({ lang }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <LinkContainer>
      <NavLink to={"/power_of_conversation"}>
        <LinkWrap>
          <LinkImage src={power} />
          <p>Power of Conversation</p>
        </LinkWrap>
      </NavLink>
      <NavLink to={"/aboutme"}>
        <LinkWrap>
          <LinkImage src={aboutme} />
          <p>
            About <br /> Me
          </p>
        </LinkWrap>
      </NavLink>
      <NavLink to={"/my_sincere_approach"}>
        <LinkWrap>
          <LinkImage src={my_sincere_approach} />
          <p>My Sincere Approach</p>
        </LinkWrap>
      </NavLink>

      <NavLink to={"/thank"}>
        <LinkWrap>
          <LinkImage src={thankImg} />
          <p>Gratitude</p>
        </LinkWrap>
      </NavLink>
    </LinkContainer>
  );
};

export default Links;
