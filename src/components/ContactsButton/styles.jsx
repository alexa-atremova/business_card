import styled from "styled-components";

export const StyledContactsButton = styled.div`
  position: fixed;

  bottom: 40px;
  right: 50px;

  z-index: 100;

  .buttn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;

    background: #363636;
    border-radius: 63px;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: all 0.5s;

    padding: 5px;

    animation: slideIn 0.5s forwards ease-in-out,
      flash 10s 1s infinite ease-in-out;
    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 45px;
      height: 45px;
      background: #ff6600;
      border-radius: 92px;

      transition: all 0.5s;
      .iconimges {
        font-size: 30px;
      }
    }

    .link {
      opacity: 0;
      width: 0px;

      overflow: hidden;

      font-family: "Poppins", sans-serif;
      color: #fff;
      font-weight: 600;
      font-size: 13px;
      line-height: 18px;
      /* or 23px */

      text-transform: uppercase;

      text-decoration: none;

      white-space: nowrap;

      transition: all 0.5s;
    }

    :hover {
      animation: slideIn 0.5s forwards ease-in-out;
      opacity: 1 !important;
      width: 165px;
      box-shadow: 0px 0px 20px #ff5e00 !important;
      transition: all 0.5s;
      cursor: pointer;

      .icon {
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
      box-shadow: 0px 0px 20px #ff7300;
    }
    100% {
      opacity: 0.5;
      box-shadow: none;
    }
  }
`;
