import "./App.css";
import Nav from "./Components/Nav";
import MainSetContent from "./Components/MainSetContent";
import HomeAbout from "./Components/HomeAbout";
// import SetCards from "./Components/SetCards";
import FetchCards from "./Components/FetchCards";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {/* <Nav /> */}
            <HomeAbout />
            <MainSetContent />
          </Route>
          <Route exact path="/sets/:id" component={FetchCards}>
            {/* <FetchCards /> */}
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
