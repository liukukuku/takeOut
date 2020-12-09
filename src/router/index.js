import React from "react";
<<<<<<< HEAD
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { My, Order, Search, Takeout, HomePage } from "@/router/componens";
=======
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { My, Order, Search, Takeout, Login } from "@/router/componens";
>>>>>>> ce1848b84f7e05e4a748f144a7ffde18cb32e56f

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/homePage" component={HomePage}></Route>
        <Route path="/takeout" component={Takeout}></Route>
        <Route path="/search" component={Search}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/order" component={Order}></Route>
        <Route path="/my" component={My}></Route>
        <Redirect to="/takeout"></Redirect>
      </Switch>
    </BrowserRouter>
  );
}
