import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import left from "./../../assets/left.png";
import right from "./../../assets/right.png";
const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 100px;
  width: 100%;
  min-height: 1000px;
`;

const Title = styled.h2`
  font-family: "Poppins", sans-serif;
  font-size: 42px;
  font-weight: bold;
  border-bottom: 6px solid #ff6600;
  color: #363636;

  text-transform: uppercase;
  @media (max-width: 1359px) {
    font-size: 34px;
  }
  @media (max-width: 767px) {
    font-size: 26px;
  }
`;

const Description = styled.p`
  font-family: "Poppins", sans-serif;
  max-width: 700px;
  font-size: 16px;
  line-height: 1.5;
  text-align: center;
  margin: 0;
  margin-top: 10px;
  color: #363636;
  b {
    font-weight: bold;
  }
  p {
    color: #ff6600;
  }
  @media (max-width: 767px) {
    max-width: 530px;
  }
  @media (max-width: 539px) {
    max-width: 320px;
    font-size: 14px;
    line-height: 1.4;
  }
`;

const BlocksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 800px;

  .desk {
    width: 100%;
    height: 480px;

    .block {
      max-width: 700px;
      height: 380px;
      background-color: white;
      box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
      border-radius: 8px;
      margin-right: 16px;
      font-family: "Poppins", sans-serif;
      padding: 16px;

      h3 {
        font-size: 22px;
        font-weight: bold;
        margin: 0;
      }
      p {
        font-weight: 300;
        font-size: 16px;
        line-height: 1.6;
        margin: 0;
        margin-top: 10px;
      }
    }
    .slick-list {
      padding: 50px;
    }
    .slick-dots li button {
      font-size: 0;
      line-height: 0;
      display: block;
      width: 10px;
      height: 10px;
      padding: 5px;
      border: none;
      border-radius: 50%;
      background-color: #bbb;
      text-indent: -9999px;
      cursor: pointer;
      opacity: 0.5;
      transition: opacity 0.3s ease;
    }

    .slick-dots li.slick-active button {
      background-color: #ff6600;
      opacity: 1;
    }
  }
  @media (max-width: 1359px) {
    max-width: 600px;
    .desk {
      width: 100%;
      height: 670px;

      .block {
        max-width: 500px;
        height: 570px;
        p {
          font-size: 17px;
        }
      }
    }
  }
  @media (max-width: 767px) {
    max-width: 480px;
    .desk {
      width: 100%;
      height: 670px;
      .slick-list {
        padding: 30px;
      }
      .block {
        max-width: 400px;
        height: 570px;
        p {
          font-size: 15px;
          line-height: 25px;
        }
      }
    }
  }
  @media (max-width: 539px) {
    max-width: 360px;
    .desk {
      width: 100%;
      height: 620px;

      .slick-list {
        padding: 10px;
      }
      .block {
        max-width: 320px;
        height: 570px;

        margin-right: 0px;

        padding: 10px;
        p {
          font-size: 14px;
          line-height: 20px;
        }
      }
    }
  }
`;
export const StyledNextArrow = styled.div`
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  right: -35px;

  width: 30px;
  height: 30px;

  top: 50%;
  user-select: none;
  cursor: pointer;
  ::before {
    display: none;
  }
  @media (max-width: 1919px) {
  }

  @media (max-width: 540px) {
    display: none;
  }
`;

export const StyledPrevArrow = styled.div`
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 50%;
  left: -35px;

  width: 30px;
  height: 30px;

  user-select: none;
  cursor: pointer;
  ::before {
    display: none;
  }
  @media (max-width: 1919px) {
  }
  @media (max-width: 540px) {
    display: none;
  }
`;
const Testimonials = () => {
  function NextArrow(props) {
    const { className, onClick } = props;
    return (
      <StyledNextArrow className={className} onClick={onClick}>
        <img src={right} alt="RightArrow" />
      </StyledNextArrow>
    );
  }
  function PrevArrow(props) {
    const { className, onClick } = props;
    return (
      <StyledPrevArrow className={className} onClick={onClick}>
        <img src={left} alt="LeftArrow" />
      </StyledPrevArrow>
    );
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <ServicesContainer>
      <Title>Testimonials</Title>
      <Description>
        Here you will find{" "}
        <b>only genuine and honest feedback from real people.</b> As the owner
        and operator of CONFIDANT SERVICE ,
        <b>
          I personally guarantee the authenticity of each testimonial you see
          here. I stand behind every single one and swear to its accuracy
        </b>
        . I want to express my gratitude to my clients for taking the time to
        share their experiences.
        <br /> <br />{" "}
        <b>
          {" "}
          I respect the privacy and confidentiality of my clients and do not
          disclose any information regarding their identity or our work together
        </b>
        . Business owners are welcome to indicate their business names on the
        testimonial page, should they feel comfortable doing so.
      </Description>
      <BlocksContainer>
        <Slider {...settings} className="desk">
          <div className="block">
            <h3>Robert B</h3>
            <p>
              War, moving to another country, long separation, stress… Our
              family was on the verge of divorce. At the moment when I thought
              that everything was already lost, we decided to turn to Avgust for
              help. To be honest, I didn’t really hope for any result, I just
              wanted a person from the outside to assess our situation and maybe
              suggest solutions. For the first 15 minutes, I was sure that our
              family could no longer be glued together. Provocative questions
              from Avgust and vague answers from our side. But at a certain
              moment, after listening to us, Avgust sorted out our life
              situation. My wife and I started crying. Avgust went on and
              brought us to the feelings that we truly have for each other. Of
              course, one meeting did not solve all our problems, but it made us
              realize that we can solve it all together. That a marriage that
              seemed already almost dead can be saved, and after going through
              this situation, it can become even stronger. We are very grateful
              to Avgustus for his wise words. This is how I can characterize
              Avgust - wise, insightful and fair.
            </p>
          </div>
          <div className="block">
            <h3> D. A.</h3>
            <p>
              When i started to see Avgust my life rapidly changed for the
              better. Quickly i felt empowered and started to walk my own path,
              starting to believe in myself. Avgust has been a tremendous help
              with his creative business ideas he has leveraged my company to a
              creation i can be truly proud of. What Avgust gave me in such a
              short time, psychologists couldn't in a year time. Patterns and
              limited beliefs were melting before me. The addiction and self
              worth issues that i was dealing with are not a part of me anymore.
              Amazingly what looked and felt like years of work was healed in
              such a short time. Avgust's approach is truly healing, if you are
              willing to let go of the things that make you sick and choose a
              life of joy and empowerment i suggest you come to Avgust. Whether
              you want to grow as a person or in your career or your business
              somehow Avgust provides the perfect guidance.
            </p>
          </div>
        </Slider>
      </BlocksContainer>
    </ServicesContainer>
  );
};

export default Testimonials;
