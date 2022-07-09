import { Button, Form, Input } from "antd";
import React from "react";
import * as S from "../pwedit/PasswordEdit.styles";

export default function PhoneNumberEdit() {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <S.Container>
      <S.Title>비밀번호 변경</S.Title>
      <S.Wrapper>
        <Form
          name="basic"
          labelCol={{ span: 10 }}
          wrapperCol={{ span: 20 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="현재 비밀번호"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            label="새 비밀번호"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            label="새 비밀번호 확인"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 15, span: 20 }}>
            <Button htmlType="submit"> 변경하기 </Button>
          </Form.Item>
        </Form>
      </S.Wrapper>
    </S.Container>
  );
}
