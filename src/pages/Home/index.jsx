import Navbar from "../../components/navbar";
import Hero from "../../components/hero";
import FeatureSection from "../../components/feature";
import ProductDesignSection from "../../components/product-design";
import CustomFeatures from "../../components/custom-features";
import ConnectStore from "../../components/connect-store";

const Home = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Hero />
      <FeatureSection />
      <ProductDesignSection />
      <CustomFeatures />
      <ConnectStore />
    </div>
  );
};

export default Home;
