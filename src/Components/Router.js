import React from "react";
import {
    HashRouter as Router,//주
    Route,//객
    Redirect,
    Switch
} from "react-router-dom";
import Home from '../Routes/Home';
import Search from '../Routes/Search';
import TV from '../Routes/TV';
import Header from "./Header";
import Detail from "../Routes/Detail";

export default () => (
  <Router>
      <>
        <Header/>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/search" exact component={Search}/>
            <Route path="/tv" exact component={TV}/>
            <Route path="/movie/:id" component={Detail}/>
            <Route pate="/tv/:id" component={Detail}/>
            <Redirect from="*" to="/"/>
        </Switch>
      </>
  </Router>
);
