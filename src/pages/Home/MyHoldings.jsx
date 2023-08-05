import HoldingsCard from "./HoldingsCard";

const MyHoldings = () => {
  const data = [
    {
      title: "Namma Funds - 1",
      totalAmount: 100000,
      yourInvestment: 100,
      durationDays: 90,
      remainingPoolAmount: 10000,
    },
    {
      title: "Namma Funds - 2",
      totalAmount: 1000000,
      yourInvestment: 5000,
      durationDays: 30,
      remainingPoolAmount: 10000,
    },
    {
      title: "Namma Funds - 3",
      totalAmount: 1000,
      yourInvestment: 200,
      durationDays: 180,
      remainingPoolAmount: 100,
    },
  ];
  return (
    <div className="h-full px-4">
      <div className="grid gap-8 mt-4 mb-24">
        {data.map((ele) => {
          return <HoldingsCard data={ele} key={ele.title} />;
        })}
      </div>
    </div>
  );
};

export default MyHoldings;
