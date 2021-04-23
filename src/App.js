import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TabContainer from "./components/tabs/TabContainer";
import Dummy from "./components/Dummy";
import Tab from "./components/tabs/Tab";

function App() {
  return (
    <Router>
      <Link className="link" to="/tabs">Tabs</Link>
      <Link className="link" to="/click-enter">ClickEnter</Link>
      <Link className="link" to="/cors-test">CORS Test</Link>

      <Switch>
        <Route path="/cors-test">
          <img src="https://jaibatrik.page/img/profile.webp" alt="" />
        </Route>
        <Route path="/click-enter">
          <div
            className="clickable"
            onClick={console.log}
            tabIndex="0"
            role="button"
          ></div>
        </Route>
        <Route path="/tabs">
          <TabContainer>
            <Tab header="Header 1">
              <Dummy text="Text 1"></Dummy>
            </Tab>
            <Tab header={<Dummy text="Component Header 2"></Dummy>}>
              <Dummy text="Text 2"></Dummy>
            </Tab>
          </TabContainer>
        </Route>
        <Route path="/">
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
