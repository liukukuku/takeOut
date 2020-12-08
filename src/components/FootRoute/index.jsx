import React from "react";
import { NavLink } from "react-router-dom";
import './style.less'

function Index() {
  return (
    <div className="footeNav">
      <NavLink to="/takeout">
        <dl>
          <dt className="iconfont icon-elemo"></dt>
          <dd>外卖</dd>
        </dl>
      </NavLink>
      <NavLink to="/search">
        <dl>
          <dt className="iconfont icon-compass"></dt>
          <dd>搜索</dd>
        </dl>
      </NavLink>
      <NavLink to="/order">
        <dl>
          <dt className="iconfont icon-weibiaoti-"></dt>
          <dd>订单</dd>
        </dl>
      </NavLink>
      <NavLink to="/my">
        <dl>
          <dt className="iconfont icon-wode"></dt>
          <dd>我的</dd>
        </dl>
      </NavLink>
    </div>
  );
}

export default Index;
