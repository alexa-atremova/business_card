import React, { useState } from "react";
import open from "../../assets/open.png";
import close from "../../assets/close.png";
import { StyledFAQ } from "./styles";

export default function FAQ({ lang }) {
  const [active, setActive] = useState("");
  return (
    <StyledFAQ>
      <div className="wrapper">
        <div className="text">
          <h1>
            {lang === "ru"
              ? "ОТВЕТЫ НА ВАЖНЫЕ ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ"
              : "IMPORTANT FAQ"}
          </h1>
        </div>
        <ul>
          <li className={active === "first" ? "opened first" : "first"}>
            <div className="head">
              <h2>
                {lang === "ru"
                  ? "Что делает Вас компетентным в предоставлении советов и поддержки другим людям?"
                  : "What makes you qualified to offer advice and support to others?"}
              </h2>
              <img
                className="arrow"
                src={active === "first" ? close : open}
                alt=""
                onClick={() =>
                  active === "first" ? setActive("") : setActive("first")
                }
              />
            </div>
            {lang == "ru" ? (
              <p>
                Мой личный и профессиональный опыт делает меня ценным ресурсом
                для оказания советов и эмоциональной поддержки нуждающимся. Не
                прочтенные книги, ни полученная, выученная или услышанная где то
                информация. Благодаря моей способности слушать, сочувствовать и
                предлагать практические советы, основанные на моем личном опыте,
                я могу помочь другим, сталкивающимся с похожими проблемами. Как
                успешный предприниматель, владелец и создатель торговых марок,
                человек который создавал и создает бренды, личный и
                бизнес-консультант и многое другое, я приобрел богатый опыт,
                который может быть применен в различных ситуациях. Сейчас
                счастливо женат, но я также сталкивался с личными трудностями,
                такими как развод, воспитание дочери в одиночку и преодоление
                сложных медицинских проблем с помощью нетрадиционных подходов.
                Это небольшая но важная часть разнообразного личного жизненного
                опыта который дает мне уникальную перспективу, и служит
                источником вдохновения для того чтобы делиться силами и
                поддерживать тех, кто борется с трудностями. Родившись в
                уникальном государстве, в Советском Союзе и пережив многие
                драматические изменения и революции, в том числе распад
                Советского Союза и образование Украины как государства, наблюдая
                свою собственную жизнь и жизнь людей в эти непростые,
                драматические времена, я приобрел глубокое понимание
                человеческого состояния и способность сочувствовать другим.
                Кроме того, я пережил беженство, бегство от войны и начало новой
                жизни с нуля в новой стране. Как тот , кто испытал взлеты и
                падения и был свидетелем и участником множества связанных с этим
                ситуаций и событий , я считаю, что мой разнообразный жизненный
                опыт отличает меня от других, которые, возможно, не проходили
                через подобные этапы борьбы, и это дает мне уверенность в том,
                что я хорошо квалифицирован для того чтобы поддержать и помочь в
                трудную минуту.
              </p>
            ) : (
              <p>
                <b>
                  My personal and professional background makes me a valuable
                  resource
                </b>{" "}
                for providing advice and emotional support to those in need.
                Through my ability to listen, empathize, and offer practical
                advice based on my experience, I can be a great help to others
                who are facing similar challenges. As a successful entrepreneur,
                trademark owner, brand builder, personal and business advisor,
                and more, I have gained a wealth of knowledge that can be
                applied to various situations. Although I am now happily
                married, I have also navigated personal challenges such as
                divorce, raising a daughter on my own, and overcoming medical
                problems through non-traditional approaches. This diverse range
                of experiences gives me a unique perspective that can serve as a
                great source of inspiration to those who are struggling. Having
                been born and raised in the Soviet Union and living through many
                dramatic changes and revolutions, including the collapse of the
                Soviet Union and the subsequent rise of Ukraine as a nation, I
                have gained a deep understanding of the human condition and a
                strong ability to empathize with others. Furthermore, I have
                experienced being a refugee, fleeing from war and starting a new
                life from scratch in a new country. As someone who has
                experienced the ups and downs of life, I believe that my diverse
                life experience sets me apart from others who may not have gone
                through similar struggles, and it gives me the confidence that{" "}
                <b>
                  {" "}
                  I am well-qualified to offer advice and support to others
                </b>
                .
              </p>
            )}
          </li>
          <li className={active === "second" ? "opened second" : "second"}>
            <div className="head">
              <h2>
                {lang === "ru"
                  ? "Каков Ваш подход к помощи людям и что отличает Вас от врачей, наставников или тренеров? "
                  : "What is your approach to helping people and what sets you apart from doctors, mentors, or coaches?"}
              </h2>
              <img
                className="arrow"
                src={active === "second" ? close : open}
                alt=""
                onClick={() =>
                  active === "second" ? setActive("") : setActive("second")
                }
              />
            </div>

            {lang == "ru" ? (
              <p>
                Я не являюсь врачом, наставником или тренером. С большим
                уважением отношусь к опыту и компетенции этих профессионалов, а
                также к академическому знанию и формальному образованию, но не
                хочу, чтобы люди видели меня как отдаленного эксперта. Я хочу
                быть воспринимаемым как друг, доверенное лицо и попутчик в этом
                путешествии, которое мы называем жизнью. Моя роль не заключается
                в том, чтобы показывать или диктовать путь, который должен
                выбрать кто-то другой. Я стремлюсь находить общий язык с людьми
                на человеческом уровне, слушать и предлагать совет и поддержку
                на основе моего уникального жизненного опыта и обширных знаний и
                навыков, которые я приобрел. Я не ставлю рамки и не
                ограничиваюсь заранее заданными формулами и стандартами, а
                подхожу к каждому человеку и ситуации с открытым умом и сердцем.
                В мире, который часто кажется нам чужим а люди изолированными
                друг от друга , я верю в силу человеческих связей и важность
                того, чтобы быть друг для друга источником жизненных сил и
                вдохновения . И я буду продолжать быть таким человеком, и делать
                это, слушая Вас и говоря с Вами.
              </p>
            ) : (
              <p>
                I am not a doctor, mentor, or coach. With great respect for the
                experience and expertise of these professionals, as well as
                academic knowledge and formal education,{" "}
                <b> I don't want people to see me as a distant expert.</b>{" "}
                Instead, I want to be seen as a friend, a confidant, and a
                fellow traveler on this journey we call life. My role is not to
                show or dictate the path that someone should take. I strive to
                connect with people on a human level, to listen and offer advice
                and support based on my unique life experience and extensive
                gained knowledge and expertise.{" "}
                <b>
                  I am not framed or limited by preset formulas and standards
                </b>
                , but rather approach each person and situation with an open
                mind and heart. In a world that often feels disconnected and
                isolated,{" "}
                <b>
                  {" "}
                  I believe in the power of human connection and the importance
                  of showing up for one another. And I will continue to do so
                </b>
                , one conversation at a time.
              </p>
            )}
          </li>
        </ul>
      </div>
    </StyledFAQ>
  );
}
