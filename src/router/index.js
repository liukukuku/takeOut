import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { My, Order, Search, Takeout, Login } from "@/router/componens";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
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
