import { Button, Input } from "antd";
import Header from "../../components/Header";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="px-8 my-8">
        <div className="text-xl font-semibold mb-8">Login Your Account</div>

        <div>
          <div className="mb-1 text-neutral-500">Email Address</div>
          <Input placeholder="Ex: john@gmail.com" size="large" />
        </div>
        <div className="mt-4">
          <div className="mb-1 text-neutral-500">Password</div>
          <Input.Password size="large" />
        </div>
      </div>
      <div className="mt-4 px-8">
        <Button className="w-full !h-12 font-medium !text-lg " type="primary">
          Login
        </Button>
        <div className="mt-4 text-center">
          Don&apos;t have an account? <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
