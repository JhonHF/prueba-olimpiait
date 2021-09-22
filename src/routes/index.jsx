import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PageNotFound } from "../components/pages/pageNotFound";
import { routes } from "./routesList";

export const AppRoutes = () => {
  return (
    <Router>
      <Switch>
        {routes.map((params, index) => (
          <Route {...params} key={index} exact />
        ))}
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
};
