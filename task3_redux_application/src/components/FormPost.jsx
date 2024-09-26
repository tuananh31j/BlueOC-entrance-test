import { Button, Form, Input, message, Space } from "antd";
import { useAddPostMutation } from "../services/post.service";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const FormPost = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [mutate, { isError, isSuccess, isLoading }] = useAddPostMutation();
  const onFinish = (values) => {
    mutate(values);
  };
  useEffect(() => {
    if (isError) {
      messageApi.error("Error while creating post");
    }
    if (isSuccess) {
      form.resetFields();
      navigate("/");
    }
  }, [isError, isSuccess, isLoading]);
  return (
    <>
      {contextHolder}
      <Form
        form={form}
        onFinish={onFinish}
        name="validateOnly"
        layout="vertical"
        autoComplete="off"
      >
        <Form.Item
          name="title"
          label="Title"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="body"
          label="Body"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Space>
            <Button type="primary" htmlType="submit" loading={isLoading}>
              Submit
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </>
  );
};
export default FormPost;
