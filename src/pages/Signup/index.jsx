import { Button, Input } from "antd";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import FeatureImg from "../../assets/images/feature.png";

const Signup = () => {
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
        <div className="text-neutral-500">Tell us more about yourself</div>
        <div className="mt-8">
          <div className="mb-1 text-neutral-500">Email Address</div>
          <Input placeholder="Ex: john@gmail.com" size="large" />
        </div>
        <div className="mt-4">
          <div className="mb-1 text-neutral-500">Password</div>
          <Input.Password size="large" />
        </div>
        <div className="mt-4">
          <div className="mb-1 text-neutral-500">Mobile Number</div>
          <Input placeholder="Ex: 9876543210" size="large" />
        </div>
        <div className="mt-4">
          <div className="mb-1 text-neutral-500">Username</div>
          <Input placeholder="Ex: god123" size="large" />
        </div>
      </div>
      <div className="mt-4 px-8">
        <Button className="w-full !h-12 font-medium !text-lg " type="primary">
          Create Account
        </Button>
        <div className="mt-4 text-center">
          Already have an account? <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
