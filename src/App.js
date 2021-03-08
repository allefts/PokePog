import "./App.css";
import Nav from "./Components/Nav";
import MainSetContent from "./Components/MainSetContent";
import SetHeader from "./Components/SetHeader";
import HomeAbout from "./Components/HomeAbout";
import HomeDescription from "./Components/HomeDescription";
import FetchCards from "./Components/FetchCards";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Nav title="POKEPAX" position={"fixed"} />
            <div className="homePage">
              <HomeAbout />
              <HomeDescription />
            </div>
          </Route>
          <Route exact path="/sets">
            <SetHeader />
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
