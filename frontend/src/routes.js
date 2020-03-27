import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import Header from "./components/header";
import Logon from "./pages/Logon";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import NewIncident from "./pages/NewIncident";

function DefaultNavbar({ children, toggleTheme }) {
  return (
    <>
      <Header toggleTheme={toggleTheme} />
      {children}
    </>
  );
}

const Routes = props => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Logon />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <DefaultNavbar toggleTheme={props.toggleTheme}>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/incidents/new">
          <NewIncident />
        </Route>
      </DefaultNavbar>
    </Switch>
  </BrowserRouter>
);

export default Routes;
