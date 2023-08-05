import React from "react";
import Header from "../../components/Header";
import { Button, Tabs } from "antd";
import Content from "./Content";
import MyHoldings from "./MyHoldings";

import plusIcon from "../../assets/svg/plus.svg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [activeTab, setActiveTab] = React.useState("1");

  const navigate = useNavigate();

  const onChange = (key) => {
    setActiveTab(key);
  };

  const items = [
    {
      key: "1",
      label: "Explore",
      children: <Content />,
    },
    {
      key: "2",
      label: "My Holdings",
      children: <MyHoldings />,
    },
  ];

  return (
    <div>
      <Header />

      <div>
        <Tabs
          defaultActiveKey="1"
          items={items}
          onChange={onChange}
          centered
          tabBarStyle={{
            background: "#00A685", // primary color
            color: "white",
            accentColor: "white",
          }}
          size="large"
        />
      </div>

      <div className="absolute bottom-4 left-4 right-4  container max-w-[608px] mx-auto">
        <Button
          type="primary"
          size="large"
          className="w-full !h-14 font-medium !text-lg "
          onClick={() => {
            navigate("/create");
          }}
        >
          <div className="flex items-center">
            <img src={plusIcon} alt="plus" />
            <div className="text-center w-full">Create New Contract</div>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default Home;
