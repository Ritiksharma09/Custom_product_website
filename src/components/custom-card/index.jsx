import { motion } from "framer-motion";

const CustomCard = ({ data }) => {
  return (
    <motion.div
      className="flex flex-col items-start max-w-xs p-4 rounded text-left font-cerebri bg-gray-100"
      initial={{ opacity: 1, y: -200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 20,
        duration: 500, 
      }}
      viewport={{ once: true }} 
    >
      <img
        src={data.image || "/path/to/your/second-image.png"}
        alt={data.heading || "Image"}
        className="w-40 h-40 mb-4"
      />
      <h3 className="text-xl font-bold uppercase text-[#29ab51]">
        {data.heading}
      </h3>
      <h3 className="text-xl font-bold lowercase">{data.subheading}</h3>
      <p className="text-gray-600 mt-2 text-sm">{data.content}</p>
    </motion.div>
  );
};

export default CustomCard;
