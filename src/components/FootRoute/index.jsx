import React from "react";
import { NavLink } from "react-router-dom";
function Index() {
  return (
    <div>
      <NavLink to="/takeout">
        <dl>
          <dt></dt>
          <dd>外卖</dd>
        </dl>
      </NavLink>
      <NavLink to="/search">
        <dl>
          <dt></dt>
          <dd>搜索</dd>
        </dl>
      </NavLink>
      <NavLink to="/order">
        <dl>
          <dt></dt>
          <dd>订单</dd>
        </dl>
      </NavLink>
      <NavLink to="/my">
        <dl>
          <dt></dt>
          <dd>我的</dd>
        </dl>
      </NavLink>
    </div>
  );
}

export default Index;
