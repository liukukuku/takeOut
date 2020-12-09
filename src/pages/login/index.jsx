import React, { useState } from "react";
import HeadTitle from "@/components/HeadTitle";
import "@/pages/login/styles.less";
import { Form, Input, Button } from "antd";
import { connect } from "react-redux";
import { loginyzfun } from "@/actions/loginyz";
import { loginfun } from "@/actions/login";

function Index(props) {
  const [count, setCount] = useState(0);
  const { obj } = props;
  
  React.useEffect(() => {
    props.loginyzfun()
      .then(res => setCount(res.payload.data.code))
  }, []);

  const yzfun = async () => {
    let data = await props.loginyzfun()
  };

  const onFinish = (values) => {
    console.log(values)
    props.loginfun(values)
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="loginbox">
<img src={count} />
      <HeadTitle val={"密码登录"}></HeadTitle>
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
          name="password"
          rules={[
            {
              required: true,
              message: "密码不能为空!",
            },
          ]}
        >
          <Input.Password placeholder="密码" />
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

        <div className="divstyle">
          温馨提示：未注册过的账号，登陆时将自动注册注册过的用户可凭账号密码登陆
        </div>

        <Form.Item>
          <Button className="loginbutton" type="primary" htmlType="submit">
            登陆
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
    loginfun,
  }
)(Index);
