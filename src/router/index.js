import React from "react";

import {
  My,
  Order,
  Search,
  Takeout,
  HomePage,
  Login,
  Restaurants,
  SearchCity,
  Myuser,
} from "@/router/componens";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        {/* 搜索城市 */}
        <Route path="/searchCity" component={SearchCity}></Route>
        <Route path="/homePage" component={HomePage}></Route>
        <Route path="/takeout" component={Takeout}></Route>
        <Route path="/search" component={Search}></Route>
        <Route path="/restaurants/:id" component={Restaurants}></Route>
        <Route path="/myuser" component={Myuser}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/order" component={Order}></Route>
        <Route path="/my" component={My}></Route>
        <Redirect to="/takeout"></Redirect>
      </Switch>
    </BrowserRouter>
  );
}
