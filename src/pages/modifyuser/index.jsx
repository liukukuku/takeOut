import React from "react";
import HeadTitle from "@/components/HeadTitle";
import { Form, Input, Button } from "antd";
import "@/pages/modifyuser/styles.less";

function index(props) {
  const onFinish = (values) => {
    console.log("Success:", values);
    localStorage.setItem("modify", values.modifyuser);
    props.history.push("/myuser");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <HeadTitle val={"修改用户名"}></HeadTitle>
      <section>
        <Form
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            name="modifyuser"
            rules={[
              {
                required: true,
                message: "用户名不能为空!",
              },
            ]}
          >
            <Input className="ipt" />
          </Form.Item>
          <span style={{ color: "gray" }}>
            用户名只能修改一次（5-24字符之间）
          </span>
          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
              确认修改
            </Button>
          </Form.Item>
        </Form>
      </section>
    </div>
  );
}

export default index;
