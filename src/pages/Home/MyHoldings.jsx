const Card = ({ title, value }) => {
  return (
    <div className="bg-white shadow-md rounded-md p-4">
      <div className="text-sm text-gray-400">{title}</div>
      <div className="text-2xl font-semibold">{value}</div>
    </div>
  );
};

const MyHoldings = () => {
  return (
    <div className="h-full px-4">
      <h1 className="text-2xl">My Holdings</h1>

      <div className="grid gap-4 mt-4">
        <Card title="Total Value" value="$0.00" />
        <Card title="Total Value" value="$0.00" />
        <Card title="Total Value" value="$0.00" />
        <Card title="Total Value" value="$0.00" />
      </div>
    </div>
  );
};

export default MyHoldings;
