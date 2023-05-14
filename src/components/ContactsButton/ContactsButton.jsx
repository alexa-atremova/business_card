import React from "react";
import { StyledContactsButton } from "./styles";
import { NavLink, useLocation } from "react-router-dom";
import scrollToTop from "../../helpers/scrollToTop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function ContactsButton() {
  const path = useLocation();
  return (
    <StyledContactsButton>
      <div className="buttn">
        <div className="icon">
          <FontAwesomeIcon icon={faEnvelope} className="iconimges" />
        </div>
        <NavLink
          to={"/contacts"}
          className={"link"}
          onClick={() => scrollToTop()}
        >
          contact me
        </NavLink>
      </div>
    </StyledContactsButton>
  );
}
