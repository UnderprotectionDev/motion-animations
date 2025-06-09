import * as motion from "motion/react-client";

export const TransitionsAnimations = () => {
  return (
    <div className="space-y-50">
      <motion.div
        className="box"
        initial={{ x: 0 }}
        animate={{ x: 100 }}
        // transition={{ delay: 4 }}
        transition={{ duration: 2, ease: "linear" }}
      />
    </div>
  );
};
