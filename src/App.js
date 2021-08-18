import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./components/layout";
import HomePage from "./pages/home";

const App = () => {
  return (
    <div>
      <Layout />
      <HomePage />
    </div>
  );
};

export default App;
