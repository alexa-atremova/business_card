import styled from "styled-components";

export const StyledFeedbackForm = styled.section`
  margin-top: 150px;
  margin-bottom: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  display: flex;
  flex-direction: column;

  overflow-x: hidden;
  .head {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 1000px;
    overflow-x: hidden;
    img {
      width: 1000px;
      position: absolute;
      z-index: 1;
      padding-right: 250px;
      opacity: 0;
      transition: transform 1s, opacity 0.3s;
    }
    .aos-animate {
      opacity: 1;
      transition: transform 1s, opacity 0.3s;
    }

    h1 {
      font-family: "Poppins", sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 55px;
      line-height: 145%;
      /* identical to box height, or 80px */

      text-align: center;
      text-transform: uppercase;

      color: #363636;
      z-index: 2;
    }
  }
  .wrapper {
    width: 100%;
    max-width: 1360px;
    display: flex;
    justify-content: center;
    align-items: center;
    .centerBlock {
      width: 100%;
      max-width: 1024px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      justify-content: space-around;
      gap: 10px;
      .left {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;

        .contactsBlock {
          width: 100%;
          max-width: 360px;

          display: flex;
          flex-direction: column;
          align-items: flex-start;

          gap: 30px;
          h1 {
            font-family: "Poppins", sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 22px;
            line-height: 145%;
            /* or 32px */

            text-align: justify;

            color: #363636;
          }
          .contacts {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 15px;

            .contact {
              display: flex;
              flex-direction: row;
              align-items: center;
              gap: 15px;
              img {
                width: 21px;
                height: 21px;
              }
              a {
                user-select: all;
                text-decoration: none;

                font-family: "Poppins", sans-serif;
                font-style: normal;
                font-weight: 400;
                font-size: 20px;
                line-height: 145%;
                /* identical to box height, or 29px */

                text-align: center;

                color: #363636;
              }
              .soc {
                display: flex;
                flex-direction: row;
                justify-self: center;
                align-self: center;
                gap: 20px;
                a {
                  color: #000000;
                  font-size: 30px;
                  text-decoration: none;
                  &:hover {
                    color: #ff6600;
                  }
                }
              }
            }
          }
          .social {
            width: 100%;
            margin-top: 20px;

            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            gap: 18px;
            a {
              width: 26px;
              height: 26px;
              position: relative;
              display: flex;
              justify-content: center;
              align-items: center;
              img {
                position: absolute;
                width: 26px;
                height: 26px;
              }
              .socialLogo {
                opacity: 1;
                transition: opacity 0.3s;
              }
              .socialLogoHover {
                opacity: 0;
                transition: opacity 0.3s;
              }
              :hover {
                .socialLogo {
                  opacity: 0;
                }
                .socialLogoHover {
                  opacity: 1;
                }
              }
            }
          }
        }
      }
      .right {
        display: flex;
        flex-direction: column;

        .feedback {
          width: 100%;

          display: flex;
          flex-direction: column;
          align-items: center;

          .form {
            margin-top: 70px;
            width: 100%;
            max-width: 600px;

            display: flex;
            flex-direction: column;

            gap: 20px;

            .field {
              width: 100%;

              text-align: left;
              font-family: "Poppins", sans-serif;
              font-style: normal;
              font-weight: 400;
              font-size: 18px;
              line-height: 145%;
              padding: 7px 20px;

              color: #363636;

              background: #ffffff;
              border: 1px solid #303e53;
              box-sizing: border-box;
              border-radius: 8px;
              :focus {
                outline: 1px solid orange;
              }
            }
            .block {
              display: flex;
              flex-direction: row;
              gap: 20px;
              .userContacts {
              }
            }
            .textarea {
              margin-top: 20px;
              width: 100%;
              height: 160px;
              text-align: left;
              font-family: "Poppins", sans-serif;
              font-style: normal;
              font-weight: 400;
              font-size: 18px;
              line-height: 145%;
              padding: 7px 20px;

              color: #363636;

              background: #fff;
              border: 1px solid #000000;
              box-sizing: border-box;
              border-radius: 8px;
              resize: none;
              ::-webkit-scrollbar {
                width: 0; /* Remove scrollbar space */
                background: transparent; /* Optional: just make scrollbar invisible */
              }
              :focus {
                outline: 1px solid orange;
              }
            }
            .error {
              margin-top: 0px;

              width: 100%;
              text-align: right;
              font-family: "Source Sans Pro";
              font-style: normal;
              font-weight: 400;
              font-size: 18px;
              line-height: 20px;

              color: red;
            }
          }
        }
      }
    }
  }
  @media (max-width: 1359px) {
    background-size: 100% auto;
    padding-top: 40px;
    .head {
      width: 900px;
      img {
        width: 900px;
        padding-right: 230px;
      }
      h1 {
        font-size: 50px;
      }
    }
    .wrapper {
      .centerBlock {
        gap: 10px;
        .left {
          .contactsBlock {
            max-width: 200px;

            h1 {
              font-size: 18px;
            }
            .contacts {
              .contact {
                a {
                  font-size: 16px;
                }
              }
            }
          }

          .social {
            a {
              width: 25px;
              height: 25px;

              img {
                width: 25px;
                height: 25px;
              }
            }
          }
        }
        .right {
          .feedback {
            width: 100%;

            .form {
              margin-top: 70px;
              width: 100%;
              max-width: 600px;
              gap: 20px;
              .field {
                font-size: 16px;
              }
              .userContacts {
              }
              .textarea {
                width: 100%;
                height: 130px;
                font-size: 16px;
              }
              .error {
                font-size: 16px;
              }

              button {
                width: 200px;
                height: 40px;

                font-size: 16px;
              }
            }
          }
        }
      }
    }
  }

  @media (max-width: 1023px) {
    background-size: auto 100%;
    padding-top: 30px;
    .head {
      width: 850px;
      img {
        width: 850px;
        padding-right: 250px;
      }
      h1 {
        font-size: 40px;
      }
    }
    .wrapper {
      .centerBlock {
        .left {
          .contactsBlock {
            max-width: 170px;
            h1 {
              font-size: 16px;
            }
            .contacts {
              .contact {
                a {
                  font-size: 14px;
                }
              }
            }
          }

          .social {
            a {
              width: 25px;
              height: 25px;

              img {
                width: 25px;
                height: 25px;
              }
            }
          }
        }
        .right {
          width: 100%;
          max-width: 400px;
          .feedback {
            .form {
              margin-top: 50px;
              .field {
                font-size: 16px;
              }
              .userContacts {
              }
              .textarea {
                font-size: 16px;
              }
              .error {
                font-size: 16px;
              }

              button {
                height: 34px;
                font-size: 15px;
              }
            }
          }
        }
      }
    }
  }

  @media (max-width: 767px) {
    padding-top: 25px;
    .head {
      width: 450px;
      img {
        width: 450px;
        padding-right: 90px;
      }
      h1 {
        font-size: 30px;
      }
    }
    .wrapper {
      .centerBlock {
        gap: 10px;
        flex-direction: column;
        .left {
          margin-top: 10px;

          .contactsBlock {
            width: 100%;
            max-width: 400px;
            flex-direction: column;
            gap: 20px;
            h1 {
              font-size: 14px;
            }
            .contacts {
              display: none;
              .contact {
                display: none;
              }
            }
            .social {
              display: none;
            }
          }
        }
        .right {
          width: 100%;
          max-width: 450px;
          .feedback {
            width: 100%;
            padding: 10px;
            .form {
              margin-top: 0px;
              width: 100%;

              gap: 20px;
              .field {
                width: 100%;
                font-size: 18px;

                padding: 7px 10px;
              }
              .userContacts {
                width: 100%;
                flex-direction: column;
                gap: 20px;
              }
              .textarea {
                width: 100%;
                height: 130px;
                font-size: 18px;
                padding: 10px 20px;
              }
              .error {
                padding: 0 10px;
                font-size: 18px;
              }

              button {
                align-self: center;
                width: 230px;
                height: 40px;

                font-size: 17px;
              }
              .contactsBlock {
                width: 100%;

                display: flex;
                flex-direction: row;
                align-items: center;

                gap: 30px;

                .contacts {
                  width: 100%;
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;

                  gap: 15px;

                  .contact {
                    display: flex;
                    flex-direction: row;
                    align-items: flex-start;

                    gap: 15px;
                    img {
                      width: 21px;
                      height: 21px;
                    }
                    a {
                      user-select: all;
                      text-decoration: none;

                      font-family: "Source Sans Pro";
                      font-style: normal;
                      font-weight: 400;
                      font-size: 12px;
                      line-height: 145%;
                      /* identical to box height, or 29px */

                      text-align: center;

                      color: #363636;
                    }
                  }
                }
                .social {
                  width: 100%;

                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  justify-content: flex-end;
                  gap: 18px;
                  a {
                    img {
                      width: 20px;
                      height: 20px;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  @media (max-width: 533px) {
    padding-top: 10px;
    .head {
      width: 350px;
      img {
        width: 350px;
        padding-right: 90px;
      }
      h1 {
        font-size: 20px;
      }
    }
    .wrapper {
      .centerBlock {
        .left {
          margin-top: 20px;
          .contactsBlock {
            max-width: 300px;
            h1 {
              font-size: 12px;
            }
            .contacts {
              gap: 25px;
              flex-direction: row;
              .contact {
                gap: 8px;
                p {
                  font-size: 12px;
                }
              }
            }
          }
        }
        .right {
          max-width: 350px;
          .feedback {
            .form {
              .field {
                font-size: 15px;
              }
              .userContacts {
              }
              .textarea {
                font-size: 15px;
              }
              .error {
                font-size: 15px;
              }

              button {
                font-size: 15px;
              }
            }
          }
        }
      }
    }
  }
`;
