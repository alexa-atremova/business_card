import React, { useState } from "react";
import open from "../../assets/open.png";
import close from "../../assets/close.png";
import { StyledFAQ } from "./styles";

export default function FAQ() {
  const [active, setActive] = useState("first");
  return (
    <StyledFAQ>
      <div className="wrapper">
        <div className="text">
          <h1>IMPORTANT FAQ</h1>
        </div>
        <ul>
          <li
            className={active === "first" ? "opened first" : "first"}
            onClick={() =>
              active === "first" ? setActive("") : setActive("first")
            }
          >
            <div className="head">
              <h2>
                What makes you qualified to offer advice and support to others?
              </h2>
              <img
                className="arrow"
                src={active === "first" ? close : open}
                alt=""
              />
            </div>
            <p>
              <b>
                {" "}
                My personal and professional background makes me a valuable
                resource{" "}
              </b>
              for providing advice and emotional support to those in need.
              Through my ability to listen, empathize, and offer practical
              advice based on my experience, I can be a great help to others who
              are facing similar challenges. As a successful entrepreneur,
              trademark owner, brand builder, personal and business advisor, and
              more, I have gained a wealth of knowledge that can be applied to
              various situations. Although I am now happily married, I have also
              navigated personal challenges such as divorce, raising a daughter
              on my own, and overcoming medical problems through non-traditional
              approaches. This diverse range of experiences gives me a unique
              perspective that can serve as a great source of inspiration to
              those who are struggling. Having been born and raised in the
              Soviet Union and living through many dramatic changes and
              revolutions, including the collapse of the Soviet Union and the
              subsequent rise of Ukraine as a nation, I have gained a deep
              understanding of the human condition and a strong ability to
              empathize with others. Furthermore, I have experienced being a
              refugee, fleeing from war and starting a new life from scratch in
              a new country. As someone who has experienced the ups and downs of
              life, I believe that my diverse life experience sets me apart from
              others who may not have gone through similar struggles, and it
              gives me the confidence that{" "}
              <b>I am well-qualified to offer advice and support to others.</b>
            </p>
          </li>
          <li
            className={active === "second" ? "opened second" : "second"}
            onClick={() =>
              active === "second" ? setActive("") : setActive("second")
            }
          >
            <div className="head">
              <h2>
                What is your approach to helping people and what sets you apart
                from doctors, mentors, or coaches?
              </h2>
              <img
                className="arrow"
                src={active === "second" ? close : open}
                alt=""
              />
            </div>

            <p>
              I am not a doctor, mentor, or coach. With great respect for the
              experience and expertise of these professionals, as well as
              academic knowledge and formal education,{" "}
              <b>I don't want people to see me as a distant expert.</b> Instead,
              I want to be seen as a friend, a confidant, and a fellow traveler
              on this journey we call life. My role is not to show or dictate
              the path that someone should take. I strive to connect with people
              on a human level, to listen and offer advice and support based on
              my unique life experience and extensive gained knowledge and
              expertise.
              <b>I am not framed or limited by preset formulas and standards</b>
              , but rather approach each person and situation with an open mind
              and heart. In a world that often feels disconnected and isolated,
              <b>
                I believe in the power of human connection and the importance of
                showing up for one another. And I will continue to do so
              </b>
              , one conversation at a time.
            </p>
          </li>
        </ul>
      </div>
    </StyledFAQ>
  );
}
