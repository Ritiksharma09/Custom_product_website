import CustomCard from "../custom-card";
import ArrowDown from "../common/arrow-down";

const CustomFeatures = () => {
  const cardData = [
    {
      image: "https://printify.com/pfh/assets/legacy/custom-products.png",
      heading: "CREATE",
      subheading: "custom products",
      content:
        "Easily add your designs to a wide range of products using our free tools",
    },
    {
      image: "https://printify.com/pfh/assets/legacy/your-products.png",
      heading: "SELL",
      subheading: "on your teams",
      content: "You choose the products, sale price, and where to sell",
    },
    {
      image: "	https://printify.com/pfh/assets/legacy/fullfillment.png",
      heading: "We handle",
      subheading: "fulfillment",
      content:
        "Once the product is placed, we automatically handle all the printing and delivery logistics",
    },
  ];

  return (
    <>
      <div className="flex justify-center space-x-16 py-40 bg-gray-100">
        {cardData.map((data, index) => (
          <CustomCard key={index} data={data} />
        ))}
      </div>
      <ArrowDown />
    </>
  );
};

export default CustomFeatures;
