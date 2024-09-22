import Card from "../card";

const FeatureSection = () => {
  const cardData = [
    {
      image: "https://printify.com/pfh/assets/legacy/higher-profits.svg",
      heading: "Higher Profits",
      content:
        "We offer some of the lowest prices in the industry because print providers continuously compete to win your business.",
    },
    {
      image: "https://printify.com/pfh/assets/legacy/robust-scaling.svg",
      heading: "Robust Scaling",
      content:
        "Easily handle peak holiday seasons with our wide network of partners and automatic routing functionality.",
    },
    {
      image: "https://printify.com/pfh/assets/legacy/best-selection.svg",
      heading: "Best Selection",
      content:
        "With 900+ products and top-quality brands, you can choose the best products for your business.",
    },
  ];

  return (
    <div className="flex justify-center space-x-16 mt-40">
      {cardData.map((data, index) => (
        <Card key={index} data={data} />
      ))}
    </div>
  );
};

export default FeatureSection;
