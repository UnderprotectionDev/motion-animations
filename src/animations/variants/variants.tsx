"use client";

import { useState } from "react";

import { motion } from "motion/react";

const variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.5 },
};

export const VariantsAnimations = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <motion.div
      className="box"
      variants={variants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      transition={{ duration: 1 }}
      onClick={() => setIsVisible(!isVisible)}
      exit="exit"
    />
  );
};
