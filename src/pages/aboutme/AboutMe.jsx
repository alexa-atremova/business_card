import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../../components/Header/Heder";
import Footer from "../../components/Footer/Footer";
import img1 from "../../assets/img_1.jpg";
import img2 from "../../assets/img_2.jpg";
import ContactsButton from "../../components/ContactsButton/ContactsButton";
import { theme } from "../../res/themes";

const SAboutMe = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: justify;
  width: 100%;
  height: fit-content;
  margin-top: 200px;
  margin-bottom: 100px;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  @media (max-width: 1359px) {
    max-width: 700px;
  }
  @media (max-width: 767px) {
    max-width: 510px;
  }
  @media (max-width: 539px) {
    flex-direction: column;
    max-width: 320px;
  }
  .wrap1 {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    img {
      border-radius: 10px;
      width: 100%;
    }
  }
  .wrap2,
  .wrap3 {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    img {
      margin-top: 30px;

      margin-left: 20px;
      max-width: 400px;
      border-radius: 10px;
    }
  }
  .wrap3 {
    img {
      width: 100%;
      max-width: 400px;
      float: left;
      margin-right: 20px;
    }
  }
  @media (max-width: 1359px) {
    .wrap2,
    .wrap3 {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      img {
        margin-top: 0px;

        margin-left: 0px;
        width: 100%;
      }
    }
    .wrap3 {
      img {
        float: left;
        margin-right: 20px;
      }
    }
  }
`;

const Title = styled.h2`
  font-family: "Poppins", sans-serif;

  font-size: 42px;
  font-weight: bold;
  text-align: center;
  border-bottom: 2px solid ${theme.colors.highlighted};
  color: ${theme.colors.text_color};

  text-transform: uppercase;
  @media (max-width: 1359px) {
    font-size: 34px;
  }
  @media (max-width: 767px) {
    font-size: 24px;
  }
`;

const Paragraph = styled.p`
  height: 100%;
  width: 100%;
  flex: 1;
  font-family: "Noto Serif";
  color: ${theme.colors.text_color};
  font-size: 26px;
  font-weight: 400;
  line-height: 1.7;
  margin-bottom: 20px;

  @media (max-width: 1359px) {
    font-size: 24px;
  }
  @media (max-width: 767px) {
    font-size: 22px;
  }
  @media (max-width: 539px) {
    font-size: 18px;
  }
  a {
    user-select: all;
    text-decoration: none;
    color: orange;
    margin-left: 10px;
  }
