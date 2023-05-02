import React, { useState } from "react";
import video from "./../../assets/video.mp4";
import posterImage from "./../../assets/posterImg.png";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
const StoryContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  height: 940px;
  margin-bottom: 100px;

  @media (max-width: 1359px) {
    margin-top: 30px;
    height: 1200px;
  }
  @media (max-width: 767px) {
    margin-top: 30px;
    height: 1000px;
  }
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-right: 8px solid #ff6600;
  padding-right: 16px;
  max-width: 1200px;
  @media (max-width: 1359px) {
    border-right: 0;
    padding-right: 0;
    flex-direction: column-reverse;
    max-width: 740px;
  }
  @media (max-width: 767px) {
    max-width: 510px;
  }
  @media (max-width: 539px) {
    max-width: 320px;
  }
`;
const TextContainer = styled.div`
  display: flex;
  align-items: end;
  flex-direction: column;
  width: 100%;
  max-width: 750px;
  font-family: "Poppins", sans-serif;

  color: #363636;
  gap: 20px;
  /* animation: ${fadeIn} 1s ease-in; */
  @media (max-width: 1359px) {
    max-width: 700px;
  }
  @media (max-width: 767px) {
    max-width: 500px;
  }
  @media (max-width: 539px) {
    max-width: 320px;
  }
  .wrap {
    display: flex;
    align-items: end;
    justify-content: end;
    @media (max-width: 1359px) {
      justify-content: center;
      align-items: center;
      margin-bottom: 30px;
    }
  }
`;
const TitleWrapp = styled.div`
  display: flex;
  justify-content: end;
  align-items: end;
  flex-direction: column;
  width: 100%;

  gap: 10px;
  @media (max-width: 1359px) {
    justify-content: center;
    align-items: center;
    max-width: 700px;
  }
`;
const Title1 = styled.h1`
  font-size: 34px;
  font-weight: bold;
  margin: 0;
  @media (max-width: 1359px) {
    font-size: 26px;
  }
  @media (max-width: 767px) {
    font-size: 20px;
    line-height: 20px;
  }
`;

const Title2 = styled.h2`
  font-size: 42px;
  font-weight: bold;
  margin: 0;
  @media (max-width: 1359px) {
    border-bottom: 8px solid #ff6600;
    font-size: 34px;
  }
  @media (max-width: 767px) {
    font-size: 26px;
  }
`;

const Paragraph = styled.p`
  display: flex;
  justify-content: end;
  align-items: end;
  text-align: justify;
  font-size: 18px;
  line-height: 2;
  margin: 0;
  @media (max-width: 1359px) {
    justify-content: center;
    align-items: center;
    font-size: 16px;
  }
  @media (max-width: 767px) {
    font-size: 14px;
    line-height: 1.4;
  }
  @media (max-width: 539px) {
    font-size: 13px;
    line-height: 1.3;
  }
`;

const VideoContainer = styled.div`
  width: 100%;
  max-width: 400px;

  @media (max-width: 1359px) {
    max-width: 400px;
  }
  @media (max-width: 767px) {
    max-width: 280px;
  }
  @media (max-width: 539px) {
    margin-top: 20px;
    max-width: 250px;
  }
  video {
    width: 100%;
    max-width: 400px;
    border-radius: 10px;
  }
`;
export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 30px;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  background-color: #363636;
  color: #ff6600;
  border-radius: 8px;
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.2);
`;

const Story = ({ lang }) => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  const paragraph =
    "The creation of Confidant Service was not an easy journey for me. I had to go through a lot in life before I developed the abilities to understand others and life. Overnight, due to war, I lost everything I had established, and as a once well-established, honourable, and respected member of society, I became a poor refugee in a new country with nothing left to operate with but my skills, abilities, and innate talent for communication, compassion, and empathy. This was all I had left, but it was something I treasured deeply - the essence of my spirit, creativity, communication, and passion to help others. And so, Confidant Service was born, offering a unique opportunity for me and many other people to connect on a personal level, and it gave me a chance to provide people with the greatly needed advice and emotional support to help them navigate the challenges of life. My diverse life experience, including being a successful entrepreneur, a refugee, a divorcee, a single parent, and finally, a happily married man, gave me a deep understanding of the human condition and a strong ability to empathize with others. Life had shaped me into the person I needed to be to create this new occupation and become a professional Confidant. Confidant Service was born out of my struggles, pain, and hardships, and it has become a platform for me to use my skills, abilities, and life experience to make a difference in people's lives. It has given me a purpose and a calling, and I am now grateful for the journey that brought me to this point.";
  const paragraphRu =
    "Создание службы Confidant Service не было для меня легким и приятным опытом.Я прошел через многое, прежде чем начал по настоящему понимать людей и жизнь. И я продолжаю этому учиться. Из-за войны я потерял все, что имел и создал, и стал бедным беженцем в новой стране. У меня не осталось ничего, кроме моих навыков, способностей и врожденного таланта в области общения, сострадания и эмпатии. Это было все, что у меня оставалось, но это  то, что для меня особенно и глубоко ценно - это суть моего духа, креативности, общения и стремления помогать другим. Именно так родился Confidant Service , который дал мне возможность установить связь на персональном уровне с многими людьми и предоставить им необходимый совет и эмоциональную поддержку, чтобы помочь преодолеть жизненные препятствия. Мой разнообразный жизненный опыт,множество разных жизненных ситуаций через которые пришлось пройти, то что пришлось пережить а также жизненные этапы, успешное предпринимательство, статус беженца, развод, воспитание ребенка в одиночку и, наконец, счастливый брак, дал мне глубокое понимание человеческой природы и способность сочувствовать другим. Жизнь сделала из меня того, кто был нужен, чтобы создать эту новую профессию и стать профессиональным советником. Confidant Service родился из моих борьбы, боли и трудностей, и стал той платформой, которая дает возможность использовать свои навыки, способности и жизненный опыт, чтобы изменить жизнь людей к лучшему. Это то что придает моей жизни смысл,  это мое призвание, и теперь я чувствую благодарность к тому непростому пути, который привел меня к этой точке.";
  const shortenText = (text) => {
    const halfLength = Math.ceil(text.length / 2);
    return text.slice(0, halfLength) + "...";
  };
  return (
    <StoryContainer>
      <Wrapper>
        <VideoContainer>
          <video src={video} controls poster={posterImage} />
        </VideoContainer>

        <TextContainer>
          <TitleWrapp>
            <Title1>
              {" "}
              {lang === "ru" ? "История Создания " : "The Story of Creation of"}
            </Title1>
            <Title2>CONFIDANT SERVICE</Title2>
          </TitleWrapp>
          <Paragraph style={{ maxWidth: "500px" }}>
            {lang === "ru"
              ? "«От борьбы с жизненными обстоятельствами к созданию уникальной службы помощи и поддержки»"
              : "From Struggle to Unique Support Service."}
          </Paragraph>
          {lang === "ru" ? (
            <Paragraph>
              {showFullText ? paragraphRu : shortenText(paragraphRu)}
            </Paragraph>
          ) : (
            <Paragraph>
              {showFullText ? paragraph : shortenText(paragraph)}
            </Paragraph>
          )}
          <div className="wrap">
            {!showFullText && (
              <Button onClick={toggleText}>
                {" "}
                {lang === "ru" ? "Читать дальше" : " Read more"}
              </Button>
            )}
          </div>
        </TextContainer>
      </Wrapper>
    </StoryContainer>
  );
};

export default Story;
