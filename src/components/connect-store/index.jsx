import { motion } from "framer-motion";

const ConnectStore = () => {
  const initialPosition = {
    left: "49%",
    top: "31%",
  };

  const transitionSettings = {
    type: "spring",
    stiffness: 150,
    damping: 15,
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="w-4/5 h-4/5 flex flex-col space-y-4">
        {/* Title and description */}
        <div className="details">
          <h2 className="text-center text-3xl font-bold font-cerebri">
            Connect your store
          </h2>
          <p className="text-center text-md mt-2 text-opacity-70 text-[#485256]">
            Printify easily integrates with major e-commerce platforms and
            marketplaces
          </p>
        </div>

        {/* Main container with background image */}
        <motion.div className="relative bg-connect-store bg-no-repeat bg-center bg-contain h-full w-full">
          {/* Animated Divs */}
          <motion.div
            className="absolute bg-white shadow-2xl rounded-xl bg-store-1 bg-no-repeat bg-center bg-cover h-12 w-12 p-4 cursor-pointer"
            initial={initialPosition}
            whileInView={{ left: "35%", top: "5.5%" }}
            transition={transitionSettings}
          ></motion.div>

          <motion.div
            className="absolute bg-white shadow-2xl rounded-xl bg-store-2 bg-no-repeat bg-center bg-cover h-20 w-20 p-10 cursor-pointer"
            initial={initialPosition}
            whileInView={{ left: "64%", top: "10%" }}
            transition={transitionSettings}
          ></motion.div>

          <motion.div
            className="absolute bg-white shadow-2xl rounded-xl bg-store-3 bg-no-repeat bg-center bg-full h-20 w-16 p-10 cursor-pointer"
            initial={initialPosition}
            whileInView={{ left: "90%", top: "10%" }}
            transition={transitionSettings}
          ></motion.div>

          <motion.div
            className="absolute bg-white shadow-2xl rounded-xl bg-store-4 bg-no-repeat bg-center bg-full h-20 w-20 p-10 cursor-pointer"
            initial={initialPosition}
            whileInView={{ left: "76%", top: "34%" }}
            transition={transitionSettings}
          ></motion.div>

          <motion.div
            className="absolute bg-white shadow-2xl rounded-xl bg-store-5 bg-no-repeat bg-center bg-full h-20 w-24 p-10 cursor-pointer"
            initial={initialPosition}
            whileInView={{ left: "87%", top: "65%" }}
            transition={transitionSettings}
          ></motion.div>

          <motion.div
            className="absolute bg-white shadow-2xl rounded-xl bg-store-6 bg-no-repeat bg-center bg-full h-24 w-24 p-10 cursor-pointer"
            initial={initialPosition}
            whileInView={{ left: "51%", top: "85%" }}
            transition={transitionSettings}
          ></motion.div>

          <motion.div
            className="absolute bg-white shadow-2xl rounded-xl bg-store-7 bg-no-repeat bg-center bg-full h-16 w-16 p-10 cursor-pointer"
            initial={initialPosition}
            whileInView={{ left: "28%", top: "52%" }}
            transition={transitionSettings}
          ></motion.div>

          <motion.div
            className="flex justify-center items-center absolute bg-white shadow-2xl rounded-xl h-20 w-20 cursor-pointer"
            initial={initialPosition}
            whileInView={{ left: "12%", top: "70%" }}
            transition={transitionSettings}
          >
            API
          </motion.div>

          <motion.div
            className="flex justify-center items-center text-sm text-bold absolute bg-white shadow-2xl rounded-xl h-10 w-20 cursor-pointer"
            initial={initialPosition}
            whileInView={{ left: "37%", top: "80%" }}
            transition={transitionSettings}
          >
            And more
          </motion.div>

          <motion.div
            className="absolute bg-[#18c75a] shadow-2xl rounded-xl bg-icon bg-no-repeat bg-center bg-full h-20 w-20 p-10 cursor-pointer"
            initial={initialPosition}
            whileInView={{ left: "49%", top: "31%" }}
            transition={transitionSettings}
          ></motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ConnectStore;
