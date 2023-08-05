import { useNavigate } from "react-router-dom";
import leftArrowIcon from "../../assets/svg/left-arrow.svg";

const CreateContract = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="bg-primary p-4 items-center flex gap-2">
        <img
          src={leftArrowIcon}
          alt="left-arrow"
          className="cursor-pointer"
          onClick={() => {
            navigate(-1);
          }}
        />

        <div className="text-white">Create Contract</div>
      </div>
    </div>
  );
};

export default CreateContract;
