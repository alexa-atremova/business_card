import styled from "styled-components";

export const Button1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 170px;
  height: 60px;
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  background-color: #ff6600;

  color: #ffffff;
  border-radius: 8px;
`;

export const StyledFAQ = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;
  .wrapper {
    width: 100%;
    height: 100%;
    max-width: 1200px;
    min-height: 600px;
    margin-top: 150px;

    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: row;
    gap: 50px;
    z-index: 1;
    @media (max-width: 1359px) {
      margin-top: 100px;
      max-width: 675px;
      min-height: 550px;
      gap: 20px;
    }
    @media (max-width: 767px) {
      align-items: center;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      max-width: 500px;
      min-height: 800px;
      margin-top: 50px;
    }
    @media (max-width: 539px) {
      max-width: 320px;

      margin-bottom: 0px;
    }
    .left {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      flex-direction: column;

      width: 100%;
      @media (max-width: 1359px) {
        max-width: 350px;
      }
      @media (max-width: 767px) {
        align-items: center;
        justify-content: center;
        max-width: 320px;
      }
      .text {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin-top: 20px;

        font-family: "Poppins", sans-serif;
        font-style: normal;
        font-weight: 500;
        margin-bottom: 50px;
        font-size: 30px;
        line-height: 35px;
        /* identical to box height, or 159% */
        max-width: 700px;
        color: #363636;
        gap: 30px;
        @media (max-width: 1359px) {
          margin-top: 10px;
          margin-bottom: 30px;
          gap: 20px;
          font-size: 20px;
          line-height: 35px;
        }
        @media (max-width: 767px) {
          margin-top: 10px;
          margin-bottom: 20px;
          gap: 20px;
          font-size: 16px;
          line-height: 30px;
        }
      }
    }

    .right,
    .rightru {
      width: 100%;
      ul {
        list-style-type: none;
        display: flex;

        flex-direction: column;
        border-bottom: 3px solid #ff6600;
        gap: 10px;
        padding: 0;
        li {
          background: #ffffff;
          border-top: 3px solid #ff6600;

          padding: 5px;
          font-family: "Poppins", sans-serif;
          font-style: normal;
          font-weight: 600;
          font-size: 24px;
          line-height: 35px;
          /* identical to box height, or 159% */

          color: #363636;

          height: 60px;
          overflow: hidden;
          transition: all 0.3s 0.2s linear;

          cursor: pointer;

          @media (max-width: 767px) {
            padding: 10px 20px;
          }
          @media (max-width: 539px) {
            padding: 15px 10px;
          }

          .head {
            display: flex;
            flex-direction: row;
            width: 100%;

            justify-content: space-between;
            align-items: center;
            height: 60px;

            h2 {
              margin: 0;
              font-family: "Poppins", sans-serif;
              font-style: normal;
              font-weight: 500;
              font-size: 20px;
              line-height: 35px;
              /* identical to box height, or 159% */
              max-width: 700px;
              color: #363636;
              @media (max-width: 1359px) {
                font-size: 18px;
                line-height: 30px;
              }
              @media (max-width: 767px) {
                line-height: 25px;
                font-size: 16px;
              }
              @media (max-width: 539px) {
                font-size: 16px;
                line-height: 20px;
              }
            }
            img {
              width: 30px;
              height: 30px;
            }
            .flipped {
              transform: rotate(180deg);
            }
            @media (max-width: 1359px) {
              height: 50px;
            }
            @media (max-width: 767px) {
              height: 60px;
            }
          }

          p {
            font-family: "Poppins", sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            line-height: 35px;
            /* or 159% */

            letter-spacing: 0.01em;

            color: #1b1b1b;
            transition: all 0.5s ease;
            @media (max-width: 1359px) {
              font-size: 14px;
              line-height: 25px;
            }
            @media (max-width: 767px) {
              padding: 0px 5px;
              line-height: 25px;
            }
            @media (max-width: 539px) {
              font-size: 14px;
              line-height: 20px;
            }
          }
        }
        .second {
        }

        .opened {
          height: fit-content;
          transition: all 0.5s ease;
          cursor: default;

          p {
            opacity: 1;
            transition: all 0.5s 0.1s ease;
          }
        }
        .opened.first {
          height: fit-content;
        }
        .opened.second {
          height: fit-content;
        }
        @media (max-width: 1359px) {
          gap: 0px;
        }
      }
      @media (max-width: 1359px) {
        max-width: 350px;
      }
    }
    .rightru {
      ul {
        li {
          .head {
            h2 {
              margin: 0;
              font-family: "Poppins", sans-serif;
              font-style: normal;
              font-weight: 700;
              font-size: 20px;
              line-height: 35px;
              /* identical to box height, or 159% */
              max-width: 700px;
              color: #363636;
              @media (max-width: 1359px) {
                font-size: 18px;
                line-height: 30px;
              }
              @media (max-width: 767px) {
                line-height: 25px;
                font-size: 16px;
              }
              @media (max-width: 539px) {
                font-size: 16px;
                line-height: 20px;
              }
            }

            @media (max-width: 1359px) {
              height: 50px;
            }
            @media (max-width: 767px) {
              height: 60px;
            }
          }

          p {
            font-family: "Poppins", sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            line-height: 35px;
            /* or 159% */

            letter-spacing: 0.01em;

            color: #1b1b1b;
            transition: all 0.5s ease;
            @media (max-width: 1359px) {
              font-size: 14px;
              line-height: 25px;
            }
            @media (max-width: 767px) {
              padding: 0px 5px;
              line-height: 25px;
            }
            @media (max-width: 539px) {
              font-size: 14px;
              line-height: 20px;
            }
          }
        }
      }
    }
  }
`;
