import React, { useState } from "react";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/main/MainPage";
import PrivacyPolicy from "./pages/privacy/PrivacyPolicy";
import StoryPage from "./pages/storyPage/StoryPage";

import { theme } from "./res/themes";
import Thank from "./pages/thank/Thank";
import AboutMe from "./pages/aboutme/AboutMe";
import PricingPage from "./pages/pricing/PricingPage";
import AssistancePage from "./pages/assistance/AssistancePage";
import Bespoke_Assistance from "./components/Bespoke_Assistance/Bespoke_Assistance";
import Bespoke_AssistancePage from "./pages/bespoke_assistance/Bespoke_AssistancePage";
import PowerConversationPage from "./pages/powerConversationPage/PowerConversationPage";
import CredentialsPage from "./pages/credentials/CredentialsPage";
import TestimonialsPage from "./pages/testimonials/TestimonialsPage";

const SApp = styled.div`
  overflow: hidden;
  user-select: none;
  background-color: ${theme.colors.dark_background};
`;
function App() {
  const [lang, setLang] = useState(window.localStorage.getItem("lang") || "en");

  function handleLanguageChange(lang) {
    setLang(lang);
    window.localStorage.setItem("lang", lang);
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
          path="/thank"
          element={
            <Thank handleLanguageChange={handleLanguageChange} lang={lang} />
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
          path="/aboutme"
          element={
            <AboutMe handleLanguageChange={handleLanguageChange} lang={lang} />
          }
        />

        <Route
          exact
          path="/pricing"
          element={
            <PricingPage
              handleLanguageChange={handleLanguageChange}
              lang={lang}
            />
          }
        />

        <Route
          exact
          path="/my_sincere_approach"
          element={
            <Bespoke_AssistancePage
              handleLanguageChange={handleLanguageChange}
              lang={lang}
            />
          }
        />

        <Route
          exact
          path="/power_of_conversation"
          element={
            <PowerConversationPage
              handleLanguageChange={handleLanguageChange}
              lang={lang}
            />
          }
        />
        <Route
          exact
          path="/assistance"
          element={
            <AssistancePage
              handleLanguageChange={handleLanguageChange}
              lang={lang}
            />
          }
        />
        <Route
          exact
          path="/credentials"
          element={
            <CredentialsPage
              handleLanguageChange={handleLanguageChange}
              lang={lang}
            />
          }
        />
        <Route
          exact
          path="/testimonials"
          element={
            <TestimonialsPage
              handleLanguageChange={handleLanguageChange}
              lang={lang}
            />
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
