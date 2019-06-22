import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Components/auth/Login";
import Navbar from "./Components/layout/Navbar";
import Register from "./Components/auth/Register";
import Landing from "./Components/layout/Landing";
import Alert from "./Components/layout/Alert";
import { Provider } from "react-redux";
import store from "./store";

import "./App.css";

const App = () => (
  <Provider store={store}>
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path="/" component={Landing} />
        <section className="container">
          <Alert />
          <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </section>
      </Fragment>
    </Router>
  </Provider>
);

export default App;
