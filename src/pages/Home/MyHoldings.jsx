import { useEffect, useState } from "react";
import { getAllChitfunds } from "../../utils/apis";
import HoldingsCard from "./HoldingsCard";

const MyHoldings = () => {
  const [data, setData] = useState([]);

  const fetchMyHoldings = async () => {
    try {
      const { success, data } = await getAllChitfunds();
      if (success) {
        setData(data);
      }
    } catch (err) {
      console.log(err, "Errorrrrr");
    }
  };

  useEffect(() => {
    fetchMyHoldings();
  }, []);

  return (
    <div className="h-full px-4">
      <div className="grid gap-8 mt-4 mb-24">
        {data.map((ele) => {
          return (
            <HoldingsCard
              data={ele}
              key={ele.title}
              callback={fetchMyHoldings}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MyHoldings;
