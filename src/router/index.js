import React from "react";

import {
  My,
  Order,
  Search,
  Takeout,
  HomePage,
  Login,
  Myuser,
  Modifyuser,
  Editaddress,
  Changepassword
} from "@/router/componens";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/changepassword" component={Changepassword}></Route>
        <Route path="/editaddress" component={Editaddress}></Route>
        <Route path="/modifyuser" component={Modifyuser}></Route>
        <Route path="/homePage" component={HomePage}></Route>
        <Route path="/takeout" component={Takeout}></Route>
        <Route path="/search" component={Search}></Route>
        <Route path="/myuser" component={Myuser}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/order" component={Order}></Route>
        <Route path="/my" component={My}></Route>
        <Redirect to="/takeout"></Redirect>
      </Switch>
    </BrowserRouter>
  );
}
