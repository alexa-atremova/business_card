import React, { useState } from "react";
import arrow from "../../assets/up.svg";

import { Button1, StyledFAQ } from "./styles";

export default function PROPOSITION({ lang }) {
  const [active, setActive] = useState("");
  const scrollToStart = () => {
    const startElement = document.getElementById("start");
    if (startElement) {
      startElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      {lang == "ru" ? (
        <StyledFAQ>
          <div className="wrapper">
            <div className="left">
              {/* <h1>PROPOSITION</h1> */}
              <div className="text">
                Готовы ли Вы принять силу трансформации? <br />
                <br />
                Свяжитесь со мной сегодня, и давайте вместе отправимся в это
                необычное путешествие.
              </div>
              <Button1 onClick={scrollToStart}>КАК НАЧАТЬ</Button1>
            </div>
            <div className="rightru">
              <ul>
                <li className={active === "first" ? "opened first" : "first"}>
                  <div className="head">
                    <h2
                      onClick={() =>
                        active === "first" ? setActive("") : setActive("first")
                      }
                    >
                      ОТКРОЙТЕ В СЕБЕ НЕОБЫКНОВЕННОЕ
                    </h2>
                    <img
                      className={active === "first" ? "flipped" : ""}
                      src={arrow}
                      alt=""
                      onClick={() =>
                        active === "first" ? setActive("") : setActive("first")
                      }
                    />
                  </div>

                  <p>
                    Готовы ли Вы отправиться в преобразующее путешествие и
                    раскрыть свой истинный потенциал? Не ищите дальше. Я
                    предлагаю уникальное сочетание дальновидного руководства и
                    преобразующих идей, которые создадут глубокие изменения в
                    Вашей жизни.
                  </p>
                </li>
                <li
                  className={active === "second" ? "opened second" : "second"}
                >
                  <div className="head">
                    <h2
                      onClick={() =>
                        active === "second"
                          ? setActive("")
                          : setActive("second")
                      }
                    >
                      ОТКРОЙТЕ ДЛЯ СЕБЯ СИЛУ ПОДЛИННОГО ОБЩЕНИЯ
                    </h2>
                    <img
                      className={active === "second" ? "flipped" : ""}
                      src={arrow}
                      alt=""
                      onClick={() =>
                        active === "second"
                          ? setActive("")
                          : setActive("second")
                      }
                    />
                  </div>

                  <p>
                    Благодаря моему индивидуальному подходу я помогу Вам
                    преодолеть ограничения традиционной терапии и прикоснуться к
                    языку истинного смысла. Вместе мы будем исследовать глубины
                    общения, отфильтрованные через Ваш жизненный опыт и личные
                    способности, чтобы установить подлинные связи и
                    способствовать личностному росту.
                  </p>
                </li>

                <li className={active === "4" ? "opened 4" : "4"}>
                  <div className="head">
                    <h2
                      onClick={() =>
                        active === "4" ? setActive("") : setActive("4")
                      }
                    >
                      РАСКРОЙТЕ СВОЙ ПОТЕНЦИАЛ
                    </h2>
                    <img
                      className={active === "4" ? "flipped" : ""}
                      src={arrow}
                      alt=""
                      onClick={() =>
                        active === "4" ? setActive("") : setActive("4")
                      }
                    />
                  </div>

                  <p>
                    Я призван помочь Вам жить жизнью, которая превосходит все
                    ожидания. Через наводящие на размышления беседы,
                    проницательное руководство и прикосновение магии я
                    вдохновляю Вас освободиться от социальных условностей,
                    открыть свое истинное «я» и создать реальность, которая
                    соответствует Вашим самым сокровенным желаниям.
                  </p>
                </li>
                <li className={active === "5" ? "opened 5" : "5"}>
                  <div className="head">
                    <h2
                      onClick={() =>
                        active === "5" ? setActive("") : setActive("5")
                      }
                    >
                      СДЕЛАЙТЕ ПРЫЖОК
                    </h2>
                    <img
                      className={active === "5" ? "flipped" : ""}
                      src={arrow}
                      alt=""
                      onClick={() =>
                        active === "5" ? setActive("") : setActive("5")
                      }
                    />
                  </div>

                  <p>
                    Если Вы готовы сделать шаг к необыкновенному, бросить вызов
                    убеждениям и отправиться в преобразующее путешествие, пришло
                    время совершить прыжок. Вместе мы раскроем в Вас скрытый
                    потенциал и создадим жизнь, полную цели, самореализации и
                    безграничных возможностей.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </StyledFAQ>
      ) : (
        <StyledFAQ>
          <div className="wrapper">
            <div className="left">
              {/* <h1>PROPOSITION</h1> */}
              <div className="text">
                Are you ready to embrace the power of transformation? <br />
                <br />
                Contact me today and let's embark on this extraordinary journey
                together.
              </div>
              <Button1 onClick={scrollToStart}>
                {lang === "ru" ? "КАК НАЧАТЬ" : "HOW TO START"}
              </Button1>
            </div>
            <div className="right">
              <ul>
                <li className={active === "first" ? "opened first" : "first"}>
                  <div className="head">
                    <h2
                      onClick={() =>
                        active === "first" ? setActive("") : setActive("first")
                      }
                    >
                      UNLOCK THE EXTRAORDINARY WITHIN YOU{" "}
                    </h2>
                    <img
                      className={active === "first" ? "flipped" : ""}
                      src={arrow}
                      alt=""
                      onClick={() =>
                        active === "first" ? setActive("") : setActive("first")
                      }
                    />
                  </div>

                  <p>
                    Are you ready to embark on a transformative journey and
                    unlock your true potential? Look no further. I offer a
                    unique blend of visionary guidance and transformative
                    insights that will ignite profound change in your life.
                  </p>
                </li>
                <li
                  className={active === "second" ? "opened second" : "second"}
                >
                  <div className="head">
                    <h2
                      onClick={() =>
                        active === "second"
                          ? setActive("")
                          : setActive("second")
                      }
                    >
                      DISCOVER THE POWER OF AUTHENTIC COMMUNICATION{" "}
                    </h2>
                    <img
                      className={active === "second" ? "flipped" : ""}
                      src={arrow}
                      alt=""
                      onClick={() =>
                        active === "second"
                          ? setActive("")
                          : setActive("second")
                      }
                    />
                  </div>

                  <p>
                    Through my personalized approach, I help you transcend the
                    limitations of traditional therapy and tap into the language
                    of true meaning. Together, we will explore the depths of
                    communication, filtered through your life experiences and
                    personal abilities, to establish genuine connections and
                    foster personal growth.
                  </p>
                </li>

                <li className={active === "4" ? "opened 4" : "4"}>
                  <div className="head">
                    <h2
                      onClick={() =>
                        active === "4" ? setActive("") : setActive("4")
                      }
                    >
                      UNLEASH YOUR POTENTIAL{" "}
                    </h2>
                    <img
                      className={active === "4" ? "flipped" : ""}
                      src={arrow}
                      alt=""
                      onClick={() =>
                        active === "4" ? setActive("") : setActive("4")
                      }
                    />
                  </div>

                  <p>
                    I am dedicated to helping you live a life that surpasses
                    expectations. Through thought-provoking conversations,
                    insightful guidance, and a touch of magic, I inspire you to
                    break free from societal conditioning, discover your
                    authentic self, and create a reality that aligns with your
                    deepest desires.
                  </p>
                </li>
                <li className={active === "5" ? "opened 5" : "5"}>
                  <div className="head">
                    <h2
                      onClick={() =>
                        active === "5" ? setActive("") : setActive("5")
                      }
                    >
                      TAKE THE LEAP
                    </h2>
                    <img
                      className={active === "5" ? "flipped" : ""}
                      src={arrow}
                      alt=""
                      onClick={() =>
                        active === "5" ? setActive("") : setActive("5")
                      }
                    />
                  </div>

                  <p>
                    If you are ready to step into the extraordinary, to
                    challenge beliefs, and embark on a transformative journey,
                    it's time to take the leap. Together, we will unlock the
                    hidden potential within you and create a life of purpose,
                    fulfillment, and limitless possibilities.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </StyledFAQ>
      )}
    </>
  );
}
