import * as motion from "motion/react-client";

export const TransformationsAnimations = () => {
  return (
    <div className="space-y-50">
      <motion.div className="box" animate={{ x: 100 }} />
      <motion.div className="box" animate={{ y: 100 }} />

      <motion.div className="box" animate={{ rotateX: 60 }} />
      <motion.div className="box" animate={{ rotateY: 60 }} />
      <motion.div className="box" animate={{ rotate: 20 }} />

      <motion.div className="box" animate={{ scaleX: 2 }} />
      <motion.div className="box" animate={{ scaleY: 2 }} />
      <motion.div className="box" animate={{ scale: 2 }} />

      <motion.div className="box" animate={{ skewX: 20 }} />
      <motion.div className="box" animate={{ skewY: 20 }} />
      <motion.div className="box" animate={{ skew: 20 }} />
    </div>
  );
};
