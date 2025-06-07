import * as motion from "motion/react-client";

export const KeyframesAnimations = () => {
  return (
    <div>
      {/* <motion.div
        className="box"
        animate={{
          //   scale: [1, 2, 2, 3, 4, 3, 2, 1, 4, 3, 2, 1],
          //   rotate: [0, 270, -50, 180, -50, 270, 0],
          borderRadius: ["0%", "50%", "100%", "50%", "0%"],
        }}
        transition={{ duration: 2 }}
      /> */}

      {/* <motion.button
        className="px-4 py-2 text-white bg-blue-500 rounded outline-none"
        animate={{ scale: [1, 1.1, 1, 1.5, 1] }}
        transition={{ duration: 0.8, ease: "easeInOut", repeat: 2 }}
      >
        Click Me
      </motion.button> */}

      <div className="flex space-x-2">
        {[...Array(3)].map((_, index) => (
          <motion.div
            key={index}
            className="w-8 h-8 bg-teal-500 rounded-full"
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: index * 0.2,
            }}
          />
        ))}
      </div>
    </div>
  );
};
