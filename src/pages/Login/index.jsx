import { Button, Form, Input, message } from "antd";
import Header from "../../components/Header";
import { Link, useNavigate } from "react-router-dom";

import { loginUser } from "../../utils/apis";

const Login = () => {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    const resp = await loginUser(values);
    console.log(resp, "status");
    if (resp.success) {
      message.success("Login Success");
      navigate("/home");
    } else {
      message.error("Invalid Details");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <Header />

      <div className="mt-8 px-8">
        <div className="text-xl font-semibold mb-8">Login Your Account</div>
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
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Email ID"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
              {
                type: "email",
                message: "Please enter correct email address!",
              },
            ]}
          >
            <Input size="large" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password size="large" />
          </Form.Item>

          <Form.Item>
            <Button
              className="!h-12 font-medium !text-lg w-full mt-4"
              type="primary"
              htmlType="submit"
            >
              Login
            </Button>
          </Form.Item>
        </Form>

        <div className="mt-4 text-center">
          Don&apos;t have an account? <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
