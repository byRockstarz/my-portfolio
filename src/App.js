import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./components/layout";
import ExperiencePage from "./pages/experience";
import HomePage from "./pages/home";
import AboutMePage from "./pages/aboutme";
import SkillPage from "./pages/skill";

const App = () => {
  return (
    <div>
      <Layout />
      <HomePage />
      <ExperiencePage />
      <SkillPage />
      <AboutMePage />
    </div>
  );
};

export default App;