`;
const P = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: "Noto Serif";
  font-style: italic;
  height: 100%;
  width: 100%;
  flex: 1;
  color: ${theme.colors.text_color};
  font-size: 20px;
  font-weight: 400;
  line-height: 1.7;
  margin-bottom: 20px;
  @media (max-width: 1359px) {
    font-size: 20px;
  }
  @media (max-width: 767px) {
    font-size: 18px;
  }
  @media (max-width: 539px) {
    font-size: 16px;
  }
`;
function AboutMe({ handleLanguageChange, lang }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header handleLanguageChange={handleLanguageChange} lang={lang} />
      <ContactsButton />
      <SAboutMe id="calling">
        <Wrapper>
          <Title>ABOUT ME</Title>
          <P>
            Avgust Platina <br />
            Avgust “Confidant” <br />
            Personal Life Changing Advisor <br /> Helping people to change their
            lives <br /> Since 1985
          </P>
          <div className="wrap2">
            <img src={img1} alt="" />
            <Paragraph>
              <i>
                "One day, you will unexpectedly find yourself at the right time,
                in the right place, and thousands of roads will converge at one
                point."
              </i>
              <br />
              <br />
              As someone who has experienced the ups and downs of life, I
              believe that my diverse life experience sets me apart from others
              who may not have gone through similar struggles, and it gives me
              the confidence.
            </Paragraph>
          </div>
          <Paragraph>
            <br />
            From a very young age, I knew that I had a talent and passion for
            supporting people through advice and emotional support. Over the
            years, I have honed my skills as a listener and advisor, and have
            helped countless individuals navigate the challenges of life. <br />
            <br />I was born and raised in the Soviet Union, and have lived
            through many dramatic changes and revolutions, including the
            collapse of the Soviet Union and the subsequent rise of Ukraine as a
            nation.
          </Paragraph>

          <Paragraph>
            <br />
            Through it all, I managed to be a successful entrepreneur, with
            expertise in intellectual property, social projects, branding
            territory, and developing strategies to improve regions. I founded a
            political party and have authored political platforms for political
            parties and civil movements.
            <br />
            <br />I have consulted for business people and have knowledge about
            the specifics of culture, philosophy, and psychology of doing
            business or dealing with people of different origins.
            <br />
            <br />
            I am a 36-trademarks owner, brand builder, philosopher, VIP gifts
            provider, personal and business advisor, patent holder, and book
            writer. <br />
            <br />I am also an antique and art dealer with a passion for
            restoration.
            <br />
            <br />
            In addition to my professional experience, I have also navigated
            personal challenges such as divorce and raising a daughter on my
            own. And I’m happily married now.
          </Paragraph>

          <Paragraph>
            I have successfully used non-traditional approaches to overcome
            medical problems. Furthermore, I have experience as a refugee,
            fleeing from the war and starting a new life from scratch in a new
            country.
            <br />
            <br />I believe that these experiences have given me a deep
            understanding of the human condition and a strong ability to
            empathize with others.
          </Paragraph>
          <div className="wrap3">
            <img src={img2} alt="" />
            <Paragraph>
              <br /> My mission in life is not just about providing assistance
              or guidance. It runs deeper within me, resonating with a profound
              purpose—to unveil the very essence of life itself.
              <br />I consider it a sacred calling to awaken those few
              individuals with whom I am destined to cross paths. <br />
              <br /> Together, we embark on a transformative voyage, discovering
              the dormant miracles that lie within them, waiting to be embraced
              and cherished. <br /> <br />
              With each encounter, I am reminded of the immense privilege
              bestowed upon me. Witnessing the emergence of transformative power
              within individuals is an incomparable gift, humbling me with awe
              and gratitude.
            </Paragraph>
          </div>
          <Paragraph>
            In carrying out my mission, I embrace the weight of responsibility
            and the depth of compassion within me. Driven by an unwavering
            belief, I hold that every soul I meet deserves to experience
            profound fulfillment through living authentically and embracing
            their unique calling.
            <br /> <br />
            My purpose, gift, and talent are crystal clear—to illuminate the way
            for those I encounter, offering compassion, empathy, understanding,
            and genuine connection.
            <br /> <br />
            These pillars form the foundation on which I build transformative
            bridges, creating spaces where authenticity can flourish and inner
            light can ignite.
            <br /> <br />
            The road ahead may present challenges, but I march forward
            undeterred. These challenges become opportunities for growth,
            deepening my resolve and enriching my understanding of people and
            life.
            <br /> <br />
            My journey is not solitary; it is a collective tapestry woven by the
            souls I encounter. Together, we unveil the hidden treasures that lay
            dormant within, breathing life into dreams and purpose. With
            unwavering dedication, I continue to illuminate the way, guiding
            others through the complexities of their existence and towards a
            profound sense of fulfillment.
            <br /> <br />
            In every spoken word, every offered gesture, and every forged
            connection, I remain steadfast in my commitment to illuminate the
            path.
            <br /> <br />
            Through the power of compassion, empathy, understanding, and genuine
            connection, we uncover the true beauty and potential that resides
            within each of us.
            <br /> <br />
            This is my journey. This is my calling. With boundless love and
            unwavering determination, I walk this path, grateful for the
            opportunity to make a difference in the lives of those I encounter.
            <br /> <br />
            With open arms and an open heart.
          </Paragraph>
        </Wrapper>
      </SAboutMe>
      <Footer />
    </>
  );
}

export default AboutMe;
