import "./App.css";
import Nav from "./Components/Nav";
import HomeBody from "./Components/HomeBody";
import pokemon from "pokemontcgsdk";

const API_KEY = "06e7f442-7fef-42f2-b382-94c7e94a56e3";

pokemon.configure({ apiKey: API_KEY });

const App = () => {
  return (
    <div className="App">
      <Nav />
      <HomeBody />
    </div>
  );
};

export default App;
