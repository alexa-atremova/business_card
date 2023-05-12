import React, { useState } from "react";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/main/MainPage";
import PrivacyPolicy from "./pages/privacy/PrivacyPolicy";
import TestimonialPage from "./pages/testimonialPage/TestimonialPage";
import OpeningHorizonsPage from "./pages/openingHorizonsPage/OpeningHorizonsPage";
import StatementPage from "./pages/statementPage/StatementPage";
import StoryPage from "./pages/storyPage/StoryPage";
import Contacts from "./pages/Contacts/Contacts";

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
          path="/"
          element={
            <MainPage handleLanguageChange={handleLanguageChange} lang={lang} />
          }
        />
        <Route
          exact
          path="/privacy"
          element={
            <PrivacyPolicy
              handleLanguageChange={handleLanguageChange}
              lang={lang}
            />
          }
        />
        <Route
          exact
          path="/story"
          element={
            <StoryPage
              handleLanguageChange={handleLanguageChange}
              lang={lang}
            />
          }
        />
        <Route
          exact
          path="/testimonials"
          element={
            <TestimonialPage
              handleLanguageChange={handleLanguageChange}
              lang={lang}
            />
          }
        />
        <Route
          exact
          path="/horizons"
          element={
            <OpeningHorizonsPage
              handleLanguageChange={handleLanguageChange}
              lang={lang}
            />
          }
        />
        <Route
          exact
          path="/statement"
          element={
            <StatementPage
              handleLanguageChange={handleLanguageChange}
              lang={lang}
            />
          }
        />
        <Route
          exact
          path="/contacts"
          element={
            <Contacts handleLanguageChange={handleLanguageChange} lang={lang} />
          }
        />
        <Route
          exact
          path="*"
          element={
            <MainPage handleLanguageChange={handleLanguageChange} lang={lang} />
          }
        />
      </Routes>
    </SApp>
  );
}

export default App;
