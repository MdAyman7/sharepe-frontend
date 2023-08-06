import { useNavigate, useParams } from "react-router-dom";
import leftArrowIcon from "../../assets/svg/left-arrow.svg";
import { Button, message } from "antd";
import InvestModal from "../Home/InvestModal";
import { useState } from "react";

import featureImg from "../../assets/images/feature.png";

const ContractDeposit = () => {
  const { id: contractId } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const shareableText =
    "Hey there, I am inviting you to SharePe.Money , Join our pool and get a chance to bid the pool amount or earn more interest";

  const referralUrl = `https://sharepe.money/#/signup?contractId=${contractId}`;

  return (
    <div>
      <div className="bg-primary p-4 items-center flex gap-2">
        <img
          src={leftArrowIcon}
          alt="left-arrow"
          className="cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        />

        <div className="text-white">Contract Created</div>
      </div>
      <div className="p-4">
        <div className="flex justify-center gap-2 items-center  mt-8">
          <div>
            <svg
              width="39"
              height="39"
              viewBox="0 0 39 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="19.5" cy="19.0938" r="16.25" fill="white" />
              <path
                d="M19.5 2.84375C10.5398 2.84375 3.25 10.1335 3.25 19.0938C3.25 28.054 10.5398 35.3438 19.5 35.3438C28.4603 35.3438 35.75 28.054 35.75 19.0938C35.75 10.1335 28.4603 2.84375 19.5 2.84375ZM16.2516 26.2649L10.218 20.2443L12.5125 17.9432L16.2484 21.6726L24.8511 13.0699L27.1489 15.3676L16.2516 26.2649Z"
                fill="#00A685"
              />
            </svg>
          </div>
          <div className="text-lg">Contract created successfully!</div>
        </div>
        <img src={featureImg} alt="feature" className="w-full mt-8" />
        <div className="text-lg font-bold text-primary text-center mt-8">
          Invite people to join the contract
        </div>
        <Button
          className="!h-12 font-medium !text-lg w-full mt-4 border-primary text-primary"
          type="default"
          onClick={() => {
            const shareData = {
              title: shareableText,
              text: shareableText,
              url: referralUrl,
            };

            if (window.navigator.canShare) {
              window.navigator.share(shareData).catch(console.log);
            } else {
              window.navigator.clipboard.writeText(referralUrl);
              message.success("Copied to clipboard");
            }
          }}
        >
          Share an invitation
        </Button>
        <Button
          className="!h-12 font-medium !text-lg w-full mt-4"
          type="primary"
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          Invest Now
        </Button>

        <Button
          type="text"
          className="mt-8 text-center text-lg text-primary w-full font-semibold"
        >
          I&apos;m Done
        </Button>
      </div>
      <InvestModal
        contract_id={contractId}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </div>
  );
};

export default ContractDeposit;
