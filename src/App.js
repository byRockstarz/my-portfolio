import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./components/layout";
import ExperiencePage from "./pages/experience";
import HomePage from "./pages/home";
import AboutMe from "./pages/aboutme";

const App = () => {
  return (
    <div>
      <Layout />
      <HomePage />
      <ExperiencePage />
      <AboutMe />
    </div>
  );
};

export default App;
