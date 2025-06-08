"use client";

import { motion, useMotionValue, useMotionValueEvent } from "motion/react";

export const UseMotionValueAnimations = () => {
  const x = useMotionValue(100);

  useMotionValueEvent(x, "change", (latest) => {
    console.log("x changed to", latest);
  });

  return (
    <div>
      <motion.div
        className="box"
        drag
        dragConstraints={{ left: 0, right: 200 }}
        style={{ x }}
      />
    </div>
  );
};
