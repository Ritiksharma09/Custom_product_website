import { Check } from "lucide-react";

const Hero = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center px-20 pt-20">
      <div className="container h-full w-full pt-20 font-cerebri flex">
        <div className="flex h-full bg-white w-2/5 flex-col">
          <div className="text-5xl text-[#17262b] font-bold leading-[72px]">
            Create and sell custom products
          </div>
          <div className="px-2 mt-2">
            <div className="flex space-x-4 w-full m-1">
              <Check />
              <span className="text-lg">100% Free to use</span>
            </div>
            <div className="flex space-x-4 w-full m-1">
              <Check />
              <span className="text-lg">900+ High-Quality Products</span>
            </div>
            <div className="flex space-x-4 w-full m-1">
              <Check />
              <span className="text-lg">Largest global print network</span>
            </div>
          </div>
          <div className="mt-16 flex space-x-5">
            <button className="text-lg px-4 py-2 bg-[#319e50] text-white rounded hover:bg-[#277f3f] cursor-pointer">
              Start for free
            </button>
            <button className="text-lg px-4 py-2 border border-[#1c1c1c] rounded hover:text-[#319e50] cursor-pointer">
              How it works?
            </button>
          </div>
          <div className="text-[#319e50] mt-2">
            Trusted by over 8M sellers around the world
          </div>
        </div>
        <div className="w-3/5 flex justify-center items-center">
          <video autoPlay loop muted className="w-full h-full object-cover">
            <source src="/assets/hero_animation.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default Hero;
