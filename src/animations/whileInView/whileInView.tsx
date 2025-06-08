import * as motion from "motion/react-client";

export const WhileInViewAnimations = () => {
  return (
    <div className="flex justify-center items-start mt-[100rem]">
      <div className="h-[200vh] w-full flex justify-center items-center">
        <motion.div
          className="bg-white rounded-lg p-6 shadow-lg text-center"
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1.2, opacity: 1, y: -200 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-2xl font-bold mb-2 text-black">Amazing Card</h2>
          <p className="text-gray-600">
            This card animates beautifully into view!
          </p>
        </motion.div>
      </div>
    </div>
  );
};
