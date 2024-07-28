import React from "react";
import { Col, Form, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";

function AddStudent() {
  const navigate = useNavigate();
  const onFinish = (values) => {
    values.studentNumber = parseInt(values.studentNumber);
    console.log("Success:", values);
    navigate("/");
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Col className="py-10">
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Öğrenci NO"
          name="studentNumber"
          rules={[
            {
              required: true,
              //type: "number",
              message: "Lütfen öğrenci no giriniz!",
            },
          ]}
        >
          <Input placeholder="" type="number" />
        </Form.Item>

        <Form.Item
          label="İsim"
          name="name"
          rules={[
            {
              required: true,
              message: "Lütfen isim giriniz!",
            },
          ]}
        >
          <Input placeholder="" />
        </Form.Item>
        <Form.Item label="Ders Notu" name="lesson">
          <Input placeholder="" />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Öğrenci Ekle
          </Button>
        </Form.Item>
      </Form>
    </Col>
  );
}

export default AddStudent;
