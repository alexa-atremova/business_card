import React from "react";
import { StyledContactsButton } from "./styles";
import mail from "./../../assets/ContactsButton/mail.png";
import { NavLink, useLocation } from "react-router-dom";
import scrollToTop from "../../helpers/scrollToTop";

export default function ContactsButton({ scrolled }) {
  const path = useLocation();
  return (
    <StyledContactsButton>
      <div
        data-testid="ContactsButton"
        className={
          path.pathname === "/about"
            ? "buttn"
            : scrolled
            ? "buttn"
            : "buttn hidden"
        }
      >
        <img className="mail" src={mail} alt="" />
        <NavLink
          data-testid="ContactsLink"
          to={"/contacts"}
          className={"link"}
          onClick={() => scrollToTop()}
        >
          contact us
        </NavLink>
      </div>
    </StyledContactsButton>
  );
}
