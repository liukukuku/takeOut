import React from "react";
import HeadTitle from "@/components/HeadTitle";
import "@/pages/myuser/styles.less";
import { connect } from "react-redux";
import { Modal } from "antd";

function Index(props) {
  const { user } = props;
  const [name, setname] = React.useState("");
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [Tips, setTips] = React.useState("");

  React.useEffect(() => {
    if (localStorage.getItem("modify")) {
      let a = localStorage.getItem("modify");
      setname(a);
    } else {
      setname(user.username);
    }
  }, []);

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <HeadTitle val={"账号信息"}></HeadTitle>
      <Modal
        maskClosable={false}
        cancelText="取消"
        okText="确定"
        closable={false}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>{Tips}</p>
      </Modal>
      <section>
        <div
          className="myuser-tou"
          onClick={() => {
            setIsModalVisible(true);
            setTips("暂时无法上传头像");
          }}
        >
          <p>头像</p>
          <p>
            <img src="" alt="" />
          </p>
          <p className="iconfont icon-jiantouyou"></p>
        </div>
        <div
          className="myuser-tou"
          onClick={() => {
            if (localStorage.getItem("modify")) {
              setIsModalVisible(true);
              setTips("以修改过一次用户名 无法在修改");
            } else {
              props.history.push("/modifyuser");
            }
          }}
        >
          <p>用户名</p>
          <p>{name}</p>
          <p className="iconfont icon-jiantouyou"></p>
        </div>
        <div
          className="myuser-tou"
          onClick={() => {
            props.history.push("/editaddress");
          }}
        >
          <p>收货地址</p>
          <p></p>
          <p className="iconfont icon-jiantouyou"></p>
        </div>
        <div className="myuser-sty">账号绑定</div>
        <div
          className="myuser-tou"
          onClick={() => {
            setIsModalVisible(true);
            setTips("请在手机APP中设置");
          }}
        >
          <p>
            <span className="iconfont icon-phone ys"></span>手机
          </p>
          <p></p>
          <p className="iconfont icon-jiantouyou"></p>
        </div>
        <div className="myuser-sty">安全设置</div>
        <div
          className="myuser-tou"
          onClick={() => {
            props.history.push("/changepassword");
          }}
        >
          <p>登陆密码</p>
          <p>修改</p>
          <p className="iconfont icon-jiantouyou"></p>
        </div>
        <div className="myuser-tui">
          <button>退出登陆</button>
        </div>
      </section>
    </div>
  );
}

export default connect((state) => {
  return { user: state.Login.user };
}, {})(Index);
