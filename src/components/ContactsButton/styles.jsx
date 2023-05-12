import styled from "styled-components";

export const StyledContactsButton = styled.div`
  position: fixed;
  bottom: 40px;
  right: 50px;

  z-index: 100;

  .buttn {
    width: 50px;
    height: 50px;

    background: #0956c8;
    border-radius: 63px;

    display: flex;
    align-items: center;

    transition: all 0.5s;

    opacity: 0.5;

    padding: 5px;

    animation: slideIn 0.5s forwards ease-in-out,
      flash 10s 1s infinite ease-in-out;

    .mail {
      width: 40px;
      height: 40px;
      background: #0b2038;
      border-radius: 92px;

      transition: all 0.5s;
    }

    .link {
      opacity: 0;
      width: 0px;
      height: 23px;

      overflow: hidden;

      font-family: "Source Sans Pro";
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 145%;
      /* or 23px */

      text-transform: uppercase;

      color: #ffffff;

      text-decoration: none;

      white-space: nowrap;

      transition: all 0.5s;
    }

    :hover {
      animation: slideIn 0.5s forwards ease-in-out;
      opacity: 1 !important;
      width: 165px;
      box-shadow: 0px 0px 20px rgba(9, 86, 200, 1) !important;
      transition: all 0.5s;
      cursor: pointer;

      .mail {
        margin-right: 8px;
      }
      .link {
        opacity: 1;
        width: 90px;
        transition: all 0.5s;
        margin-right: 16px;
      }
    }
  }

  .hidden {
    opacity: 0;
    transition: all 0.5s;
    pointer-events: none;
    animation: none;
  }

  @media (max-width: 767px) {
    display: none;
  }

  @keyframes slideIn {
    0% {
      transform: translateX(50px);
    }
    100% {
      transform: translateX(0px);
    }
  }

  @keyframes flash {
    80% {
      opacity: 0.5;
      box-shadow: none;
    }
    90% {
      opacity: 1;
      box-shadow: 0px 0px 20px rgba(9, 86, 200, 1);
    }
    100% {
      opacity: 0.5;
      box-shadow: none;
    }
  }
`;
