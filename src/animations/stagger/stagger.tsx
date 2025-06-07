import * as motion from "motion/react-client";

const parentVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 1 } },
};

const childrenVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const StaggerAnimations = () => {
  return (
    <motion.div
      className="flex space-x-4"
      variants={parentVariant}
      initial="hidden"
      animate="visible"
    >
      {[...Array(5)].map((_, index) => (
        <motion.div
          key={index}
          className="box"
          variants={childrenVariant}
          transition={{ delay: index * 0.2 }}
        />
      ))}
    </motion.div>
  );
};
