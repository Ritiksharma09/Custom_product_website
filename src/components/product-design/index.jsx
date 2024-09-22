import ArrowDown from "../common/arrow-down";

const ProductDesignSection = () => {
  return (
    <div className="mt-40">
      <div className="rotate-180">
        <ArrowDown />
      </div>
      <div className="flex w-screen h-screen px-20 bg-gray-100 items-end font-cerebri relative py-10">
        {/* Left section with picture */}
        <div className="w-2/5 h-full bg-hero-pattern bg-no-repeat bg-center bg-cover rounded-lg"></div>

        {/* Right section with text */}
        <div className="text h-3/5 w-3/5 rounded-r-lg flex justify-center items-center bg-white">
          <div className="text w-1/2">
            <h2 className="text-3xl font-bold mb-4">
              Easily add your design to a wide range of products
            </h2>
            <p className="text-gray-700 mb-6">
              With our free design tools, you can easily add your custom designs
              to t-shirts, mugs, phone cases, and hundreds of other products.
            </p>
            <a href="#products" className="text-green-600 font-semibold">
              All products &rarr;
            </a>
          </div>
        </div>

        {/* Animation div with video, rounded corners, and gray border */}
        <div
          className="animation absolute w-40 h-2/5 rounded-lg border border-gray-300"
          style={{
            left: "40%",
            bottom: "30%",
            transform: "translate(-50%, 50%)",
            zIndex: 10,
          }}
        >
          <video
            autoPlay
            loop
            muted
            className="w-full h-full object-cover rounded-lg"
          >
            <source src="/assets/shoping.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default ProductDesignSection;
