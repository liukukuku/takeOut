import React from "react";
import HeadTitle from "@/components/HeadTitle";
import "@/pages/editaddress/styles.less";

function index() {
  return (
    <div>
      <HeadTitle val={"编辑地址"}></HeadTitle>
      <div className="address-box">
        <p>新增地址</p>
        <p className="iconfont icon-jiantouyou rig"></p>
      </div>
    </div>
  );
}

export default index;
