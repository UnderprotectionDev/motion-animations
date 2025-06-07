import * as motion from "motion/react-client";

export const GesturesAnimations = () => {
  return (
    // <motion.div
    //   className="box"
    //   whileHover={{ scale: 1.5, rotate: 10 }}
    //   whileTap={{ scale: 0.8, backgroundColor: "red" }}
    //   drag
    //   whileDrag={{ scale: 1.1, backgroundColor: "orange" }}
    //   dragConstraints={{
    //     top: -50,
    //     left: -50,
    //     right: 50,
    //     bottom: 50,
    //   }}
    //   transition={{ type: "spring", stiffness: 300 }}
    // />
    <motion.div
      className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
      initial={{ scale: 1, rotate: 0 }}
      whileHover={{ scale: 1.05, rotate: 3 }}
      whileTap={{ scale: 0.95 }}
      drag
      dragConstraints={{
        left: -50,
        right: 50,
        top: -50,
        bottom: 50,
      }}
      transition={{ type: "spring", stiffness: 300 }}
      dragElastic={0.2}
    >
      <img
        className="w-full h-36 object-cover"
        src="https://via.placeholder.com/800x600"
        alt="placeholder"
      />
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2">Card Title</h2>
        <p className="text-gray-700 mb-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
          Learn More
        </button>
      </div>
    </motion.div>
  );
};
