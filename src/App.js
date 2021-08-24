import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./components/layout";
import ExperiencePage from "./pages/experience";
import HomePage from "./pages/home";
import AboutMePage from "./pages/aboutme";
import SkillPage from "./pages/skill";
import { AppStyled } from "./styles/app";

const App = () => {
  return (
    <AppStyled>
      <Layout />
      <HomePage />
      <ExperiencePage />
      <SkillPage />
      <AboutMePage />
    </AppStyled>
  );
};

export default App;
