import { Button, Tag } from "antd";
import chitImage from "../../../src/assets/images/chit.png";
import Countdown from "react-countdown";

const HoldingsCard = ({ data }) => {
  const {
    title,
    totalAmount,
    yourInvestment,
    durationDays,
    remainingPoolAmount,
  } = data;

  const blockData = [
    {
      name: "Your Investment",
      value: yourInvestment,
    },
    {
      name: "Total amount",
      value: totalAmount,
    },
    {
      name: "Duration",
      value: `${durationDays} Days`,
    },
    {
      name: "Min. Interest rate",
      value: yourInvestment,
    },
  ];
  return (
    <div className="bg-white shadow-md rounded-md ">
      <div className="p-4">
        <div className="flex justify-center -mt-8 z-1">
          <img
            src={chitImage}
            style={{
              width: 64,
              height: 64,
            }}
            alt="random"
            className="rounded-lg"
          />
        </div>
        <div className="mt-2 mb-4">
          <div className="text-2xl font-semibold">{title}</div>
          <Tag color="orange" className="mt-1">
            Pending Pool Payment Completion
          </Tag>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          {blockData.map((ele) => (
            <div key={ele.name}>
              <div className="text-sm text-gray-400">{ele.name}</div>
              <div className="text-xl font-semibold">
                ₹{ele.value.toLocaleString("en-IN")}
              </div>
            </div>
          ))}
        </div>
        <div className="border w-full border-dashed border-neutral-300" />

        <div className="mt-4">
          <div className="flex justify-between items-center">
            <div className="text-base text-neutral-500">
              Time left for bidding
            </div>
            <div className="text-right text-lg text-black font-medium">
              <Countdown date={Date.now() + 100000} />
            </div>
          </div>

          <div className="flex justify-between items-center mt-1 mb-4">
            <div className="text-base text-neutral-500">
              Remaining pool size
            </div>
            <div className="text-right text-lg text-black font-medium">
              ₹{remainingPoolAmount.toLocaleString("en-IN")}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary/10 py-4 w-full text-center font-medium text-primary text-lg cursor-pointer">
        Invest Now
      </div>
    </div>
  );
};

export default HoldingsCard;
