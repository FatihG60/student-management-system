import React, { useState } from "react";
import { Form, Input } from "antd";

const EditForm = ({ handleOk, selectedData, setSelectedData }) => {
  const [lesson, setLesson] = useState("");
  return (
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
      onFinish={handleOk}
      onFinishFailed={handleOk}
      autoComplete="off"
    >
      <Form.Item label="Öğrenci NO" name="studentNumber">
        <Input disabled placeholder={selectedData.studentNumber} />
      </Form.Item>

      <Form.Item label="İsim" name="name">
        <Input disabled placeholder={selectedData.name} />
      </Form.Item>
      <Form.Item label="Ders Notu" name="lesson">
        <Input defaultValue={selectedData.lesson} onChange={(e) => setLesson(e.target.value)}/>
      </Form.Item>
    </Form>
  );
};

export default EditForm;
