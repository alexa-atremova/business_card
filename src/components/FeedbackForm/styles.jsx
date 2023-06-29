import styled from "styled-components";
import { theme } from "../../res/themes";

export const Description = styled.p`
  font-family: "Poppins", sans-serif;
  max-width: 600px;
  font-size: 16px;
  line-height: 1.7;
  text-align: center;
  margin-bottom: 40px;
  color: ${theme.colors.text_color};
  b {
    font-weight: bold;
  }
  p {
    color: ${theme.colors.highlighted};
  }
  @media (max-width: 767px) {
    max-width: 530px;
  }
  @media (max-width: 539px) {
    max-width: 320px;
    font-size: 14px;
    line-height: 20px;

    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

export const StyledFeedbackForm = styled.section`
  margin-bottom: 100px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  overflow-x: hidden;

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

            color: ${theme.colors.text_color};
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

                color: ${theme.colors.text_color};
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
            width: 100%;
            max-width: 600px;
            margin-bottom: 20px;

            display: flex;
            flex-direction: column;
            /* align-items: center;
            justify-content: center; */

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

              color: ${theme.colors.text_color};

              background: ${theme.colors.light_background};
              border: 1px solid ${theme.colors.highlighted};
              box-sizing: border-box;
              border-radius: 8px;
              :focus {
                outline: 1px solid orange;
              }
            }
            .userContacts {
              display: flex;
              flex-direction: row;
              gap: 20px;
              .block {
              }
            }
            .textarea {
              width: 100%;
              height: 160px;
              text-align: left;
              font-family: "Poppins", sans-serif;
              font-style: normal;
              font-weight: 400;
              font-size: 18px;
              line-height: 145%;
              padding: 7px 20px;

              color: ${theme.colors.text_color};

              background: ${theme.colors.light_background};
              border: 1px solid ${theme.colors.highlighted};
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
            .submitting-message {
              margin-left: 10px;
              display: inline-block;
              font-size: 14px;
              color: ${theme.colors.text_color};
            }
          }
        }
      }
    }
  }
  @media (max-width: 1359px) {
    background-size: 100% auto;

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
            padding: 0px;
            .form {
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

                      color: ${theme.colors.text_color};
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
          max-width: 320px;
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
