const Card = ({ data }) => {
  return (
    <div className="flex flex-col items-start max-w-xs bg-white p-4 rounded text-left space-y-4 font-cerebri">
      <img
        src={data.image || "/path/to/your/second-image.png"}
        alt={data.heading || "Image"}
        className="w-40 h-40 mb-4"
      />
      <h3 className="text-xl font-bold">{data.heading}</h3>
      <p className="text-gray-600 mt-2">{data.content}</p>
    </div>
  );
};

export default Card;
