import React from "react";

import { My, Order, Search, Takeout, HomePage, Login, Restaurants,  } from "@/router/componens";
import { BrowserRouter, Switch, Route, Redirect, } from "react-router-dom";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/homePage" component={HomePage}></Route>
        <Route path="/takeout" component={Takeout}></Route>
        <Route path="/search" component={Search}></Route>
        <Route path="/restaurants/:id" component={Restaurants}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/order" component={Order}></Route>
        <Route path="/my" component={My}></Route>
        <Redirect to="/takeout"></Redirect>
      </Switch>
    </BrowserRouter>
  );
}
