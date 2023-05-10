import styled from "styled-components";

export const StyledFAQ = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;
  .wrapper {
    width: 100%;
    max-width: 1200px;
    margin-top: 50px;
    margin-bottom: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    z-index: 1;
    @media (max-width: 1359px) {
      margin-top: 50px;
      max-width: 675px;
    }
    @media (max-width: 767px) {
      max-width: 530px;
    }
    @media (max-width: 539px) {
      max-width: 320px;
      margin-bottom: 0px;
    }

    .text {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      margin-top: 50px;
      margin-bottom: 50px;
      gap: 30px;
      @media (max-width: 1359px) {
        margin-top: 10px;
        margin-bottom: 0px;
        gap: 20px;
      }
      h1 {
        margin: 0;
        font-family: "Poppins", sans-serif;
        font-style: normal;
        font-weight: 700;
        max-width: 800px;
        max-height: 200px;
        text-align: center;
        font-size: 42px;
        line-height: 65px;
        border-bottom: 6px solid #ff6600;
        padding-bottom: 16px;
        color: #363636;
        @media (max-width: 1359px) {
          font-size: 34px;
          padding-bottom: 10px;
          max-width: 700px;
        }
        @media (max-width: 767px) {
          height: 50px;
          font-size: 26px;
          max-width: 320px;
          height: fit-content;
          line-height: 35px;
        }
      }
    }
    ul {
      list-style-type: none;
      display: flex;

      flex-direction: column;

      gap: 10px;
      padding: 0;
      li {
        background: #ffffff;
        border: 2px solid #ebebeb;
        border-radius: 0px 10px;

        padding: 5px 15px;
        font-family: "Poppins", sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 35px;
        /* identical to box height, or 159% */

        color: #363636;

        height: 70px;
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
          height: 80px;

          h2 {
            margin: 0;
            font-family: "Poppins", sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 24px;
            line-height: 35px;
            /* identical to box height, or 159% */
            max-width: 1000px;
            color: #363636;
            @media (max-width: 1359px) {
              font-size: 21px;
            }
            @media (max-width: 767px) {
              line-height: 25px;
              font-size: 20px;
            }
            @media (max-width: 539px) {
              font-size: 16px;
              line-height: 20px;
            }
          }
          .arrow {
            width: 30px;
            height: 30px;
            @media (max-width: 1359px) {
              width: 25px;
              height: 25px;
            }
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
            font-size: 16px;
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
    }
  }
`;
