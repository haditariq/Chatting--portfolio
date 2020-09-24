import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chat from "./screens/chat";

function App() {
  return (
    <div className={"app"}>
      <Router>
        <div className={"app__switchContainer"} >
          <Switch>
            <Route exact path="/" component={Chat} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
