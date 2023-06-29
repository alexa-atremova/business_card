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
  height: 20px;

  .border {
    height: 5px;
    margin-top: 10px;
    width: 50%;
    border-top: 1px solid ${theme.colors.highlighted};
  }
  .line {
    width: 100%;
    margin-top: 10px;
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
