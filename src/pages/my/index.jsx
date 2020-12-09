import React from "react";
import FootRoute from "@/components/FootRoute";
import HeadTitle from "@/components/HeadTitle";
import "@/pages/my/styles.less";

function Index(props) {
  const loginfun = () => {
    console.log(1);
    props.history.push("/login");
  };

  return (
    <div>
      <HeadTitle></HeadTitle>
      <section>
        <div
          className="wy-box"
          onClick={() => {
            loginfun();
          }}
        >
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <p>登陆/注册</p>
            <p>
              <span className="iconfont icon-phone"></span>暂无绑定手机号
            </p>
          </div>
          <div className="iconfont icon-jiantouyou"></div>
        </div>
        <div className="wy-top">
          <div className="wy-top-div1">
            <p>
              <span>0.00</span>元
            </p>
            <p className="clorgray">我的余额</p>
          </div>
          <div className="wy-top-div2">
            <p>
              <span>3</span>个
            </p>
            <p className="clorgray">我的优惠</p>
          </div>
          <div className="wy-top-div3">
            <p>
              <span>0</span>分
            </p>
            <p className="clorgray">我的积分</p>
          </div>
        </div>
        <div className="wy-ctn">
          <div className="wy-ctn-div1">
            <p className="iconfont icon-dingdan_huabanfuben tubiao"></p>
            <div>
              <p>我的账单</p>
              <p className="iconfont icon-jiantouyou rig"></p>
            </div>
          </div>
          <div className="wy-ctn-div1">
            <p className="iconfont icon-qianbao tubiao1"></p>
            <div>
              <p>积分商城</p>
              <p className="iconfont icon-jiantouyou rig"></p>
            </div>
          </div>
          <div className="wy-ctn-div1">
            <p className="iconfont icon-huangguan tubiao2"></p>
            <div>
              <p>饿了么会员卡</p>
              <p className="iconfont icon-jiantouyou rig"></p>
            </div>
          </div>
        </div>
        <div className="wy-bom">
          <div className="wy-bom-div1">
            <p className="iconfont icon-dingdan_huabanfuben tubiao3"></p>
            <div>
              <p>服务中心</p>
              <p className="iconfont icon-jiantouyou rig"></p>
            </div>
          </div>
          <div className="wy-bom-div1">
            <p className="iconfont icon-fuwu tubiao3"></p>
            <div>
              <p>下载饿了么APP</p>
              <p className="iconfont icon-jiantouyou rig"></p>
            </div>
          </div>
        </div>
      </section>
      <FootRoute />
    </div>
  );
}

export default Index;
