import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Components/auth/Login";
import Navbar from "./Components/layout/Navbar";
import Register from "./Components/auth/Register";
import Landing from "./Components/layout/Landing";
import Alert from "./Components/layout/Alert";
import { Provider } from "react-redux";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";
import Dashboard from "./Components/dashboard/Dashboard";
import PrivateRoute from "./Components/routing/PrivateRoute";
import CreateProfile from "./Components/profile-forms/CreateProfile";
import AddExperience from "./Components/profile-forms/AddExperience";
import AddEducation from "./Components/profile-forms/AddEducation";
import EditProfile from "./Components/profile-forms/EditProfile";
import store from "./store";

import "./App.css";
import { addExperience } from "./actions/profile";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
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
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute
                exact
                path="/create-profile"
                component={CreateProfile}
              />
              <PrivateRoute
                exact
                path="/edit-profile"
                component={EditProfile}
              />
              <PrivateRoute
                exact
                path="/add-experience"
                component={AddExperience}
              />
              <PrivateRoute
                exact
                path="/add-education"
                component={AddEducation}
              />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
