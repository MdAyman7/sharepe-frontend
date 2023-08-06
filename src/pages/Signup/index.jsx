import { Button, Form, Input, message } from "antd";
import Header from "../../components/Header";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import FeatureImg from "../../assets/images/feature.png";
import { signupUser } from "../../utils/apis";

const Signup = () => {
  const [searchParams] = useSearchParams();
  const contractId = searchParams.get("contractId");

  const navigate = useNavigate();
  const onFinish = async (values) => {
    const { success } = await signupUser(values);
    if (success) {
      message.success("Account created successfully");
      if (contractId) {
        navigate(`/contract/${contractId}`);
      } else {
        navigate("/login");
      }
    } else {
      message.error("Either email or username already exists");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <Header />
      <div className="px-8 my-8">
        <div className="flex justify-center items-center my-4">
          <img src={FeatureImg} width={160} alt="feature" className="mx-auto" />
        </div>
        <div className="text-center mb-8 text-base mt-2">
          Simplifying fractional holdings for all investors.
        </div>
        <div className="text-lg font-medium">Welcome to SharePe</div>
        <div className="text-neutral-500 mb-8">Tell us more about yourself</div>
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

          <Form.Item
            label="Username"
            name="user_name"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input size="large" />
          </Form.Item>

          <Form.Item
            label="Mobile Number"
            name="phone"
            rules={[
              {
                required: true,
                message: "Please input your mobile number!",
              },
            ]}
          >
            <Input size="large" />
          </Form.Item>

          <Form.Item>
            <Button
              className="!h-12 font-medium !text-lg w-full mt-4"
              type="primary"
              htmlType="submit"
            >
              Create Account
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className="mt-4 px-8">
        <div className="mt-4 text-center">
          Already have an account? <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
