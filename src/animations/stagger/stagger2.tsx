"use client";

import { useState } from "react";
import { motion } from "motion/react";

const galleryImages = [
  "https://picsum.photos/seed/1/800/600",
  "https://picsum.photos/seed/2/800/600",
  "https://picsum.photos/seed/3/800/600",
  "https://picsum.photos/seed/4/800/600",
  "https://picsum.photos/seed/5/800/600",
];

const parentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.5, staggerDirection: 1 },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const StaggerAnimations2 = () => {
  const [showImages, setShowImages] = useState(false);

  const handleClick = () => {
    setShowImages((prev) => !prev);
  };

  return (
    <div>
      <button
        className="mb-[2rem] p-4 rounded-lg  bg-yellow-300 text-black font-bold"
        onClick={handleClick}
      >
        Show Images
      </button>
      <motion.div
        variants={parentVariants}
        initial="hidden"
        animate={showImages ? "visible" : "hidden"}
        className="flex"
      >
        {galleryImages.map((image, index) => (
          <motion.img
            key={index}
            src={image}
            variants={childVariants}
            alt={`Gallery Image ${index + 1}`}
            className="ml-[2rem] w-[300px] rounded"
          />
        ))}
      </motion.div>
    </div>
  );
};
