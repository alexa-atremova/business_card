import styled from "styled-components";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Heder";
import Main from "./components/Main/Main";
import Services from "./components/Services/Services";
import Testimonials from "./components/Testimonials/Testimonials";

const SApp = styled.div`
  overflow: hidden;
  user-select: none;
`;
function App() {
  return (
    <SApp>
      <Header />
      <Main />
      <Services />
      <FAQ />
      <Testimonials />
      <Footer />
    </SApp>
  );
}

export default App;
