import React from "react";
import HeadTitle from "@/components/HeadTitle";
import { connect } from "react-redux";
import { loginyzfun } from "@/actions/loginyz";
import { changepassfun } from "@/actions/changepassword";
import { Form, Input, Button ,Modal} from "antd";
import "@/pages/changepassword/styles.less";

function Index(props) {
  const { obj } = props;
  const [Tips, setTips] = React.useState("");
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  React.useEffect(() => {
    props.loginyzfun();
  }, []);

  const yzfun = () => {
    props.loginyzfun();
  };

  const onFinish = (values) => {
    props.changepassfun(values).then(res=>{
        if(res.payload.data.success==="密码修改成功"){
            props.history.push("/myuser")
        }else{
            setIsModalVisible(true);
            setTips("密码修改失败");
        }
    })
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <HeadTitle val={"重置密码"}></HeadTitle>
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
      <Form
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "账号不能为空!",
            },
          ]}
        >
          <Input placeholder="账号" />
        </Form.Item>

        <Form.Item
          name="oldpassWord"
          rules={[
            {
              required: true,
              message: "旧密码不能为空!",
            },
          ]}
        >
          <Input placeholder="旧密码" />
        </Form.Item>

        <Form.Item
          name="newpassword"
          rules={[
            {
              required: true,
              message: "新密码不能为空!",
            },
          ]}
        >
          <Input placeholder="请输入新密码" />
        </Form.Item>

        <Form.Item
          name="confirmpassword"
          rules={[
            {
              required: true,
              message: "确认密码不能为空!",
            },
          ]}
        >
          <Input placeholder="请确认密码" />
        </Form.Item>

        <Form.Item
          name="captcha_code"
          rules={[
            {
              required: true,
              message: "验证码不能为空!",
            },
          ]}
        >
          <div className="loginyan">
            <Input placeholder="验证码" className="loginipt" />
            <div className="loginrig">
              <img className="maginrig" src={obj.code} alt="" />
              <span
                onClick={() => {
                  yzfun();
                }}
              >
                看不清
                <br />
                换一张
              </span>
            </div>
          </div>
        </Form.Item>

        <Form.Item>
          <Button className="loginbutton" type="primary" htmlType="submit">
            确认修改
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default connect(
  (state) => {
    return { obj: state.Loginyz.obj };
  },
  {
    loginyzfun,
    changepassfun,
  }
)(Index);
