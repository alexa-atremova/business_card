import React, { useState } from "react";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import MainPage from "./components/pages/main/MainPage";
import PrivacyPolicy from "./components/pages/privacy/PrivacyPolicy";

const SApp = styled.div`
  overflow: hidden;
  user-select: none;
`;
function App() {
  const [lang, setLang] = useState("en");

  function handleLanguageChange(lang) {
    setLang(lang);
  }
  return (
    <SApp>
      <Routes>
        <Route
          exact
          path=""
          element={
            <MainPage handleLanguageChange={handleLanguageChange} lang={lang} />
          }
        />
        <Route
          path="*"
          element={
            <MainPage handleLanguageChange={handleLanguageChange} lang={lang} />
          }
        />
        <Route
          path="/privacy"
          element={
            <PrivacyPolicy
              handleLanguageChange={handleLanguageChange}
              lang={lang}
            />
          }
        />
      </Routes>
    </SApp>
  );
}

export default App;
