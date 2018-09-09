import React from "react";
import { Route, IndexRoute, Switch } from "react-router";

// import App from "./components/App";
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";
import WorkDetail from "./components/WorkDetail";

export default (
  <Switch>
    <Route path="/" component={Home} />
    <Route path="about" component={About} />
    <Route path="Work" component={Work} />
    <Route path="Work/:id" component={Work} />
    <Route path="Work/details/:id" component={WorkDetail} />
    <Route path="contact" component={About} />
  </Switch>
);
