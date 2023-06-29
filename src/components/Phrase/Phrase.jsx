import React from "react";
import styled from "styled-components";
import { theme } from "../../res/themes";

const ParagraphItalic = styled.div`
  display: flex;
  flex-direction: column;
  color: ${theme.colors.text_color};
  font-family: "Noto Serif";
  text-align: center;
  font-style: italic;
  font-size: 20px;
  line-height: 2;
  margin: 0;
  margin-top: 50px;
  width: 100%;
  max-width: 1200px;
  @media (max-width: 1359px) {
    font-size: 18px;
    max-width: 700px;
  }
  @media (max-width: 767px) {
    font-size: 16px;
    line-height: 30px;
    max-width: 500px;
  }
  @media (max-width: 539px) {
    max-width: 320px;
  }
`;
export default function Phrase() {
  return (
    <ParagraphItalic>
      You're not alone. I've walked the path and faced the struggles firsthand,
      so I understand the weight on your shoulders. But take heart, for tomorrow
      holds a promise that can transform your life in an instant.
    </ParagraphItalic>
  );
}
