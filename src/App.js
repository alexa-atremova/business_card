import React, { useState } from "react";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import MainPage from "./components/pages/main/MainPage";
import PrivacyPolicy from "./components/pages/privacy/PrivacyPolicy";
import Story from "./components/Story/Story";
import Testimonials from "./components/Testimonials/Testimonials";
import TestimonialPage from "./components/pages/testimonialPage/TestimonialPage";
import OpeningHorizonsPage from "./components/pages/openingHorizonsPage/OpeningHorizonsPage";
import StatementPage from "./components/pages/statementPage/StatementPage";
import StoryPage from "./components/pages/storyPage/StoryPage";

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
        <Route
          path="/story"
          element={
            <StoryPage
              handleLanguageChange={handleLanguageChange}
              lang={lang}
            />
          }
        />
        <Route
          path="/testimonials"
          element={
            <TestimonialPage
              handleLanguageChange={handleLanguageChange}
              lang={lang}
            />
          }
        />
        <Route
          path="/horizons"
          element={
            <OpeningHorizonsPage
              handleLanguageChange={handleLanguageChange}
              lang={lang}
            />
          }
        />
        <Route
          path="/statement"
          element={
            <StatementPage
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
