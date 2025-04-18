"use client";
import { motion } from "framer-motion";

interface MotionTextProps {
  text: string;
  className?: string;
  staggerDelay?: number; // Optional delay between each character animation
  initialY?: number; // Optional initial vertical offset
  duration?: number; // Optional animation duration
}

const MotionText: React.FC<MotionTextProps> = ({
  text,
  className = "",
  staggerDelay = 0.03,
  initialY = 20,
  duration = 0.5,
}) => {
  const characters = text.split("");

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  const characterVariants = {
    hidden: { opacity: 0, y: initialY },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration: duration,
      },
    },
  };

  return (
    <motion.div
      className={`inline-block overflow-hidden ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      aria-label={text}
    >
      {characters.map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          className="inline-block"
          variants={characterVariants}
          style={{ whiteSpace: char === " " ? "pre" : "normal" }} // Preserve spaces
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default MotionText;
