import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chat from "./screens/chat";
import register from "./screens/register";
import { Provider } from "react-redux";
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className={"app"}>
        <Router>
          <div className={"app__switchContainer"}>
            <Switch>
              <Route exact path="/" component={register} />
              <Route exact path="/inbox" component={Chat} />
            </Switch>
          </div>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
