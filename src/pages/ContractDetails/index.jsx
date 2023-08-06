import { useNavigate, useParams } from "react-router-dom";
import leftArrowIcon from "../../assets/svg/left-arrow.svg";
import { useEffect, useState } from "react";
import { getIndividualChitfunds } from "../../utils/apis";
import HoldingsCard from "../Home/HoldingsCard";
import { Button } from "antd";

const ContractDetails = () => {
  const navigate = useNavigate();

  const { id: contractId } = useParams();

  const [data, setData] = useState({});

  const fetchContractDetails = async () => {
    try {
      const { success, data } = await getIndividualChitfunds(contractId);
      if (success) {
        setData(data?.[0]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchContractDetails();
  }, []);

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

        <div className="text-white">Contract Details</div>
      </div>
      <div className="p-4 mt-8">
        {data.contract_id ? (
          <HoldingsCard data={data} callback={fetchContractDetails} />
        ) : null}
      </div>
    </div>
  );
};

export default ContractDetails;
