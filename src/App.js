import React from "react";
import "./App.css";
import { AddUsers } from "./AddUsers";
import { Users } from "./Users";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Users} />
        <Route path="/addUsers" component={AddUsers} />
      </Switch>
    </Router>
  );
};
