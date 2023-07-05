import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../../res/themes";

const Border = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 50px;
  max-width: 1200px;
  width: 80%;
  height: 14px;
  @media (max-width: 1359px) {
  }
  @media (max-width: 767px) {
    margin-top: 30px;
    margin-bottom: 30px;
  }
  @media (max-width: 539px) {
  }
  .border {
    height: 5px;
    margin-top: 7px;
    width: 50%;
    border-top: 1px solid ${theme.colors.highlighted};
  }
  .line {
    width: 100%;
    margin-top: 7px;
    height: 5px;
    border-top: 2px solid ${theme.colors.highlighted};
  }
`;
function Lines() {
  return (
    <Border>
      <div className="border" />
      <div className="line" />
      <div className="border" />
    </Border>
  );
}

export default Lines;
