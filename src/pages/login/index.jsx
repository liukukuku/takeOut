import React from "react";
import HeadTitle from "@/components/HeadTitle";
import "./styles.less";
import { Form, Input, Button, } from "antd";

function Index(props) {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
        <HeadTitle val={"账号密码"}></HeadTitle>
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

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Index;
