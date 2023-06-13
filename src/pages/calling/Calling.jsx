import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../../components/Header/Heder";
import Footer from "../../components/Footer/Footer";
import img1 from "../../assets/Calling/1.jpeg";
import img2 from "../../assets/Calling/2.jpeg";
import img3 from "../../assets/Calling/3.jpeg";
import img4 from "../../assets/Calling/4.jpeg";
import ContactsButton from "../../components/ContactsButton/ContactsButton";

const SCallingPolicy = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: justify;
  width: 100%;
  height: fit-content;
  margin-top: 100px;
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
    align-items: flex-start;
    img {
      margin-top: 30px;
      float: right;
      margin-left: 20px;
      width: 500px;
      border-radius: 10px;
    }
  }
  .wrap3 {
    img {
      float: left;
      margin-right: 20px;
    }
  }
  @media (max-width: 1359px) {
    .wrap2,
    .wrap3 {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      img {
        margin-top: 0px;
        float: right;
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
  border-bottom: 6px solid #ff6600;
  color: #363636;

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
function Calling({ handleLanguageChange, lang }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header handleLanguageChange={handleLanguageChange} lang={lang} />
      <ContactsButton />
      <SCallingPolicy id="calling">
        {lang == "ru" ? (
          <Wrapper>
            <Title>Зов Сердца Садовника</Title>
            <div className="wrap1">
              <Paragraph>
                От прибыли к Цели - Путь Самопознания.
                <br />
                <br />
                В шумной деревне жил-был садовник по имени Август. У Августа
                была способность взращивать и выращивать яркие, красивые цветы.
                Его сад был гаванью цветов и ароматов, которые наполняли сердца
                всех, кто посещал его.
                <br />
                <br /> Молодая предпринимательница Амелия заметила успех и
                искреннее восхищение людей садом Августа.
                <br />
                <br /> Вдохновленная красотой и популярностью сада, у Амелии
                родилась идея. <br />
                <br />
              </Paragraph>

              <img src={img1} alt="" />
            </div>
            <div className="wrap1">
              <Paragraph>
                Она подумала: «Если я узнаю секреты садоводства от Августа , я
                смогу превратить это в бизнес. Я инвестирую средства в то чтобы
                получить от него документ о признании меня садовником и повешу
                этот документ у входа в парк. Люди будут платить, чтобы испытать
                радость и спокойствие от пребывания в прекрасном саду».
                <br />
                <br />
                Взволнованная своим планом, Амелия подошла к Августу и попросила
                его научить ее искусству садоводства. Август с улыбкой
                внимательно слушал. Он ответил: «Моя дорогая,
                <b>
                  садоводство — это не просто возможность для бизнеса. Это Труд
                  Любви , и Призвание, идущее от сердца. Оно требует терпения,
                  заботы и глубокой связи с природой. Это нельзя получить только
                  обучением и дипломом. Это сакральный акт - дарить красоту
                  миру.
                </b>
                <br />
                <br />
              </Paragraph>
            </div>
            <div className="wrap2">
              <Paragraph>
                Амелия была ошеломлена ответом Августа. Она ожидала прямого
                делового предложения, но вместо этого нашла мудрость и глубокую
                проницательность. Август продолжил:{" "}
                <b>
                  «Чтобы быть садовником, вы должны быть увлечены
                  культивированием жизни, должны уметь видеть чудеса роста и
                  трансформации. Это путь постоянного обучения и смиренного
                  подчинения силам природы».
                </b>
                <br />
                <br />
              </Paragraph>
              <img src={img2} alt="" />
            </div>

            <Paragraph>
              Размышляя над словами Августа, Амелия поняла, что ею двигало
              стремление к прибыли, а не искренняя любовь к садоводству.
              <br />
              <br />
              <b>
                Она поняла что для того чтобы быть садовником, как и терапевтом,
                требуется что-то более глубокое — требуется настоящее призвание.
                Это внутренний огонь, который горит желанием помогать другим,
                питать их души и способствовать их росту.
              </b>
              <br />
            </Paragraph>
            <div className="wrap3">
              <img src={img3} alt="" />
              <Paragraph>
                Амелия поблагодарила Августа за мудрость и приняла решение.{" "}
                <br />
                Она решила начать свой собственный путь самопознания и
                личностного роста.
                <br />
                Вместо того, чтобы заниматься садоводством как
                бизнес-предприятием, она решила изучить свое истинное призвание
                — стать терапевтом. <br /> <br />
              </Paragraph>
            </div>
            <Paragraph>
              Она поняла, что помогать другим преодолевать жизненные трудности и
              поддерживать их эмоциональное благополучие было ее истинной целью.{" "}
              <br />
              Aмелия оставила путь бизнеса и встала на путь служения, используя
              свои таланты для того , чтобы направлять и исцелять других. <br />{" "}
              При этом она обнаружила в себе глубокое удовлетворение и глубокую
              целеустремленность, которых никогда не смогла бы достичь за счет
              простой финансовой выгоды.
              <br /> <br />
              <b>
                Некоторые профессии, такие как терапия, не должны сводиться к
                простой коммерческой деятельности. Они требуют глубинного
                призвания, подлинной страсти помогать другим, стремления к
                личному росту и самоотверженности. Этими занятиями движет не
                прибыль, а желание изменить жизнь других к лучшему — призвание,
                которое приносит неизмеримую радость и удовлетворение как
                дающему, так и получающему.
              </b>
            </Paragraph>
          </Wrapper>
        ) : (
          <Wrapper>
            <Title>The Calling of the Gardener's Heart</Title>
            <div className="wrap1">
              <Paragraph>
                From Profit to Purpose - A Journey of Self-Discovery. <br />
                <br />
                In a bustling village, there lived a gardener named Avgust.
                Avgust had the ability to nurture and grow vibrant, beautiful
                flowers.
                <br />
                <br /> His garden was a haven of colors and scents that filled
                the hearts of all who visited.
                <br />
                <br /> One day, a young entrepreneur named Amelia noticed the
                success and admiration that Avgust's garden received. <br />
                <br />
              </Paragraph>

              <img src={img1} alt="" />
            </div>
            <div className="wrap1">
              <Paragraph>
                Inspired by the beauty and popularity of the garden, Amelia had
                an idea. She thought, "If I learn the secrets of gardening from
                Avgust, I can turn it into a business. I will invest in a Letter
                of Recognition from him and place it at the garden entrance.
                People will pay to experience the joy and serenity of a
                beautiful garden."
                <br />
                <br />
                Excited by her plan, Amelia approached Avgust and asked him to
                teach her the art of gardening and provide her with a special
                Letter of Recognition with his signature, certifying her as a
                recognized gardener. Avgust, with his gentle smile, listened
                attentively. He replied,{" "}
                <b>
                  "My dear, gardening is not merely a business opportunity. It
                  is a labor of love and a calling from the heart. It requires
                  patience, nurturing, and a deep connection with nature. It
                  cannot be achieved simply through learning and certification.
                  It is a blessing, a sacred act of bringing life and beauty
                  into the world."
                </b>
                <br />
                <br />
              </Paragraph>
            </div>
            <div className="wrap2">
              <Paragraph>
                Amelia was taken aback by Avgust's response. She expected a
                straightforward business proposition, but instead, she found
                wisdom and profound insight. <br />
                <br /> Avgust continued, "To be a gardener, you must be
                passionate about cultivating life, about witnessing the miracles
                of growth and transformation. It is a journey of constant
                learning and humble surrender to the forces of nature." <br />
                <br />
              </Paragraph>
              <img src={img2} alt="" />
            </div>

            <Paragraph>
              As Amelia reflected on Avgust's words,{" "}
              <b>
                she realized that she had been driven by the allure of profit
                rather than a genuine love for gardening. She understood that
                being a gardener, like being a therapist, requires something
                more profound—it requires a true calling. It is an inner fire
                that burns with a desire to help others, to nurture their souls,
                and to facilitate their growth.
              </b>
              <br />
              <br />
            </Paragraph>
            <div className="wrap3">
              <img src={img3} alt="" />
              <Paragraph>
                Amelia thanked Avgust for his wisdom and made a decision. She
                chose to embark on her own journey of self-discovery and
                personal growth. Instead of pursuing gardening as a business
                venture, she decided to explore her true calling—to become a
                therapist. <br />
                She understood that helping others navigate the challenges of
                life and supporting their emotional well-being was her true
                purpose. <br />{" "}
              </Paragraph>
            </div>
            <Paragraph>
              And so, Amelia left the path of business and embarked on a path of
              service, using her gifts to guide and heal others. <br /> In doing
              so, she discovered profound fulfillment and a deep sense of
              purpose that could never be achieved through mere financial gain.{" "}
              <br /> <br />
              <b>
                Certain vocations, like therapy, are not meant to be reduced to
                mere business activities. They require a deep calling, a genuine
                passion for helping others, and a commitment to personal growth
                and selflessness. These pursuits are not driven by profit but by
                the desire to make a positive difference in the lives of others
                - a calling that brings immeasurable joy and fulfillment to both
                the giver and the receiver.
              </b>
            </Paragraph>
          </Wrapper>
        )}
      </SCallingPolicy>
      <Footer />
    </>
  );
}

export default Calling;
