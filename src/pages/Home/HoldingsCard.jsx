import { Tag } from "antd";
import chitImage from "../../../src/assets/images/chit.png";
import Countdown from "react-countdown";
import { useState } from "react";
import InvestModal from "./InvestModal";

const HoldingsCard = ({ data, callback }) => {
  const { title, amount, min_interest_rate, duration, pool_end_time } = data;

  const percentage = 10;

  const blockData = [
    {
      name: "Your Investment",
      value: `₹${
        data?.memberships?.[0]?.contribution_amount?.toLocaleString("en-IN") ||
        0
      }`,
    },
    {
      name: "Total amount",
      value: `₹${amount.toLocaleString("en-IN")}`,
    },
    {
      name: "Duration",
      value: `${duration} Days`,
    },
    {
      name: "Min. Interest rate",
      value: `${min_interest_rate}%`,
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

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
                {ele.value.toLocaleString("en-IN")}
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
              <Countdown date={new Date(pool_end_time)} />
            </div>
          </div>

          <div className="flex justify-between items-center mt-1 mb-4">
            <div className="text-base text-neutral-500">
              Remaining pool size
            </div>
            <div className="text-right text-lg text-black font-medium">
              ₹{amount.toLocaleString("en-IN")}
            </div>
          </div>
          <div className="h-2 w-full bg-gray-200 rounded-lg mb-4 relative">
            <div
              className={`absolute left-0 h-2 top-0 bottom-0 bg-primary w-[${percentage}%] rounded-lg`}
            ></div>
          </div>
        </div>
      </div>
      <div
        className="bg-primary/10 py-4 w-full text-center font-medium text-primary text-lg cursor-pointer"
        onClick={() => {
          showModal();
        }}
      >
        Invest Now
      </div>
      <InvestModal
        contract_id={data.contract_id}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        callback={callback}
      />
    </div>
  );
};

export default HoldingsCard;
