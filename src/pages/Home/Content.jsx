import chitImage from "../../../src/assets/images/chit.png";
import realEstateImage from "../../../src/assets/images/realestate.png";
import stocksImage from "../../../src/assets/images/stocks.png";

const TypeCard = ({ title, description, image }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg flex gap-4 mt-4">
      <img
        src={image}
        style={{
          width: 96,
          height: 96,
        }}
        alt="random"
        className="rounded-lg"
      />
      <div>
        <div className="text-2xl font-semibold">{title}</div>
        <div className="text-lg text-neutral-500">{description}</div>
      </div>
    </div>
  );
};

const Content = () => {
  return (
    <div className="h-full">
      <div className="px-4">
        <TypeCard
          image={chitImage}
          title="Chit funds"
          description="Pool your money & get monthly returns"
        />
        <TypeCard
          image={stocksImage}
          title="Stocks"
          description="Co-own shares for a very less price"
        />
        <TypeCard
          image={realEstateImage}
          title="Real Estate"
          description="Co-own land for less than 9% cost"
        />
      </div>
    </div>
  );
};

export default Content;
